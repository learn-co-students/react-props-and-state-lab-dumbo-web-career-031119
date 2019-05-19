import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  updateFilter = (filter) => {
    this.setState({
      filters: {
        type: filter
      }
    })
  }

  updatePets = (petData) => {
    this.setState({
      pets: petData
    })
  }


  fetchPets = () => {

    if (this.state.filters.type === 'all'){
      fetch('/api/pets')
      .then(resp=>resp.json())
      .then(json=>this.updatePets(json))
    }
    else{
      fetch(`/api/pets?type=${this.state.filters.type}`)
      .then(resp=>resp.json())
      .then(json=>this.updatePets(json))
    }
  }

  onAdoptPet = (petID) => {
    const changedPet = this.state.pets
    const index = changedPet.findIndex(pet=> (pet.id===petID))
    changedPet[index].isAdopted = true
    this.setState({
      pets: changedPet 
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
              <Filters onChangeType={this.updateFilter} onFindPetsClick={this.fetchPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
