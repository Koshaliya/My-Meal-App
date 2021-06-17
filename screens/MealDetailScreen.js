import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import { MEALS } from '../data/dummy-data'

import {HeaderButtons,Item} from 'react-native-header-buttons'

import HeaderButton from '../components/HeaderButton'

const MealDetailScreen = props => {
    const mealId = props.navigation.getParam('mealId')
    const selectedMeal = MEALS.find(meal => meal.id === mealId)
    return(
    <View style={styles.header}>
        <Text >{selectedMeal.title}</Text>
    </View>
    )
}

MealDetailScreen.navigationOptions = (navigationData) => {
    const mealId = props.navigation.getParam('mealId')
    const selectedMeal = MEALS.find(meal => meal.id === mealId)
    return {
        headerTitle: selectedMeal.title,
        headerRight:<HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Favourite' iconName='ios-star' onPress={() => {console.log('hi')}}/>
        </HeaderButtons>
        // headerRight: <Text> Fav! </Text> super annoying
    }
    
}

const styles = StyleSheet.create({
screen:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
}
});


export default MealDetailScreen