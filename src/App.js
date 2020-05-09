import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import ImageDisplay from './components/ImageDisplay';
import Clarifai from 'clarifai';


const app = new Clarifai.App ({
  apiKey: "64d3121a2ad14025960bb5d9d24d0a66"
});

class App extends React.Component {
  state = {
    input: '',
    imageUrl: ''
  };


  displayData = data => {
    const name = data.outputs[0].data.regions[0].data.concepts[0].name;
    console.log(name);
  }

  onInputChange = e => {
    this.setState ({
      input: e.target.value
    });
    console.log(this.state.input);
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.setState({
      imageUrl: this.state.input
    });

    app.models
    .predict("e466caa0619f444ab97497640cefc4dc", this.state.input)
    .then(response => this.displayData(response))
    .catch(err => console.log(err));


  };

  render() {
    return (
      <div className="App">
          <SearchBar
          onFormSubmit={this.onFormSubmit}
          onInputChange={this.onInputChange} />

          <ImageDisplay imageUrl = {this.state.imageUrl} />
      </div>
    );
  }

}

export default App;
