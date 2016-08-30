import React from 'react';
import _ from 'lodash';

class PetList extends React.Component {
	renderPets(pets) {
        return (
            _.map(pets, (pet) => {
                return <li key={pet.id}>{pet.name}</li>;
            })
        );
    }

	render() {
	    const { pets } = this.props;
	 	return (
	 	    <ul>
                {this.renderPets(pets)}
            </ul>
        );
	}
}

export default PetList