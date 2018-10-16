import React, { Component } from 'react';

class Instructions extends Component {
    constructor(props) {
        super(props);

        this.state = { stepCounter: 0 };
    }

    startDialog = event => {
        event.preventDefault();

        this.setState({ stepCounter: this.state.stepCounter + 1});
    }

    render() {
        const dialog1 = (
            <div className="arrow_box justify-content-md-center text-center">
                <p className="m-4">Welcome to my clicky game :^{")"}</p>
                <button className="btn btn-primary mb-3" onClick={this.startDialog}>How do I play?!</button>
            </div>
        );

        const dialog2 = (
            <div className="arrow_box justify-content-md-center text-center">
                <p className="m-4">Click the pics unclicked before, there is no other way to raise your score. Beware, click a pic clicked before and say goodbye to your precious score :^{")"}.</p>
                <button className="btn btn-primary mb-3" onClick={this.props.endInstructions}>I get it, lets begin!</button>
            </div>
        );


        return this.state.stepCounter === 0 ? dialog1 : dialog2;
    }
}

export default Instructions;