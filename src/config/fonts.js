import {size} from '../sizes/devices';

// Font family
const light = 'Poppins-Light';
const regular = 'Poppins-Regular';
const medium = 'Poppins-Medium';
const bold = 'Poppins-SemiBold';

// Export font size
export const sizes = {
  base: size(14),
  h1: size(30),
  h2: size(24),
  h3: size(20),
  h4: size(16),
  h5: size(14),
  h6: size(12),
};

// Export lineheights
export const lineHeights = {
  base: size(20),
  h1: size(43),
  h2: size(33),
  h3: size(28),
  h4: size(23),
  h5: size(20),
  h6: size(17),
};

// Export font family
export default {
  light: {
    fontFamily: light,
  },
  regular: {
    fontFamily: regular,
  },

  medium: {
    fontFamily: medium,
  },

  bold: {
    fontFamily: bold,
    fontWeight: 'bold',
  },

  android: {
    regular: {
      fontFamily: 'sans-serif',
    },
    light: {
      fontFamily: 'sans-serif-light',
    },
    condensed: {
      fontFamily: 'sans-serif-condensed',
    },
    condensed_light: {
      fontFamily: 'sans-serif-condensed',
      fontWeight: 'light',
    },
    black: {
      fontFamily: 'sans-serif',
      fontWeight: 'bold',
    },
    thin: {
      fontFamily: 'sans-serif-thin',
    },
    medium: {
      fontFamily: 'sans-serif-medium',
    },
    bold: {
      fontFamily: 'sans-serif',
      fontWeight: 'bold',
    },
  },
  default: {},
};
