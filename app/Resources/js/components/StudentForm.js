import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';

const validate = values => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = 'Le prénom est requis';
  } else if (values.firstName.length < 3) {
    errors.firstName = 'Le prénom doit être d\'au moins 3 caractères';
  }

  if (!values.lastName) {
    errors.lastName = 'Le nom est requis';
  } else if (values.lastName.length < 3) {
    errors.lastName = 'Le nom doit être d\'au moins 3 caractères';
  }

 if (isNaN(Number(values.average)) && values.average) {
    errors.average = 'La moyenne doit être numérique';
  } else if (Number(values.average) < 0) {
    errors.average = 'La moyenne doit être supérieure à 0';
  }

  return errors;
}

let StudentForm = props => {

    const save = (data) => {
        saveForm(data);
        if(!id.value) { 
            resetForm(); 
        }
    }
    
    const {fields: {id, firstName, lastName, level, average, isVisible, isUpdated}, handleSubmit, resetForm, saveForm, deleteStudent} = props;

    return (
      <form onSubmit={handleSubmit(save)}>
            <div className='row'>
              <div className='col-lg-2 col-md-2 col-sm-2 col-xs-4'><label>Prénom</label></div>
              <div className='col-lg-4 col-md-4 col-sm-4 col-xs-8'><input type='text' placeholder='Prénom élève' {...firstName}/></div>
              <div className='col-lg-2 col-md-2 col-sm-2 col-xs-4'><label>Nom</label></div>
              <div className='col-lg-4 col-md-4 col-sm-4 col-xs-8'><input type='text' placeholder='Nom élève' {...lastName}/></div>
                  
                  
            </div>
            <div className='row'>
              <div className='col-lg-2 col-md-2 col-sm-2 col-xs-4'><label>Niveau</label></div>
              <div className='col-lg-4 col-md-4 col-sm-4 col-xs-8'><input type='text' placeholder='6e, 5e, ...' {...level}/></div>
              <div className='col-lg-2 col-md-2 col-sm-2 col-xs-4'><label>Moyenne</label></div>
              <div className='col-lg-4 col-md-4 col-sm-4 col-xs-8'><input type='text' placeholder='Note sur 20' {...average}/></div>
                 
            </div>
            <div className='row'>
                <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                    <button className='btn btn-primary pull-right' type='submit'>Enregistrer</button>
                    {id.value ? <span className='btn btn-danger pull-right' onClick={()=>deleteStudent(id.value)}>Supprimer</span> : null }
                </div>
            </div>
            {firstName.touched && firstName.error && <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 text-danger'>{firstName.error}</div>}
            {lastName.touched && lastName.error && <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 text-danger'>{lastName.error}</div>}
            {average.touched && average.error && <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 text-danger'>{average.error}</div>}
            { isUpdated.value ? <div className='alert alert-success'>Modification enregistrée</div> : null }
      </form>
    );
};


StudentForm.propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    saveForm: PropTypes.func.isRequired,
    deleteStudent: PropTypes.func
}

StudentForm = reduxForm({
  form: 'student',
  fields: ['id', 'firstName', 'lastName', 'level', 'average', 'isVisible', 'isUpdated'],
  validate 
})(StudentForm);

export default StudentForm;
