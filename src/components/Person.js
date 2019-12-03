import React from 'react';
import MyContext from '../context/context';

export default class Person extends React.Component {

    static contextType = MyContext;

    componentDidMount() {
        console.log(this.context.h1)
    }

    render() {
        return (
            <div>
                {/* <MyContext.Consumer> */}
                {/* {(context) =>  */}
                <button onClick={this.context.login}>
                    Log in
                </button>
                {/* </MyContext.Consumer> */}
                <h1>{"bla"}</h1>
            </div>
        )
    }
    
}
