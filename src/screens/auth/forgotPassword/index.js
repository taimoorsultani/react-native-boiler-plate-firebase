import React, {useState} from 'react';
import {View} from 'react-native';
import {useForm} from 'react-hook-form';

import {ControllerInput} from '../../../components/input';
import {DarkWallpaper} from '../../../components/wallpaper';
import Text from '../../../components/text';
import TextClick from '../../../components/textClick';
import {mainStyles} from '../../../styles';
import {LOGIN_VIA_EMAIL} from '../../../stacks/routes';
import Button from '../../../components/button';
import Divider from '../../../components/divider';

const ForgotPassword = props => {
  const {navigation} = props;

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);

  const forgotPassword = data => {
    console.log('Forgot Password Pressed, Data is: ', data);
  };

  const onBack = () => {
    navigation.pop();
  };

  const goToLogin = () => {
    navigation.push(LOGIN_VIA_EMAIL);
  };

  return (
    <DarkWallpaper
      isBack
      onBackPress={onBack}
      isHeader
      headerLabel={'Forgot Password'}>
      <View
        style={[
          mainStyles.mainView,
          mainStyles.colReverse,
          mainStyles.extraPadding,
        ]}>
        <View style={[mainStyles.column, mainStyles.centerAligned]}>
          <ControllerInput
            blurOnSubmit={true}
            editable={!isLoading}
            autoCapitalize={'none'}
            autoCompleteType={'email'}
            textContentType={'emailAddress'}
            keyboardType={'email-address'}
            returnKeyType={'go'}
            control={control}
            defaultValue=""
            inputName="email"
            label={'Email'}
            onSubmitEditing={handleSubmit(forgotPassword)}
            validationRules={{
              required: {
                value: true,
                message: 'Email Address is required',
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'Email Address is invalid',
              },
            }}
            errors={errors.email ? errors.email : null}
          />
          <Divider value={10} />
          <Button
            label={'CONTINUE'}
            onPress={handleSubmit(forgotPassword)}
            loading={isLoading}
          />
          <Divider value={10} />
          <TextClick
            text={'LOGIN BY EMAIL'}
            onPress={goToLogin}
            textCenter
            medium
          />
        </View>
        <Divider value={30} />
        <Text medium colorSecondary h1 style={mainStyles.textWhite}>
          My email is
        </Text>
      </View>
    </DarkWallpaper>
  );
};

export default ForgotPassword;
