import React,{useState , useEffect,useCallback} from 'react';
import { View, Text, StyleSheet,Switch } from 'react-native';
//manual configure switch in react
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors';


const FilterSwitch = props => {
  return (
    <View style={styles.filterContainer}>
        <Text>{props.label}</Text>
    <Switch 
        trackColor={{true : Colors.accentColor}}
        thumbColor={Colors.accentColor}
        value={props.value} 
        onValueChange={props.onChange}
        />
      </View>
  );
}

const FiltersScreen = props => {

  const {navigation} = props

  const [isGluten,setIsGluten] = useState(false)
  const [isGlucose,setIsGlucose] = useState(false)
  const [isVegan,setIsVegan] = useState(false)
  const [isVegeterian,setIsVegeterian] = useState(false)

  const saveFilters = useCallback(() => {
    const appliedFilters =  {
      glutenFree:isGluten,
      glucoseFree:isGlucose,
      isVegan:isVegan,
      isVegeterian:isVegeterian
    }
    console.log(appliedFilters)
  },[isGlucose,isGluten,isVegan,isVegeterian]
  )

//useEfeect runs whenever the component updates
  useEffect( () => {
    //props.navigation X -> anything change this alo change
    navigation.setParams({save:saveFilters}) //only re-render when navi prop changes
  },[saveFilters] //dependencies
  )


  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterSwitch label='Gluten Free' value={isGluten} onChange={newvalue => setIsGluten(newvalue)}/>
      <FilterSwitch label='Glucose Free' value={isGlucose} onChange={newvalue => setIsGlucose(newvalue)}/>
      <FilterSwitch label='Vegan' value={isVegan} onChange={newvalue => setIsVegan(newvalue)}/>
      <FilterSwitch label='Vegeterian' value={isVegeterian} onChange={newvalue => setIsVegeterian(newvalue)}/>
    </View>
  );
};

FiltersScreen.navigationOptions = navData => {
  return{
  headerTitle: 'Your Filters',
 headerLeft: () => //updation
  (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item
        title="Menu"
        iconName="ios-menu"
        onPress={() => {navData.navigation.toggleDrawer()}}
      />
    </HeaderButtons>
 ),
 headerRight : <HeaderButtons HeaderButtonComponent={HeaderButton}>
 <Item
   title="Save"
   iconName="ios-save"
   onPress={navData.navigation.getParam('save')}
 />
</HeaderButtons>
  }
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center'
  },
  filterContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    width:'80%',
    marginVertical:15 // =
  },
  title:{
    fontFamily:'open-sans-bold',
    fontSize:20,
    margin:20,
    textAlign:'center',

  }
});

export default FiltersScreen;
