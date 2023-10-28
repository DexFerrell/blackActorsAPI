const express = require('express')
const app = express()
const PORT = 8000

const actorActress = {
  'zendaya': {
    'age': 27,
    'birthName':'Zendaya Maree Stoermer Coleman',
    'birthLocation': 'Oakland, CA'
  },
  'meagan good': {
    'age': 42,
    'birthName':'Meagan Monique Good',
    'birthLocation':'Los Angeles, California'
  },
  'me': {
    'myAge':'your age',
    'myName':'your name',
    'myHometown':'Top Secret'
  }

    
}

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html')
})

app.get('/api/:actorName', (request, response) => {
  const blackActor = request.params.actorName.toLowerCase()
  if (actorActress[blackActor]){
    response.json(actorActress[blackActor])
  }else {
    response.json(actorActress['me'])
  }
})

app.listen(PORT, (request, response) => {
  console.log(`The server is running on port ${PORT}!`)
})