import React from "react";
import Main from "./Components/Main";
import AlarmPage from "./Components/AlarmPage";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";

const Stack = createStackNavigator();

export default function Navigate() {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name='Main'
                component={Main}
                options={{title: 'Все будильники' ,headerStyle: { backgroundColor: '#fb7d4d'}, headerTitleAlign: 'center'}}

                />
            <Stack.Screen
                name='AlarmPage'
                component={AlarmPage}
                options={{title: 'Будильник', headerStyle: { backgroundColor: '#fb7d4d'}}}
            />
        </Stack.Navigator>
    </NavigationContainer>;

}