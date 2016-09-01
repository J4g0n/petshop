import React from 'react';

require("../styles/header.less");

class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="logo">
                    <img src={ require("../images/black-cat.jpg") } alt="cat photo"/>
                </div>
                <h1>
                    Mon animalerie
                </h1>
            </header>
        );
    }
}

export default Header