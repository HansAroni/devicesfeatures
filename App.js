import 'react-native-gesture-handler';
import React from "react";
import * as SplashScreen from 'expo-splash-screen'
import { useFonts, OpenSans_400Regular, OpenSans_700Bold } from "@expo-google-fonts/open-sans";


import { Provider } from "react-redux";
import { store, storePersisted } from "./src/store";

import MainNavigator from "./src/navigation"
import { PersistGate } from "redux-persist/integration/react";


SplashScreen.preventAutoHideAsync();

export default function App() {
  const [Loaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_700Bold
  });
  React.useEffect(() => {
    if (Loaded) {
      SplashScreen.hideAsync();
    }
  }, [Loaded])
  if (!Loaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={storePersisted}>
        <MainNavigator />
      </PersistGate>
    </Provider>
  );
}
