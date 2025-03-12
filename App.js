// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './HomeScreen';
import ScanScreen from './ScanScreen';

// Tạo BottomTab chỉ chứa Home (và có thể thêm các tab khác nếu cần)
const Tab = createBottomTabNavigator();
const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'HomeTab') {
            iconName = 'home-outline';
          } else {
            iconName = 'person-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#3399FF',
        tabBarInactiveTintColor: '#aaa',
      })}
    >
      <Tab.Screen name='HomeTab' component={HomeScreen} />
      {/* Các tab khác nếu cần, nhưng không có tab Scan */}
    </Tab.Navigator>
  );
};

// Tạo Stack Navigator để quản lý điều hướng sang ScanScreen khi nhấn "Scan Now"
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Màn hình chính: Bottom Tabs */}
        <Stack.Screen name='MainTabs' component={BottomTabs} />
        {/* Màn hình Scan */}
        <Stack.Screen name='Scan' component={ScanScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
