import { Image, StyleSheet, Platform, SafeAreaView ,Dimensions,StatusBar,Text, View} from 'react-native';
import SignIn from './SIGNIN/SignIn';
import React from "react";
import {NavigationContainer,useNavigation} from '@react-navigation/native';
import Signinupnavigate from '@/components/navigation/signinupnavigate';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from '@/components/Account/SIGNUP/SignUp';
import Logo from '@/components/Account/SIGNIN/Logo';

const Stack = createNativeStackNavigator();

export default function Account() {
  
  return (
    <SafeAreaView style={styles.SafeAreaViewStyle}>
       <NavigationContainer independent={true}  >
       <Logo/>
       <Signinupnavigate  />
        <Stack.Navigator>
        
          <Stack.Screen name='Signin' component={SignIn} options={{ headerShown:false}}/>
          <Stack.Screen name="Signup" component={SignUp} options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer> 
    
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SafeAreaViewStyle: {
    flex:1,
    backgroundColor: "white",
    
  },
  
});
