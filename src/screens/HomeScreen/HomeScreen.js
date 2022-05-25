import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View, Text, Image, ScrollView, TextInput, Dimensions, FlatList } from 'react-native';
import COLORS from '../../consts/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import dogs from '../../consts/dogs';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
const {width} = Dimensions.get ('screen');
const HomeScreen = ({navigation}) => {
  const ListCategories = () => {
    const[selectedCategoryIndex, setSelectedCategoryIndex]= React.useState( 0,);
    const categoryList = ['Dogs For Sale', 'Upcoming Schedule' ]
    return (
       <View style={style.categoryListContainer}> 
    {categoryList.map(( category , index) =>( 
      <Pressable key={index} onPress={() => setSelectedCategoryIndex(index)}>
        <Text 
        style={[
      style.categoryListText,
       (index == selectedCategoryIndex && style.activeCategoryListText),
    ]}>
      {category}
      </Text>
      </Pressable>
    
    ))}
    </View>
    );
  };
  const ListOptions =() => {
    const optionsList = [
      {title: 'Pets Profile', img: require('../../assets/dog1.jpg')},
      {title: 'Stud Service', img: require('../../assets/dog2.jpg')},
    ];
  return (
  <View style={style.optionListContainer}>
    {optionsList.map((option, index ) => (
   <View style={style.optionCard} key={index}>
     <Image source={option.img} style={style.optionCardImage} />
     <Text style={{marginTop:10, fontSize: 18, fontWeight: 'bold'}}>
       {option.title}
     </Text>
   </View>
    ))}
  </View>
    );
  };

  const Card =({dog}) => {
 return (
   <Pressable onPress={() => navigation.navigate ('DetailsScreen', dog)}> 
      <View style={style.card}>
   <Image source={dog.image} style={style.cardImage}/>
   <View
  style={{
   flexDirection: 'row',
   justifyContent: 'space-between',
   marginTop: 10,
   }}>
     <Text style={{font: 16, fontWeight: 'bold'}}>{dog.breed}</Text>
     <Text style={{font: 16, fontWeight: 'bold', color:COLORS.blue}}>
       ₱9000
       </Text>
   </View>
   <Text style={{color:COLORS.grey, fontSize: 14, marginTop: 5}}>
     {dog.description}
   </Text>
   <View style={{marginTop: 10, flexDirection: 'row'}}>
     <View style= {style.cake}>
       <Icon name="cake" size={18} />
       <Text style={style.cakeText}>6 Months</Text>
     </View>
   </View>
   </View>
   </Pressable>
   
   );
  };
  return (
  <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
    <StatusBar 
    translucent ={false} 
    backgroundColor={COLORS.white} 
    barStyle= 'dark-content'
     />
     <View style={style.header}> 
     <View> 
        <Icon name= "sort" size={30} color={COLORS.dark}/>
        </View>
        <Icon name= "notifications" size={30} color={COLORS.dark}/>
     </View>
     <ScrollView>
       <View style={{
         flexDirection: 'row',
         justifyContent: 'space-between',
         paddingHorizontal: 20,
      }}>
        <View style={style.searchInputContainer}>
          <Icon name="search" size={25} color={COLORS.grey} />
          <TextInput placeholder="Search"/>
        </View>
      </View>
      <ListOptions/>
      <ListCategories/>
      <FlatList 
      contentContainerStyle= {{paddingLeft: 20, paddingVertical: 20}}
      showsHorizontalScrollIndicator={false}
      horizontal
      data={dogs} 
      renderItem={({item}) =>
       <Card dog={item} /> }/>
     </ScrollView>
     </SafeAreaView>
  );
};
const style = StyleSheet.create ({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  profileImage:{
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  searchInputContainer:{
    height: 50,
    backgroundColor:COLORS.light,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  optionListContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  optionCard:{
    height: 210,
    width:width/ 2 - 30,
    elevation: 15,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    borderRadius: 20,
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  optionCardImage:{
  height: 140,
  borderRadius:10,
  width: '100%',
  },
  categoryListContainer:{
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
  },
  categoryListText:{
   fontSize: 16,
   fontWeight: 'bold',
   paddingBottom: 5,
   color:COLORS.grey,
  },
  activeCategoryListText:{
    color: COLORS.dark,
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
  card:{
    height: 250,
    backgroundColor: COLORS.white,
    elevation: 10,
    width:width -40,
    marginRight: 20,
    padding: 15,
    borderRadius: 20,

  },
  cardImage:{
    width: '100%',
    height: 120,
    borderRadius: 15,
  },
  cake:{
 flexDirection: 'row',
 marginRight: 15,
  },
  CakeText:{
   marginLeft: 5,
   color:COLORS.grey,
  },
});
export default HomeScreen;