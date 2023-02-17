import React, { useState, useRef, useEffect, createRef, useCallback } from "react";
import { View, Text, Image, ScrollView, SafeAreaView, TextInput, StyleSheet, Animated, Dimensions, Vibration, Alert, ActivityIndicator, KeyboardAvoidingView, TouchableWithoutFeedback, TouchableOpacity, Platform} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Svg, Path } from "react-native-svg"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import { GradientView } from "../../shared/components";
import { Page_styleSignIn } from "../../pages/Page_styleSignIn";
const styleSignInStackNavigator = createStackNavigator();
export const ScreenForstyleSignIn = ({ navigation }) => {
	return (
		<styleSignInStackNavigator.Navigator>
			<styleSignInStackNavigator.Screen
				name = "styleSignIn"
				component = {Page_styleSignIn}
				options = {{
					headerShown: false
				}}
			/>
		</styleSignInStackNavigator.Navigator>
	)
};
