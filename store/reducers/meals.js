import { MEALS } from "../../data/dummy-data";

const initialState = {
    meals:MEALS,
    filteredMeals:MEALS,
    favouriteMeals:[]
}

const mealsReducer = (state=initialState,action) => {
    return state;
}



//action  - title 
//reducer  - code implementation  -> find what, give response  
//store   - keep reducers 
//dispatch - for use
//selector - variable for action

//store.subscribe -> console log
//store.dispatch or useDispatch() -> give user input 
//state - output