import React,{ useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import  {GlobalStyles}  from "./GlobalStyles";


const Score = ({navigation,route}) => {

    const [scoreTeamA1, setscoreTeamA1] = useState(route.params.scoreTeamA1);
    const [scoreTeamB1, setscoreTeamB1] = useState(route.params.scoreTeamB1);
    const [scoreTeamA2, setscoreTeamA2] =  useState(route.params.scoreTeamA2);
    const [scoreTeamB2, setscoreTeamB2] = useState(route.params.scoreTeamB2);   
    const[scoreTeamA3, setscoreTeamA3] = useState(route.params.scoreTeamA3);
    const[scoreTeamB3, setscoreTeamB3] = useState(route.params.scoreTeamB3);
    const[teamBName, setteamBName] = useState(route.params.teamBName);
    const[teamAName, setteamAName] = useState(route.params.teamAName);
    const[scoreTeamA4, setscoreTeamA4] = useState(route.params.scoreTeamA4);
    const[scoreTeamB4, setscoreTeamB4] = useState(route.params.scoreTeamB4);
    const[totalScoreA, setTotalScoreA] = useState(route.params.scoreTeamA1+route.params.scoreTeamA2+route.params.scoreTeamA3+route.params.scoreTeamA4);
    const[totalScoreB, setTotalScore] = useState(route.params.scoreTeamB1+route.params.scoreTeamB2+route.params.scoreTeamB3+route.params.scoreTeamB4);





    return(
        <View style={{flex:1}} >
        <ImageBackground source={require('./asset/backgroundRounds.jpg')} style={{width:"100%", height:"100%"}}>
            <View style={GlobalStyles.roundNameView}>
          <Text style={GlobalStyles.roundText} >Score Card</Text>
        </View>
            <View style={{flex:1}}>
            <View style={{flexDirection:'column', marginTop:'5%'}} >
            <View style={{flexDirection:'row', alignItems:'center'}}>
               <View style={{flex:1,alignItems:'center'}}><Text >{teamAName}</Text></View>
               <View style={{flex:1,alignItems:'center'}}><Text >{teamBName}</Text></View>
            </View>
            <View style={{flexDirection:'row', alignItems:'center'}}>
               <View style={{flex:1,alignItems:'center'}}><Text style={{fontSize:70, fontWeight:'normal'}}>{totalScoreA}</Text></View>
               <View style={{flex:1,alignItems:'center'}}><Text style={{fontSize:70, fontWeight:'normal'}}>{totalScoreB}</Text></View>
            </View>
            <View style={{flexDirection:'row', alignItems:'center'}}>
               <View style={{flex:1,margin:16}}><Text style={{color:'red', fontSize:20,alignSelf:'center'}}>Round 1: {scoreTeamA1}</Text></View>
               <View style={{flex:1, margin:16}}><Text style={{color:'red', fontSize:20,alignSelf:'center'}}>Round 1: {scoreTeamB1}</Text></View>
            </View>
            <View style={{flexDirection:'row', alignItems:'center'}}>
               <View style={{flex:1,margin:16}}><Text style={{color:'red', fontSize:20,alignSelf:'center'}}>Round 2: {scoreTeamA2}</Text></View>
               <View style={{flex:1, margin:16}}><Text style={{color:'red', fontSize:20,alignSelf:'center'}}>Round 2: {scoreTeamB2}</Text></View>
            </View>
            <View style={{flexDirection:'row', alignItems:'center'}}>
               <View style={{flex:1,margin:16}}><Text style={{color:'red', fontSize:20,alignSelf:'center'}}>Round 3: {scoreTeamA3}</Text></View>
               <View style={{flex:1, margin:16}}><Text style={{color:'red', fontSize:20,alignSelf:'center'}}>Round 3: {scoreTeamB3}</Text></View>
            </View>
            <View style={{flexDirection:'row', alignItems:'center'}}>
               <View style={{flex:1,margin:16}}><Text style={{color:'red', fontSize:20,alignSelf:'center'}}>Round 4: {scoreTeamA4}</Text></View>
               <View style={{flex:1, margin:16}}><Text style={{color:'red', fontSize:20,alignSelf:'center'}}>Round 4: {scoreTeamB4}</Text></View>
            </View>
            <View style={{ marginTop:'10%'}}>
                <Text style={{fontSize:40, alignSelf:'center' }}>Winner is {totalScoreA>totalScoreB?teamAName:teamBName} </Text> 
            </View>   
        </View>
            </View>
            <View style={{marginBottom:'30%'}}>    
        <View style={{height:10}} />
            <TouchableOpacity  style={GlobalStyles.buttonHome} onPress={()=> navigation.navigate('Team')}>
            <Text style={{color:'white'}} >Play Again</Text>
        </TouchableOpacity>
        </View>
        </ImageBackground >
    </View>
    );
}

export default Score;