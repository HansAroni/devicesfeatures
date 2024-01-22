import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "../navigation/tab/TabNavigator";
import AuthNavigator from "../navigation/AuthNavigator";
import { useSelector } from "react-redux";

export default () => {

    const isAuth = useSelector(state => state.auth.userId)

    return (
        <NavigationContainer>
            {
                isAuth
                    ? <TabNavigator />
                    : <AuthNavigator />
            }
        </NavigationContainer>
    )
}
