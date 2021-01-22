import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { GlobalStyles } from "./GlobalStyles";
import { Timer } from 'react-native-stopwatch-timer'


const Round2 = ({ navigation,route }) => {

  const [scoreTeamA2, setscoreTeamA2] = useState(0);
  const [scoreTeamB2, setscoreTeamB2] = useState(0);

  const[teamBName, setteamBName] = useState(route.params.teamBName);
  const[teamAName, setteamAName] = useState(route.params.teamAName);
  const [scoreTeamA1, setscoreTeamA1] = useState(route.params.scoreTeamA1);
  const [scoreTeamB1, setscoreTeamB1] = useState(route.params.scoreTeamB1);
  const [timerDuration, setTimerDuration] = useState(route.params.roundTime);



  const increment3ForA = () => {
    var temp = scoreTeamA2 + 3;
    setscoreTeamA2(temp);
  }

  const increment3ForB = () => {
    var temp = scoreTeamB2 + 3;
    setscoreTeamB2(temp);
  }

  const increment2ForA = () => {
    var temp = scoreTeamA2 + 2;
    setscoreTeamA2(temp);
  }

  const increment2ForB = () => {
    var temp = scoreTeamB2 + 2;
    setscoreTeamB2(temp);
  }

  const increment1ForA = () => {
    var temp = scoreTeamA2 + 1;
    setscoreTeamA2(temp);
  }

  const increment1ForB = () => {
    var temp = scoreTeamB2 + 1;
    setscoreTeamB2(temp);
  }

  const resetScore = () => {
    setscoreTeamA2(0)
    setscoreTeamB2(0);
  }

  const [isTimerStart, setIsTimerStart] = useState(false);
  const [resetTimer, setResetTimer] = useState(false);


  return (
    <View style={{ flex: 1 }} >
      <ImageBackground source={require('./asset/backgroundRounds.jpg')} style={{ width: "100%", height: "100%" }}>

        <View style={{ alignSelf: 'center' }} >
          <View style={GlobalStyles.roundNameView}>
            <Text style={GlobalStyles.roundText} >Round 2</Text>
            <Timer
              totalDuration={timerDuration}
              msecs
              //Time Duration
              start={isTimerStart}
              //To start
              reset={resetTimer}
              //To reset
              options={options}
              //options for the styling
              handleFinish={() => {
                alert('Time Over');
              }}
              //can call a function On finish of the time
              getTime={(time) => {
                console.log(time);
              }}
            />
          </View>
        </View>
        <View style={{ height: 10, alignSelf: 'center', justifyContent: 'center' }} />



        <View style={{ flexDirection: 'row', }}>

          <View style={{ flex: 1 }}>
            <TouchableOpacity
              style={GlobalStyles.buttonHome}
              onPress={() => {
                setIsTimerStart(!isTimerStart);
                setResetTimer(false);
              }}>
              <Text style={{ color: 'white' }}>
                {!isTimerStart ? 'START' : 'STOP'}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ flex: 1 }}>

            <TouchableOpacity
              style={GlobalStyles.buttonHome}
              onPress={() => {
                setIsTimerStart(false);
                setResetTimer(true);
              }}>
              <Text style={{ color: 'white' }}>RESET</Text>
            </TouchableOpacity>

          </View>

        </View>


        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: 'column', marginTop: '5%' }} >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ flex: 1, alignItems: 'center' }}><Text >{teamAName}</Text></View>
              <View style={{ flex: 1, alignItems: 'center' }}><Text >{teamBName}</Text></View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ flex: 1, alignItems: 'center' }}><Text style={{ fontSize: 70, fontWeight: 'normal' }}>{scoreTeamA2}</Text></View>
              <View style={{ flex: 1, alignItems: 'center' }}><Text style={{ fontSize: 70, fontWeight: 'normal' }}>{scoreTeamB2}</Text></View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ flex: 1, margin: 16 }}><TouchableOpacity style={GlobalStyles.buttonPoints} onPress={() => increment3ForA()} ><Text style={GlobalStyles.buttonText}>+3 POINTS</Text></TouchableOpacity></View>
              <View style={{ flex: 1, margin: 16 }}><TouchableOpacity style={GlobalStyles.buttonPoints} onPress={() => increment3ForB()} ><Text style={GlobalStyles.buttonText}  >+3 POINTS</Text></TouchableOpacity></View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ flex: 1, margin: 16 }}><TouchableOpacity style={GlobalStyles.buttonPoints} onPress={() => increment2ForA()}  ><Text style={GlobalStyles.buttonText}>+2 POINTS</Text></TouchableOpacity></View>
              <View style={{ flex: 1, margin: 16 }}><TouchableOpacity style={GlobalStyles.buttonPoints} onPress={() => increment2ForB()} ><Text style={GlobalStyles.buttonText}>+2 POINTS</Text></TouchableOpacity></View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ flex: 1, margin: 16 }}><TouchableOpacity style={GlobalStyles.buttonPoints} onPress={() => increment1ForA()}  ><Text style={GlobalStyles.buttonText}>FREE THROW</Text></TouchableOpacity></View>
              <View style={{ flex: 1, margin: 16 }}><TouchableOpacity style={GlobalStyles.buttonPoints} onPress={() => increment1ForB()} ><Text style={GlobalStyles.buttonText}>FREE THROW</Text></TouchableOpacity></View>
            </View>
          </View>
        </View>
        <View style={{ marginBottom: '40%' }}>
          {/* <TouchableOpacity style={GlobalStyles.buttonHome} onPress={() => resetScore()}>
            <Text style={{ color: 'white' }} >Reset Score</Text>
          </TouchableOpacity>
          <View style={{ height: 10 }} /> */}
          <TouchableOpacity style={GlobalStyles.buttonHome} onPress={() => navigation.navigate('Round3',{
            scoreTeamA2: scoreTeamA2,
            scoreTeamB2: scoreTeamB2,
            teamBName: teamBName,
            teamAName: teamAName,
            scoreTeamA1: scoreTeamA1,
            scoreTeamB1: scoreTeamB1,
            timerDuration: timerDuration,
          })}>
            <Text style={{ color: 'white' }} >Round 3</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground >
    </View>
  );
}

const options = {
  container: {
    // marginLeft:20,
    // backgroundColor: '#022a67',
    // padding: 5,
    borderRadius: 5,
    width: 150,
  },
  text: {
    alignSelf: 'center',
    fontSize: 15,
    color: '#000',
    // marginLeft: 7,
  },
};

export default Round2;