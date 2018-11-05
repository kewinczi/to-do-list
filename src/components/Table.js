import React from 'react';

class Table extends React.Component {
    constructor(props) {
        super(props);  
        this.state = { 
            editedItem: '',
            expanded: false,
        }
    }

    handleChange = (e) => {
        const value = e.target.value;
        this.setState({ editedItem: value })
    }

    handleSave = (index, editedItem) => {
        this.props.editItem(index, editedItem);
        this.setState({ 
            editedItem: "",
            expanded: !this.state.expanded
        })
    }

    handleEdit = () => {
        this.setState({ expanded: !this.state.expanded})
    }

    handleCancel = () => {
        this.setState({ 
            editedItem: "",
            expanded: !this.state.expanded
        })
    }

    render() {
        const { toDoList } = this.props;
        const { editedItem, expanded } = this.state;
        const tableData = toDoList.map((item, index) => {
            return (
                <tbody key={`${index}tbody`}>
                <tr key={index}>
                    <td><input type="checkbox"/></td>
                    <td>{item}</td>
                    <td><span>
                        <button 
                            type="button"
                            className="btn btn-primary mr-2" 
                            disabled={expanded}  
                            onClick={() => this.props.removeItem(index)}
                        >Remove
                        </button>
                        <button 
                            type="button"
                            className="btn btn-primary" 
                            disabled={expanded} 
                            onClick={() => this.handleEdit()} 
                            data-toggle="collapse" data-target={`#collapse${index}`} 
                            aria-expanded="false" aria-controls="collapseExample"
                        >Edit
                        </button>
                        </span>
                    </td>
                </tr>
                <tr>
                <td colSpan="4">
                    <div className="collapse" id={`collapse${index}`}>
                        <input 
                            type="text"
                            className="form-control" 
                            id="editInput"  
                            placeholder="New text" 
                            value={editedItem} 
                            onChange={this.handleChange}/>
                        <span>
                            <button 
                                className="btn btn-primary mt-2 mr-2" 
                                type="button" 
                                data-toggle="collapse" 
                                data-target={`#collapse${index}`} 
                                aria-expanded="false" 
                                aria-controls="collapseExample" 
                                onClick={() => this.handleSave(index, editedItem)}
                            >Save
                            </button>
                            <button
                                className="btn btn-primary mt-2" 
                                type="button" 
                                data-toggle="collapse" 
                                data-target={`#collapse${index}`} 
                                aria-expanded="false" 
                                aria-controls="collapseExample" 
                                onClick={() => this.handleCancel(index, editedItem)}
                            >Cancel
                            </button>
                        </span>
                    </div>
                </td>
                </tr>
                </tbody>
            )
        })
        
        return (
            <div>
                <div>
                <table className="table table-borderless">
                    {tableData}
                </table>      
                </div>
            </div>
        )
    }
}

export default Table;