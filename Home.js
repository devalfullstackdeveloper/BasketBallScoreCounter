import * as React from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import  {GlobalStyles}  from "./GlobalStyles";

const Home = ({navigation}) => {

    return(
        <View style={GlobalStyles.mainView} >
            <ImageBackground source={require('./asset/background.jpg')} style={{width:"100%", height:"100%"}} >
            <View style={{flex:1}} />
            <View style={{justifyContent:'center'}} >
            <TouchableOpacity style={GlobalStyles.buttonHome} onPress={()=> navigation.navigate('Team')}>
                <Text style={{color:'white'}} >Play</Text>
            </TouchableOpacity>
            <View style={{height:10}} />
            <TouchableOpacity style={GlobalStyles.buttonHome} onPress={()=> navigation.navigate('Round1')}>
                <Text style={{color:'white'}}>Share</Text>
            </TouchableOpacity>
            <View style={{height:'35%'}}/>
            <Text style={{alignSelf:'center', fontWeight:'bold', fontSize:18}}> Privacy Policy </Text>
            </View>
            </ImageBackground>
        </View>
    );
}

export default Home;