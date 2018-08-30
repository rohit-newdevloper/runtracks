import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import * as firebase from 'firebase';

import { db } from 'SpotifyBPM/app/config/db';

//Initial state
const initialState = {
  data: [],
  songData: { },
}

//Reducer
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case "setSongData":
      return { ...state, songData: action.value };
    default:
      return state;
  }
}

//Store
const store = createStore(reducer, applyMiddleware(thunkMiddleware));
export { store };

//Action Creators
const setSongData = (songData) => {
  return {
    type: "setSongData",
    value: songData
  };
};

const watchSongData = () => {
  return function(dispatch) {
    firebase.database().ref('/').on("value", function(snapshot)
    {
        let songData = snapshot.val();
        let data = Object.values(songData);
        var actionSetSongData = setSongData(songData);
        dispatch(actionSetSongData);
    }, function(error) { console.log(error); });
  }
};

export { setSongData, watchSongData };
