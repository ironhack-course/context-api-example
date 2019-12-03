import React from 'react';

const MyContext = React.createContext({
    person: {
        name:"",
        age: 0,
        ofAge: false,
        login: () => {}
    }
});


export default MyContext;