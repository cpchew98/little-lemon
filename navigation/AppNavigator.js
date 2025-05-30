import React from 'react';
import { View } from "react-native";
import AuthNavigator from './AuthNavigator';
import DashboardNavigator from './DashboardNavigator';
import { useAuth } from '../context/AuthContext';

const AppNavigator = () => {
  const { isAuthenticated } = useAuth();

console.log('appnav');
  return (
    <View>
      {isAuthenticated ? <DashboardNavigator /> : <AuthNavigator />}
    </View>
  );
};

export default AppNavigator;