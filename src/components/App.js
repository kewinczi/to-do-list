import React from 'react';
import Modal from './Modal';
import Hello from './Hello';
import Menu from './Menu';
import Content from './Content'

class App extends React.Component {
    state = { 
        name: 'Karolina',
        toDoList: [],
        showModal: true
    }

    saveName = (providedName) => {
        this.setState({ 
            name: providedName,
            showModal: false
         })    
    }

    addItem = (listItem) => {
        const data = this.state.toDoList.slice(0);
        data.unshift(listItem);
        this.setState({toDoList: data});
    }

    removeItem = (index) => {
        const data = this.state.toDoList.slice(0)
        data.splice(index,1);
        this.setState({ toDoList: data });
    }

    editItem = (index, editedItem) => {
        const data = this.state.toDoList.slice(0);
        data[index] = editedItem;
        this.setState({ toDoList: data })
    }

    render() {
        const { name, showModal, toDoList } = this.state;
        return (
            <div className="container">
                {showModal ?
                <Modal 
                    name={name}
                    saveName={this.saveName}
                /> :
                <div>
                    <Hello name={name} />
                    <Menu />
                    <Content 
                        addItem={this.addItem} 
                        removeItem={this.removeItem}
                        editItem={this.editItem}
                        toDoList={toDoList}
                    />
                </div>}
            </div>
        );
    }
}

export default App;