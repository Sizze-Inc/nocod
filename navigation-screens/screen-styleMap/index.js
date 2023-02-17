import React, { useState, useRef, useEffect, createRef, useCallback } from "react";
import { View, Text, Image, ScrollView, SafeAreaView, TextInput, StyleSheet, Animated, Dimensions, Vibration, Alert, ActivityIndicator, KeyboardAvoidingView, TouchableWithoutFeedback, TouchableOpacity, Platform} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Svg, Path } from "react-native-svg"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import { GradientView } from "../../shared/components";
import { Page_styleMap } from "../../pages/Page_styleMap";
export const Header_styleMap = ({ route, navigation }) => {
	const [focusstyleTextField, setFocusstyleTextField] = useState(false);
	const refstyleTextField = useRef();
	const onClickstyleFrame = (value) => {
		navigation.navigate("styleFilterScreen", { screen: "styleFilter" });
	}
	return (
			<GradientView style = {stylesheetHeaderstyleMap.styleNavBar} isAction = {false}
	
	
	
	borderTopLeftRadius = {0}
				borderTopRightRadius = {0}
				borderBottomRightRadius = {0}
				borderBottomLeftRadius = {0}
				borderWidth = {0}
				borderColor = {"transparent"}
				id = {"14FtAEnd_aom00mv9YRXD"}
				fills = {[
					{ type: "SOLID", color: "rgb(248, 247, 245)", opacity: undefined,},
				]}>
				<GradientView style = {stylesheetHeaderstyleMap.styleLargeHeader} isAction = {false}
	
	
	
	
	borderTopLeftRadius = {0}
					borderTopRightRadius = {0}
					borderBottomRightRadius = {0}
					borderBottomLeftRadius = {0}
					borderWidth = {0}
					borderColor = {"transparent"}
					id = {"fxlnxAJrUEX_mel36tF_x"}
					fills = {[
					]}>
					<Text style = {stylesheetHeaderstyleMap.styleTitle}>
						{`Map`}
					</Text>
					<GradientView style = {stylesheetHeaderstyleMap.styleFrame} onPress = {onClickstyleFrame} isAction = {true}
	
	
	
	
	
	borderTopLeftRadius = {0}
						borderTopRightRadius = {0}
						borderBottomRightRadius = {0}
						borderBottomLeftRadius = {0}
						borderWidth = {0}
						borderColor = {"transparent"}
						id = {"M_A-Qu2JXAGWNU8FLf5AO"}
						fills = {[
							{ type: "SOLID", color: "rgb(128, 128, 128)", opacity: 0,},
						]}>
						<GradientView style = {stylesheetHeaderstyleMap.styleIcon} isAction = {false}
	
	
	
	
	
	
	borderTopLeftRadius = {0}
							borderTopRightRadius = {0}
							borderBottomRightRadius = {0}
							borderBottomLeftRadius = {0}
							borderWidth = {0}
							borderColor = {"transparent"}
							id = {"gVBrqSoKDPz3LH_P-OcZE"}
							fills = {[
							]}>
							<View style = {stylesheetHeaderstyleMap.styleSliderVertical3}>
								<Svg
									fill = "rgba(51, 51, 51, 1)"
								>
									<Path d="M11.928 22.8641C12.5935 22.8641 13.1334 22.3368 13.1334 21.6713L13.1334 10.6599C14.3262 10.1828 15.18 9.00251 15.18 7.64648C15.18 6.29046 14.3262 5.11021 13.1334 4.63309L13.1334 1.15513C13.1334 0.527344 12.5935 0 11.928 0C11.2751 0 10.7227 0.527344 10.7227 1.15513L10.7227 4.63309C9.52985 5.11021 8.67606 6.2779 8.67606 7.64648C8.67606 9.00251 9.52985 10.1828 10.7227 10.6599L10.7227 21.6713C10.7227 22.3368 11.2626 22.8641 11.928 22.8641ZM17.3647 15.0795C17.3647 16.4355 18.2059 17.6032 19.3987 18.0929L19.3987 21.709C19.3987 22.3368 19.9386 22.8641 20.6041 22.8641C21.2821 22.8641 21.8094 22.3368 21.8094 21.709L21.8094 18.0929C23.0148 17.6158 23.856 16.4355 23.856 15.0795C23.856 13.7109 23.0148 12.5432 21.8094 12.0536L21.8094 1.1928C21.8094 0.527344 21.2695 0 20.6041 0C19.9512 0 19.3987 0.527344 19.3987 1.1928L19.3987 12.0661C18.2059 12.5432 17.3647 13.7109 17.3647 15.0795ZM3.25195 22.8641C3.91741 22.8641 4.45731 22.3368 4.45731 21.709L4.45731 18.0929C5.65011 17.6032 6.49135 16.4355 6.49135 15.0795C6.49135 13.7109 5.65011 12.5432 4.45731 12.0661L4.45731 1.1928C4.45731 0.527344 3.91741 0 3.25195 0C2.59905 0 2.0466 0.527344 2.0466 1.1928L2.0466 12.0536C0.853795 12.5432 0 13.7109 0 15.0795C0 16.4355 0.853795 17.6158 2.0466 18.0929L2.0466 21.709C2.0466 22.3368 2.5865 22.8641 3.25195 22.8641ZM10.3836 7.64648C10.3836 6.78013 11.0617 6.10212 11.928 6.10212C12.8069 6.10212 13.4724 6.78013 13.4724 7.64648C13.4724 8.52539 12.8069 9.19085 11.928 9.19085C11.0617 9.19085 10.3836 8.52539 10.3836 7.64648ZM19.0597 15.0795C19.0597 14.2132 19.7503 13.5226 20.6166 13.5226C21.4955 13.5226 22.161 14.2132 22.161 15.0795C22.161 15.9584 21.4955 16.6239 20.6166 16.6239C19.7503 16.6239 19.0597 15.9584 19.0597 15.0795ZM1.70759 15.0795C1.70759 14.2132 2.3856 13.5226 3.25195 13.5226C4.13086 13.5226 4.79632 14.2132 4.79632 15.0795C4.79632 15.9584 4.13086 16.6239 3.25195 16.6239C2.3856 16.6239 1.70759 15.9584 1.70759 15.0795Z"/>
								</Svg>
							</View>
						</GradientView>
					</GradientView>
				</GradientView>
				<GradientView style = {stylesheetHeaderstyleMap.styleSeparatorVariable} isAction = {false}
	
	
	
	
	borderTopLeftRadius = {0}
					borderTopRightRadius = {0}
					borderBottomRightRadius = {0}
					borderBottomLeftRadius = {0}
					borderWidth = {0}
					borderColor = {"transparent"}
					id = {"NbpI9g0aWoadr3azx6NCZ"}
					fills = {[
						{ type: "SOLID", color: "rgb(240, 239, 238)", opacity: undefined,},
					]}>
				</GradientView>
				<GradientView style = {stylesheetHeaderstyleMap.styleSearchBar} isAction = {false}
	
	
	
	
	borderTopLeftRadius = {0}
					borderTopRightRadius = {0}
					borderBottomRightRadius = {0}
					borderBottomLeftRadius = {0}
					borderWidth = {0}
					borderColor = {"transparent"}
					id = {"DwrmoS7J1a6MqPOO9YveC"}
					fills = {[
					]}>
					<TouchableOpacity style = {[stylesheetHeaderstyleMap.styleTextField, {backgroundColor : focusstyleTextField ? "rgba(255, 255, 255, 1)" : "rgb(240, 239, 238)"}, {borderWidth : 0} , {borderColor : focusstyleTextField ? "rgba(126, 88, 255, 1)" : "rgba(0, 0, 0, 0)"}]} onPress={() => refstyleTextField.current.focus()} onClick={() => refstyleTextField.current.focus()}>
						<GradientView style = {stylesheetHeaderstyleMap.styleSearchIcon} isAction = {false}
	
	
	
	
	
	
	borderTopLeftRadius = {0}
							borderTopRightRadius = {0}
							borderBottomRightRadius = {0}
							borderBottomLeftRadius = {0}
							borderWidth = {0}
							borderColor = {"transparent"}
							id = {"fCPtsOBQHVyH5Xn3JhRqi"}
							fills = {[
							]}>
							<View style = {stylesheetHeaderstyleMap.styleIconColor}>
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
							style = {[stylesheetHeaderstyleMap.styleSearchPlaceholder, {outline: "none", position: "relative", left: 0, right:0, top:0}]}>
						</TextInput>
					</TouchableOpacity>
				</GradientView>
			</GradientView>
	)
}
const stylesheetHeaderstyleMap = StyleSheet.create({
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
	styleSliderVertical3: {
		position: "absolute",
		left: 8,
		right: -16,
		top: 8,
		bottom: -15,
		width: "auto",
		height: "auto",
	},
	styleIcon: {
		position: "absolute",
		left: 0,
		top: 0,
		width: 40,
		height: 40,
	},
	styleFrame: {
		width: 40,
		height: 40,
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

});const styleMapStackNavigator = createStackNavigator();
export const ScreenForstyleMap = ({ navigation }) => {
	return (
		<styleMapStackNavigator.Navigator>
			<styleMapStackNavigator.Screen
				name = "styleMap"
				component = {Page_styleMap}
				options = {{
					header: () => <Header_styleMap navigation={navigation}/>,
					headerTransparent: true,
				}}
			/>
		</styleMapStackNavigator.Navigator>
	)
};
