import React from 'react';
import Tmp from './tmp';


const EDIT_CONTENT = 'EDIT_CONTENT';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import { createStore } from 'redux';

import { log } from '../../util';

const { dev } = log;

const TmpInitState = ['', '', ''];
const edit = (state = TmpInitState, action) => {
  switch (action.type) {
    case EDIT_CONTENT:
      dev({
        title: 'Edit',
        text: 'reducer dispatch edit -- ' + action.text,
        textColor: 'green'
      });
      // state[action.id] = action.text;
      // console.log(state);
      // state.map((text, i) => (i === action.id ? action.text : text));
      return state.map((text, i) => (i === action.id ? action.text : text));
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  edit
});

const store = createStore(rootReducer);

const Left = ({ dispatch }) => {
  let input;

  let handleClick = () => {
    // console.log(input.innerHTML);<p style='color: #f00;'>dasd</p>
    dispatch({ type: EDIT_CONTENT, id: 0, text: input.innerHTML });
  };

  return (
    <div className='left'>
      <div className='e-card'>
        <h1>Test Part</h1>
        <div id='e01' className='ex-editor' contentEditable='true' ref={ node => input = node }>

        </div>
        <button onClick={ () => handleClick() }>Handle</button>
      </div>
    </div>
  );
};

const NewLeft = connect()(Left);



const mapRightStateToProps = state => ({
  t1: state.edit[0]
});
// const mapRightStateToProps = state => {
//   console.log(state);
//   return ({
//     t1: state.edit[0]
//   });
// };

const NewTmp = connect(
  mapRightStateToProps
)(Tmp);

const Editor = () => (
  <div className='panel clearfix'>
    <NewLeft />

    <div className='right'>
      <NewTmp />
    </div>
  </div>
);

const App = () => {
  return (
    <Provider store={ store }>
      <div>
        <Editor />
      </div>
    </Provider>
  );
};

export default App;
