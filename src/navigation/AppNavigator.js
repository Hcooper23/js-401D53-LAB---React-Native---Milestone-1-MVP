import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../components/HomeScreen';
import SecondScreen from '../components/SecondScreen';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Second: SecondScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default createAppContainer(AppNavigator);
