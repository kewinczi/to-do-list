import React from 'react';

const Hello = (props) => {
    const name = `${props.name}!`.split("");
    const hello = "Hello".split("");
    const nameLetters = name.map((letter,index) => {
        return <span className="letter" key={`nletter${index}`}>{letter}</span>
    });
    const helloLetters = hello.map((letter,index) => {
        return <span className="letter" key={`hletter${index}`}>{letter}</span>
    });
    return (
        <header>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm">
                        <h1 className="display-4 mt-5 ml-5 text-center">{helloLetters} {nameLetters}</h1>
                    </div>
                    <div className="col-sm">
                        <img className="mx-auto d-block mt-3 ml-5 header-img" src="ghibli.png" alt="Logo"/>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Hello;