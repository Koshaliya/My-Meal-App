import React from 'react';
import { Platform ,Text} from 'react-native';
import {
  createStackNavigator,
} from 'react-navigation-stack';
import {
  createBottomTabNavigator,
  createAppContainer
} from 'react-navigation'
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen'
import Colors from '../constants/Colors';

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
  },
  headerTitleStyle:{
    fontFamily:'open-sans-bold'
  },
  headerBackTitleStyle:{
    fontFamily:'open-sans'  //only in iOS  <-
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
  headerTitle: 'A Screen'
};

const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen
      // navigationOptions:{
      //     headerTitle:'Meal Categories'
      // }
    },
    CategoryMeals: {
      screen: CategoryMealsScreen
      //can add navigation Options here

    },
    MealDetail: MealDetailScreen
  },
  {
    // mode:'modal', animation changes
    // initialRouteName: 'MealDetail',
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const FavNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen
  },
  {
    // initialRouteName: 'Categories',
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.primaryColor
    }
  },
  Favorites: { //to override this name - tabBarLabel
    screen: FavNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.accentColor,
      tabBarLabel:<Text style={{fontFamily:'open-sans-bold'}}>Favourites</Text>
    }
  }
};

const MealsFavTabNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
      activeTintColor: 'white',
      shifting: true,
      // barStyle: {
      //   backgroundColor: Colors.primaryColor
      // }

      //shifting:false -> barStyle:{backClr : primary}
    },
    // in android no style option for tab bar title - go to tabBarLabel |^
    )
    : createBottomTabNavigator(tabScreenConfig, { //cant have stack navigation here , this is the root nav
      tabBarOptions: {
        labelStyle:{
          fontFamily:'open-sans'
        },
        //active color , inactive color
        activeTintColor: Colors.accentColor
      }
    });


const FiltersNavigator = createStackNavigator(
  {
    Filters: FiltersScreen
  },
  {
    // navigationOptions: {
    //   drawerLabel: 'Filters!!!!'
    // },
  defaultNavigationOptions: defaultStackNavOptions
   }
);

const MainNavigator = createDrawerNavigator(
  {
    MealsFavs: 
     {
      screen: MealsFavTabNavigator,
      navigationOptions: {
        drawerLabel: 'Meals'
      }
    },
    Filters: FiltersNavigator
  },
  {
    contentOptions: {
      activeTintColor: Colors.accentColor,
      labelStyle: {
        fontFamily: 'open-sans-bold'
      }
    }
  }
);

export default createAppContainer(MainNavigator);



//can set default values after screen
//wrap with app container
//react navigator by default inside safe area view