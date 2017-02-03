import React from 'react';
import StudentForm from './StudentForm';

const Student = props => {

  const { item, toggleForm, updateForm, deleteStudent } = props;

  return (
      <span>
        <div class='container'>
            <div class='row'>

                    {item.firstName + ' ' + item.lastName}&nbsp;
                    <input type='checkbox' id={'toggle' + item.id} className='toggle' />
                    <label htmlFor={'toggle' + item.id} className='btn btn-primary pull-right margin-bottom-5' onClick={()=>toggleForm(item.id)}>
                        <span className='glyphicon glyphicon-pencil'></span>&nbsp;Editer
                    </label>
                    
                    { item.isVisible ? <StudentForm key={item.id}
                           formKey={String(item.id)}
                           initialValues={item} 
                           saveForm={updateForm}
                           deleteStudent={deleteStudent}
                           /> : null 
                    }

            </div>
        </div>
      </span>
  );
}

export default Student;
