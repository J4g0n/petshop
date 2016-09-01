import React from 'react';

require("../styles/menu.less");

class Menu extends React.Component {
	render() {
	    const { selectTab } = this.props;
	 	return (
	 	    <div className="menu">
                <div onClick={ () => selectTab("PETS") } className="tab">Animaux</div>
                <div onClick={ () => selectTab("ADD_PET") } className="tab">Ajouter un animal</div>
            </div>
        );
	}
}

Menu.propTypes = {
    selectTab: React.PropTypes.func.isRequired,
    selectedTab: React.PropTypes.string.isRequired
};

export default Menu