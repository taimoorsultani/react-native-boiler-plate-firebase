import {DEVICE_WIDTH} from '../config';

let scale;

if (DEVICE_WIDTH <= 414) {
  // Android smartphones
  scale = DEVICE_WIDTH / 414;
} else if (device.width > 414 && DEVICE_WIDTH <= 768) {
  scale = 1.2;
} else if (DEVICE_WIDTH > 769 && DEVICE_WIDTH <= 834) {
  scale = 1.3;
} else if (DEVICE_WIDTH > 835 && DEVICE_WIDTH <= 1024) {
  scale = 1.4;
} else if (DEVICE_WIDTH > 1025) {
  scale = 1.5;
} else {
  // Android tablets
  scale = 1;
}

module.exports = {
  scale,
  size: function size(pixel) {
    return Math.ceil(pixel * scale);
  },
};
