import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import reducer from './reducer';
import { Provider } from 'react-redux';
import StudentsContainer from './container';

import Layout from './Layout';
import Home from './components/Home';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import NoMatch from './components/NoMatch';

const reducers = {
  reducer,
  form: formReducer,
}
const reduc = combineReducers(reducers);
const store = createStore(reduc);

ReactDom.render((
  <Provider store={store}>
    <Router history={browserHistory}>
        <Route path='/' component={Layout}>
            <IndexRoute component={Home} />
            <Route path='/home' component={Home} />
            <Route path='/page1' component={Page1} />
            <Route path='/page2' component={Page2} />
            <Route path='/students' component={StudentsContainer} />
            <Route path='*' component={NoMatch} />
        </Route>
    </Router>
  </Provider>
), document.getElementById('app'));
