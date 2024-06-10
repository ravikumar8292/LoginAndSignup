import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';
import Background from '../Background';
import {darkgreen} from '../Constant';
import Btn from '../Btn';
import {Formik} from 'formik';
import * as Yup from 'yup';

// Validation schema
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string().required('Password is required'),
});

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
        <Text
          style={{
            color: 'gray',
            fontSize: 15,
            fontWeight: 'bold',
            marginBottom: 20,
          }}>
          Login to your account
        </Text>

        <Formik
          initialValues={{email: '', password: ''}}
          validationSchema={validationSchema}
          onSubmit={values => console.warn(values)}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View>
              <TextInput
                placeholder="Email / Username"
                keyboardType="email-address"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                style={{
                  borderRadius: 100,
                  color: darkgreen,
                  paddingLeft: 20,
                  paddingRight:5,
                  width: 320,
                  backgroundColor:'rgb(220,220,220)',
                  marginVertical:12,
                  fontSize:17
                }}
              />
              {touched.email && errors.email && (
                <Text style={{color:'red', marginBottom:10}}>{errors.email}</Text>
              )}

              <TextInput
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                style={{
                  borderRadius: 100,
                  color: darkgreen,
                  paddingLeft: 20,
                  paddingRight:5,
                  width: 320,
                  backgroundColor:'rgb(220,220,220)',
                  marginVertical:12,
                  fontSize:17
                }}
              />
              {touched.password && errors.password && (
                <Text style={{color:'red', marginBottom:10}}>{errors.password}</Text>
              )}

              <View
                style={{
                  alignItems: 'flex-end',
                  width: 320,
                  paddingRight: 16,
                  marginBottom: 20,
                }}>
                <Text
                  style={{color: darkgreen, fontWeight: 'bold', fontSize: 16}}>
                  Forget Password?
                </Text>
              </View>

              <Btn
                textColor="white"
                bgcolor={darkgreen}
                btnlabel="Login"
                Press={handleSubmit}
                // onPress={alert('Logged In')} // handleSubmit is sufficient to handle form submission
              />
            </View>
          )}
        </Formik>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 16, fontWeight: 'bold'}}>
            Don't have an account ?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text
              style={{
                color: darkgreen,
                fontWeight: 'bold',
                fontSize: 16,
                marginLeft: 5,
              }}>
              Signup
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Background>
  );
};

export default LoginScreen;
