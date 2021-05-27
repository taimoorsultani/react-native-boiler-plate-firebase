import React, {useState, useRef} from 'react';
import {View} from 'react-native';
import {useForm} from 'react-hook-form';

import {DarkWallpaper} from '../../../components/wallpaper';
import {ControllerInput} from '../../../components/input';
import Button from '../../../components/button';
import {mainStyles} from '../../../styles';
import Divider from '../../../components/divider';
import TextClick from '../../../components/textClick';
import {
  FORGOT_PASSWORD,
  REGISTRATION_VIA_EMAIL,
  LOGIN_VIA_PHONE_NUMBER,
} from '../../../stacks/routes';

const LoginViaEmail = props => {
  const {navigation} = props;

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);

  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const onBack = () => {
    navigation.pop();
  };

  const login = data => {
    console.log('Login Pressed, Data is: ', data);
  };

  const loginPhoneNumber = () => {
    navigation.push(LOGIN_VIA_PHONE_NUMBER);
  };

  const newAccount = () => {
    navigation.push(REGISTRATION_VIA_EMAIL);
  };

  const troubleLogin = () => {
    navigation.push(FORGOT_PASSWORD);
  };

  return (
    <DarkWallpaper
      isBack
      onBackPress={onBack}
      isHeader
      headerLabel={'Login via Email'}>
      <View style={mainStyles.alignCenter}>
        <ControllerInput
          inputRef={emailInputRef}
          blurOnSubmit={false}
          editable={!isLoading}
          autoCapitalize={'none'}
          autoCompleteType={'email'}
          textContentType={'emailAddress'}
          keyboardType={'email-address'}
          returnKeyType={'next'}
          control={control}
          defaultValue=""
          inputName="email"
          label={'Email'}
          onSubmitEditing={() => passwordInputRef.current.focus()}
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
        <ControllerInput
          inputRef={passwordInputRef}
          blurOnSubmit={true}
          editable={!isLoading}
          autoCapitalize={'none'}
          autoCompleteType={'password'}
          textContentType={'password'}
          returnKeyType={'go'}
          secureTextEntry={true}
          control={control}
          defaultValue=""
          inputName="password"
          label={'Password'}
          onSubmitEditing={handleSubmit(login)}
          validationRules={{
            required: {
              value: true,
              message: 'Password is required',
            },
            minLength: {
              value: 6,
              message: 'Passward is invalid',
            },
            maxLength: {
              value: 30,
              message: 'Password is invalid',
            },
          }}
          errors={errors.password ? errors.password : null}
        />
        <Divider value={20} />
        <Button
          label={'LOGIN'}
          onPress={handleSubmit(login)}
          loading={isLoading}
        />
        <Divider value={20} />
        <TextClick text={'Login via Phone Number'} onPress={loginPhoneNumber} />
        <Divider value={20} />
        <TextClick text={'Create a new account'} onPress={newAccount} />
        <Divider value={20} />
        <TextClick text={'Touble loggining in?'} onPress={troubleLogin} />
      </View>
    </DarkWallpaper>
  );
};

export default LoginViaEmail;
