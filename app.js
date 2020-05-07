const request = require('request')
const dotenv = require('dotenv').config()

const API_KEY = process.env.API_KEY;

const location = process.argv[2]

const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`;

if (!location) {
  return console.log('Please add a <city,country> as parameter')
}

request.get(url, (error, response, body) => {
  const data = JSON.parse(body)
  console.log(`Its ${data.main.temp} in ${location}`)
})