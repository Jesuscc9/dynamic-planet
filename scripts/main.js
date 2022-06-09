import TomSelect from 'tom-select'
import 'tom-select/dist/css/tom-select.bootstrap4.css'
import '../style.css'
import Sketch from './Sketch'
const countries = {}

const sketch = new Sketch({
  dom: document.getElementById('app')
})

const select = new TomSelect(document.getElementById('countries'))

const fetchData = () => {
  const options = []

  fetch('https://restcountries.com/v3.1/all')
    .then((e) => e.json())
    .then((data) => {
      data.forEach((el) => {
        options.push({
          text: el.name.common,
          value: el.cca3
        })
        countries[el.cca3] = el.capitalInfo.latlng
      })

      select.addOptions(options)
    })
}

fetchData()

const form = document.getElementById('country-form')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const data = new FormData(form)

  for (const [name, value] of data) {
    if (name === 'country') {
      sketch.focusCountry(countries[value])
    }
  }
})
