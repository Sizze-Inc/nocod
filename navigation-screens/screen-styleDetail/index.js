import React, { useState, useRef, useEffect, createRef, useCallback } from "react";
import { View, Text, Image, ScrollView, SafeAreaView, TextInput, StyleSheet, Animated, Dimensions, Vibration, Alert, ActivityIndicator, KeyboardAvoidingView, TouchableWithoutFeedback, TouchableOpacity, Platform} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Svg, Path } from "react-native-svg"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import { GradientView } from "../../shared/components";
import { Page_styleDetail } from "../../pages/Page_styleDetail";
export const Header_styleDetail = ({ route, navigation }) => {
	const onClickstyleLeft = (value) => {
		navigation.navigate("styleHomeScreen", { screen: "styleHome" });
	}
	return (
			<GradientView style = {stylesheetHeaderstyleDetail.styleNavBar} isAction = {false}
	
	
	
	borderTopLeftRadius = {0}
				borderTopRightRadius = {0}
				borderBottomRightRadius = {0}
				borderBottomLeftRadius = {0}
				borderWidth = {0}
				borderColor = {"transparent"}
				id = {"7Bn-vx39FtwIAdCAlBii6"}
				fills = {[
					{ type: "SOLID", color: "rgb(248, 247, 245)", opacity: undefined,},
				]}>
				<GradientView style = {stylesheetHeaderstyleDetail.style1Blcok} isAction = {false}
	
	
	
	
	borderTopLeftRadius = {0}
					borderTopRightRadius = {0}
					borderBottomRightRadius = {0}
					borderBottomLeftRadius = {0}
					borderWidth = {0}
					borderColor = {"transparent"}
					id = {"v0F0Ve_7H3XIA1k06wmXJ"}
					fills = {[
					]}>
					<GradientView style = {stylesheetHeaderstyleDetail.styleLeft} onPress = {onClickstyleLeft} isAction = {true}
	
	
	
	
	
	borderTopLeftRadius = {0}
						borderTopRightRadius = {0}
						borderBottomRightRadius = {0}
						borderBottomLeftRadius = {0}
						borderWidth = {0}
						borderColor = {"transparent"}
						id = {"iU4I9jkeV6GwiiE8yUw2H"}
						fills = {[
						]}>
						<GradientView style = {stylesheetHeaderstyleDetail.styleIconsArrowLeft} isAction = {false}
	
	
	
	
	
	
	borderTopLeftRadius = {0}
							borderTopRightRadius = {0}
							borderBottomRightRadius = {0}
							borderBottomLeftRadius = {0}
							borderWidth = {0}
							borderColor = {"transparent"}
							id = {"eQ57ZvTGBkJNgiB5vlQaT"}
							fills = {[
							]}>
							<View style = {stylesheetHeaderstyleDetail.styleIconChevron}>
								<Svg
									fill = "rgba(51, 51, 51, 1)"
								>
									<Path d="M9.60938 20.3906C9.86719 20.6484 10.1953 20.7891 10.582 20.7891C11.3555 20.7891 11.9766 20.1797 11.9766 19.4062C11.9766 19.0195 11.8125 18.668 11.543 18.3984L3.33984 10.3828L11.543 2.39062C11.8125 2.12109 11.9766 1.75781 11.9766 1.38281C11.9766 0.609375 11.3555 0 10.582 0C10.1953 0 9.86719 0.140625 9.60938 0.398438L0.492188 9.30469C0.164062 9.60938 0.0117188 9.98438 0 10.3945C0 10.8047 0.164062 11.1562 0.492188 11.4727L9.60938 20.3906Z"/>
								</Svg>
							</View>
						</GradientView>
					</GradientView>
					<GradientView style = {stylesheetHeaderstyleDetail.styleCenter} isAction = {false}
	
	
	
	
	
	borderTopLeftRadius = {0}
						borderTopRightRadius = {0}
						borderBottomRightRadius = {0}
						borderBottomLeftRadius = {0}
						borderWidth = {0}
						borderColor = {"transparent"}
						id = {"4dsF6VvEtm_UGrYefFF65"}
						fills = {[
						]}>
					</GradientView>
					<GradientView style = {stylesheetHeaderstyleDetail.styleRight} isAction = {false}
	
	
	
	
	
	borderTopLeftRadius = {0}
						borderTopRightRadius = {0}
						borderBottomRightRadius = {0}
						borderBottomLeftRadius = {0}
						borderWidth = {0}
						borderColor = {"transparent"}
						id = {"6r0cH66z_THITX4Cjzl19"}
						fills = {[
						]}>
					</GradientView>
				</GradientView>
				<GradientView style = {stylesheetHeaderstyleDetail.styleSeparatorVariable} isAction = {false}
	
	
	
	
	borderTopLeftRadius = {0}
					borderTopRightRadius = {0}
					borderBottomRightRadius = {0}
					borderBottomLeftRadius = {0}
					borderWidth = {0}
					borderColor = {"transparent"}
					id = {"HiJdQsbHrqsZRGCt0pnMn"}
					fills = {[
						{ type: "SOLID", color: "rgb(229, 229, 229)", opacity: undefined,},
					]}>
				</GradientView>
			</GradientView>
	)
}
const stylesheetHeaderstyleDetail = StyleSheet.create({
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

});const styleDetailStackNavigator = createStackNavigator();
export const ScreenForstyleDetail = ({ navigation }) => {
	return (
		<styleDetailStackNavigator.Navigator>
			<styleDetailStackNavigator.Screen
				name = "styleDetail"
				component = {Page_styleDetail}
				options = {{
					header: () => <Header_styleDetail navigation={navigation}/>,
					headerTransparent: true,
				}}
			/>
		</styleDetailStackNavigator.Navigator>
	)
};
