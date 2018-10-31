import React from 'react';
import Welcome from './Welcome';

const Modal = (props) => {
    return (
        <div className="container">
            <div className="container text-center">
            <button type="button" className="btn btn-primary m-5" data-toggle="modal" data-target="#myModal">
                Get started
            </button>
            <div className="modal fade" id="myModal">
                <div className="modal-content modal-dialog">
                    <div className="modal-body">
                    <Welcome 
                        name={props.name}
                        saveName={props.saveName}
                    />
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Modal;