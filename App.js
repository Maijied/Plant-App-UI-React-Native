import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer, DefaultTheme} from "@react-navigation/native";

// Screens
import {Home} from "./screens/";
// Tabs
import Tabs from "./navigation/tabs"


const Stack  =  createStackNavigator();

const App = () =>{
  return(
    <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName={"Home"}
        >
            <Stack.Screen name="Home" component={Tabs}  />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default () => {
    return <App />;
}
