import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Background from '../Background';
import {darkgreen} from '../Constant';
import Field from '../Field';
import Btn from '../Btn';


const SignUpScreen = ({navigation}) => {
  return (
    <Background>
      <View style={{alignItems: 'center', width: 360}}>
        <Text
          style={{
            color: 'white',
            fontSize: 64,
            fontWeight: 'bold',
            marginTop:10
          }}>
          Register
        </Text>
        <Text style={{color:'white', fontSize:15, fontWeight:'bold',marginBottom: 10}}>Create New Account</Text>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          height: 700,
          width: 360,
          borderTopLeftRadius: 130,
          paddingTop: 30,
          alignItems: 'center',
          
        }}>
        

        <Field placeholder="First Name" />
        <Field placeholder="Last Name" />
        <Field placeholder="Email / Username" keyboardType={"email-address"}/>
        <Field placeholder="Password" secureTextEntry={true}/>
        <Field placeholder="Confirm Password" secureTextEntry={true}/>
        
        <View style={{display:'flex',flexDirection:'row', width:'90%'}}>
          <Text style={{fontWeight:'bold',fontSize:13}}>
            By signing in, you agree to our
          </Text>
          <Text style={{color:darkgreen, fontWeight:'bold', fontSize:13}}>Terms & Conditions</Text>
        </View>
        <View style={{display:'flex',flexDirection:'row', width:'90%', marginBottom:14}}>
          <Text style={{fontWeight:'bold',fontSize:13}}>
            and
          </Text>
          <Text style={{color:darkgreen, fontWeight:'bold', fontSize:13}}>Privacy Policy</Text>
        </View>
        <Btn textColor='white' bgcolor={darkgreen} btnlabel='Signup' Press={()=> {alert("Register successfull")
          navigation.navigate("Login")}}/>
        <View style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
          <Text style={{fontSize:16,fontWeight:'bold'}}>Already have an account ?</Text>
          <TouchableOpacity onPress={()=> navigation.navigate("Login")}>
            <Text style={{color:darkgreen, fontWeight:'bold',fontSize:16, marginLeft:5}}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Background>
  )
}

export default SignUpScreen