import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import CartScreen from './CartScreen';
import ProfileScreen from './ProfileScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          switch (route.name) {
            case 'Home': iconName = 'home-outline'; break;
            case 'Order': iconName = 'receipt-outline'; break;
            case 'Inbox': iconName = 'chatbubble-outline'; break;
            case 'Profile': iconName = 'person-outline'; break;
          }
          return <Icon name={iconName} size={22} color={color} />;
        },
        headerShown: false,
        tabBarActiveTintColor: '#4B0082',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { height: 60, paddingBottom: 8, paddingTop: 5 }
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Order" component={CartScreen} />
      <Tab.Screen name="Inbox" component={CartScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
