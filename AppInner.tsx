import * as React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Settings from './src/pages/Settings';
import Orders from './src/pages/Orders';
import Main from './src/pages/Main';
import SignIn from './src/pages/SignIn';
import SignInOwner from './src/pages/SignInOwner';
import SignUp from './src/pages/SignUp';
import InitScreen from './src/pages/InitScreen';
import {useSelector} from 'react-redux';
import {RootState} from './src/store/reducer';
// export type LoggedInParamList = {
//   Orders: undefined;
//   Settings: undefined;
//   Delivery: undefined;
//   Complete: {orderId: string};
// };

// export type RootStackParamList = {
//   SignIn: undefined;
//   SignUp: undefined;
// };

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
function AppInner() {
  const isLoggedIn = useSelector((state: RootState) => !!state.user.email);
  return isLoggedIn ? (
    <Tab.Navigator initialRouteName="메인">
      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{title: '오더 목록'}}
      />
      <Tab.Screen name="메인" component={Main} options={{headerShown: false}} />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{title: '내 정보'}}
      />
    </Tab.Navigator>
  ) : (
    <Stack.Navigator>
      <Stack.Screen
        name="InitScreen"
        component={InitScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignInOwner"
        component={SignInOwner}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
export default AppInner;
