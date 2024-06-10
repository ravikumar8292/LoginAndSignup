import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Background from '../Background';
import {darkgreen} from '../Constant';
import Field from '../Field';
import Btn from '../Btn';

const LoginScreen = ({navigation}) => {
  return (
    <Background>
      <View style={{alignItems: 'center', width: 360}}>
        <Text
          style={{
            color: 'white',
            fontSize: 64,
            fontWeight: 'bold',
            marginVertical: 10,
          }}>
          Login
        </Text>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          height: 700,
          width: 360,
          borderTopLeftRadius: 130,
          paddingTop: 100,
          alignItems: 'center',
          
        }}>
        <Text style={{fontSize: 40, color: darkgreen, fontWeight: 'bold'}}>
          Welcome Back
        </Text>
        <Text style={{color:'gray', fontSize:15, fontWeight:'bold',marginBottom:20}}>
          Login to your account
        </Text>

        <Field placeholder="Email / Username" keyboardType={"email-address"}/>
        <Field placeholder="Password" secureTextEntry={true}/>
        
        <View style={{alignItems:'flex-end', width:'80%', paddingRight:16,marginBottom:120}}>
          <Text style={{color:darkgreen, fontWeight:'bold', fontSize:16}}>
            Forget Password ?
          </Text>
        </View>
        <Btn textColor='white' bgcolor={darkgreen} btnlabel='Login' Press={()=> alert("Logged In")}/>
        <View style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
          <Text style={{fontSize:16,fontWeight:'bold'}}>Don't have an account ?</Text>
          <TouchableOpacity onPress={()=> navigation.navigate("Signup")}>
            <Text style={{color:darkgreen, fontWeight:'bold',fontSize:16, marginLeft:5}}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Background>
  );
};

export default LoginScreen;
