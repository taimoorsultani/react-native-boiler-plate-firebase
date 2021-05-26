import React, {useState} from 'react';
import {View} from 'react-native';
import {useForm} from 'react-hook-form';

import {DarkWallpaper} from '../../../components/wallpaper';
import {ControllerInput} from '../../../components/input';
import Button from '../../../components/button';
import {mainStyles} from '../../../styles';

const LoginViaEmail = props => {
  const {navigation} = props;

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);

  const onBack = () => {
    navigation.pop();
  };

  const login = data => {
    console.log('Login Pressed, Data is: ', data);
  };

  return (
    <DarkWallpaper
      isBack
      onBackPress={onBack}
      isHeader
      headerLabel={'Login via Email'}>
      <View style={mainStyles.contentCenter}>
        <ControllerInput
          placeholder={'Email'}
          autoCapitalize={'none'}
          autoCompleteType={'email'}
          textContentType={'emailAddress'}
          keyboardType={'email-address'}
          control={control}
          inputName="email"
          label={'Email'}
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
          defaultValue=""
          errors={errors.email ? errors.email : null}
          editable={!isLoading}
        />

        <ControllerInput
          placeholder={'Password'}
          autoCapitalize={'none'}
          autoCompleteType={'password'}
          textContentType={'password'}
          secureTextEntry={true}
          control={control}
          inputName="password"
          label={'Password'}
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
          defaultValue=""
          errors={errors.password ? errors.password : null}
          editable={!isLoading}
        />

        <Button
          label={'LOGIN'}
          onPress={handleSubmit(login)}
          loading={isLoading}
        />
      </View>
    </DarkWallpaper>
  );
};

export default LoginViaEmail;
