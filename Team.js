import  {GlobalStyles}  from "./GlobalStyles";
import React,{ useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground , TextInput} from 'react-native';


const Team = ({navigation}) => {

    const[teamAName, setTeamAName] = useState('');
    const[teamBName, setTeamBName] = useState('');
    const[roundTime, setRoundTime] = useState('');


    return(
       <View style={{height:'100%', width:'100%'}} >
      <ImageBackground source={require('./asset/backgroundRounds.jpg')} style={{ width: "100%", height: "100%" }}>
           <View style={{flexDirection:'column', marginTop:'50%',marginLeft:16,marginRight:16}}>
                <View style={{flexDirection:'row'}}>
                     <View style={{flex:1, alignSelf:'center'}}><Text style={{alignSelf:'center',fontSize:20}}>Enter Team A</Text></View>
                     <View style={{flex:1}}><TextInput style={{height: 50, backgroundColor:'rgba(2, 42, 103, 0.4)', fontSize:20}} onChangeText={(e)=>{
                        //  console.log(e);
                         setTeamAName(e);
                     }} /></View>
                </View>
                <View style={{height:16}} />
                <View style={{flexDirection:'row'}}>
                     <View style={{flex:1, alignSelf:'center'}}><Text style={{alignSelf:'center',fontSize:20}}>Enter Team B</Text></View>
                     <View style={{flex:1}}><TextInput style={{height: 50,backgroundColor:'rgba(2, 42, 103, 0.4)', fontSize:20}} onChangeText={(e)=>{
                         setTeamBName(e);
                     }}  /></View>
                </View>
                <View style={{height:16}} />
                <View style={{flexDirection:'row'}}>
                     <View style={{flex:1, alignSelf:'center'}}><Text style={{alignSelf:'center',fontSize:20}}>Time for round(min)</Text></View>
                     <View style={{flex:1}}><TextInput keyboardType="number-pad" style={{height: 50,backgroundColor:'rgba(2, 42, 103, 0.4)', fontSize:20}} onChangeText={(e)=>{
                         setRoundTime(e);
                     }}  /></View>
                </View>
                <View style={{height:20}} />
                <TouchableOpacity onPress={()=>navigation.navigate('Round1', {
                    TeamAName: teamAName,
                    TeamBName: teamBName,
                    roundTime: roundTime,
                })} style={GlobalStyles.buttonHome} ><Text style={{color:'white'}} >Round1</Text></TouchableOpacity>
            </View>
       </ImageBackground>
        </View>    
    );
}

export default Team;

