import React from 'react';
import _ from 'lodash';

class PetList extends React.Component {
	renderPets(pets) {
	    const { onDeletePet } = this.props;
        return (
            _.map(pets, (pet) => {
                return (
                    <tr key={pet.id}>
                        <td>{pet.name}</td>
                        <td>{pet.age}</td>
                        <td>{pet.gender}</td>
                        <td>{pet.race}</td>
                        <td><button onClick={() => onDeletePet(pet.id)}>Supprimer</button></td>
                    </tr>
                );
            })
        );
    }

	render() {
	    const { pets } = this.props;
	 	return (
	 	    <table>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Age</th>
                        <th>Sexe</th>
                        <th>Race</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderPets(pets)}
                </tbody>
            </table>
        );
	}
}

PetList.propTypes = {
    pets: React.PropTypes.array.isRequired, // todo use proptypes.shape to enforce type here
    onDeletePet: React.PropTypes.func.isRequired
};

export default PetList