import React from 'react';
import ReacDOM from 'react-dom/client';
import SeasonDisplay from './components/SeasonDisplay';
import Spinner from './components/Spinner';
import './css/app.css';

class App extends React.Component {
  state = { lat: null, errorMsg: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (error) => this.setState({ errorMsg: error.message }),
    );
  }
  render() {
    if (this.state.lat && !this.state.errorMsg) {
      // Show Season Component
      return <SeasonDisplay lat={this.state.lat} />;
    } else if (!this.state.lat && this.state.errorMsg) {
      // Show Error
      return <h3>Error: {this.state.errorMsg}</h3>;
    } else {
      // Show Loading
      return <Spinner text='Waiting for you to allow...' />;
    }
  }
}

const root = ReacDOM.createRoot(document.querySelector('#root'));
root.render(<App />);
