import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import CountryPicker, {DARK_THEME} from 'react-native-country-picker-modal';
import {TextInput} from 'react-native-paper';

import {styles} from './styles';
import {DarkWallpaper} from '../../../components/wallpaper';
import Text from '../../../components/text';
import TextClick from '../../../components/textClick';
import {mainStyles} from '../../../styles';
import {LOGIN_VIA_EMAIL} from '../../../stacks/routes';
import Button from '../../../components/button';
import Divider from '../../../components/divider';
import {colors} from '../../../config';

const LoginViaPhoneNumber = props => {
  const {navigation} = props;

  const {
    control,
    handleSubmit,
    formState: {isValid},
  } = useForm();

  const [countryCode, setCountryCode] = useState({
    cca2: 'PK',
    callingCode: ['92'],
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    handleSubmit(login)();
  }, []);

  const login = data => {
    console.log('Login Pressed, Data is: ', data);
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
      headerLabel={'Login via Phone Number'}>
      <View
        style={[
          mainStyles.mainView,
          mainStyles.colReverse,
          mainStyles.extraPadding,
        ]}>
        <View style={[mainStyles.column, mainStyles.centerAligned]}>
          <View style={[mainStyles.row, styles.phoneNumberRow]}>
            <CountryPicker
              containerButtonStyle={styles.cca2}
              countryCode={countryCode.cca2}
              theme={DARK_THEME}
              withAlphaFilter={true}
              withCallingCode={true}
              withCountryNameButton={false}
              withCallingCodeButton={true}
              withFlagButton={true}
              withCloseButton={true}
              withFilter={true}
              withFlag={true}
              withModal={true}
              onSelect={value => setCountryCode(value)}
            />
            <View>
              <Controller
                name={'phoneNumber'}
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: 'Phone number is required',
                  },
                  minLength: {
                    value: 6,
                    message: 'Phone number is invalid',
                  },
                  pattern: {
                    value: /^[0-9]+$/,
                    message: 'Phone number is invalid',
                  },
                }}
                render={({field: {onChange, onBlur, value}}) => (
                  <TextInput
                    blurOnSubmit={true}
                    editable={!isLoading}
                    autoCapitalize={'none'}
                    autoCompleteType={'off'}
                    // textContentType={'telephoneNumber'}
                    keyboardType={'phone-pad'}
                    returnKeyType={'go'}
                    onSubmitEditing={handleSubmit(login)}
                    underlineColor={colors.white}
                    label={'Phone Number'}
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={value => onChange(value)}
                    value={value}
                    theme={{
                      colors: {
                        text: colors.white,
                        placeholder: colors.white,
                      },
                    }}
                  />
                )}
              />
            </View>
          </View>
          <Divider value={10} />
          <Button
            disabled={!isValid}
            label={'CONTINUE'}
            onPress={handleSubmit(login)}
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
          My number is
        </Text>
      </View>
    </DarkWallpaper>
  );
};

export default LoginViaPhoneNumber;
