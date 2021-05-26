# React Native Boiler Plate Mobile Application

### React Native Boiler Plate with Firebase

### Application Dependencies

- React version, `17.0.2`
- React-Native version, `0.64.1`

### Basic steps of installation

1. Install [React Native CLI](https://reactnative.dev/docs/environment-setup).
2. Install [VSCODE](https://code.visualstudio.com/download).
3. Install [Prettier](https://prettier.io/) extension, `Prettier` is an opinionated code formatter extension for `VSCODE`. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.
4. Run `yarn install` or `npm install`.
5. (Only if using mac, and need to run on ios)

   1. Inside the project directory, `cd ios`
   2. `pod setup`
   3. `pod install`

6. Run the application:

   1. To run application on real iOS device, run `yarn/npm run ios-device` or `react-native run-ios --device`.
   2. To run application iOS Simulator iPhone 8 Plus, run `yarn/npm run ios-iphone-8` or `react-native run-ios. --simulator='iPhone 8 Plus'`.
   3. To run application iOS Simulator iPhone 11 Pro Max, run `yarn/npm run ios-iphone-11` or `react-native run-ios --simulator='iPhone 11 Pro Max'`.
   4. To run application iOS Simulator iPad Pro (12.9-inch) (4th generation), run `yarn/npm run ios-ipad-pro` or `react-native run-ios --simulator='iPad Pro (12.9-inch) (4th generation)'`.
   5. To run on Android device run `yarn/npm run android`.

7. To export Android APK, run `yarn/npm run android-build` after that `cd android && ./gradlew assembleDebug`.
