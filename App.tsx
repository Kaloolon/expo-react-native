import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LandingPage from './src/containers/landingpage';
import Account from './src/containers/account';

const MainNavigator = createStackNavigator({
  Home: {screen: LandingPage},
  Account: {screen: Account}
});

const App = createAppContainer(MainNavigator);

export default App;