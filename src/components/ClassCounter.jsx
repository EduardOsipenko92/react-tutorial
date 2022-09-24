import React from "react";


class ClassCounter extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            count : 0
        }
        this.inkrement = this.inkrement.bind(this);
        this.dekrement = this.dekrement.bind(this);
    }

    inkrement () {
        this.setState ({count: this.state.count + 1})
        }
    
    dekrement () {
        this.setState ({count: this.state.count - 1})
        }


    render () {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.inkrement}>Inkrement</button>
                <button onClick={this.dekrement}>dekrement</button>
            </div>
        )
    }
}


export default ClassCounter;