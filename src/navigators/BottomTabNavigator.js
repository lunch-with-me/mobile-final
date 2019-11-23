import { createBottomTabNavigator } from 'react-navigation';
import Profiles from '../screens/AppStack/Drawer/BottomTabs/Profiles';
import Likes from '../screens/AppStack/Drawer/BottomTabs/Likes';
//import Notifications from '../screens/AppStack/Drawer/BottomTabs/Notifications';


export const BottomTabNavigator = createBottomTabNavigator(
    {
        Profiles: Profiles,
        Likes: Likes,
        
    },
    {
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: '#2b2d2f',
          },
    }
);