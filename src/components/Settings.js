import React from 'react';

class Settings extends React.Component {
    handleClick = (color) => {
        const cls = "navbar navbar-expand-sm navbar-dark sticky-top " + color;
        document.querySelector("nav").setAttribute("class",cls);
    }
    render() {
        const colors = ["bg-info","bg-warning","bg-danger","bg-success","bg-dark"];
        const colorsList = colors.map((item)=> {
            return (
                <li className="settings-item" key={item} onClick={()=>this.handleClick(item)}><span className={`${item} dot`}></span> {item.split('-')[1]}</li>
            )
        })
        return <ul>{colorsList}</ul>;
    }

}

export default Settings;