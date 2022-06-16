import TomSelect from 'tom-select'
import 'tom-select/dist/css/tom-select.bootstrap4.css'
import { $ } from './helpers/utils'
import Sketch from './Sketch'

let sketch = null

let selectedCountry = null

let loadedData = false

const init = async () => {

  new TomSelect('#countries', {
    valueField: 'capitalName',
    labelField: 'capitalName',
    searchField: ['capitalName', 'country'],

    load: function (query, callback) {

      if (loadedData === true) {
        callback([])
        return
      }

      query = query.toLowerCase()

      fetch('https://restcountries.com/v3.1/all')
        .then((response) => response.json())
        .then((json) => {
          json = json.map((e) => ({
            ...e,
            capitalName: e?.capital?.[0]?.toLowerCase() ?? e.name.common.toLowerCase(),
            country: e.name.common.toLowerCase()
          }))
          callback(json)
          loadedData = true
        })
    },
    render: {
      option: function (item, escape) {
        return `
        <div class="option-container">
          <div class="icon me-3">
            ${escape(item.flag)}
          </div>
          <p>
            ${escape(item?.capital?.[0] ?? item.country)}, ${escape(item.country)}
          </p>
        </div>`
      },

      item: function (item, escape) {
        selectedCountry = item

        console.log({ selectedCountry })

        sketch.focusCountry(selectedCountry.capitalInfo.latlng)
        renderCountryData(selectedCountry)
        return `
        <div class="option-container">
          <div class="icon me-3">
            ${escape(item.flag)}
          </div>
          <p>
            ${escape(item?.capital?.[0] ?? item.country)}, ${escape(item.country)}
          </p>
        </div>`
      }
    }
  })

  new TomSelect($('#earth'), {
    plugins: ['dropdown_input'],
    placeholder: 'earth modifier...',
    options: [
      {
        text: 'Nasa Texture',
        value: 'nasa-texture'
      },
      {
        text: 'Draw Texture',
        value: 'draw-texture'
      },
      {
        text: 'No texture',
        value: 'no-texture'
      }
    ],
    onChange: (e) => {
      sketch.updateEarth(e)
    }
  })

  sketch = new Sketch({
    dom: document.getElementById('sketch')
  })
}

function renderCountryData(country) {
  const imgEL = $('#country-data iframe')

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '40a70ef685msh86e793accdc4689p19ff7bjsn8d72ef3d1f3e',
      'X-RapidAPI-Host': 'webcamstravel.p.rapidapi.com'
    }
  }

  const [lat, lang] = country.capitalInfo.latlng

  const radius = 10

  fetch(`https://webcamstravel.p.rapidapi.com/webcams/list/nearby=${lat},${lang},${radius}?lang=en&show=webcams%3Aimage%2Clocation%2Cplayer`, options)
    .then(response => response.json())
    .then(data => {
      console.log({ data })
      console.log({ imgEl: imgEL })
      imgEL.setAttribute('src', data.result.webcams[0].player.day.embed)
    })
    .catch(err => console.error(err))


}

init()
