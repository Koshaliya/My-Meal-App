import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity,Platform,TouchableNativeFeedback} from 'react-native'
import { CATEGORIES } from '../data/dummy-data'

const CategoryGridTile = props => {

    let TouchbleCmpt = TouchableOpacity;
    if(Platform.OS === 'android' && Platform.Version >= 21){
        TouchbleCmpt = TouchableNativeFeedback;
        // touchable opacity in android is not nice - so ripple effect -> native feedback
    }
    //console log the props - each screen has prop-navigation
    const renderGridItem = itemData => {
        return(
            <View style={styles.gridItem} >
        <TouchbleCmpt 
        style={{flex:1}} 
        onPress={props.onSelect}
        >
            <View style={{...styles.container,...{backgroundColor: props.color}}}>
                <Text style={styles.title} numberOfLines={2}>
                    {props.title}
                </Text>
            </View>
        </TouchbleCmpt>
        </View>
        )
    }
    
    
}

    const styles = StyleSheet.create({
        gridItem: {
            flex: 1,
            marginVertical: 15,
            height: 150,
            borderRadius:10,
            overflow: Platform.OS ==='android' && Platform.Version >=21 ? 'hidden' : 'visible',
        elevation:5, // for ripple effect
        },
        container:{
            flex:1,
            borderRadius:10,
            //shadow affects only iOS
            shadowColor:'black',
            shadowOpacity:0.26,
            shadowOffset: {width:0,height:2},
            shadowRadius:10,
            //elevation:3, the hidden cuts the shadow
            padding:15,
            justifyContent:'flex-end',
            alignItems:'flex-end'        
        },
        title:{
            color:'white',
            fontFamily:'open-sans-bold',
            fontSize:20,
            textAlign:'right'
        }
        });
        
        
export default CategoryGridTile