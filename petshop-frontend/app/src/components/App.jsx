import React from 'react';
import _ from 'lodash';
import { getPets, addPet, deletePet } from '../repositories/petRepository';
import PetList from './PetList.jsx';
import PetForm from './PetForm.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);
        this.state = {
            "newPetName": "",
            "pets": []
        };
        getPets().then(jsonValue => {
            this.setState({
                "pets": jsonValue
            });
        });
	}

    addPet() {
        const { newPetName } = this.state;
        console.log("Name saved: ", newPetName);
        addPet(newPetName).then(jsonValue => {
            this.setState({
                "pets": jsonValue
            });
        });
    }

    deletePet(id) {
        deletePet(id).then(jsonValue => {
            this.setState({
                "pets": jsonValue
            });
        });
    }

    onChangeName(event) {
        console.log("Name changed: ", event.target.value);
        this.setState({
            "newPetName": event.target.value
        });
    }

    renderPetForm() {
        const { newPetName } = this.state;
        return (
            <PetForm
                name={newPetName}
                onSubmit={this.addPet.bind(this)}
                onChangeName={this.onChangeName.bind(this)}
            />
        );
    }

	maybeRenderPets(pets) {
	    if (!_.isEmpty(pets)) {
            return (
                <PetList
                    pets={pets}
                    onDeletePet={this.deletePet.bind(this)}
                />
            );
        }
    }

	render() {
	    const { pets } = this.state;
	 	return (
	 	    <div>
                {this.renderPetForm()}
                {this.maybeRenderPets(pets)}
            </div>
        );
	}
}

export default App