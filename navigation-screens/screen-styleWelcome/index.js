import React, { useState, useRef, useEffect, createRef, useCallback } from "react";
import { View, Text, Image, ScrollView, SafeAreaView, TextInput, StyleSheet, Animated, Dimensions, Vibration, Alert, ActivityIndicator, KeyboardAvoidingView, TouchableWithoutFeedback, TouchableOpacity, Platform} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Svg, Path } from "react-native-svg"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import { GradientView } from "../../shared/components";
import { Page_styleWelcome } from "../../pages/Page_styleWelcome";
const styleWelcomeStackNavigator = createStackNavigator();
export const ScreenForstyleWelcome = ({ navigation }) => {
	return (
		<styleWelcomeStackNavigator.Navigator>
			<styleWelcomeStackNavigator.Screen
				name = "styleWelcome"
				component = {Page_styleWelcome}
				options = {{
					headerShown: false
				}}
			/>
		</styleWelcomeStackNavigator.Navigator>
	)
};
