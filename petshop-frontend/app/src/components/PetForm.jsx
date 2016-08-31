import React from 'react';

class PetForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "name": "",
            "age": -1,
            "race": "",
            "gender": "MALE"
        }
    }

    onChangeName(event) {
        this.setState({
            "name": event.target.value
        });
    }

    onChangeAge(event) {
        this.setState({
            "age": event.target.value
        });
    }

    onChangeRace(event) {
        this.setState({
            "race": event.target.value
        });
    }

    onChangeGender(event) {
        this.setState({
            "gender": event.target.value
        });
    }

    render() {
        const { onSubmit } = this.props;
	    const { name, age, race, gender } = this.state;
	 	return (
	 	    <div>
                Nom: <input placeholder="Entrer le nom de l'animal ici" value={name} onChange={this.onChangeName.bind(this)}/><br/>
                Age: <input type="number" min={0} max={250} value={age} onChange={this.onChangeAge.bind(this)}/><br/>
                Sexe: <select value={gender} onChange={this.onChangeGender.bind(this)}>
                    <option value="MALE">Mâle</option>
                    <option value="FEMALE">Femelle</option>
                    <option value="OTHER">Autre</option>
                </select><br/>
                Race: <input placeholder="Entrer la race de l'animal ici" value={race} onChange={this.onChangeRace.bind(this)}/><br/>
                <button onClick={() => onSubmit(this.state)}>Ajouter animal</button>
            </div>
        );
	}
}

PetForm.propTypes = {
    onSubmit: React.PropTypes.func.isRequired
};

export default PetForm