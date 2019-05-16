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

  onChangeType = (newType) => {
    this.setState({
      filters: {
        type: newType
      }
    })
    console.log(this.state)
  }

  onFindPetsClick = () => {
    let fetchURL = '/api/pets'
    if(this.state.filters.type !== 'all'){
      fetchURL += '?type=' + this.state.filters.type
    }
    this.getPets(fetchURL).then((pets) => {
      this.setState({
        ...this.state,
        pets: pets
      })
    })

  }

  onAdoptPet = (petId) => {
    const petsArr = this.state.pets
    petsArr.forEach((pet) => {
      if(pet.id === petId){
        pet.isAdopted = true;
      }
    })
    this.setState({
        pets: petsArr
    })
  }

  getPets = (petURL) => {
    return fetch(petURL).then(resp=>resp.json())
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
              <Filters onFindPetsClick={this.onFindPetsClick} onChangeType={this.onChangeType}/>
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
