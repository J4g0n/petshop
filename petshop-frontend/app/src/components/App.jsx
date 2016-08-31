import React from 'react';
import _ from 'lodash';
import { getPets, addPet, deletePet } from '../repositories/petRepository';
import PetList from './PetList.jsx';
import PetForm from './PetForm.jsx';
import Menu from './Menu.jsx';


class App extends React.Component {
	constructor(props) {
		super(props);
        this.state = {
            "newPetName": "",
            "tab": "PETS",
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
        this.setState({
            "newPetName": event.target.value
        });
    }

    selectTab(tabName) {
        this.setState({
            "tab": tabName
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

    renderMenu() {
        const { tab } = this.state;
        return (
            <Menu
                selectTab={this.selectTab.bind(this)}
                selectedTab={tab}
            />
        );
    }

    renderContent() {
        const { pets, tab } = this.state;
        switch (tab) {
            case "PETS":
                return this.maybeRenderPets(pets);
            case "ADD_PET":
                return this.renderPetForm();
            default:
                throw new Error("This tab doesn't exist: ", tab);
        }
    }

	render() {
        return (
	 	    <div>
                {this.renderMenu()}
                {this.renderContent()}
            </div>
        );
	}
}

export default App