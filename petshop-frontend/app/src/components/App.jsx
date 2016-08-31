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
            "tab": "PETS",
            "pets": []
        };
	}

	componentDidMount() {
        getPets().then(jsonValue => {
            this.setState({
                "pets": jsonValue
            });
        });
    }

    addPet(form) {
        addPet(form).then(jsonValue => {
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

    selectTab(tabName) {
        this.setState({
            "tab": tabName
        });
    }

    renderPetForm(withAction) {
        return (
            <PetForm
                onSubmit={withAction.bind(this)}
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
                return this.renderPetForm(this.addPet);
            // todo enable this later if I have time
            /*case "EDIT_PET":
                return this.renderPetForm(this.editPet);
            */
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