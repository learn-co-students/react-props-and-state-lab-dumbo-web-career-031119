import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

	constructor(props) {
		// debugger
		super(props)
	}

	makeanimals = () => {
		// debugger
		return this.props.pets.map((pet, idx) => {
			return <Pet key={idx} pet={pet} onAdoptPet={this.props.onAdoptPet}/>
		})
	}

  render() {
    return <div className="ui cards">{this.makeanimals()}</div>
  }
}

PetBrowser.defaultProps = {
	pet: []
}
export default PetBrowser
