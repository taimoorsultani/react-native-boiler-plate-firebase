import {size} from '../sizes/devices';

// Icons Sizes
export const iconSize = {
  small: size(15),
  medium: size(20),
  large: size(25),
  extraLarge: size(30),
  xxLarge: size(40),
  xxxLarge: size(45),
};

// Border radius
export const borderSize = {
  small: size(2),
  medium: size(4),
  large: size(8),
  extraLarge: size(12),
};

// Border radius
export const borderRadius = {
  small: size(2),
  medium: size(4),
  large: size(8),
  extraLarge: size(30),
};

// Line height
export const lineHeight = {
  small: size(9),
  medium: size(12),
  large: size(16),
  extraLarge: size(26),
};

// Padding
export const padding = {
  small: size(9),
  medium: size(12),
  large: size(16),
  extraLarge: size(26),
};

// Margin
export const margin = {
  small: size(9),
  medium: size(12),
  large: size(16),
  extraLarge: size(26),
};

export const inputHeight = {
  small: {
    container: size(35),
    input: size(31),
  },
  medium: {
    container: size(40),
    input: size(36),
  },
  large: {
    container: size(45),
    input: size(41),
  },
  extraLarge: {
    container: size(50),
    input: size(46),
  },
};

export default {
  iconSize,
  borderSize,
  borderRadius,
  lineHeight,
  padding,
  margin,
  inputHeight,
};
