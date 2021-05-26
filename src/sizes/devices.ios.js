import {DEVICE_WIDTH} from '../config';

let calculatedScale;

switch (DEVICE_WIDTH) {
  // iPhone 4, 4S, 5, 5S
  case 320:
    calculatedScale = 0.77;
    break;
  // iPhone 6, 6S
  case 375:
    calculatedScale = 0.902;
    break;
  // iPhone 6 plus, 6S plus
  case 414:
    calculatedScale = 1;
    break;
  // iPad 9.7 Inches
  case 768:
    calculatedScale = 1.2;
    break;
  // iPad 11 Inches
  case 834:
    calculatedScale = 1.3;
    break;
  // iPad 12.9 Inches
  case 1024:
    calculatedScale = 1.4;
    break;
  // iPad 10.5 Inches
  case 1112:
    calculatedScale = 1.5;
    break;
  default:
    calculatedScale = 1;
}

export const scale = calculatedScale;
export const size = pixel => Math.ceil(pixel * calculatedScale);
