import React from 'react';
import './App.css';
import RandomNumber from './Components/RandomNumber';
// import Forms from './interview Task/Forms';
import FormikContainer from './interview Task/FormikContainer';
import { Provider } from 'react-redux';
import store from './redux/store'

function App() {
  return (
    <div className="App mt-3">
      <Provider store={store}>
      <FormikContainer/>
      </Provider>
    </div>
  );
}

export default App;
