import React from 'react';
import Tmp from './tmp';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import rootReducer, { NewAppCounter } from '../../components/counter/';

// const store = createStore(rootReducer);
const Editor = () => (
  <div className='panel'>
    <h1>Editor</h1>
    <h1>Editor</h1>
    <div className='left'>
      <div className='e-card'>
        <h1>Test Part</h1>
        <div id='e01' className='ex-editor' contentEditable='true'>

        </div>
      </div>
    </div>

    <div className='right'>
      <Tmp />
    </div>
  </div>
);

const App = () => {
  return (
    // <Provider store={ store }>
    //   <NewAppCounter />
    // </Provider>
    <div>
      <Editor />
    </div>
  );
};

export default App;
