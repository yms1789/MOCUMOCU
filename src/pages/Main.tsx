import React from 'react';
import {View, Text} from 'react-native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Ing from './Ing';
// import Complete from './Complete';
// const Stack = createNativeStackNavigator();
function Main() {
  return (
    <View>
      <Text>메인화면</Text>
    </View>
    // <Stack.Navigator initialRouteName="Ing">
    //   <Stack.Screen name="Ing" component={Ing} options={{headerShown: false}} />
    //   <Stack.Screen
    //     name="Complete"
    //     component={Complete}
    //     options={{headerShown: false}}
    //   />
    // </Stack.Navigator>
  );
}
export default Main;
