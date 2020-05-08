const request = require('request')
const dotenv = require('dotenv').config()

const API_KEY = process.env.API_KEY;


const processInputs = () => {
  const inputs = {}
  var index = process.argv.indexOf('-l')
  if (index > 0){
    inputs['location'] = process.argv[index + 1]
  }
  return inputs
}

const inputs = processInputs()

const url = `http://api.openweathermap.org/data/2.5/weather?q=${inputs.location}&units=metric&appid=${API_KEY}`;

console.log(process.argv)

if (!inputs.location) {
  return console.log('Please add a <city,country> as parameter')
}

request.get(url, (error, response, body) => {
  const data = JSON.parse(body)
  console.log(`Its ${data.main.temp} in ${inputs.location}`)
})