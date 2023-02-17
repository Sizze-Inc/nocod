import React, { useState, useRef, useEffect, createRef } from "react";
import { View, Text, Image, ScrollView, Switch, SafeAreaView, TextInput, TouchableWithoutFeedback, TouchableOpacity, StyleSheet, Animated, Dimensions, Vibration, Alert, KeyboardAvoidingView, Platform} from "react-native";
import { Svg, Path } from "react-native-svg";
import { useAuth } from "../../entities/auth";
import { getTable } from "../../shared/api/data";
import { GradientView } from "../../shared/components";
export const Page_styleWelcome = ({ route, navigation }) => {
	const { signIn, signOut, signUp, authData , resetPassword} = useAuth();
	const onClickstyleButton = (value) => {
		navigation.navigate("styleHomeScreen", { screen: "styleHome" });
	}
	return (
		<ScrollView style={{width: Dimensions.get("window").width, height: Dimensions.get("window").height, backgroundColor: "rgba(249, 248, 246, 1)"}} horizontal = {false} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} bounces={false}>
			<View style={{width: Dimensions.get("window").width, height: 812}} >
				<View style = {stylesheet.styleStylename}>
					<GradientView style = {stylesheet.styleButtonsWithTerms} isAction = {false}
	
	
	
	
	
	borderTopLeftRadius = {0}
						borderTopRightRadius = {0}
						borderBottomRightRadius = {0}
						borderBottomLeftRadius = {0}
						borderWidth = {0}
						borderColor = {"transparent"}
						id = {"fyz5UsNrP854ubtyyTIwM"}
						fills = {[
						]}>
						<Text style = {stylesheet.styleByTappingStartIAgreeToPrivacyPolicy}>
							{`By tapping ‘Start’ I agree to privacy policy`}
						</Text>
						<GradientView style = {stylesheet.styleSeparate} isAction = {false}
	
	
	
	
	
	
	borderTopLeftRadius = {0}
							borderTopRightRadius = {0}
							borderBottomRightRadius = {0}
							borderBottomLeftRadius = {0}
							borderWidth = {0}
							borderColor = {"transparent"}
							id = {"vAjonHwAjpVWZ6hYV86uZ"}
							fills = {[
								{ type: "SOLID", color: "rgb(229, 229, 229)", opacity: undefined,},
							]}>
						</GradientView>
						<GradientView style = {stylesheet.styleButton} onPress = {onClickstyleButton} isAction = {true}
	
	
	
	
	
	
	borderTopLeftRadius = {8}
							borderTopRightRadius = {8}
							borderBottomRightRadius = {8}
							borderBottomLeftRadius = {8}
							borderWidth = {0}
							borderColor = {"transparent"}
							id = {"anFbDCLAxh_TzwtXzlVHi"}
							fills = {[
								{ type: "SOLID", color: "rgb(51, 51, 51)", opacity: undefined,},
							]}>
							<Text style = {stylesheet.styleText}>
								{`Start`}
							</Text>
						</GradientView>
					</GradientView>
					<GradientView style = {stylesheet.styleMainBlock} isAction = {false}
	
	
	
	
	
	borderTopLeftRadius = {0}
						borderTopRightRadius = {0}
						borderBottomRightRadius = {0}
						borderBottomLeftRadius = {0}
						borderWidth = {0}
						borderColor = {"transparent"}
						id = {"VZiR4dZPrKVbwRt5AKIqR"}
						fills = {[
						]}>
						<GradientView style = {stylesheet.styleBlockWithLogo} isAction = {false}
	
	
	
	
	
	
	borderTopLeftRadius = {0}
							borderTopRightRadius = {0}
							borderBottomRightRadius = {0}
							borderBottomLeftRadius = {0}
							borderWidth = {0}
							borderColor = {"transparent"}
							id = {"z45cB64qpD-al9RAOnmd7"}
							fills = {[
							]}>
						</GradientView>
						<GradientView style = {stylesheet.styleWelcomeToSizze} isAction = {false}
	
	
	
	
	
	
	borderTopLeftRadius = {0}
							borderTopRightRadius = {0}
							borderBottomRightRadius = {0}
							borderBottomLeftRadius = {0}
							borderWidth = {0}
							borderColor = {"transparent"}
							id = {"oWloVTy3Hh7VZsBaDabLk"}
							fills = {[
							]}>
							<Text style = {stylesheet.styleWelcomeToTheNocodApp}>
								{`Welcome to the Nocod App`}
							</Text>
						</GradientView>
					</GradientView>
				</View>
			</View>
		</ScrollView>
	)
}
const stylesheet = StyleSheet.create({
 	styleByTappingStartIAgreeToPrivacyPolicy: {
		marginBottom: 12,
		width: "100%",
		color: "rgba(51, 51, 51, 1)",
		fontSize: 14,
		fontFamily: "SF Pro Text_400",
		letterSpacing: 0,
		fontStyle: "normal",
		textAlign: "center",
		height: "auto",
		lineHeight: 16.7,
	},
	styleSeparate: {
		marginBottom: 12,
		width: "100%",
		height: 1,
	},
	styleText: {
		width: 36,
		color: "rgba(255, 255, 255, 1)",
		fontSize: 16,
		fontFamily: "SF Pro Display_500",
		letterSpacing: 0,
		fontStyle: "normal",
		textAlign: "center",
		height: 19,
		lineHeight: 19.1,
	},
	styleButton: {
		width: 342,
		height: 52,
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 8,
	},
	styleButtonsWithTerms: {
		position: "absolute",
		left: 0,
		right: 1,
		bottom: 40,
		width: "auto",
		height: "auto",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		paddingRight: 16,
		paddingLeft: 16,
	},
	styleBlockWithLogo: {
		marginBottom: 16,
		width: "100%",
		height: "auto",
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		paddingRight: 16,
		paddingLeft: 16,
	},
	styleWelcomeToTheNocodApp: {
		width: "100%",
		color: "rgba(51, 51, 51, 1)",
		fontSize: 42,
		fontFamily: "SF Pro Display_700",
		letterSpacing: 0,
		fontStyle: "normal",
		textAlign: "left",
		height: "auto",
		lineHeight: 50.1,
	},
	styleWelcomeToSizze: {
		width: "100%",
		height: "auto",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		paddingRight: 16,
		paddingLeft: 16,
	},
	styleMainBlock: {
		position: "absolute",
		left: 0,
		right: 1,
		top: 112,
		width: "auto",
		height: "auto",
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "flex-start",
	},
	styleStylename: {
		position: "relative",
		width: Dimensions.get("window").width,
		height: 812,
		backgroundColor: "rgba(249, 248, 246, 1)",
	},

});