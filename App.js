import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Checklist from './src/components/screens/flap';
import MainPage from './src/components/screens/main';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

export default function App() {
  return (
<NavigationContainer>
      <Stack.Navigator initialRouteName={"main"}>
      <Stack.Screen
          name="main"
          component={MainPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="checklist"
          component={Checklist}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
      {/* <Toast position={"bottom"} bottomOffset={90} /> */}
      {/* SIDEBAR WILL BE ADDED IN THE FUTURE */}
      {/* <Drawer.Navigator>
        <Drawer.Screen name="Home" component={MainPage}  />
        <Drawer.Screen name="Conference" component={Checklist} />
      </Drawer.Navigator> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
