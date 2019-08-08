import React, { Component } from 'react'
import Navbar from '../Components/Navbar'
import beerService from '../Services/beerServices'

export default class RandomBeer extends Component {
  state = {
    beer: null
  }
  componentDidMount(){
    beerService.getRandomBeer()
    .then((response)=>{
      const beer = response.data
      this.setState({beer},()=>{
        console.log(this.state.beer)
      })
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  render() {
    const { beer } = this.state
    if(beer !== null){
      return (
        <div>
          <Navbar/>
          {beer.name}
        </div>
      )
    }else{
      return(<p>Loading</p>)
    }
    
  }
}
