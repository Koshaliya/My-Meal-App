import React from 'react'
import {View,Text,StyleSheet,Button} from 'react-native'
import { CATEGORIES,MEALS } from '../data/dummy-data'
import MealItem from '../components/MealItem'

const CategoryMealScreen = props => {
    const renderMealItem = itemData => {
        <MealItem 
        image={itemData.item.imageUrl}
        title={itemData.item.title}
        onSelectMeal={() => {
            props.navigation.navigate({
                routeName: 'MealDetail',
                params: {
                    mealId: itemData.item.id
                }
            })
        } 
    }
    duration={itemData.item.duration}
    complexity={itemData.item.complexity} 
    affordabilty={itemData.item.affordabilty}
    /> 
}  
    const catId = props.navigation.getParam('categoryId')
//if not find -1 so >=0
//check whithout indexOf
    const displayedMeal = MEALS.filter(meal => meal.categoryId.indexOf(catId) >= 0)

    return(
    <View style={styles.screen}>
        <Flatlist keyExtractor={(item,index) => item.id} data={displayedMeal} renderItem={renderMealItem}
        style={{width:'100%'}}
        />
    </View>
    )
}

CategoryMealScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId')

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId)

//when returning dynamic values use return
    return{
    headerTitle = selectedCategory.title,
    }
}

//navigate / push - already on_go over and over again / boBack() / pop()-only in stackNavi / popToTop()
//replace - login can't go back - empty the stack

const styles = StyleSheet.create({
screen:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
}
});


export default CategoryMealScreen