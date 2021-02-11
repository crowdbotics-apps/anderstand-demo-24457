import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile40203938Navigator from '../features/UserProfile40203938/navigator';
import UserProfile41203937Navigator from '../features/UserProfile41203937/navigator';
import UserProfile42203936Navigator from '../features/UserProfile42203936/navigator';
import BlankScreen38203934Navigator from '../features/BlankScreen38203934/navigator';
import Settings203919Navigator from '../features/Settings203919/navigator';
import Settings203897Navigator from '../features/Settings203897/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile40203938: { screen: UserProfile40203938Navigator },
UserProfile41203937: { screen: UserProfile41203937Navigator },
UserProfile42203936: { screen: UserProfile42203936Navigator },
BlankScreen38203934: { screen: BlankScreen38203934Navigator },
Settings203919: { screen: Settings203919Navigator },
Settings203897: { screen: Settings203897Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
