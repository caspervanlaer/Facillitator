import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './src/screens/LoginSceen';
import CreateAccountScreen from './src/screens/CreateAccountScreen';
import MainScreen from './src/screens/MainScreen';


const navigator = createSwitchNavigator({
  LoginFlow : createStackNavigator({
    Login: LoginScreen,
    Create: CreateAccountScreen
  }),
  MainFlow : createStackNavigator({
    Main : MainScreen
  })
},{
  initialRouteName: 'LoginFlow',
});

export default createAppContainer(navigator);