import React from 'react';
import {connect} from 'react-redux';
import { fetchrecipes } from '../actions/actions';

class recipeList extends React.Component{ 
    componentDidMount(){
        this.props.dispatch(fetchrecipes())
    }
    
    render(){
        console.log(this.props);
    const recipeList = this.props.recipes.map((recipe, index)=>{
        return(
            <li key={index}> {recipe.title} </li>
        )
    })
        return(
            <div>
                <ul>
                    {recipeList}
                </ul>
                
            </div>
        )
    }
}

const mapStateToProps = (state) =>({
    recipes: state.auth.recipes
})

export default connect(mapStateToProps)(recipeList);