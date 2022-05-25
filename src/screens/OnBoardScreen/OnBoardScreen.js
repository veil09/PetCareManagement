import React from 'react';
import { StyleSheet, SafeAreaView, Image, StatusBar, View, Text } from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import COLORS from '../../consts/colors';
const OnBoardScreen = ({navigation}) => { 
return (
<SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
    <StatusBar translucent backgroundColor={COLORS.tranparent} />
    <Image 
    source= {require('../../assets/onboardImage.jpg')} 
    style={style.image}
    />
    <View style={{paddingHorizontal: 20, paddingTop: 20}}>
        <View>
            <Text style={style.title}>Get an Experienced</Text>
            <Text style={style.title}>Care for your Pet</Text>
        </View>
        <View style={{marginTop: 10}}>
            <Text style={style.textStyle}>
                Your Natural Choice for Your Pet
                </Text>
        </View>
    </View>
    <View style={{flex: 1,justifyContent: 'flex-end', paddingBottom: 40}}>
        <Pressable onPress={() => navigation.navigate("SignIn")}>
        <View style={style.btn}>
            <Text style={{color: COLORS.white}}>Get Started</Text>
            </View>
        </Pressable>
    </View>
</SafeAreaView>
);
};
 const style = StyleSheet.create ({
  image: {
      height: 420,
      width: '100%',
      borderBottomLeftRadius: 100,
  },
  indicatorContainer:{
      height:20,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
  },
  indicator:{
      height: 3,
      width: 30,
      backgroundColor: COLORS.grey,
      marginHorizontal: 5,
      borderRadius: 5,

  },
  indicatorActive:{
      backgroundColor: COLORS.dark,

  },
  title:{
      fontSize: 32,
      fontWeight: 'bold',
  },
  textStyle:{
      fontSize: 16,
      color: COLORS.grey,
  },
  btn:{
      height: 60,
      marginHorizontal: 20,
      backgroundColor: COLORS.dark,
      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center',
  },
});
 export default OnBoardScreen;