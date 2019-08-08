import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import beerService from '../Services/beerServices'
import Navbar from '../Components/Navbar';

export default class AllBeers extends Component {
  state = {
    beers: null
  }

  componentDidMount(){
    beerService.getAllBeers()
    .then((response)=>{
      const beers = response
      this.setState({beers},()=>{
        console.log(beers)
      })
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  render() {
    const {beers} = this.state
    if(beers){
      return(
        <section>
          <Navbar/>
            {
              beers.map((beer)=>{
                return (
                  <Link key={beer._id} to={`/beers/${beer._id}`}>
                  <article className="beer-listed-item">
                    <div className="image">
                      <img src={beer.image_url} alt={beer.name}/>
                    </div>
                    <div>
                      <h4>{beer.name}</h4>
                      <p>{beer.tagline}</p>
                      <span>Created by: {beer.contributed_by}</span>
                    </div>
                  </article>
                  </Link>
                  
                )
              })
            }
        </section>
      )
    }else{
      return (
        <div>
          Loading...
        </div>
      )
    }
  }
}
