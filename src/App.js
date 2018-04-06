import React, { Component } from 'react';
import Panel from './Panel/Panel';
import 'bulma/css/bulma.css';
import Objects from './CardObject/Objects';

class App extends Component {
  render() {
    return (
        <div>
            <Panel/>
            <Objects/>
        </div>
    );
  }
}

export default App;
