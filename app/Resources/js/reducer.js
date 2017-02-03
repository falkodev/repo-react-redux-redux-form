import Immutable, { List, Map } from 'immutable';
import { students } from './fixtures';

export default function(state = students, action) {
  switch(action.type) {
      case 'TOGGLE_FORM':
          return state.map(item => {  
            if(item.get('id') === action.id) {
              return item.set('isVisible', !item.get('isVisible')).set('isUpdated', false);
            } else {
              return item;
            }
          });
      case 'UPDATE_FORM':
          return state.map(item => {
            if(item.get('id') == action.id) {
              return Immutable.fromJS(action.item).set('isUpdated', true);
            } else {
              return item;
            }
          }); 
    case 'ADD_STUDENT': 
          action.item.id = action.id;
          return state.push(Map(action.item).set('isVisible', false).set('isUpdated', false));
    case 'DELETE_STUDENT': 
          return state.filter(function(item) {
              return item.get("id") != action.id;
          });
    default:
      return state;
  }
}
