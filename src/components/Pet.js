import React from 'react'

class Pet extends React.Component {



  handleAdopt = () =>{
    console.log('about to handle Adopt')
    this.props.adoptPet(this.props.pet)
  }

  renderAdoptionButton = () =>{
    if(this.props.pet.isAdopted){
      return<button
      className="ui disabled button"> Already adopted </button>
    }else{return<button
      className="ui primary button"
      onClick={this.handleAdopt}> Adopt pet</button>}
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.gender ==='female'?'♀' :'♂' }
            {this.props.pet.name}
          </a>
          <div className="meta">
            <span className="date">{this.props.type}</span>
          </div>
          <div className="description">
            <p>Age:{this.props.pet.age}</p>
            <p>Weight:{this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
        {this.renderAdoptionButton()}
        </div>
      </div>
    )
  }
}

export default Pet
