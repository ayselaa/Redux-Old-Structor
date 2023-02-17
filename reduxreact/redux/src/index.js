import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux'; 
import { store } from './redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

//Redux ucun extensionlar
//npm i redux react-redux
//npm i redux-thunk
//npm i --save redux-devtools-extension

