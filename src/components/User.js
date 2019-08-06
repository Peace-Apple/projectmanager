import React from "react";

export class User extends React.Component {
    constructor (){
        super();
        this.state = {
            id: 10,
            username: "Apple",
            age: 20
        }

    }
    render(){
        // console.log(this.props.match.params.id);
        // const { id } = this.props.match.params;
        return (
            <div className="container">
                <h3>The User Page</h3>
                
                <p>Employee ID: {this.state.id}</p>
                <p>Username: {this.state.username}</p>
                <p>Age: {this.state.age}</p>
            </div>
        );
    }
}
