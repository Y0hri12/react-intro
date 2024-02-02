import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import StateParent from './components/StateParent';
// import EventPoint from './components/EventPoint';
// import StateForm from './components/StateForm';
// import StateFormUC from './components/StateFormUC';
// import FormTextarea from './components/FormTextarea';
// import FormSelect from './components/FormSelect';
// import FormList from './components/FormList';
// import FormRadio from './components/FormRadio';
// import FormCheck from './components/FormCheck';
// import FormCheckMulti from './components/FormCheckMulti';
import FormFile from './components/FormFile';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <FormFile />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
