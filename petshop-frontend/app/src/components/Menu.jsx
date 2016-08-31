import React from 'react';

class Menu extends React.Component {
	render() {
	    const { selectTab } = this.props;
	 	return (
	 	    <div>
                <div onClick={ () => selectTab("PETS") }>Animaux</div>
                <div onClick={ () => selectTab("ADD_PET") }>Ajouter un animal</div>
            </div>
        );
	}
}

Menu.propTypes = {
    selectTab: React.PropTypes.func.isRequired,
    selectedTab: React.PropTypes.string.isRequired
};

export default Menu