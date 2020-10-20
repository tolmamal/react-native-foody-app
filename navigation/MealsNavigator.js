import React from 'react';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import Colors from '../constans/Colors';
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import {Platform} from "react-native";

const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Colors.primaryColor,
    },
    headerTintColor: 'white'
};

const MealsNavigator = createStackNavigator(
    {
        Categories: {
            screen: CategoriesScreen,
        },
        CategoryMeals: {
            screen: CategoryMealsScreen,
        },
        MealDetail: MealDetailScreen,

    },
    {
        defaultNavigationOptions: defaultStackNavOptions
    }
);

const FavNavigator = createStackNavigator(
    {
        Favorites: FavoritesScreen,
        MealDetail: MealDetailScreen
    },
    {
        defaultNavigationOptions: defaultStackNavOptions

    }
);

const tabScreenConfig = {
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return (
                    <Ionicons
                        name='ios-restaurant'
                        size={25}
                        color={tabInfo.tintColor}
                    />
                );
            },
            tabBarColor: Colors.primaryColor,
        }},
    Favorites: {
        screen: FavNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return (
                    <Ionicons
                        name='ios-star'
                        size={25}
                        color={tabInfo.tintColor}
                    />
                );
            },
            tabBarColor: Colors.secondaryColor,
        }}
};

const MealsFavTabNavigator =
    Platform.OS === 'android'
        ? createMaterialBottomTabNavigator(tabScreenConfig, {
            activeColor: 'white',
            shifting: true,
        })
        : createBottomTabNavigator( {
            tabScreenConfig,
            tabBarOptions: {
                activeTintColor: Colors.secondaryColor
            }
        });

export default createAppContainer(MealsFavTabNavigator);
