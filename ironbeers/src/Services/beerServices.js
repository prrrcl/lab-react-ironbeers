import axios from 'axios';

class BeerService {
  constructor(){
    this.magic = axios.create({
      baseURL: 'https://ih-beer-api.herokuapp.com/beers',
    })
  }

  getAllBeers() {
   return this.magic.get('/').then(response =>{
     const randomIndex = Math.floor(Math.random()*(200 - 0) + 0)
     const newArr = response.data.splice(randomIndex,10);
    return newArr
   } )
  }
  getRandomBeer() {
   return this.magic.get('/random').then(response => response)
  }
  getOneBeer(id) {
   return this.magic.get(`/single/${id}`).then(response => response)
  }
}

const beerService = new BeerService();

export default beerService;