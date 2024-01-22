import Constants from 'expo-constants';

const ENV = {
  API_KEY: 'AIzaSyDHhRQr_NR7l8niRZuduf2zo5YS2zi_Rrw',
};

if (Constants.manifest.releaseChannel === 'production') {
  ENV.API_KEY = 'AIzaSyDHhRQr_NR7l8niRZuduf2zo5YS2zi_Rrw'
}

export default ENV;
