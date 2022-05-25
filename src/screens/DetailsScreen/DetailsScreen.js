import React from 'react';
import { SafeAreaView, StyleSheet, View ,Text, Image,ImageBackground, ScrollView, FlatList, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
const {width} = Dimensions.get ('screen');

const DetailsScreen =({ navigation, route}) => {
    const dog = route.params;
     const DogImage =({image}) => {
         return <Image source={image} style={style.dogImage} />;
     };
    return (
    <SafeAreaView style= {{flex:1 , backgroundColor: COLORS.white}}>
        <ScrollView>
        <View style={style.backgroundImageContainer}> 
        <ImageBackground 
        style={style.backgroundImage} 
        source={dog.image}>
            <View style={style.header}>
                <View style={style.headerBtn}>
                    <Icon 
                    name="arrow-back-ios" 
                    size={20}
                    onPress={navigation.goBack} 
                    />
                </View>
                <View style={style.headerBtn}>
                    <Icon name ="favorite" size={20} color={COLORS.red}/>

                     </View>
                 </View>
        </ImageBackground>
        <View style={style.MorePhoto}>
             <Text style={{color:COLORS.white}}>More Photo</Text>
         </View>
        </View>
        <View style={style.DetailsContainer}>
            <View 
            style={{flexDirection: 'row',
             justifyContent:'space-between'
        }}> 
        <Text style={{fontSize: 20, fontWeight: 'bold'}}> 
        {dog.breed}
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={style.gender}>
                <Text style={{color:COLORS.white}}>M</Text>
            </View>
            <Text style= {{fontSize: 13, marginLeft: 5}}>Male</Text>
        </View>
        </View>
        <Text style={{ fontSize: 16,color:COLORS.grey}}>
            {dog.description}
            </Text>
            <View style={{marginTop: 10, flexDirection: 'row'}}>
     <View style= {style.cake}>
       <Icon name="cake" size={18} />
       <Text style={style.cakeText}>6 Months</Text>
     </View>
        </View>
        <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
         data={dog.photos}
         renderItem={({item})=> <DogImage image={item} />}
         />
         <View style={style.footer}>
             <View>
                 <Text style={{color: COLORS.blue , fontWeight: 'bold', fontSize: 18}}> 
                 ₱ 9000
                  </Text>
                  <Text style={{color: COLORS.grey , fontWeight: 'bold', fontSize: 12}}> 
                  Total Price
                  </Text>
             </View>
             <View style={style.paymentBtn}>
                 <Text style={{color: COLORS.white}}> Payment </Text> 
          </View>
         </View>
        </View>
        </ScrollView>
    </SafeAreaView>
    );
};
const style = StyleSheet.create ({
   backgroundImageContainer : {
    elevation: 20,
    marginHorizontal: 20,
    marginTop: 20,
    alignItems: 'center',
    height: 350,
   },
   backgroundImage:{
   height: '100%',
   width: '100%',
   borderRadius: 20,
   overflow: 'hidden',
   },
   header:{
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
   },
   headerBtn:{
       height: 50,
       width: 50,
       backgroundColor: COLORS.white,
       borderRadius: 5,
       justifyContent: 'center',
       alignItems: 'center',
   },
   MorePhoto :{
       top : -20,
       width: 120,
       backgroundColor: COLORS.dark,
       paddingHorizontal: 20,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
   },
   DetailsContainer:{
   flex: 1,
   paddingHorizontal: 20,
   marginTop: 40,
   },
   gender:{
    height: 30,
    width: 35,
    backgroundColor: COLORS.blue,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
   },
   cake:{
    flexDirection: 'row',
    marginRight: 15,
     },
     CakeText:{
      marginLeft: 5,
      color:COLORS.grey,
     },
     dogImage:{
         width: width /3 -20,
         height: 80,
         marginRight: 10,
         borderRadius: 10,
     },
     footer:{
        height: 70,
        backgroundColor: COLORS.light,
        borderRadius: 10,
        paddingHorizontal: 20,
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
     },
     paymentBtn:{
         height: 50,
         justifyContent: 'center',
         alignItems: 'center',
         backgroundColor: COLORS.dark,
         borderRadius: 10,
         paddingHorizontal: 20,
     },
});
export default DetailsScreen;