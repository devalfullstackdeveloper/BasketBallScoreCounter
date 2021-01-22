import { StyleSheet } from "react-native";

export  const GlobalStyles = StyleSheet.create({
mainView: {
    flex:1,
    alignItems:'center',
    justifyContent:'center'
},
buttonView:{
    alignSelf:'center'
},
buttonHome: {
    backgroundColor:'#022a67',
    alignSelf:'center',
    width: '40%',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
},
roundNameView:{
    marginTop:10,
     alignSelf:'center',
    alignItems:'center'
},
roundText:{
    fontSize: 30,
},
buttonPoints: {
    backgroundColor:'#022a67' ,
    paddingTop:8,
    paddingBottom:8,
    borderRadius: 10,
},

buttonText:{
    fontSize:14,
    fontWeight:'normal',
    alignSelf:'center',
    color:'#fff'
}

});

