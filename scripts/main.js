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
    // custom rendering functions for options and items
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

init()
