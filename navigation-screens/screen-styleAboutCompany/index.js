import React, { useState, useRef, useEffect, createRef, useCallback } from "react";
import { View, Text, Image, ScrollView, SafeAreaView, TextInput, StyleSheet, Animated, Dimensions, Vibration, Alert, ActivityIndicator, KeyboardAvoidingView, TouchableWithoutFeedback, TouchableOpacity, Platform} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Svg, Path } from "react-native-svg"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import { GradientView } from "../../shared/components";
import { Page_styleAboutCompany } from "../../pages/Page_styleAboutCompany";
export const Header_styleAboutCompany = ({ route, navigation }) => {
	const onClickstyleLeft = (value) => {
		navigation.navigate("styleProfileScreen", { screen: "styleProfile" });
	}
	return (
			<GradientView style = {stylesheetHeaderstyleAboutCompany.styleNavBar} isAction = {false}
	
	
	
	borderTopLeftRadius = {0}
				borderTopRightRadius = {0}
				borderBottomRightRadius = {0}
				borderBottomLeftRadius = {0}
				borderWidth = {0}
				borderColor = {"transparent"}
				id = {"fGKsiYLEdRqCIiWS8Q6p9"}
				fills = {[
					{ type: "SOLID", color: "rgb(248, 247, 245)", opacity: undefined,},
				]}>
				<GradientView style = {stylesheetHeaderstyleAboutCompany.style1Blcok} isAction = {false}
	
	
	
	
	borderTopLeftRadius = {0}
					borderTopRightRadius = {0}
					borderBottomRightRadius = {0}
					borderBottomLeftRadius = {0}
					borderWidth = {0}
					borderColor = {"transparent"}
					id = {"KJgqA2HgIzEYjGAlK9SEz"}
					fills = {[
					]}>
					<GradientView style = {stylesheetHeaderstyleAboutCompany.styleLeft} onPress = {onClickstyleLeft} isAction = {true}
	
	
	
	
	
	borderTopLeftRadius = {0}
						borderTopRightRadius = {0}
						borderBottomRightRadius = {0}
						borderBottomLeftRadius = {0}
						borderWidth = {0}
						borderColor = {"transparent"}
						id = {"pIShtsHTs71f0CwlBSZxS"}
						fills = {[
						]}>
						<GradientView style = {stylesheetHeaderstyleAboutCompany.styleIconsArrowLeft} isAction = {false}
	
	
	
	
	
	
	borderTopLeftRadius = {0}
							borderTopRightRadius = {0}
							borderBottomRightRadius = {0}
							borderBottomLeftRadius = {0}
							borderWidth = {0}
							borderColor = {"transparent"}
							id = {"rf5p8ROQkKlVsF2VxX1KE"}
							fills = {[
							]}>
							<View style = {stylesheetHeaderstyleAboutCompany.styleIconChevron}>
								<Svg
									fill = "rgba(51, 51, 51, 1)"
								>
									<Path d="M9.60938 20.3906C9.86719 20.6484 10.1953 20.7891 10.582 20.7891C11.3555 20.7891 11.9766 20.1797 11.9766 19.4062C11.9766 19.0195 11.8125 18.668 11.543 18.3984L3.33984 10.3828L11.543 2.39062C11.8125 2.12109 11.9766 1.75781 11.9766 1.38281C11.9766 0.609375 11.3555 0 10.582 0C10.1953 0 9.86719 0.140625 9.60938 0.398438L0.492188 9.30469C0.164062 9.60938 0.0117188 9.98438 0 10.3945C0 10.8047 0.164062 11.1562 0.492188 11.4727L9.60938 20.3906Z"/>
								</Svg>
							</View>
						</GradientView>
					</GradientView>
					<GradientView style = {stylesheetHeaderstyleAboutCompany.styleCenter} isAction = {false}
	
	
	
	
	
	borderTopLeftRadius = {0}
						borderTopRightRadius = {0}
						borderBottomRightRadius = {0}
						borderBottomLeftRadius = {0}
						borderWidth = {0}
						borderColor = {"transparent"}
						id = {"VoOclEGFdq1vAhk2K5ybM"}
						fills = {[
						]}>
					</GradientView>
					<GradientView style = {stylesheetHeaderstyleAboutCompany.styleRight} isAction = {false}
	
	
	
	
	
	borderTopLeftRadius = {0}
						borderTopRightRadius = {0}
						borderBottomRightRadius = {0}
						borderBottomLeftRadius = {0}
						borderWidth = {0}
						borderColor = {"transparent"}
						id = {"xL1xAZb6MzmQvkWTdHHBK"}
						fills = {[
						]}>
					</GradientView>
				</GradientView>
				<GradientView style = {stylesheetHeaderstyleAboutCompany.styleSeparatorVariable} isAction = {false}
	
	
	
	
	borderTopLeftRadius = {0}
					borderTopRightRadius = {0}
					borderBottomRightRadius = {0}
					borderBottomLeftRadius = {0}
					borderWidth = {0}
					borderColor = {"transparent"}
					id = {"sCmxfmHspf5MJTzJ0M736"}
					fills = {[
						{ type: "SOLID", color: "rgb(229, 229, 229)", opacity: undefined,},
					]}>
				</GradientView>
			</GradientView>
	)
}
const stylesheetHeaderstyleAboutCompany = StyleSheet.create({
 	styleIconChevron: {
		position: "absolute",
		left: 8,
		right: -4,
		top: 4,
		bottom: -17,
		width: "auto",
		height: "auto",
	},
	styleIconsArrowLeft: {
		width: 28,
		height: 28,
	},
	styleLeft: {
		width: 102,
		height: 48,
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		paddingTop: 16,
		paddingRight: 6,
		paddingBottom: 16,
		paddingLeft: 6,
	},
	styleCenter: {
		flexBasis: 0,
		flexGrow: 1,
		width: "auto",
		height: 48,
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		paddingTop: 16,
		paddingBottom: 16,
	},
	styleRight: {
		width: 102,
		height: 48,
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-end",
		alignItems: "center",
		padding: 16,
	},
	style1Blcok: {
		width: "100%",
		height: "auto",
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
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

});const styleAboutCompanyStackNavigator = createStackNavigator();
export const ScreenForstyleAboutCompany = ({ navigation }) => {
	return (
		<styleAboutCompanyStackNavigator.Navigator>
			<styleAboutCompanyStackNavigator.Screen
				name = "styleAboutCompany"
				component = {Page_styleAboutCompany}
				options = {{
					header: () => <Header_styleAboutCompany navigation={navigation}/>,
					headerTransparent: true,
				}}
			/>
		</styleAboutCompanyStackNavigator.Navigator>
	)
};
