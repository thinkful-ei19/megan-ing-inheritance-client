import React from 'react';
import {shallow} from 'enzyme';
import { createNewRecipe } from '../actions/actions';
import {reset} from 'redux-form';

import {CreateButton} from './create-button';

describe('<CreateButton />', () => {
    it('Renders without crashing', () => {
        shallow(<CreateButton />);
    });

    it('Dispatches createNewRecipe', () => {
        const dispatch = jest.fn();
        const wrapper= shallow(<CreateButton dispatch={dispatch}/>);
        const button= wrapper.find('.colored');
        button.simulate('click');
        expect(dispatch).toHaveBeenCalledWith(createNewRecipe());
    });

    it('Dispatches reset(recipe)', () => {
        const dispatch = jest.fn();
        const wrapper= shallow(<CreateButton dispatch={dispatch}/>);
        const button= wrapper.find('.colored');
        button.simulate('click');
        expect(dispatch).toHaveBeenCalledWith(reset('recipe'));
    });
});