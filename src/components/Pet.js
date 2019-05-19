import React from 'react'

class Pet extends React.Component {

  petGender = () => {
    if (this.props.pet.gender === 'male'){
      return '♂'
    }
    else{
      return '♀'
    }
  }

  adoptionButton = () => {
    if (this.props.pet.isAdopted === true){
      return <button className="ui disabled button">Already adopted</button>
    }
    else{
      console.log('wtf')
      return <button className="ui primary button" onClick={()=>{this.props.onAdoptPet(this.props.pet.id)}}>Adopt pet</button>
    }
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            <h1>{this.petGender()}  {this.props.pet.name}</h1>
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
        {this.adoptionButton()}
        </div>
      </div>
    )
  }
}

export default Pet
