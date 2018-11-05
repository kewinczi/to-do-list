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

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.isValid()) {
            this.props.addItem(this.state.listItem)
            this.setState({listItem: ""})
        }
    }

    isValid = () => {
       return this.state.listItem !== ''
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>Thing to do:</label>
                    <input 
                        className="form-control"
                        type="text"
                        name="itemName"
                        value={this.state.listItem}
                        placeholder="e.g. Do laundry"
                        onChange={this.handleChange}
                        autoFocus
                    />
                    <button
                        disabled={!this.isValid()}
                        className="btn btn-primary mt-2"
                        type="submit"
                        onClick={this.handleSubmit}
                    >Add
                    </button>
                </div>
            </form>
        );
    }
}

export default AddNew;