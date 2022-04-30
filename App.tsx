import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Settings from './src/pages/Settings';
import Orders from './src/pages/Orders';
import Delivery from './src/pages/Delivery';
import {useState} from 'react';
import SignIn from './src/pages/SignIn';
import SignInOwner from './src/pages/SignInOwner';
import SignUp from './src/pages/SignUp';
import InitScreen from './src/pages/InitScreen';

export type LoggedInParamList = {
  Orders: undefined;
  Settings: undefined;
  Delivery: undefined;
  Complete: {orderId: string};
  // orderId : parameter 칸 => 주문에 고유한 ID가 부여되어 있음 이걸 변수처럼 사용하기 위해서 넣어줌
}; // -> 로그인 했을 때 보이는 페이지들

// 타입을 나눠 놓은 이유 -> 합쳐도 큰 문제는 되지 않지만 화면에 나타내는 조건이 달라서 나눠놓음
//export -> 다른 파일에서 import 가능 => 타입도 다른 파일로 export, import 가능
export type RootStackParamList = {
  SignIn: undefined;
  SignInOwner: undefined;
  SignUp: undefined;
  InitScreen: undefined;
}; // -> 이 타입은 로그인 안 했을 때 보이는 페이지들

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <Tab.Navigator>
          <Tab.Group>
            <Tab.Screen
              name="Orders"
              component={Orders}
              options={{title: '오더 목록'}}
            />
            <Tab.Screen
              name="Delivery"
              component={Delivery}
              options={{headerShown: false}}
            />
            <Tab.Screen
              name="Settings"
              component={Settings}
              options={{title: '내 정보'}}
            />
          </Tab.Group>
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
      )}
    </NavigationContainer>
  );
}

export default App;
