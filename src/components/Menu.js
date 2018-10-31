import React from 'react';
import Settings from './Settings';

class Menu extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="dropdown">
                    <a id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img id="settings-icon" alt="Settings" src="icon.png"></img>
                    </a>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <Settings />
                    </div>
                </div>
            </nav>
        );
    }

}

export default Menu;