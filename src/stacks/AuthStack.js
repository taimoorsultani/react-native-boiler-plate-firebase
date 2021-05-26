import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {
  AUTH_HOME,
  LOGIN_VIA_EMAIL,
  LOGIN_VIA_MOBILE,
  REGISTRATION_VIA_EMAIL,
  FORGOT_PASSWORD,
} from './routes';
import {
  AuthHome,
  ForgotPassword,
  LoginViaEmail,
  LoginViaMobile,
  RegistrationViaEmail,
} from '../screens/auth';

const Stack = createStackNavigator();

const AuthStack = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        keyboardHandlingEnabled={true}
        screenOptions={({route, navigation}) => ({
          headerShown: false,
          gestureEnabled: false,
        })}>
        <Stack.Screen name={AUTH_HOME} component={AuthHome} />
        <Stack.Screen name={LOGIN_VIA_EMAIL} component={LoginViaEmail} />
        <Stack.Screen name={LOGIN_VIA_MOBILE} component={LoginViaMobile} />
        <Stack.Screen
          name={REGISTRATION_VIA_EMAIL}
          component={RegistrationViaEmail}
        />
        <Stack.Screen name={FORGOT_PASSWORD} component={ForgotPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStack;
