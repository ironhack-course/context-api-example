import React from 'react';
import Family from './components/Family';
import MyContext from './context/context';


class App extends React.Component {
  state = {
    name: "Josh",
    age: 28,
    ofAge: true
  }
  login = () => {
    console.log('loged in');
  }
  render() {  
    return (
      <div className="App">
      <MyContext.Provider value={{
        person: {
          name: this.state.name,
          age: this.state.age,
          ofAge: this.state.ofAge
        },
        h1: 'This is H1',
        login: this.login
      }}>
          <Family />
      </MyContext.Provider>
      </div>
    );
  }
}


export default App;
