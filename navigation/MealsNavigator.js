import React from 'react'
import Colors from '../constants/Colors'
import {createStackNavigator,createBottomTabNavigator,createAppContainer} from 'react-navigation'
import { createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'

import {Ionicons} from '@expo/vector-icons'

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealScreen from '../screens/CategoryMealScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import FavouriteScreen from '../screens/FavouriteScreen'
import { Platform } from 'react-native'

const MealNavigator = createStackNavigator({
    Categories: {
        screen:CategoriesScreen,
        // navigationOptions:{
        //     headerTitle:'Meal Categories'
        // }
    },
    CategoryMeal:{
        screen:CategoryMealScreen,
        //can add navigation Options here
    },
    MealDetail:MealDetailScreen
},{
    // mode:'modal', animation changes
    // initialRouteName: 'MealDetail',
    defaultNavigationOptions:{
        headerStyle:Colors.primaryColor,
        headerTintColor:'white'
    }
}
);

const tabScreenConfig = {
    Meals:{
        screen:MealNavigator,
        navigationOptions:{
            // when one nav has another nav
            //diff from default nav 
            tabBarIcon:(tabInfo) => {
                return (
                <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor}/>
                )
            },
            tabBarColor: Colors.primaryColor //shifting - true
        }
    },
    Favourites:{ //to override this name - tabBarLabel
        screen:FavouriteScreen,
        navigationOptions:{ 
            tabBarLabel:'Favourites!',
            tabBarIcon:(tabInfo) => {
                return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor}/>
            },
            tabBarColor: Colors.accentColor
        }
    },
}

const MealsFavNavigatorTab = Platform.OS === 'android' 
        ? createMaterialBottomTabNavigator(tabScreenConfig, {
            activeColor : 'white',
            shifting : true
            //shifting:false -> barStyle:{backClr : primary}
        }) 
        : createBottomTabNavigator( //cant have stack navigation here , this is the root nav
    tabScreenConfig,
    {
        tabBarOptions:{
            //active color , inactive color
            activeTintColor:Colors.accentColor
        }
    }
);

export default createAppContainer(MealsFavNavigatorTab);


//can set default values after screen
//wrap with app container
//react navigator by default inside safe area view

