import {combineReducers} from 'redux';

import dashboard from '../Dashboard/duck/reducers';

const appBaseApp = combineReducers({
  dashboard,
});

export default appBaseApp
