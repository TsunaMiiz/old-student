import React, { Component } from 'react'
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';


import HomeScreen from './screens/HomeScreen'
import LoadingScreen from './screens/LoadingScreen'
import LoginScreen from './screens/LoginScreen'
import MessageScreen from './screens/MessageScreen'
import NotificationScreen from './screens/NotificationScreen'
import PostScreen from './screens/PostScreen'
import ProfileScreen from './screens/ProfileScreen'
import RegisterScreen from './screens/RegisterScreen'

const AppTabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Ionicons name="ios-home" size={24} color={tintColor} />
    }
  },
  Message: {
    screen: MessageScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Ionicons name="chatbubble" size={24} color={tintColor} />
    }
  },

  Post: {
    screen: PostScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Ionicons name="md-add-circle" size={24} color={tintColor} />
    }
  },
  Notification: {
    screen: NotificationScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Ionicons name="ios-notifications" size={24} color={tintColor} />
    }
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => <Ionicons name="person" size={24} color={tintColor} />
    }
  },



})

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen,
})

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppTabNavigator,
      Auth: AuthStack,
    },
    {
      initialRouteName: "Loading"
    }
  )
)