import React, { useState, useRef, useEffect, createRef, useCallback } from "react";
import { View, Text, Image, ScrollView, SafeAreaView, TextInput, StyleSheet, Animated, Dimensions, Vibration, Alert, ActivityIndicator, KeyboardAvoidingView, TouchableWithoutFeedback, TouchableOpacity, Platform} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Svg, Path } from "react-native-svg"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import { RootSiblingParent } from 'react-native-root-siblings';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { GradientView } from "./shared/components";
import { SplashPage } from "./utils/splash";
import { AuthProvider, useAuth } from "./entities/auth";
import { useFonts } from "expo-font";
import { ScreenForstyleWelcome } from "./navigation-screens/screen-styleWelcome";
import { ScreenForstyleHome } from "./navigation-screens/screen-styleHome";
import { ScreenForstyleDetail } from "./navigation-screens/screen-styleDetail";
import { ScreenForstyleMap } from "./navigation-screens/screen-styleMap";
import { ScreenForstyleMyOrders } from "./navigation-screens/screen-styleMyOrders";
import { ScreenForstyleProfile } from "./navigation-screens/screen-styleProfile";
import { ScreenForstyleSignIn } from "./navigation-screens/screen-styleSignIn";
import { ScreenForstyleFilter } from "./navigation-screens/screen-styleFilter";
import { ScreenForstyleAboutCompany } from "./navigation-screens/screen-styleAboutCompany";
import { ScreenForstyleHelp } from "./navigation-screens/screen-styleHelp";
const Tab = createBottomTabNavigator();
export const PagesNavigation = () => {
	const [appIsReady, setAppIsReady] = useState(false);
	const [focus0, setFocus0] = React.useState(false);
	const { authData, loading } = useAuth();
	const [loaded, setLoaded] = React.useState(false);
	const [fontsLoaded, error] = useFonts({		"SF Pro Display_400": "https://sizze-fonts.nyc3.digitaloceanspaces.com/28321558ce22428b8ff1d8936f7049eb/SF-Pro-Display-Regular.otf",
		"SF Pro Display_500": "https://sizze-fonts.nyc3.digitaloceanspaces.com/28321558ce22428b8ff1d8936f7049eb/SF-Pro-Display-Medium.otf",
		"SF Pro Display_700": "https://sizze-fonts.nyc3.digitaloceanspaces.com/28321558ce22428b8ff1d8936f7049eb/SF-Pro-Display-Bold.otf",
		"SF Pro Text_400": "https://sizze-fonts.nyc3.digitaloceanspaces.com/253e57444cb34d95bee5b234d70b5ccd/SF-Pro-Text-Regular.otf",
		"SF Pro Text_500": "https://sizze-fonts.nyc3.digitaloceanspaces.com/253e57444cb34d95bee5b234d70b5ccd/SF-Pro-Text-Medium.otf",
		"SF Pro Text_700": "https://sizze-fonts.nyc3.digitaloceanspaces.com/253e57444cb34d95bee5b234d70b5ccd/SF-Pro-Text-Bold.otf",
});
console.log(fontsLoaded, error)
	if (!fontsLoaded && !error) {
		return <View style={{width: Dimensions.get("window").width, height: Dimensions.get("window").height, backgroundColor: "#FFFFFF", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}><ActivityIndicator size="large" /><Text>Assets loading</Text></View>;
	}
	const Stack = createStackNavigator();
	const MainScreen = () => (
		<Tab.Navigator
			initialRouteName = {"styleWelcome"}
			screenOptions={{
				headerShown: false,
				tabBarShowLabel: false,
				tabBarStyle: styleSheetTabBar.styleTabBar,
				tabBarIconStyle: {width: "100%", height: "100%"},
			}}
		>
			<Tab.Screen
				name = "styleHomeScreen"
				component = {ScreenForstyleHome}
				options = {{tabBarIcon: ({focused}) => {
					const color = focused ? "rgba(126, 88, 255, 1)" : "rgba(102, 102, 102, 1)";
					return ( 
						<GradientView style = {[styleSheetTabBar.styleLabel1, {color: color}]}  isAction = {false}
	
	
	
	
	
	
	borderTopLeftRadius = {0}
							borderTopRightRadius = {0}
							borderBottomRightRadius = {0}
							borderBottomLeftRadius = {0}
							borderWidth = {0}
							borderColor = {"transparent"}
							id = {"3Pmk7l3WeOKMqF3a-wynM"}
							fills = {[
							]}>
							<GradientView style = {[styleSheetTabBar.styleHouse, {color: color}]}  isAction = {false}
	
	
	
	
	
	
	
	borderTopLeftRadius = {0}
								borderTopRightRadius = {0}
								borderBottomRightRadius = {0}
								borderBottomLeftRadius = {0}
								borderWidth = {0}
								borderColor = {"transparent"}
								id = {"D2aJ-vmyuDR5xjdkmuSoh"}
								fills = {[
								]}>
								<View style = {styleSheetTabBar.styleHouseCopy1}>
									<Svg
										fill = {color}
									>
										<Path d="M0 8.88354C0 9.34058 0.351562 9.73608 0.914062 9.73608C1.18652 9.73608 1.43262 9.58667 1.65234 9.41089L2.6543 8.56714L2.6543 16.741C2.6543 18.0417 3.43652 18.8152 4.78125 18.8152L16.6729 18.8152C18.0088 18.8152 18.7998 18.0417 18.7998 16.741L18.7998 8.52319L19.8545 9.41089C20.0654 9.58667 20.3115 9.73608 20.584 9.73608C21.1025 9.73608 21.498 9.41089 21.498 8.90112C21.498 8.60229 21.3838 8.36499 21.1553 8.17163L18.7998 6.1853L18.7998 2.44116C18.7998 2.04565 18.5449 1.79956 18.1494 1.79956L16.9365 1.79956C16.5498 1.79956 16.2861 2.04565 16.2861 2.44116L16.2861 4.07593L12.0059 0.481201C11.2412 -0.1604 10.2744 -0.1604 9.50977 0.481201L0.351562 8.17163C0.114258 8.36499 0 8.62866 0 8.88354ZM13.2803 11.3093C13.2803 10.8962 13.0166 10.6326 12.6035 10.6326L8.91211 10.6326C8.49902 10.6326 8.22656 10.8962 8.22656 11.3093L8.22656 17.0662L5.24707 17.0662C4.70215 17.0662 4.40332 16.7585 4.40332 16.2048L4.40332 7.09937L10.3711 2.0896C10.6172 1.87866 10.8984 1.87866 11.1445 2.0896L17.042 7.04663L17.042 16.2048C17.042 16.7585 16.7432 17.0662 16.1982 17.0662L13.2803 17.0662L13.2803 11.3093Z"/>
									</Svg>
								</View>
							</GradientView>
							<Text style = {[styleSheetTabBar.styleHome, {color: color}]}>
								{`Home`}
							</Text>
						</GradientView>
					)
				},
				}}
			/>
			<Tab.Screen
				name = "styleMapScreen"
				component = {ScreenForstyleMap}
				options = {{tabBarIcon: ({focused}) => {
					const color = focused ? "rgba(126, 88, 255, 1)" : "rgba(102, 102, 102, 1)";
					return ( 
						<GradientView style = {[styleSheetTabBar.styleLabel2, {color: color}]}  isAction = {false}
	
	
	
	
	
	
	borderTopLeftRadius = {0}
							borderTopRightRadius = {0}
							borderBottomRightRadius = {0}
							borderBottomLeftRadius = {0}
							borderWidth = {0}
							borderColor = {"transparent"}
							id = {"whVbbgxmiqBCEFuOPmypj"}
							fills = {[
							]}>
							<GradientView style = {[styleSheetTabBar.styleMap, {color: color}]}  isAction = {false}
	
	
	
	
	
	
	
	borderTopLeftRadius = {0}
								borderTopRightRadius = {0}
								borderBottomRightRadius = {0}
								borderBottomLeftRadius = {0}
								borderWidth = {0}
								borderColor = {"transparent"}
								id = {"QvQieMJBNYSbLckkJxXpV"}
								fills = {[
								]}>
								<View style = {styleSheetTabBar.styleMapCopy1}>
									<Svg
										fill = {color}
									>
										<Path d="M1.19531 17.2266C1.48535 17.2266 1.74902 17.1299 2.10059 16.9277L6.37207 14.625L11.0303 17.2354C11.3994 17.4375 11.7861 17.5342 12.1641 17.5342C12.5332 17.5342 12.8936 17.4463 13.2188 17.2529L17.5869 14.792C18.1934 14.4492 18.457 13.9658 18.457 13.2979L18.457 1.49414C18.457 0.74707 18.0088 0.298828 17.2705 0.298828C16.9805 0.298828 16.7168 0.413086 16.3564 0.606445L11.9268 3.06738L7.32129 0.290039C6.9873 0.0966797 6.62695 0 6.25781 0C5.89746 0 5.53711 0.0878906 5.2207 0.272461L0.878906 2.74219C0.272461 3.08496 0 3.55078 0 4.21875L0 16.04C0 16.7871 0.448242 17.2266 1.19531 17.2266ZM5.58105 13.0518L1.96875 15.0381C1.90723 15.0645 1.85449 15.0908 1.81055 15.0908C1.70508 15.0908 1.65234 15.0117 1.65234 14.8887L1.65234 4.67578C1.65234 4.42969 1.74023 4.27148 1.96875 4.13965L5.29102 2.21484C5.3877 2.15332 5.47559 2.10938 5.58105 2.05664L5.58105 13.0518ZM7.25098 13.0957L7.25098 2.26758C7.33887 2.31152 7.43555 2.36426 7.52344 2.41699L11.2061 4.64062L11.2061 15.3105C11.0918 15.249 10.9775 15.1875 10.8545 15.1172L7.25098 13.0957ZM12.8848 15.4336L12.8848 4.47363L16.4971 2.50488C16.541 2.47852 16.5938 2.46094 16.6377 2.46094C16.7432 2.46094 16.8135 2.54004 16.8135 2.6543L16.8135 12.8145C16.8135 13.0693 16.7256 13.2275 16.4883 13.3594L13.2891 15.2139C13.1572 15.293 13.0166 15.3721 12.8848 15.4336Z"/>
									</Svg>
								</View>
							</GradientView>
							<Text style = {[styleSheetTabBar.styleMapCopy2, {color: color}]}>
								{`Map`}
							</Text>
						</GradientView>
					)
				},
				}}
			/>
			<Tab.Screen
				name = "styleMyOrdersScreen"
				component = {ScreenForstyleMyOrders}
				options = {{tabBarIcon: ({focused}) => {
					const color = focused ? "rgba(126, 88, 255, 1)" : "rgba(102, 102, 102, 1)";
					return ( 
						<GradientView style = {[styleSheetTabBar.styleLable3, {color: color}]}  isAction = {false}
	
	
	
	
	
	
	borderTopLeftRadius = {0}
							borderTopRightRadius = {0}
							borderBottomRightRadius = {0}
							borderBottomLeftRadius = {0}
							borderWidth = {0}
							borderColor = {"transparent"}
							id = {"yD0S_GJPt7YQYzItIG9G7"}
							fills = {[
							]}>
							<GradientView style = {[styleSheetTabBar.styleBag, {color: color}]}  isAction = {false}
	
	
	
	
	
	
	
	borderTopLeftRadius = {0}
								borderTopRightRadius = {0}
								borderBottomRightRadius = {0}
								borderBottomLeftRadius = {0}
								borderWidth = {0}
								borderColor = {"transparent"}
								id = {"CLY-69S2ga-JWJtjt6WR6"}
								fills = {[
								]}>
								<View style = {styleSheetTabBar.styleBagCopy1}>
									<Svg
										fill = {color}
									>
										<Path d="M2.8916 18.4307L13.2275 18.4307C14.9238 18.4307 15.9082 17.4463 15.9082 15.5654L15.9082 6.46875C15.9082 4.58789 14.915 3.60352 13.0166 3.60352L11.7773 3.60352C11.7334 1.63477 10.0547 0 7.9541 0C5.8623 0 4.1748 1.63477 4.13086 3.60352L2.8916 3.60352C0.993164 3.60352 0 4.58789 0 6.46875L0 15.5654C0 17.4463 0.993164 18.4307 2.8916 18.4307ZM7.9541 1.55566C9.1582 1.55566 10.0459 2.46094 10.0811 3.60352L5.82715 3.60352C5.8623 2.46094 6.75 1.55566 7.9541 1.55566ZM3.00586 16.6816C2.19727 16.6816 1.74902 16.2598 1.74902 15.4072L1.74902 6.62695C1.74902 5.7832 2.19727 5.36133 3.00586 5.36133L12.9023 5.36133C13.7021 5.36133 14.1592 5.7832 14.1592 6.62695L14.1592 15.4072C14.1592 16.2598 13.7021 16.6816 13.1133 16.6816L3.00586 16.6816Z"/>
									</Svg>
								</View>
							</GradientView>
							<Text style = {[styleSheetTabBar.styleMyOrders, {color: color}]}>
								{`My orders`}
							</Text>
						</GradientView>
					)
				},
				}}
			/>
			<Tab.Screen
				name = "styleProfileScreen"
				component = {ScreenForstyleProfile}
				options = {{tabBarIcon: ({focused}) => {
					const color = focused ? "rgba(126, 88, 255, 1)" : "rgba(102, 102, 102, 1)";
					return ( 
						<GradientView style = {[styleSheetTabBar.styleLable3Copy1, {color: color}]}  isAction = {false}
	
	
	
	
	
	
	borderTopLeftRadius = {0}
							borderTopRightRadius = {0}
							borderBottomRightRadius = {0}
							borderBottomLeftRadius = {0}
							borderWidth = {0}
							borderColor = {"transparent"}
							id = {"U-FdcTAlGbKHGplfmHI0T"}
							fills = {[
							]}>
							<GradientView style = {[styleSheetTabBar.stylePerson, {color: color}]}  isAction = {false}
	
	
	
	
	
	
	
	borderTopLeftRadius = {0}
								borderTopRightRadius = {0}
								borderBottomRightRadius = {0}
								borderBottomLeftRadius = {0}
								borderWidth = {0}
								borderColor = {"transparent"}
								id = {"MgqPoG2gHYkGNjTGqFrNp"}
								fills = {[
								]}>
								<View style = {styleSheetTabBar.stylePersonCopy1}>
									<Svg
										fill = {color}
									>
										<Path d="M7.73438 8.25293C9.86133 8.25293 11.584 6.37207 11.584 4.06934C11.584 1.80176 9.86133 0 7.73438 0C5.61621 0 3.87598 1.82812 3.88477 4.08691C3.89355 6.38086 5.60742 8.25293 7.73438 8.25293ZM7.73438 6.71484C6.52148 6.71484 5.49316 5.56348 5.49316 4.08691C5.48438 2.64551 6.5127 1.53809 7.73438 1.53809C8.96484 1.53809 9.97559 2.62793 9.97559 4.06934C9.97559 5.5459 8.95605 6.71484 7.73438 6.71484ZM2.25 16.4268L13.21 16.4268C14.7305 16.4268 15.46 15.9434 15.46 14.9062C15.46 12.4893 12.4453 9.27246 7.73438 9.27246C3.02344 9.27246 0 12.4893 0 14.9062C0 15.9434 0.729492 16.4268 2.25 16.4268ZM1.97754 14.8887C1.7666 14.8887 1.6875 14.8184 1.6875 14.6602C1.6875 13.3154 3.8584 10.8105 7.73438 10.8105C11.6016 10.8105 13.7725 13.3154 13.7725 14.6602C13.7725 14.8184 13.6934 14.8887 13.4824 14.8887L1.97754 14.8887Z"/>
									</Svg>
								</View>
							</GradientView>
							<Text style = {[styleSheetTabBar.styleProfile, {color: color}]}>
								{`Profile`}
							</Text>
						</GradientView>
					)
				},
				}}
			/>
		</Tab.Navigator>
	);
	return (
		<View style={{width: Dimensions.get("window").width, height: Dimensions.get("window").height}}>
		{<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name = "main" options={{headerShown: false}} component={MainScreen}/>
				<Stack.Screen name = "styleWelcomeScreen" component = {ScreenForstyleWelcome} options = {{headerShown: false}}/>
				<Stack.Screen name = "styleDetailScreen" component = {ScreenForstyleDetail} options = {{headerShown: false}}/>
				<Stack.Screen name = "styleSignInScreen" component = {ScreenForstyleSignIn} options = {{headerShown: false}}/>
				<Stack.Screen name = "styleFilterScreen" component = {ScreenForstyleFilter} options = {{headerShown: false}}/>
				<Stack.Screen name = "styleAboutCompanyScreen" component = {ScreenForstyleAboutCompany} options = {{headerShown: false}}/>
				<Stack.Screen name = "styleHelpScreen" component = {ScreenForstyleHelp} options = {{headerShown: false}}/>
			</Stack.Navigator>
		</NavigationContainer> }
		</View>
	)
}
const styleSheetTabBar = StyleSheet.create({
 	styleTabBar: {
		width: "auto",
		height: 83,
		backgroundColor: "rgb(248, 247, 245)",
	},
	styleHouseCopy1: {
		position: "absolute",
		left: 3,
		right: -18,
		top: 4,
		bottom: -15,
		width: "auto",
		height: "auto",
	},
	styleHouse: {
		marginBottom: 4,
		width: 28,
		height: 28,
	},
	styleHome: {
		width: "100%",
		color: "rgba(51, 51, 51, 1)",
		fontSize: 10,
		fontFamily: "SF Pro Text_500",
		letterSpacing: -0.23999999463558197,
		fontStyle: "normal",
		textAlign: "center",
		height: "auto",
		lineHeight: 11.9,
	},
	styleLabel1: {
		flexBasis: 0,
		flexGrow: 1,
		width: "auto",
		height: "auto",
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "center",
		paddingTop: 4,
		paddingBottom: 4,
	},
	styleMapCopy1: {
		position: "absolute",
		left: 4,
		right: -14,
		top: 5,
		bottom: -13,
		width: "auto",
		height: "auto",
	},
	styleMap: {
		marginBottom: 4,
		width: 28,
		height: 28,
	},
	styleMapCopy2: {
		width: "100%",
		color: "rgba(132, 132, 132, 1)",
		fontSize: 10,
		fontFamily: "SF Pro Text_500",
		letterSpacing: -0.23999999463558197,
		fontStyle: "normal",
		textAlign: "center",
		height: "auto",
		lineHeight: 11.9,
	},
	styleLabel2: {
		flexBasis: 0,
		flexGrow: 1,
		width: "auto",
		height: "auto",
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "center",
		paddingTop: 4,
		paddingBottom: 4,
	},
	styleBagCopy1: {
		position: "absolute",
		left: 6,
		right: -10,
		top: 3,
		bottom: -15,
		width: "auto",
		height: "auto",
	},
	styleBag: {
		marginBottom: 4,
		width: 28,
		height: 28,
	},
	styleMyOrders: {
		width: "100%",
		color: "rgba(132, 132, 132, 1)",
		fontSize: 10,
		fontFamily: "SF Pro Text_500",
		letterSpacing: -0.23999999463558197,
		fontStyle: "normal",
		textAlign: "center",
		height: "auto",
		lineHeight: 11.9,
	},
	styleLable3: {
		flexBasis: 0,
		flexGrow: 1,
		width: "auto",
		height: "auto",
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "center",
		paddingTop: 4,
		paddingBottom: 4,
	},
	stylePersonCopy1: {
		position: "absolute",
		left: 6,
		right: -9,
		top: 6,
		bottom: -10,
		width: "auto",
		height: "auto",
	},
	stylePerson: {
		marginBottom: 4,
		width: 28,
		height: 28,
	},
	styleProfile: {
		width: "100%",
		color: "rgba(132, 132, 132, 1)",
		fontSize: 10,
		fontFamily: "SF Pro Text_500",
		letterSpacing: -0.23999999463558197,
		fontStyle: "normal",
		textAlign: "center",
		height: "auto",
		lineHeight: 11.9,
	},
	styleLable3Copy1: {
		flexBasis: 0,
		flexGrow: 1,
		width: "auto",
		height: "auto",
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "center",
		paddingTop: 4,
		paddingBottom: 4,
	},

});export default function App () {
	return (
		<RootSiblingParent>
			<PagesNavigation/>
		</RootSiblingParent>
	)
}