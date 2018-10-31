import React from 'react';

class AddNew extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            listItem: ''
        }
    }

    handleChange = (e) => {
        const listItem = e.target.value;
        this.setState({ listItem });
    }

    handleClick = () => {
        this.props.addItem(this.state.listItem)
        this.setState({listItem: ""})
    }

    render() {
        return (
            <form>
                <div className="form-group">
                    <label>Thing to do:</label>
                    <input 
                        className="form-control"
                        type="text"
                        name="itemName"
                        value={this.state.listItem}
                        placeholder="e.g. Do laundry"
                        onChange={this.handleChange}
                    />
                    <button
                        className="btn btn-primary mt-2"
                        type="button"
                        onClick={this.handleClick}
                        >
                        Add
                    </button>
                </div>
            </form>
        );
    }
}

export default AddNew;