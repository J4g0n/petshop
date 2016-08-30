import React from 'react';
import _ from 'lodash';
import { getPets } from '../repositories/petRepository';
import PetList from './PetList.jsx';

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

    renderPetForm() {
        /*return (
            <PetForm

            />
        );*/
    }

	maybeRenderPets(pets) {
	    if (!_.isEmpty(pets)) {
            return (
                <PetList pets={pets}/>
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