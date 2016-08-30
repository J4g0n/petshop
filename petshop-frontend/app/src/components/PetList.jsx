import React from 'react';
import _ from 'lodash';

class PetList extends React.Component {
	renderPets(pets) {
	    const { onDeletePet } = this.props;
        return (
            _.map(pets, (pet) => {
                return <li key={pet.id}>{pet.name} <button onClick={() => onDeletePet(pet.id)}>Supprimer</button></li>;
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

PetList.propTypes = {
    pets: React.PropTypes.array.isRequired, // todo use proptypes.shape to enforce type here
    onDeletePet: React.PropTypes.func.isRequired
};

export default PetList