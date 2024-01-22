import Constants from 'expo-constants';

const ENV = {
  API_KEY: 'AIzaSyAkcxmA_IlKznZP0cifAEu-u_JLKxXuw6g',
};

if (Constants.manifest.releaseChannel === 'production') {
  ENV.API_KEY = 'AIzaSyAkcxmA_IlKznZP0cifAEu-u_JLKxXuw6g'
}

export default ENV;
