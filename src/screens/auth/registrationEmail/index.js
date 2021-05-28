import React, {useState, useRef} from 'react';
import {View, ScrollView} from 'react-native';
import {useForm} from 'react-hook-form';

import {DarkWallpaper} from '../../../components/wallpaper';
import {ControllerInput} from '../../../components/input';
import Text from '../../../components/text';
import {mainStyles} from '../../../styles';
import Button from '../../../components/button';
import TextClick from '../../../components/textClick';
import {
  LOGIN_VIA_EMAIL,
  LOGIN_VIA_PHONE_NUMBER,
  FORGOT_PASSWORD,
} from '../../../stacks/routes';
import Divider from '../../../components/divider';

const RegistrationViaEmail = props => {
  const {navigation} = props;

  const {
    control,
    handleSubmit,
    formState: {errors},
    watch,
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);

  const firstNameInputRef = useRef(null);
  const lastNameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const passwordConfirmationInputRef = useRef(null);

  const registration = data => {
    console.log('Registration Pressed, Data is: ', data);
  };

  const onBack = () => {
    navigation.pop();
  };

  const loginPhoneNumber = () => {
    navigation.push(LOGIN_VIA_PHONE_NUMBER);
  };

  const troubleLogin = () => {
    navigation.push(FORGOT_PASSWORD);
  };

  const goToLogin = () => {
    navigation.push(LOGIN_VIA_EMAIL);
  };

  return (
    <DarkWallpaper
      isBack
      onBackPress={onBack}
      isHeader
      headerLabel={'Registration via Email'}>
      <ScrollView bounces={false}>
        <View
          style={[
            mainStyles.mainView,
            mainStyles.colReverse,
            mainStyles.extraPadding,
          ]}>
          <View style={[mainStyles.column, mainStyles.centerAligned]}>
            <ControllerInput
              inputRef={firstNameInputRef}
              blurOnSubmit={false}
              editable={!isLoading}
              autoCapitalize={'words'}
              autoCompleteType={'name'}
              textContentType={'name'}
              keyboardType={'default'}
              returnKeyType={'next'}
              control={control}
              defaultValue=""
              inputName="firstName"
              label={'First Name'}
              onSubmitEditing={() => lastNameInputRef.current.focus()}
              validationRules={{
                required: {
                  value: true,
                  message: 'First name is required',
                },
                minLength: {
                  value: 2,
                  message: 'First name is invalid',
                },
              }}
              errors={errors.firstName ? errors.firstName : null}
            />
            <ControllerInput
              inputRef={lastNameInputRef}
              blurOnSubmit={false}
              editable={!isLoading}
              autoCapitalize={'words'}
              autoCompleteType={'name'}
              textContentType={'name'}
              keyboardType={'default'}
              returnKeyType={'next'}
              control={control}
              defaultValue=""
              inputName="lastName"
              label={'Last Name'}
              onSubmitEditing={() => emailInputRef.current.focus()}
              validationRules={{
                required: {
                  value: true,
                  message: 'Last name is required',
                },
                minLength: {
                  value: 2,
                  message: 'Last name is invalid',
                },
              }}
              errors={errors.lastName ? errors.lastName : null}
            />
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
              returnKeyType={'next'}
              secureTextEntry={true}
              control={control}
              defaultValue=""
              inputName="password"
              label={'Password'}
              onSubmitEditing={() =>
                passwordConfirmationInputRef.current.focus()
              }
              validationRules={{
                required: {
                  value: true,
                  message: 'Password required',
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
            <ControllerInput
              inputRef={passwordConfirmationInputRef}
              blurOnSubmit={true}
              editable={!isLoading}
              autoCapitalize={'none'}
              autoCompleteType={'password'}
              textContentType={'password'}
              returnKeyType={'go'}
              secureTextEntry={true}
              control={control}
              defaultValue=""
              inputName="passwordConfirmation"
              label={'Password Confirmation'}
              onSubmitEditing={handleSubmit(registration)}
              validationRules={{
                required: {
                  value: true,
                  message: 'Password Confirmation is required',
                },
                validate: value =>
                  value === watch('password') || 'Password does not match',
              }}
              errors={
                errors.passwordConfirmation ? errors.passwordConfirmation : null
              }
            />
            <Divider value={11} />
            <Button
              label={'REGISTER'}
              onPress={handleSubmit(registration)}
              loading={isLoading}
            />
            <Divider value={10} />
            <TextClick
              medium
              textCenter
              text={'Login via Phone Number'}
              onPress={loginPhoneNumber}
            />
            <Divider value={10} />
            <TextClick
              medium
              textCenter
              text={'Login via Email'}
              onPress={goToLogin}
            />
            <Divider value={10} />
            <TextClick
              medium
              textCenter
              text={'Touble loggining in?'}
              onPress={troubleLogin}
            />
          </View>
          <Divider value={20} />
          <Text medium colorSecondary h1 style={mainStyles.textWhite}>
            My details are
          </Text>
        </View>
      </ScrollView>
    </DarkWallpaper>
  );
};

export default RegistrationViaEmail;
