import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './src/screens/LoginSceen';
import CreateAccountScreen from './src/screens/CreateAccountScreen';
import MainScreen from './src/screens/MainScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';


const navigator = createSwitchNavigator({
  LoginFlow : createStackNavigator({
    Login: LoginScreen,
    Create: CreateAccountScreen,
    Forgot: ForgotPasswordScreen
  },{
    defaultNavigationOptions: {
      headerShown: false
    }
  }),
  MainFlow : createStackNavigator({
    Main: MainScreen
  },{
    defaultNavigationOptions: {
      headerShown: false
    }
  })
},{
  initialRouteName: 'LoginFlow',
});

export default createAppContainer(navigator);