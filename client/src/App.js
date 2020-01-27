import React from 'react';
import Display from './components/Display';
import NavBar from './components/NavBar';
import './App.css';

class App extends React.Component {
  
  state = {
    playerData: []
  };

  componentDidMount() {
    fetch('http://localhost:5000/api/players')
      .then(response => response.json())
      .then(data => {
        console.log('Here is player data', data);

        this.setState({ ...this.state.playerData, playerData: data });
      })
      .catch(error => console.log('Did NOT get player data', error));
  };

  render() {  
    return (
        <div className="App">
          <NavBar />
          <header className="App-header">
            <h1>Women's World Cup Soccer</h1>
            <h2>Google Searches by Player</h2>
          </header>
          {this.state.playerData.map(player => {
            return <Display key={player.id} player={player} />
          })}
        </div>
    );
  };
};

export default App;
