import React from 'react';
import _ from 'lodash';

class PetForm extends React.Component {
	render() {
	    const { name, onSubmit, onChangeName } = this.props;
	 	return (
	 	    <div>
                <input placeholder="Entrer le nom d'un animal ici" value={name} onChange={onChangeName}/>
                <button onClick={onSubmit}>Ajouter</button>
            </div>
        );
	}
}

PetForm.propTypes = {
    name: React.PropTypes.string.isRequired,
    onSubmit: React.PropTypes.func.isRequired,
    onChangeName: React.PropTypes.func.isRequired
};

export default PetForm