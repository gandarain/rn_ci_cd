import React from 'react';
import {Icon} from 'native-base';
import HomeScreen from '../views/homeScreen';
import ProfileScreen from '../views/profileScreen';
import SettingScreen from '../views/settingScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'account' : 'account';
            } else if (route.name === 'Setting') {
              iconName = focused ? 'cog-outline' : 'cog-outline';
            }
            return (
              <Icon
                type="MaterialCommunityIcons"
                name={iconName}
                style={{color: color, fontSize: size}}
              />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Setting" component={SettingScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
