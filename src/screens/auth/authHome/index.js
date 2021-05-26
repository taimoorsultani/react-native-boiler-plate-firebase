import React, {useState} from 'react';
import {View} from 'react-native';
import {Switch} from 'react-native-paper';

import {DarkWallpaper} from '../../../components/wallpaper';
import Text from '../../../components/text';
import Button from '../../../components/button';
import {mainStyles} from '../../../styles';
import {authHomeStyles} from './styles';
import {
  LOGIN_VIA_EMAIL,
  LOGIN_VIA_MOBILE,
  REGISTRATION_VIA_EMAIL,
  FORGOT_PASSWORD,
} from '../../../stacks/routes';

const AuthHome = props => {
  const {navigation} = props;

  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const onLoginViaEmail = () => {
    navigation.navigate(LOGIN_VIA_EMAIL);
  };

  const onLoginViaMobile = () => {
    navigation.push(LOGIN_VIA_MOBILE);
  };

  const onRegistrationViaEmail = () => {
    navigation.push(REGISTRATION_VIA_EMAIL);
  };

  const onForgotPassword = () => {
    navigation.push(FORGOT_PASSWORD);
  };

  const onFacebookLogin = () => {};

  const onGoogleLogin = () => {};

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <DarkWallpaper>
      <View style={mainStyles.contentCenter}>
        <Text h2 medium textCenter style={mainStyles.textWhite}>
          React Native Boiler Plate with Firebase
        </Text>
        <Button label={'LOGIN via Email'} onPress={onLoginViaEmail} />
        <Button
          outline
          label={'LOGIN via Phone Number'}
          onPress={onLoginViaMobile}
        />
        <Button
          label={'REGISTRATION via Email'}
          onPress={onRegistrationViaEmail}
        />
        <Button outline label={'Forgot Password?'} onPress={onForgotPassword} />
        <Button label={'LOGIN via Facebook'} onPress={onFacebookLogin} />
        <Button outline label={'LOGIN via Google'} onPress={onGoogleLogin} />
        <View style={[mainStyles.row, authHomeStyles.darkModeContainer]}>
          <View style={authHomeStyles.textContainer}>
            <Text medium style={mainStyles.textWhite}>
              Dark Mode
            </Text>
          </View>
          <View style={authHomeStyles.switchContainer}>
            <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
          </View>
        </View>
      </View>
    </DarkWallpaper>
  );
};

export default AuthHome;
