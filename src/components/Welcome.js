import React from 'react';

class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.initialState = { name: '' }
        this.state = this.initialState;
    }

    handleChange = (event) => {
        const name = event.target.value;
        this.setState({ name })
    }

    handleSubmit = () => {
        this.props.saveName(this.state.name);
        this.setState(this.initialState)
    }

    render() {
        return (
            <div className="text-center">
                <h1 className="text- display-2">Hey there!</h1>
                <h2 className="text-center display-3">What's your name?</h2>
                <form>
                    <div className="form-group">
                        <input
                            className="form-control mt-5"
                            type="text" 
                            name="name"
                            placeholder="Enter your name..."
                            value={this.state.name}
                            onChange={this.handleChange}
                            required
                        />
                        <input 
                            className="btn btn-primary mt-3"
                            data-toggle="modal" 
                            data-target="#myModal"
                            type="button"
                            value="Submit"
                            onClick={this.handleSubmit}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default Welcome;