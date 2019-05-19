import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()
    // console.log(this.props)

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }

    this.onFindPetsClick()
  }

  onFindPetsClick = () => {
    let searchString = '/api/pets'
    if (this.state.filters.type !== 'all') {
      searchString += `?type=${this.state.filters.type}`
    }


    fetch(searchString)
      .then(resp => resp.json())
      .then(pets => {
        this.setState({
          pets: pets
        })
      })
  }

  onAdoptPet = (npet) => {
    console.log(npet)
    npet.isAdopted = true
    this.setState(state => {
      const newPets = state.pets.map(pet => pet.id === npet.id ? npet : pet)
      return {
        newPets
      }
    })
  }

  onChangeType = (ntype) => {
    this.setState({
      filters: {
        type: ntype
      }
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onFetch={this.onFindPetsClick} onChangeType={this.onChangeType} />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                pets={this.state.pets}
                onAdoptPet={this.onAdoptPet}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
