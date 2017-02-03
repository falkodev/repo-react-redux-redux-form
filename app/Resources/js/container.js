import { connect } from 'react-redux';
import StudentsList from './components/StudentsList';
import { toggleForm, updateForm, addStudent, deleteStudent } from './actions';

const StudentsContainer = connect(
  function mapStateToProps(state) {
    return { students: state };
  },
  function mapDispatchToProps(dispatch) {
    return {
        toggleForm: id      => dispatch(toggleForm(id)),
        updateForm: data    => dispatch(updateForm(data)),
        addStudent: data    => dispatch(addStudent(data)),
        deleteStudent: data => dispatch(deleteStudent(data)),
    };
  }
)(StudentsList);

export default StudentsContainer;