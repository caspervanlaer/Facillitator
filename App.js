import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './src/screens/LoginSceen';
import CreateAccountScreen from './src/screens/CreateAccountScreen';
import MainScreen from './src/screens/MainScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import LanguageSelectionScreen from './src/screens/LanguageSelectionScreen';
import { Provider as LanguageProvider } from './src/context/LanguageContext';
import {setNavigator} from './src/NavigationRef';
import SettingsScreen from './src/screens/SettingsScreen';
import AppInfoScreen from './src/screens/AppInfoScreen';


const navigator = createSwitchNavigator({
  LoginFlow : createStackNavigator({
    Language: LanguageSelectionScreen,
    Login: LoginScreen,
    Create: CreateAccountScreen,
    Forgot: ForgotPasswordScreen
  },{
    defaultNavigationOptions: {
      headerShown: false
    }
  }),
  MainFlow : createStackNavigator({
    Main: MainScreen,
    Settings: SettingsScreen,
    AppInfo: AppInfoScreen
  },{
    defaultNavigationOptions: {
      headerShown: false
    }
  })
},{
  initialRouteName: 'LoginFlow',
});

const App = createAppContainer(navigator);

export default () => {
  return <LanguageProvider>
      <App ref={(navigator) => { setNavigator(navigator)}}/>
    </LanguageProvider>
};