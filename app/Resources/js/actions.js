// succinct hack for generating passable unique ids
const uid = () => new Date().valueOf();

export function addStudent(item) {
  return {
    type: 'ADD_STUDENT',
    item: item,
    id: uid()
  };
}
    
export function deleteStudent(id) {
  return {
    type: 'DELETE_STUDENT',
    id: id
  };
}
    
export function toggleForm(id) {
  return {
    type: 'TOGGLE_FORM',
    id: id
  };
}
    
export function updateForm(item) {
  return {
    type: 'UPDATE_FORM',
    item: item,
    id: item.id,
  };
}
