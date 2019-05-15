import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  //
  // onAdoptPet = (pet) =>{
  //   this.props.onAdoptPet(pet)
  // }

  renderPetCards = () =>{
    return this.props.pets.map(pet=>{
      return <Pet adoptPet={this.props.onAdoptPet} key={pet.id} pet={pet}/>
    })
  }

  render() {
    return <div className="ui cards">{this.renderPetCards()}</div>
  }
}

export default PetBrowser
