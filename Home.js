import * as React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, Share, Linking, StatusBar } from 'react-native';
import  {GlobalStyles}  from "./GlobalStyles";

const Home = ({navigation}) => {

    const openPrv = () => {
        Linking.openURL(
          `https://elit-blogs.blogspot.com/2021/01/fun-alphabet-and-numbers-2021.html`,
        ).catch((err) => alert('Please check for the App Store'));
      };
    

      let text =
      "Want to Learn alphabets and numbers?\n\nLet's make learning fun..\nDownload Fun Alphabets and Numbers 2021";
    if (Platform.OS === 'android')
      text = text.concat(
        'https://play.google.com/store/apps/details?id=com.fun.alphanum2021',
      );
    else text = text.concat('http://itunes.apple.com/app/id1547972296');

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
                      subject: 'Download Fun Alphabet and Numbers 2021 App Now',
                      title: 'Download Fun Alphabet and Numbers 2021 App Now',
                      message: text,
                      url: 'app://Fun Alphabet and Numbers 2021 ',
                    },
                    {
                      // Android only:
                      dialogTitle: 'Fun Alphabet and Numbers 2021 App',
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