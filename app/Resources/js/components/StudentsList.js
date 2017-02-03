import React from 'react';
import Student from './Student';
import StudentForm from './StudentForm';

let StudentsList = props => {
                    
  const { students, toggleForm, updateForm, addStudent, deleteStudent } = props;

  return (
    <div className='col-lg-12'>

      <ul className='list-group'>
        {students.reducer.map(student => (
          <li key={student.get('id')} className='list-group-item clearfix'>
            <Student item={student.toJS()} toggleForm={toggleForm} updateForm={updateForm} deleteStudent={deleteStudent}/>
          </li>
        ))}
      </ul>

      <hr/>

      <label>Ajouter un élève</label>
      <StudentForm key='new'
       formKey='new'
       saveForm={addStudent}
       /> 
       
    </div>
  );
}

export default StudentsList;

