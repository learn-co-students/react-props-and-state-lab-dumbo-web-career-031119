import React from 'react'

class Pet extends React.Component {

  // age: 4
  // gender: "male"
  // id: "5c142d9e-ea45-4231-8146-cccf71c704c0"
  // isAdopted: false
  // name: "Trident"
  // type: "dog"
  // weight: 1

  render() {
    let genderIcon = ''
    if (this.props.pet.gender === 'male') {
      genderIcon = '♀'
    } else {
      genderIcon = '♂'
    }


    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {genderIcon/*'♀' OR '♂' */}
            {this.props.pet.name}
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
          {this.props.pet.isAdopted ? <button className="ui disabled button">Already adopted</button> : <button onClick={() => { this.props.onAdoptPet(this.props.pet) }} className="ui primary button">Adopt pet</button>}
        </div>
      </div>
    )
  }
}

export default Pet
