import React from 'react';
import ReacDOM from 'react-dom/client';

import SeasonDisplay from './components/SeasonDisplay';
import Spinner from './components/Spinner';
import Error from './components/Error';

import './css/app.css';

class App extends React.Component {
  state = { lat: null, errorMsg: '' };

  componentDidMount() {
    setInterval(() => {
      window.navigator.geolocation.getCurrentPosition(
        (position) =>
          this.setState({ lat: position.coords.latitude, errorMsg: null }),
        (error) => this.setState({ lat: null, errorMsg: error.message }),
      );
    }, 1000);
  }
  render() {
    if (this.state.lat && !this.state.errorMsg) {
      // Show Season Component
      return <SeasonDisplay lat={this.state.lat} />;
    } else if (!this.state.lat && this.state.errorMsg) {
      // Show Error
      return <Error />;
    } else {
      // Show Loading
      return <Spinner text='Please allow location request' />;
    }
  }
}

const root = ReacDOM.createRoot(document.querySelector('#root'));
root.render(<App />);
