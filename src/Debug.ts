import { NativeModules } from 'react-native';

const RNAdMobDebugModule = NativeModules.RNGoogleMobileAdsDebugModule;

export const Debug = {
  openDebugMenu(adUnit: string) {
    RNAdMobDebugModule.openDebugMenu(adUnit);
  },
};
