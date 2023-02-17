import React, { useState, useRef, useEffect, createRef, useCallback } from "react";
import { View, Text, Image, ScrollView, SafeAreaView, TextInput, StyleSheet, Animated, Dimensions, Vibration, Alert, ActivityIndicator, KeyboardAvoidingView, TouchableWithoutFeedback, TouchableOpacity, Platform} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Svg, Path } from "react-native-svg"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import { GradientView } from "../../shared/components";
import { Page_styleMyOrders } from "../../pages/Page_styleMyOrders";
export const Header_styleMyOrders = ({ route, navigation }) => {
	return (
			<GradientView style = {stylesheetHeaderstyleMyOrders.styleNavBar} isAction = {false}
	
	
	
	borderTopLeftRadius = {0}
				borderTopRightRadius = {0}
				borderBottomRightRadius = {0}
				borderBottomLeftRadius = {0}
				borderWidth = {0}
				borderColor = {"transparent"}
				id = {"ACd8H8TlsuZK2OqRn-drq"}
				fills = {[
					{ type: "SOLID", color: "rgb(248, 247, 245)", opacity: undefined,},
				]}>
				<GradientView style = {stylesheetHeaderstyleMyOrders.styleLargeHeader} isAction = {false}
	
	
	
	
	borderTopLeftRadius = {0}
					borderTopRightRadius = {0}
					borderBottomRightRadius = {0}
					borderBottomLeftRadius = {0}
					borderWidth = {0}
					borderColor = {"transparent"}
					id = {"orqT4t3nK3lVmNax2xH1I"}
					fills = {[
					]}>
					<Text style = {stylesheetHeaderstyleMyOrders.styleTitle}>
						{`My orders`}
					</Text>
				</GradientView>
				<GradientView style = {stylesheetHeaderstyleMyOrders.styleSeparatorVariable} isAction = {false}
	
	
	
	
	borderTopLeftRadius = {0}
					borderTopRightRadius = {0}
					borderBottomRightRadius = {0}
					borderBottomLeftRadius = {0}
					borderWidth = {0}
					borderColor = {"transparent"}
					id = {"GmOv0dsJAcI2c0TjhztC1"}
					fills = {[
						{ type: "SOLID", color: "rgb(240, 239, 238)", opacity: undefined,},
					]}>
				</GradientView>
			</GradientView>
	)
}
const stylesheetHeaderstyleMyOrders = StyleSheet.create({
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
		alignItems: "center",
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

});const styleMyOrdersStackNavigator = createStackNavigator();
export const ScreenForstyleMyOrders = ({ navigation }) => {
	return (
		<styleMyOrdersStackNavigator.Navigator>
			<styleMyOrdersStackNavigator.Screen
				name = "styleMyOrders"
				component = {Page_styleMyOrders}
				options = {{
					header: () => <Header_styleMyOrders navigation={navigation}/>,
					headerTransparent: true,
				}}
			/>
		</styleMyOrdersStackNavigator.Navigator>
	)
};
