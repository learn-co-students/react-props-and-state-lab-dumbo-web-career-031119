import React from 'react'
import allPets from '../data/pets.js'
import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  state = {
      pets: allPets,
      filters: {
        type: 'all'
      }
    }


  onAdoptPet = (newPet) =>{


  const newArr = this.state.pets.map(pet=>{
    if(pet.id === newPet.id){
      return {...newPet,isAdopted:true}
    }else{return pet}
  })
  this.setState({pets:newArr})
  }

  onChangeType = (newType) =>{
    this.setState({
      filters:{type:newType}
    })
  }

  onFindPetsClick = () =>{
    switch (this.state.filters.type){
    case 'all':
    fetch('/api/pets').then(resp=>resp.json()).then(newresp=>this.setState({pets:newresp}))
      break;
    case 'dog':
    fetch('/api/pets?type=cat').then(resp=>resp.json()).then(newresp=>this.setState({pets: newresp}))
      break;
    case 'cat':
    fetch('/api/pets?type=dog').then(resp=>resp.json()).then(newresp=>this.setState({pets: newresp}))
      break;
    case 'micropig':
    fetch('/api/pets?type=micropig').then(resp=>resp.json()).then(newresp=>this.setState({pets: newresp}))
      break;
      default:
      break;
    }
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser  onAdoptPet={this.onAdoptPet}pets={this.state.pets} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
