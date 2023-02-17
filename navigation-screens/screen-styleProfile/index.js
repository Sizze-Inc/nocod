import React, { useState, useRef, useEffect, createRef, useCallback } from "react";
import { View, Text, Image, ScrollView, SafeAreaView, TextInput, StyleSheet, Animated, Dimensions, Vibration, Alert, ActivityIndicator, KeyboardAvoidingView, TouchableWithoutFeedback, TouchableOpacity, Platform} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Svg, Path } from "react-native-svg"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import { GradientView } from "../../shared/components";
import { Page_styleProfile } from "../../pages/Page_styleProfile";
export const Header_styleProfile = ({ route, navigation }) => {
	return (
			<GradientView style = {stylesheetHeaderstyleProfile.styleNavBar} isAction = {false}
	
	
	
	borderTopLeftRadius = {0}
				borderTopRightRadius = {0}
				borderBottomRightRadius = {0}
				borderBottomLeftRadius = {0}
				borderWidth = {0}
				borderColor = {"transparent"}
				id = {"R6lcfXhAgLYrshE2RGSvF"}
				fills = {[
					{ type: "SOLID", color: "rgb(248, 247, 245)", opacity: undefined,},
				]}>
				<GradientView style = {stylesheetHeaderstyleProfile.styleLargeHeader} isAction = {false}
	
	
	
	
	borderTopLeftRadius = {0}
					borderTopRightRadius = {0}
					borderBottomRightRadius = {0}
					borderBottomLeftRadius = {0}
					borderWidth = {0}
					borderColor = {"transparent"}
					id = {"ZaOXiA6S4vYs0MTJr3bSb"}
					fills = {[
					]}>
					<Text style = {stylesheetHeaderstyleProfile.styleTitle}>
						{`Profile`}
					</Text>
				</GradientView>
				<GradientView style = {stylesheetHeaderstyleProfile.styleSeparatorVariable} isAction = {false}
	
	
	
	
	borderTopLeftRadius = {0}
					borderTopRightRadius = {0}
					borderBottomRightRadius = {0}
					borderBottomLeftRadius = {0}
					borderWidth = {0}
					borderColor = {"transparent"}
					id = {"I-kXeDeTpOXE8qW8q0ZOm"}
					fills = {[
						{ type: "SOLID", color: "rgb(240, 239, 238)", opacity: undefined,},
					]}>
				</GradientView>
			</GradientView>
	)
}
const stylesheetHeaderstyleProfile = StyleSheet.create({
 	styleTitle: {
		flexBasis: 0,
		flexGrow: 1,
		width: "auto",
		color: "rgba(51, 51, 51, 1)",
		fontSize: 34,
		fontFamily: "SF Pro Display_700",
		letterSpacing: 0,
		fontStyle: "normal",
		textAlign: "left",
		height: 40,
		lineHeight: 40,
	},
	styleLargeHeader: {
		width: "100%",
		height: "auto",
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "flex-start",
		paddingTop: 8,
		paddingRight: 16,
		paddingBottom: 8,
		paddingLeft: 16,
	},
	styleSeparatorVariable: {
		width: "100%",
		height: 1,
	},
	styleNavBar: {
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		width: "auto",
		height: "auto",
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "flex-start",
		paddingTop: 44,
	},

});const styleProfileStackNavigator = createStackNavigator();
export const ScreenForstyleProfile = ({ navigation }) => {
	return (
		<styleProfileStackNavigator.Navigator>
			<styleProfileStackNavigator.Screen
				name = "styleProfile"
				component = {Page_styleProfile}
				options = {{
					header: () => <Header_styleProfile navigation={navigation}/>,
					headerTransparent: true,
				}}
			/>
		</styleProfileStackNavigator.Navigator>
	)
};
