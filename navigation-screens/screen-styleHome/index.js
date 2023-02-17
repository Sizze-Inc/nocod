import React, { useState, useRef, useEffect, createRef, useCallback } from "react";
import { View, Text, Image, ScrollView, SafeAreaView, TextInput, StyleSheet, Animated, Dimensions, Vibration, Alert, ActivityIndicator, KeyboardAvoidingView, TouchableWithoutFeedback, TouchableOpacity, Platform} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Svg, Path } from "react-native-svg"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import { GradientView } from "../../shared/components";
import { Page_styleHome } from "../../pages/Page_styleHome";
export const Header_styleHome = ({ route, navigation }) => {
	const [focusstyleTextField, setFocusstyleTextField] = useState(false);
	const refstyleTextField = useRef();
	return (
			<GradientView style = {stylesheetHeaderstyleHome.styleNavBar} isAction = {false}
	
	
	
	borderTopLeftRadius = {0}
				borderTopRightRadius = {0}
				borderBottomRightRadius = {0}
				borderBottomLeftRadius = {0}
				borderWidth = {0}
				borderColor = {"transparent"}
				id = {"IY894QMge6I_-dHbvF_KG"}
				fills = {[
					{ type: "SOLID", color: "rgb(128, 128, 128)", opacity: 0,},
				]}>
				<GradientView style = {stylesheetHeaderstyleHome.styleScrollLabels} isAction = {false}
	
	
	
	
	borderTopLeftRadius = {0}
					borderTopRightRadius = {0}
					borderBottomRightRadius = {0}
					borderBottomLeftRadius = {0}
					borderWidth = {0}
					borderColor = {"transparent"}
					id = {"TTyoAO5vxqGVzMZrggVp2"}
					fills = {[
						{ type: "SOLID", color: "rgb(248, 247, 245)", opacity: 1,},
					]}>
					<ScrollView horizontal = {true} bounces={false} showsHorizontalScrollIndicator={false} style={[{width: "100%", height: "100%", position: "relative",}]}>
					<GradientView style = {[stylesheetHeaderstyleHome.styleFrame, { position: "relative", left: 0, top: 0,}]}  isAction = {false}
	
	
	
	
	
	borderTopLeftRadius = {0}
						borderTopRightRadius = {0}
						borderBottomRightRadius = {0}
						borderBottomLeftRadius = {0}
						borderWidth = {0}
						borderColor = {"transparent"}
						id = {"9Aq6dxT7NwnCTD9iO5LmR"}
						fills = {[
							{ type: "SOLID", color: "rgb(128, 128, 128)", opacity: 0,},
						]}>
						<GradientView style = {stylesheetHeaderstyleHome.styleLabel} isAction = {false}
	
	
	
	
	
	
	borderTopLeftRadius = {50}
							borderTopRightRadius = {50}
							borderBottomRightRadius = {50}
							borderBottomLeftRadius = {50}
							borderWidth = {0}
							borderColor = {"transparent"}
							id = {"e3gas2ply14-Rh1-37h1b"}
							fills = {[
								{ type: "SOLID", color: "rgb(51, 51, 51)", opacity: undefined,},
							]}>
							<Text style = {stylesheetHeaderstyleHome.stylePrice}>
								{`Music`}
							</Text>
						</GradientView>
						<GradientView style = {stylesheetHeaderstyleHome.styleLabelCopy1} isAction = {false}
	
	
	
	
	
	
	borderTopLeftRadius = {50}
							borderTopRightRadius = {50}
							borderBottomRightRadius = {50}
							borderBottomLeftRadius = {50}
							borderWidth = {0}
							borderColor = {"transparent"}
							id = {"DEWs6KDRp-GPPzOSEQ6ww"}
							fills = {[
								{ type: "SOLID", color: "rgb(51, 51, 51)", opacity: undefined,},
							]}>
							<Text style = {stylesheetHeaderstyleHome.stylePriceCopy1}>
								{`Buisness`}
							</Text>
						</GradientView>
						<GradientView style = {stylesheetHeaderstyleHome.styleLabelCopy2} isAction = {false}
	
	
	
	
	
	
	borderTopLeftRadius = {50}
							borderTopRightRadius = {50}
							borderBottomRightRadius = {50}
							borderBottomLeftRadius = {50}
							borderWidth = {1}
							borderColor = {"rgba(51, 51, 51, 1)"}
							id = {"45RfQbaqeE0HZdUmyEcpK"}
							fills = {[
							]}>
							<Text style = {stylesheetHeaderstyleHome.stylePriceCopy2}>
								{`Kids`}
							</Text>
						</GradientView>
						<GradientView style = {stylesheetHeaderstyleHome.styleLabelCopy3} isAction = {false}
	
	
	
	
	
	
	borderTopLeftRadius = {50}
							borderTopRightRadius = {50}
							borderBottomRightRadius = {50}
							borderBottomLeftRadius = {50}
							borderWidth = {1}
							borderColor = {"rgba(51, 51, 51, 1)"}
							id = {"_CE359UrEYwY_6d_FBswg"}
							fills = {[
							]}>
							<Text style = {stylesheetHeaderstyleHome.stylePriceCopy3}>
								{`Yoga`}
							</Text>
						</GradientView>
						<GradientView style = {stylesheetHeaderstyleHome.styleLabelCopy4} isAction = {false}
	
	
	
	
	
	
	borderTopLeftRadius = {50}
							borderTopRightRadius = {50}
							borderBottomRightRadius = {50}
							borderBottomLeftRadius = {50}
							borderWidth = {1}
							borderColor = {"rgba(51, 51, 51, 1)"}
							id = {"H_0Dz2dm0lxoh7GXRUMus"}
							fills = {[
							]}>
							<Text style = {stylesheetHeaderstyleHome.stylePriceCopy4}>
								{`International`}
							</Text>
						</GradientView>
					</GradientView>
					</ScrollView>
				</GradientView>
				<GradientView style = {stylesheetHeaderstyleHome.styleNavBarCopy1} isAction = {false}
	
	
	
	
	borderTopLeftRadius = {0}
					borderTopRightRadius = {0}
					borderBottomRightRadius = {0}
					borderBottomLeftRadius = {0}
					borderWidth = {0}
					borderColor = {"transparent"}
					id = {"kGNETitOlk6PZVqWAu0mm"}
					fills = {[
						{ type: "SOLID", color: "rgb(248, 247, 245)", opacity: undefined,},
					]}>
					<GradientView style = {stylesheetHeaderstyleHome.styleLargeHeader} isAction = {false}
	
	
	
	
	
	borderTopLeftRadius = {0}
						borderTopRightRadius = {0}
						borderBottomRightRadius = {0}
						borderBottomLeftRadius = {0}
						borderWidth = {0}
						borderColor = {"transparent"}
						id = {"MIxvFCfccqHpy5fpaFeun"}
						fills = {[
						]}>
						<Text style = {stylesheetHeaderstyleHome.styleTitle}>
							{`Home`}
						</Text>
					</GradientView>
					<GradientView style = {stylesheetHeaderstyleHome.styleSeparatorVariable} isAction = {false}
	
	
	
	
	
	borderTopLeftRadius = {0}
						borderTopRightRadius = {0}
						borderBottomRightRadius = {0}
						borderBottomLeftRadius = {0}
						borderWidth = {0}
						borderColor = {"transparent"}
						id = {"OJmrS-I2cBXP1Lo29bp6T"}
						fills = {[
							{ type: "SOLID", color: "rgb(240, 239, 238)", opacity: undefined,},
						]}>
					</GradientView>
					<GradientView style = {stylesheetHeaderstyleHome.styleSearchBar} isAction = {false}
	
	
	
	
	
	borderTopLeftRadius = {0}
						borderTopRightRadius = {0}
						borderBottomRightRadius = {0}
						borderBottomLeftRadius = {0}
						borderWidth = {0}
						borderColor = {"transparent"}
						id = {"y0HbG_5AL_5n6I4I8ajun"}
						fills = {[
						]}>
						<TouchableOpacity style = {[stylesheetHeaderstyleHome.styleTextField, {backgroundColor : focusstyleTextField ? "rgba(255, 255, 255, 1)" : "rgb(240, 239, 238)"}, {borderWidth : 0} , {borderColor : focusstyleTextField ? "rgba(126, 88, 255, 1)" : "rgba(0, 0, 0, 0)"}]} onPress={() => refstyleTextField.current.focus()} onClick={() => refstyleTextField.current.focus()}>
							<GradientView style = {stylesheetHeaderstyleHome.styleSearchIcon} isAction = {false}
	
	
	
	
	
	
	
	borderTopLeftRadius = {0}
								borderTopRightRadius = {0}
								borderBottomRightRadius = {0}
								borderBottomLeftRadius = {0}
								borderWidth = {0}
								borderColor = {"transparent"}
								id = {"MMZ15YOJCPi9KGvwtiMFI"}
								fills = {[
								]}>
								<View style = {stylesheetHeaderstyleHome.styleIconColor}>
									<Svg
										fill = "rgba(132, 132, 132, 1)"
									>
										<Path d="M5.50006 0C8.53765 0 11.0001 2.46256 11.0001 5.50029C11.0001 6.74868 10.5842 7.89993 9.88346 8.82304L13.7791 12.7233C14.0718 13.0164 14.0715 13.4913 13.7785 13.784C13.4854 14.0767 13.0105 14.0764 12.7178 13.7834L8.82266 9.88388C7.89959 10.5847 6.74839 11.0006 5.50006 11.0006C2.46246 11.0006 0 8.53802 0 5.50029C0 2.46256 2.46246 0 5.50006 0ZM5.50006 1.5C3.2909 1.5 1.5 3.29098 1.5 5.50029C1.5 7.70961 3.2909 9.50058 5.50006 9.50058C7.70921 9.50058 9.50011 7.70961 9.50011 5.50029C9.50011 3.29098 7.70921 1.5 5.50006 1.5Z"/>
									</Svg>
								</View>
							</GradientView>
							<TextInput
								secureTextEntry={false}
								placeholderTextColor = {"rgba(102, 102, 102, 1)"}
								placeholder = {"Search"}
								multiline={false}
								ref={refstyleTextField}
								onBlur = {() => setFocusstyleTextField(false)}
								onFocus = {() => setFocusstyleTextField(true)}
								style = {[stylesheetHeaderstyleHome.styleSearchPlaceholder, {outline: "none", position: "relative", left: 0, right:0, top:0}]}>
							</TextInput>
						</TouchableOpacity>
					</GradientView>
				</GradientView>
			</GradientView>
	)
}
const stylesheetHeaderstyleHome = StyleSheet.create({
 	stylePrice: {
		width: 44,
		color: "rgba(255, 255, 255, 1)",
		fontSize: 16,
		fontFamily: "SF Pro Display_500",
		letterSpacing: 0,
		fontStyle: "normal",
		textAlign: "right",
		height: 19,
		lineHeight: 19.1,
	},
	styleLabel: {
		marginRight: 10,
		width: "auto",
		height: "auto",
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "flex-start",
		paddingTop: 4,
		paddingRight: 12,
		paddingBottom: 4,
		paddingLeft: 12,
		borderRadius: 50,
	},
	stylePriceCopy1: {
		width: 65,
		color: "rgba(255, 255, 255, 1)",
		fontSize: 16,
		fontFamily: "SF Pro Display_500",
		letterSpacing: 0,
		fontStyle: "normal",
		textAlign: "right",
		height: 19,
		lineHeight: 19.1,
	},
	styleLabelCopy1: {
		marginRight: 10,
		width: "auto",
		height: "auto",
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "flex-start",
		paddingTop: 4,
		paddingRight: 12,
		paddingBottom: 4,
		paddingLeft: 12,
		borderRadius: 50,
	},
	stylePriceCopy2: {
		width: 33,
		color: "rgba(51, 51, 51, 1)",
		fontSize: 16,
		fontFamily: "SF Pro Display_500",
		letterSpacing: 0,
		fontStyle: "normal",
		textAlign: "right",
		height: 19,
		lineHeight: 19.1,
	},
	styleLabelCopy2: {
		marginRight: 10,
		width: "auto",
		height: "auto",
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "flex-start",
		paddingTop: 4,
		paddingRight: 12,
		paddingBottom: 4,
		paddingLeft: 12,
		borderRadius: 50,
	},
	stylePriceCopy3: {
		width: 37,
		color: "rgba(51, 51, 51, 1)",
		fontSize: 16,
		fontFamily: "SF Pro Display_500",
		letterSpacing: 0,
		fontStyle: "normal",
		textAlign: "right",
		height: 19,
		lineHeight: 19.1,
	},
	styleLabelCopy3: {
		marginRight: 10,
		width: "auto",
		height: "auto",
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "flex-start",
		paddingTop: 4,
		paddingRight: 12,
		paddingBottom: 4,
		paddingLeft: 12,
		borderRadius: 50,
	},
	stylePriceCopy4: {
		width: 89,
		color: "rgba(51, 51, 51, 1)",
		fontSize: 16,
		fontFamily: "SF Pro Display_500",
		letterSpacing: 0,
		fontStyle: "normal",
		textAlign: "right",
		height: 19,
		lineHeight: 19.1,
	},
	styleLabelCopy4: {
		width: "auto",
		height: "auto",
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "flex-start",
		paddingTop: 4,
		paddingRight: 12,
		paddingBottom: 4,
		paddingLeft: 12,
		borderRadius: 50,
	},
	styleFrame: {
		width: "auto",
		height: "auto",
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "flex-start",
		paddingRight: 16,
		paddingLeft: 16,
	},
	styleScrollLabels: {
		position: "absolute",
		left: 0,
		right: 0,
		top: 153,
		width: "auto",
		height: 43,
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "flex-start",
		paddingTop: 8,
		paddingBottom: 8,
	},
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
	styleIconColor: {
		position: "absolute",
		left: 5,
		right: -9,
		top: 5,
		bottom: -9,
		width: "auto",
		height: "auto",
	},
	styleSearchIcon: {
		marginRight: 6,
		width: 24,
		height: 24,
	},
	styleSearchPlaceholder: {
		flexBasis: 0,
		flexGrow: 1,
		width: "auto",
		color: "rgba(132, 132, 132, 1)",
		fontSize: 16,
		fontFamily: "SF Pro Text_400",
		letterSpacing: -0.23999999463558197,
		fontStyle: "normal",
		textAlign: "left",
		height: 19,
		lineHeight: 19.1,
	},
	styleTextField: {
		width: "100%",
		height: "auto",
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		padding: 6,
		borderRadius: 10,
	},
	styleSearchBar: {
		width: "100%",
		height: "auto",
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "flex-start",
		paddingTop: 8,
		paddingRight: 16,
		paddingBottom: 8,
		paddingLeft: 16,
	},
	styleNavBarCopy1: {
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
	styleNavBar: {
		position: "absolute",
		left: -3.960775614864329e-13,
		right: 3.979039320256561e-13,
		top: 0,
		width: "auto",
		height: 196,
	},

});const styleHomeStackNavigator = createStackNavigator();
export const ScreenForstyleHome = ({ navigation }) => {
	return (
		<styleHomeStackNavigator.Navigator>
			<styleHomeStackNavigator.Screen
				name = "styleHome"
				component = {Page_styleHome}
				options = {{
					header: () => <Header_styleHome navigation={navigation}/>,
					headerTransparent: true,
				}}
			/>
		</styleHomeStackNavigator.Navigator>
	)
};
