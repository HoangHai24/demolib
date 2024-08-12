/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useRef} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Dimensions,
} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

function HomeScreen({navigation}: any) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({navigation}: any) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Stack = createStackNavigator();
const DrawerStack = createDrawerNavigator();
const BottomStack = createBottomTabNavigator();

const deviceWidth = Dimensions.get('window').width;
// Drawer code
function AppDrawerStack() {
  return (
    <DrawerStack.Navigator
      useLegacyImplementation={false}
      drawerType="front"
      hideStatusBar={false}
      drawerStyle={{width: deviceWidth * 0.5, backgroundColor: 'transparent'}}
      drawerContent={props => <DrawerView {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: 'back',
        // swipeEnabled: false,
        drawerStyle: {
          width: deviceWidth * 0.5,
        },
      }}>
      <DrawerStack.Screen name="AppBottomStack" component={AppBottomStack} />
    </DrawerStack.Navigator>
  );
}

function DrawerView() {
  return (
    <View>
      <Text>Drawer View</Text>
    </View>
  );
}

// Bottom Stack Part

function AppBottomStack() {
  return (
    <BottomStack.Navigator>
      <BottomStack.Screen name="BottomScreenOne" component={BottomScreenOne} />
      <BottomStack.Screen name="BottomScreenTwo" component={BottomScreenTwo} />
    </BottomStack.Navigator>
  );
}

function BottomScreenOne() {
  return (
    <View>
      <Text>BottomScreenOne</Text>
    </View>
  );
}

function BottomScreenTwo() {
  return (
    <View>
      <Text>BottomScreenTwo</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AppDrawerStack" component={AppDrawerStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
// const Drawer = createDrawerNavigator();
// function App(): JSX.Element {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Home" component={HomeScreen} />
//         <Drawer.Screen name="Notifications" component={NotificationsScreen} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
