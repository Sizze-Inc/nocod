import React, { useState, useRef, useEffect, createRef, useCallback } from "react";
import { View, Text, Image, ScrollView, SafeAreaView, TextInput, StyleSheet, Animated, Dimensions, Vibration, Alert, ActivityIndicator, KeyboardAvoidingView, TouchableWithoutFeedback, TouchableOpacity, Platform} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Svg, Path } from "react-native-svg"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import { GradientView } from "../../shared/components";
import { Page_styleFilter } from "../../pages/Page_styleFilter";
const styleFilterStackNavigator = createStackNavigator();
export const ScreenForstyleFilter = ({ navigation }) => {
	return (
		<styleFilterStackNavigator.Navigator>
			<styleFilterStackNavigator.Screen
				name = "styleFilter"
				component = {Page_styleFilter}
				options = {{
					headerShown: false
				}}
			/>
		</styleFilterStackNavigator.Navigator>
	)
};
