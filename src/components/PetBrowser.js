import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  createPets = () => {
    return this.props.pets.map((animal, index)=>{
        return <Pet key={animal.id} petIndex={index} pet={{...animal}} onAdoptPet={this.props.onAdoptPet}/>

    })
  }

  render() {
    return <div className="ui cards">
      {this.createPets()}
    </div>
  }
}

export default PetBrowser
