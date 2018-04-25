import React from 'react';
import {Field, reduxForm, reset} from 'redux-form';
import {createRecipe, updateRecipePost, createNewRecipe } from '../actions/actions';
import {required, nonEmpty} from '../validators';
import { connect } from 'react-redux';
import Input from './input';
import TextArea from './textarea-input';


export class AddrecipeForm extends React.Component{ 
   onSubmit(value) {
       if(this.props.initialValues._id !== ''){
           this.props.dispatch(updateRecipePost(this.props.initialValues._id, value.title, value.ingredients, value.recipe));
        }
        
        else{
            this.props.dispatch(createRecipe(value.title, value.ingredients, value.recipe));
        }
        this.props.dispatch(createNewRecipe());
        this.props.dispatch(reset('recipe'))
    }
    
    render(){
        return(
            <form
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
            )}
            >
            <label>Title:
                <Field 
                    component={Input}
                    type="text"
                    name="title"
                    placeholder="Uncle Bob's Chili"
                    validate={[required, nonEmpty]}
                />
            </label>
            <br/>
            <label>Ingredients:
                <Field 
                    component={TextArea}
                    type="text"
                    name="ingredients"
                    placeholder="Ex: 6 cans crushed tomatoes..."
                    validate={[required, nonEmpty]}

                />
            </label>
            <br/>
            <label>Recipe:
                <Field 
                    component={TextArea}
                    type="text"
                    name="recipe"
                    placeholder="Ex: Step 1. Crush garlic"
                    validate={[required, nonEmpty]}

                />
            </label>

                <br/>
                <button type="submit">Save</button>
            </form>
        )
    }
}

  
  AddrecipeForm = reduxForm({
    form: 'recipe',
    enableReinitialize: true
  })(AddrecipeForm)
  
  
  AddrecipeForm = connect(
    state => ({
      initialValues: state.recipe.initialValues // pull initial values from recipe state reducer
    })
  )(AddrecipeForm)
  
  export default AddrecipeForm