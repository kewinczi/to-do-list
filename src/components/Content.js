import React from 'react';
import AddNew from './AddNew';
import Table from './Table';

const Content = (props) => {
    return (
        <div className="container">
            <div className="row my-4">
                <div className="col border m-3 p-3">
                    <h2>TO DO LIST:</h2>
                    <Table 
                        toDoList={props.toDoList}
                        removeItem={props.removeItem}
                        editItem={props.editItem}
                    />
                </div>   
                <div className="col border m-3 p-3">
                    <h2>ADD NEW ITEM:</h2>
                    <AddNew 
                        addItem={props.addItem}
                    />
                </div>             
            </div>
        </div>
    );
}

export default Content;