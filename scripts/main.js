import 'tom-select/dist/css/tom-select.bootstrap5.css'
import TomSelect from 'tom-select/dist/js/tom-select.complete.js'
import { $ } from './helpers/utils'
import Sketch from './Sketch'

const notFoundImage = 'https://thumbs.gfycat.com/AdolescentAdmiredAnnashummingbird-max-1mb.gif'

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
            capitalName:
              e?.capital?.[0]?.toLowerCase() ?? e.name.common.toLowerCase(),
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
    // plugins: ['dropdown_input'],
    placeholder: 'Earth Texture...',

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
  const imgEl = $('.CountryData__img')

  const titleEl = $('#country-data p')

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '40a70ef685msh86e793accdc4689p19ff7bjsn8d72ef3d1f3e',
      'X-RapidAPI-Host': 'webcamstravel.p.rapidapi.com'
    }
  }

  const [lat, lang] = country.capitalInfo.latlng

  const radius = 160

  let data = null

  let imageIndex = 0

  let totalWebcams = 0

  // TODO: change innerHTML to prevent safety issues
  const updateData = () => {
    if (totalWebcams === 0) {
      titleEl.innerHTML = `We have no access to <span class="error">${country.capital[0] ?? ''} </span> webcams :c`
      imgEl.style.backgroundImage = `url(${notFoundImage})`
      $('#back').disabled = true
      $('#next').disabled = true
      return
    }

    titleEl.innerHTML = `Public webcams at <span>${country.capital[0] ?? ''}</span>`
    updateImage(0)
  }

  const updateImage = (val) => {
    imageIndex = imageIndex + val
    $('#img-counter').innerHTML = `${imageIndex + 1} / ${totalWebcams}`
    imgEl.style.backgroundImage = `url(${data.result.webcams[imageIndex].image.daylight.preview})`

    $('#back').disabled = false
    $('#next').disabled = false

    if (imageIndex === 0) $('#back').disabled = true

    if (imageIndex === totalWebcams - 1) $('#next').disabled = true
  }

  $('#back').addEventListener('click', function () {
    updateImage(-1)
  })

  $('#next').addEventListener('click', function () {
    updateImage(+1)
  })

  fetch(
    `https://webcamstravel.p.rapidapi.com/webcams/list/nearby=${lat},${lang},${radius}/orderby=popularity,desc/limit=50?show=webcams%3Aimage%2Clocation%2Cplayer%2Ccategory%2Cimage%2Clocation%2Cmap%2Cplayer%2Cproperty%2Cstatistics%2Curl`,
    options
  )
    .then((response) => response.json())
    .then((json) => {
      data = json
      totalWebcams = data.result.webcams.length
      $('#country-data').style.opacity = 1
      $('#country-data').style.pointerEvents = 'all'

      updateData()
    })
    .catch((err) => console.error(err))
}

init()
