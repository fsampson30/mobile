import React from "react";
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {} from 'react-native-gesture-handler'
import Landing from "../pages/Landing";

const {Navigator, Screen} = createStackNavigator()

function AppStack(){
    return(
        <NavigationContainer>
            <Navigator>
                <Screen name="Lading" component={Landing}></Screen>
            </Navigator>
        </NavigationContainer>
    )


}

export default AppStack;

