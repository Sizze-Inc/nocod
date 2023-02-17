import React, { useState, useRef, useEffect, createRef } from "react";
import { View, Text, Image, ScrollView, Switch, SafeAreaView, TextInput, TouchableWithoutFeedback, TouchableOpacity, StyleSheet, Animated, Dimensions, Vibration, Alert, KeyboardAvoidingView, Platform} from "react-native";
import { Svg, Path } from "react-native-svg";
import { useAuth } from "../../entities/auth";
import { getTable } from "../../shared/api/data";
import { GradientView } from "../../shared/components";
export const Page_styleHelp = ({ route, navigation }) => {
	const { signIn, signOut, signUp, authData , resetPassword} = useAuth();
	const onClickstyleButton = (value) => {
		navigation.navigate("styleProfileScreen", { screen: "styleProfile" });
	}
	return (
		<ScrollView style={{width: Dimensions.get("window").width, height: Dimensions.get("window").height, backgroundColor: "rgba(249, 248, 246, 1)"}} horizontal = {false} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} bounces={false}>
			<View style={{width: Dimensions.get("window").width, height: 812}} >
				<View style = {stylesheet.styleStylename}>
					<GradientView style = {stylesheet.styleTextBlock} isAction = {false}
	
	
	
	
	
	borderTopLeftRadius = {12}
						borderTopRightRadius = {12}
						borderBottomRightRadius = {12}
						borderBottomLeftRadius = {12}
						borderWidth = {0}
						borderColor = {"transparent"}
						id = {"e5lyrU6OhKipCd2MC068g"}
						fills = {[
							{ type: "SOLID", color: "rgb(255, 255, 255)", opacity: undefined,},
						]}>
						<GradientView style = {stylesheet.styleTopLine} isAction = {false}
	
	
	
	
	
	
	borderTopLeftRadius = {0}
							borderTopRightRadius = {0}
							borderBottomRightRadius = {0}
							borderBottomLeftRadius = {0}
							borderWidth = {0}
							borderColor = {"transparent"}
							id = {"uOdEIJ7ehRStBgaFI0KhG"}
							fills = {[
							]}>
							<Text style = {stylesheet.styleTitle}>
								{`Hello, Name Surname!`}
							</Text>
						</GradientView>
						<Text style = {stylesheet.styleBody}>
							{`If you have any questions, feel free to reach out to us and we'll respond within a few hours.`}
						</Text>
						<GradientView style = {stylesheet.styleButton} onPress = {onClickstyleButton} isAction = {true}
	
	
	
	
	
	
	borderTopLeftRadius = {8}
							borderTopRightRadius = {8}
							borderBottomRightRadius = {8}
							borderBottomLeftRadius = {8}
							borderWidth = {0}
							borderColor = {"transparent"}
							id = {"Ddu4TvMYpvs7uW-0xsZzV"}
							fills = {[
								{ type: "SOLID", color: "rgb(51, 51, 51)", opacity: undefined,},
							]}>
							<Text style = {stylesheet.styleText}>
								{`Send us a message`}
							</Text>
						</GradientView>
					</GradientView>
				</View>
			</View>
		</ScrollView>
	)
}
const stylesheet = StyleSheet.create({
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
	styleTitle: {
		flexBasis: 0,
		flexGrow: 1,
		width: "auto",
		color: "rgba(51, 51, 51, 1)",
		fontSize: 22,
		fontFamily: "SF Pro Display_700",
		letterSpacing: 0,
		fontStyle: "normal",
		textAlign: "left",
		height: 26,
		lineHeight: 26.3,
	},
	styleTopLine: {
		marginBottom: 16,
		width: "100%",
		height: "auto",
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "flex-start",
	},
	styleBody: {
		marginBottom: 16,
		width: "100%",
		color: "rgba(51, 51, 51, 1)",
		fontSize: 16,
		fontFamily: "SF Pro Text_400",
		letterSpacing: 0,
		fontStyle: "normal",
		textAlign: "left",
		height: "auto",
		lineHeight: 19.1,
	},
	styleText: {
		width: 151,
		color: "rgba(255, 255, 255, 1)",
		fontSize: 16,
		fontFamily: "SF Pro Text_500",
		letterSpacing: 0,
		fontStyle: "normal",
		textAlign: "center",
		height: 19,
		lineHeight: 19.1,
	},
	styleButton: {
		width: "100%",
		height: 52,
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 8,
	},
	styleTextBlock: {
		position: "absolute",
		left: 16,
		right: 16,
		top: 125,
		width: "auto",
		height: "auto",
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "flex-start",
		padding: 16,
		borderRadius: 12,
	},
	styleStylename: {
		position: "relative",
		width: Dimensions.get("window").width,
		height: 812,
		backgroundColor: "rgba(249, 248, 246, 1)",
	},

});