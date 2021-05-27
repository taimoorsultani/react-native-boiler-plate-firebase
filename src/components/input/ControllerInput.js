import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {Controller} from 'react-hook-form';
import {TextInput} from 'react-native-paper';

import {styles} from './styles';
import Text from '../../components/text';
import {colors} from '../../config';

const ControllerInput = props => {
  const {
    inputRef,
    control,
    defaultValue,
    inputName,
    label,
    validationRules,
    errors,
    ...rest
  } = props;

  const getErrorMessage = () => {
    if (!errors) {
      return null;
    }
    if (errors.message) {
      return errors.message;
    }
    if (Array.isArray(errors)) {
      let e = '';
      errors.forEach(err => {
        e =
          e +
          inputName.charAt(0).toUpperCase() +
          inputName.slice(1) +
          ' ' +
          err +
          '\n';
      });
      return e;
    }
    return null;
  };

  const errorMessage = getErrorMessage();

  return (
    <View>
      <Controller
        name={inputName}
        control={control}
        rules={validationRules}
        defaultValue={defaultValue}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            {...rest}
            ref={inputRef}
            underlineColor={colors.white}
            error={errors ? true : false}
            label={label}
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
      {errorMessage && (
        <Text style={styles.errorMessage} medium>
          {errorMessage}
        </Text>
      )}
    </View>
  );
};

ControllerInput.prototype = {
  control: PropTypes.object,
  defaultValue: PropTypes.string,
  inputName: PropTypes.string,
  label: PropTypes.string,
  validationRules: PropTypes.object,
  errors: PropTypes.object,
  inputRef: PropTypes.object,
};

ControllerInput.defaultProps = {
  control: {},
  defaultValue: '',
  inputName: '',
  label: '',
  validationRules: {},
  errors: null,
  inputRef: null,
};

export default ControllerInput;
