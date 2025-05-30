import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "../navigation/RootNavigation";

const App = () => {
  return (
      <RootNavigator />
  );
}

export default App;

// import React from 'react';
// import { AuthProvider } from '../context/AuthContext';
// import AppNavigator from '../navigation/AppNavigator';

//   console.log('app');
// const App = () => (
//   <AuthProvider>
//     <AppNavigator />
//   </AuthProvider>
// );

// export default App;