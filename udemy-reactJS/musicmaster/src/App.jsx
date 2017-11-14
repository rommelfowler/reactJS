import React, {Component} from 'react';
import './App.css';
import {FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      query : ''

    }
  }
  search(){
    console.log('this.state', this.state);
    const BASE_URL=  'https://api.spotify.com/v1/search?';
    const FETCH_URL = `${BASE_URL}q=${this.state.query}&type=artist&limit=1`;
    console.log('FETCH_URL', FETCH_URL);
    fetch(FETCH_URL, {
      method: 'GET'
    })
    .then(response => {
      const json = response.json();
      console.log('json', json);
    })
  }

  render() {
    return(
      <div className="App">
        <div className="App-title"> Music Master </div>
        <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Serach for an artist"
              value={this.state.query}
              onChange={event => {this.setState({ query:event.target.value })}}
              /*Using event.key will target the key being pressed in the onKeyPress*/
              onKeyPress={event => {
                if (event.key === 'Enter') {
                  this.search();
                }
              }}
            />
            {/*This adds on the glyph*/}
            <InputGroup.Addon onClick={()=>this.search()}>
              <Glyphicon glyph="search"></Glyphicon>
            </InputGroup.Addon>
          </InputGroup>

        </FormGroup>
        <div className="Profile">
          <div>Aritst Picture</div>
          <div>Artist Name</div>
        </div>
        <div className="Gallery">
          Gallery
        </div>
      </div>
    )
  }
}

export default App;
