import * as React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Share, Linking, StatusBar } from 'react-native';
import  {GlobalStyles}  from "./GlobalStyles";

const Home = ({navigation}) => {

    const openPrv = () => {
        Linking.openURL(
          `https://privacypolicybyabc.blogspot.com/2020/03/jkd-softsolutions.html`,
        ).catch((err) => alert('Please check for the App Store'));
      };
    

      let text =
      "Want to Make Basketball counting easy?\n\n Download Easy Basketball Scorer";
    if (Platform.OS === 'android')
      text = text.concat(
        'https://play.google.com/store/apps/details?id=com.basketballscorecounter',
      );
    else text = text.concat('http://itunes.apple.com/app/id1550571910');

    return(
        <View style={GlobalStyles.mainView} >
            <ImageBackground source={require('./asset/background.jpg')} style={{width:"100%", height:"100%"}} >
            <View style={{flex:1}} />
            <View style={{justifyContent:'center'}} >
            <TouchableOpacity style={GlobalStyles.buttonHome} onPress={()=> navigation.navigate('Team')}>
                <Text style={{color:'white'}} >Play</Text>
            </TouchableOpacity>
            <View style={{height:10}} />
            <TouchableOpacity style={GlobalStyles.buttonHome}
            onPress={()=>
                Share.share(
                    {
                      subject: 'Download Easy Basketball Scorer',
                      title: 'Download Easy Basketball Scorer',
                      message: text,
                      url: 'app://Download Easy Basketball Scorer ',
                    },
                    {
                      // Android only:
                      dialogTitle: 'Download Easy Basketball Scorer',
                      // iOS only:
                      excludedActivityTypes: [],
                    },
                  )
                    }>
                <Text style={{color:'white'}}>Share</Text>
            </TouchableOpacity>
            <View style={{height:'35%'}}/>
            <TouchableOpacity onPress={openPrv}>
            <Text style={{alignSelf:'center', fontWeight:'bold', fontSize:18}}> Privacy Policy </Text>
            </TouchableOpacity>
            </View>
            </ImageBackground>
        </View>
    );
}

export default Home;