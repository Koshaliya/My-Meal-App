import React from 'react';
import { useSelector } from 'react-redux'

import { CATEGORIES } from '../data/dummy-data';
import MealList from '../components/MealList';

const CategoryMealScreen = props => {
  
  const catId = props.navigation.getParam('categoryId');
//if not find -1 so >=0
//check whithout indexOf
  const displayedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
  );
//when returning dynamic values use return
  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

CategoryMealScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

  return {
    headerTitle: selectedCategory.title
  };
};

//navigate / push - already on_go over and over again / boBack() / pop()-only in stackNavi / popToTop()
//replace - login can't go back - empty the stack
export default CategoryMealScreen;
