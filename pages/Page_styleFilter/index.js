import React, { useState, useRef, useEffect, createRef } from "react";
import { View, Text, Image, ScrollView, Switch, SafeAreaView, TextInput, TouchableWithoutFeedback, TouchableOpacity, StyleSheet, Animated, Dimensions, Vibration, Alert, KeyboardAvoidingView, Platform} from "react-native";
import { Svg, Path } from "react-native-svg";
import { useAuth } from "../../entities/auth";
import { getTable } from "../../shared/api/data";
import { GradientView } from "../../shared/components";
export const Page_styleFilter = ({ route, navigation }) => {
	const { signIn, signOut, signUp, authData , resetPassword} = useAuth();
	const onClickstyleSelect = (value) => {
		navigation.navigate("undefinedScreen", { screen: "undefined" });
	}
	const onClickstyleSelectCopy1 = (value) => {
		navigation.navigate("undefinedScreen", { screen: "undefined" });
	}
	const onClickstyleSelectCopy2 = (value) => {
		navigation.navigate("undefinedScreen", { screen: "undefined" });
	}
	const onClickstyleSelectCopy3 = (value) => {
		navigation.navigate("undefinedScreen", { screen: "undefined" });
	}
	const onClickstyleSelectCopy4 = (value) => {
		navigation.navigate("undefinedScreen", { screen: "undefined" });
	}
	const onClickstyleButton = (value) => {
		navigation.navigate("undefinedScreen", { screen: "undefined" });
	}
	const onClickstyleLeft = (value) => {
		navigation.navigate("styleMapScreen", { screen: "styleMap" });
	}
	return (
		<ScrollView style={{width: Dimensions.get("window").width, height: Dimensions.get("window").height, backgroundColor: "rgba(249, 248, 246, 1)"}} horizontal = {false} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} bounces={false}>
			<View style={{width: Dimensions.get("window").width, height: 816}} >
				<View style = {stylesheet.styleStylename}>
					<GradientView style = {stylesheet.styleMainBlock} isAction = {false}
	
	
	
	
	
	borderTopLeftRadius = {0}
						borderTopRightRadius = {0}
						borderBottomRightRadius = {0}
						borderBottomLeftRadius = {0}
						borderWidth = {0}
						borderColor = {"transparent"}
						id = {"2aBJQKbYx2DqJUlCf1CR6"}
						fills = {[
						]}>
						<GradientView style = {stylesheet.styleSelect} onPress = {onClickstyleSelect} isAction = {true}
	
	
	
	
	
	
	borderTopLeftRadius = {0}
							borderTopRightRadius = {0}
							borderBottomRightRadius = {0}
							borderBottomLeftRadius = {0}
							borderWidth = {0}
							borderColor = {"transparent"}
							id = {"IlAsb-VPhT78ahISALYd0"}
							fills = {[
							]}>
							<GradientView style = {stylesheet.styleConteiner} isAction = {false}
	
	
	
	
	
	
	
	borderTopLeftRadius = {0}
								borderTopRightRadius = {0}
								borderBottomRightRadius = {0}
								borderBottomLeftRadius = {0}
								borderWidth = {0}
								borderColor = {"transparent"}
								id = {"tp2i7o-7DtLp1mov9DjN4"}
								fills = {[
								]}>
								<Text style = {stylesheet.styleTitle}>
									{`Music`}
								</Text>
							</GradientView>
						</GradientView>
						<GradientView style = {stylesheet.styleSelectCopy1} onPress = {onClickstyleSelectCopy1} isAction = {true}
	
	
	
	
	
	
	borderTopLeftRadius = {0}
							borderTopRightRadius = {0}
							borderBottomRightRadius = {0}
							borderBottomLeftRadius = {0}
							borderWidth = {0}
							borderColor = {"transparent"}
							id = {"q6RE4FCQkeroXKAEYZIUe"}
							fills = {[
							]}>
							<GradientView style = {stylesheet.styleConteinerCopy1} isAction = {false}
	
	
	
	
	
	
	
	borderTopLeftRadius = {0}
								borderTopRightRadius = {0}
								borderBottomRightRadius = {0}
								borderBottomLeftRadius = {0}
								borderWidth = {0}
								borderColor = {"transparent"}
								id = {"_mxFybYrB4nM3zjjaYP-X"}
								fills = {[
								]}>
								<Text style = {stylesheet.styleTitleCopy1}>
									{`Buisness`}
								</Text>
							</GradientView>
						</GradientView>
						<GradientView style = {stylesheet.styleSelectCopy2} onPress = {onClickstyleSelectCopy2} isAction = {true}
	
	
	
	
	
	
	borderTopLeftRadius = {0}
							borderTopRightRadius = {0}
							borderBottomRightRadius = {0}
							borderBottomLeftRadius = {0}
							borderWidth = {0}
							borderColor = {"transparent"}
							id = {"6fuWiqb68hLK1iM5KgU2D"}
							fills = {[
							]}>
							<GradientView style = {stylesheet.styleConteinerCopy2} isAction = {false}
	
	
	
	
	
	
	
	borderTopLeftRadius = {0}
								borderTopRightRadius = {0}
								borderBottomRightRadius = {0}
								borderBottomLeftRadius = {0}
								borderWidth = {0}
								borderColor = {"transparent"}
								id = {"9s9yQlTLaWOTu80_TlWWf"}
								fills = {[
								]}>
								<Text style = {stylesheet.styleTitleCopy2}>
									{`Kids`}
								</Text>
							</GradientView>
						</GradientView>
						<GradientView style = {stylesheet.styleSelectCopy3} onPress = {onClickstyleSelectCopy3} isAction = {true}
	
	
	
	
	
	
	borderTopLeftRadius = {0}
							borderTopRightRadius = {0}
							borderBottomRightRadius = {0}
							borderBottomLeftRadius = {0}
							borderWidth = {0}
							borderColor = {"transparent"}
							id = {"qt2uwLxPIVaUopRkKxUgJ"}
							fills = {[
							]}>
							<GradientView style = {stylesheet.styleConteinerCopy3} isAction = {false}
	
	
	
	
	
	
	
	borderTopLeftRadius = {0}
								borderTopRightRadius = {0}
								borderBottomRightRadius = {0}
								borderBottomLeftRadius = {0}
								borderWidth = {0}
								borderColor = {"transparent"}
								id = {"zXBScKYTk4HFerb1R8nbW"}
								fills = {[
								]}>
								<Text style = {stylesheet.styleTitleCopy3}>
									{`Yoga`}
								</Text>
							</GradientView>
							<GradientView style = {stylesheet.styleCheck} isAction = {false}
	
	
	
	
	
	
	
	borderTopLeftRadius = {0}
								borderTopRightRadius = {0}
								borderBottomRightRadius = {0}
								borderBottomLeftRadius = {0}
								borderWidth = {0}
								borderColor = {"transparent"}
								id = {"9RMXd21Dj23h3rNMKksPu"}
								fills = {[
								]}>
								<View style = {stylesheet.styleIcon}>
									<Svg
										fill = "rgba(51, 51, 51, 1)"
									>
										<Path d="M4.92429 8.02792C4.93281 8.03644 4.94661 8.03644 4.95513 8.02792L12.371 0.612026C12.709 0.274013 13.2571 0.274014 13.5951 0.612027L13.5951 0.612027C13.9331 0.95004 13.9331 1.49807 13.5951 1.83608L4.96021 10.4709C4.94889 10.4823 4.93053 10.4823 4.91921 10.4709L0.612026 6.16376C0.274013 5.82575 0.274014 5.27772 0.612027 4.93971L0.612027 4.93971C0.95004 4.6017 1.49807 4.6017 1.83608 4.93971L4.92429 8.02792Z"/>
									</Svg>
								</View>
							</GradientView>
						</GradientView>
						<GradientView style = {stylesheet.styleSelectCopy4} onPress = {onClickstyleSelectCopy4} isAction = {true}
	
	
	
	
	
	
	borderTopLeftRadius = {0}
							borderTopRightRadius = {0}
							borderBottomRightRadius = {0}
							borderBottomLeftRadius = {0}
							borderWidth = {0}
							borderColor = {"transparent"}
							id = {"IgRqK4zZgKx0nvQRVqf4V"}
							fills = {[
							]}>
							<GradientView style = {stylesheet.styleConteinerCopy4} isAction = {false}
	
	
	
	
	
	
	
	borderTopLeftRadius = {0}
								borderTopRightRadius = {0}
								borderBottomRightRadius = {0}
								borderBottomLeftRadius = {0}
								borderWidth = {0}
								borderColor = {"transparent"}
								id = {"fb3aLGIQJJJgGKQXrHbVO"}
								fills = {[
								]}>
								<Text style = {stylesheet.styleTitleCopy4}>
									{`Crypto`}
								</Text>
							</GradientView>
							<GradientView style = {stylesheet.styleCheckCopy1} isAction = {false}
	
	
	
	
	
	
	
	borderTopLeftRadius = {0}
								borderTopRightRadius = {0}
								borderBottomRightRadius = {0}
								borderBottomLeftRadius = {0}
								borderWidth = {0}
								borderColor = {"transparent"}
								id = {"PPx4gOyOcScs8lSjfWls_"}
								fills = {[
								]}>
								<View style = {stylesheet.styleIconCopy1}>
									<Svg
										fill = "rgba(51, 51, 51, 1)"
									>
										<Path d="M4.92429 8.02792C4.93281 8.03644 4.94661 8.03644 4.95513 8.02792L12.371 0.612026C12.709 0.274013 13.2571 0.274014 13.5951 0.612027L13.5951 0.612027C13.9331 0.95004 13.9331 1.49807 13.5951 1.83608L4.96021 10.4709C4.94889 10.4823 4.93053 10.4823 4.91921 10.4709L0.612026 6.16376C0.274013 5.82575 0.274014 5.27772 0.612027 4.93971L0.612027 4.93971C0.95004 4.6017 1.49807 4.6017 1.83608 4.93971L4.92429 8.02792Z"/>
									</Svg>
								</View>
							</GradientView>
						</GradientView>
						<GradientView style = {stylesheet.styleWrapButton} isAction = {false}
	
	
	
	
	
	
	borderTopLeftRadius = {0}
							borderTopRightRadius = {0}
							borderBottomRightRadius = {0}
							borderBottomLeftRadius = {0}
							borderWidth = {0}
							borderColor = {"transparent"}
							id = {"czx9X7pNdsYFttAmI4Czo"}
							fills = {[
							]}>
							<GradientView style = {stylesheet.styleButton} onPress = {onClickstyleButton} isAction = {true}
	
	
	
	
	
	
	
	borderTopLeftRadius = {8}
								borderTopRightRadius = {8}
								borderBottomRightRadius = {8}
								borderBottomLeftRadius = {8}
								borderWidth = {0}
								borderColor = {"transparent"}
								id = {"0sg7KMY3WlOUfU7-znVcx"}
								fills = {[
									{ type: "SOLID", color: "rgb(51, 51, 51)", opacity: undefined,},
								]}>
								<Text style = {stylesheet.styleText}>
									{`Apply`}
								</Text>
							</GradientView>
						</GradientView>
					</GradientView>
					<GradientView style = {stylesheet.styleNavBar} isAction = {false}
	
	
	
	
	
	borderTopLeftRadius = {0}
						borderTopRightRadius = {0}
						borderBottomRightRadius = {0}
						borderBottomLeftRadius = {0}
						borderWidth = {0}
						borderColor = {"transparent"}
						id = {"oQulLb3VQfrZA29CI41ze"}
						fills = {[
							{ type: "SOLID", color: "rgb(248, 247, 245)", opacity: undefined,},
						]}>
						<GradientView style = {stylesheet.style1Blcok} isAction = {false}
	
	
	
	
	
	
	borderTopLeftRadius = {0}
							borderTopRightRadius = {0}
							borderBottomRightRadius = {0}
							borderBottomLeftRadius = {0}
							borderWidth = {0}
							borderColor = {"transparent"}
							id = {"WsTRpMXUeH0kiDhSffbBc"}
							fills = {[
							]}>
							<GradientView style = {stylesheet.styleLeft} onPress = {onClickstyleLeft} isAction = {true}
	
	
	
	
	
	
	
	borderTopLeftRadius = {0}
								borderTopRightRadius = {0}
								borderBottomRightRadius = {0}
								borderBottomLeftRadius = {0}
								borderWidth = {0}
								borderColor = {"transparent"}
								id = {"2yKLXIYE0L9J9J3ImSuaE"}
								fills = {[
								]}>
								<GradientView style = {stylesheet.styleIconsArrowLeft} isAction = {false}
	
	
	
	
	
	
	
	
	borderTopLeftRadius = {0}
									borderTopRightRadius = {0}
									borderBottomRightRadius = {0}
									borderBottomLeftRadius = {0}
									borderWidth = {0}
									borderColor = {"transparent"}
									id = {"4KWkZ_OQ6IB9xwbeaIpCd"}
									fills = {[
									]}>
									<View style = {stylesheet.styleIconChevron}>
										<Svg
											fill = "rgba(51, 51, 51, 1)"
										>
											<Path d="M9.60938 20.3906C9.86719 20.6484 10.1953 20.7891 10.582 20.7891C11.3555 20.7891 11.9766 20.1797 11.9766 19.4062C11.9766 19.0195 11.8125 18.668 11.543 18.3984L3.33984 10.3828L11.543 2.39062C11.8125 2.12109 11.9766 1.75781 11.9766 1.38281C11.9766 0.609375 11.3555 0 10.582 0C10.1953 0 9.86719 0.140625 9.60938 0.398438L0.492188 9.30469C0.164062 9.60938 0.0117188 9.98438 0 10.3945C0 10.8047 0.164062 11.1562 0.492188 11.4727L9.60938 20.3906Z"/>
										</Svg>
									</View>
								</GradientView>
							</GradientView>
							<GradientView style = {stylesheet.styleCenter} isAction = {false}
	
	
	
	
	
	
	
	borderTopLeftRadius = {0}
								borderTopRightRadius = {0}
								borderBottomRightRadius = {0}
								borderBottomLeftRadius = {0}
								borderWidth = {0}
								borderColor = {"transparent"}
								id = {"JZ0nVYrJmLE8SDzRbq3mm"}
								fills = {[
								]}>
							</GradientView>
							<GradientView style = {stylesheet.styleRight} isAction = {false}
	
	
	
	
	
	
	
	borderTopLeftRadius = {0}
								borderTopRightRadius = {0}
								borderBottomRightRadius = {0}
								borderBottomLeftRadius = {0}
								borderWidth = {0}
								borderColor = {"transparent"}
								id = {"w_2Ek2hgQt9O9ArFTw24A"}
								fills = {[
								]}>
							</GradientView>
						</GradientView>
						<GradientView style = {stylesheet.styleSeparatorVariable} isAction = {false}
	
	
	
	
	
	
	borderTopLeftRadius = {0}
							borderTopRightRadius = {0}
							borderBottomRightRadius = {0}
							borderBottomLeftRadius = {0}
							borderWidth = {0}
							borderColor = {"transparent"}
							id = {"4nDlOdWIF1PmrRraO_NRV"}
							fills = {[
								{ type: "SOLID", color: "rgb(229, 229, 229)", opacity: undefined,},
							]}>
						</GradientView>
					</GradientView>
				</View>
			</View>
		</ScrollView>
	)
}
const stylesheet = StyleSheet.create({
 	styleTitle: {
		width: "100%",
		color: "rgba(51, 51, 51, 1)",
		fontSize: 18,
		fontFamily: "SF Pro Text_500",
		letterSpacing: 0,
		fontStyle: "normal",
		textAlign: "left",
		height: "auto",
		lineHeight: 21.5,
	},
	styleConteiner: {
		flexBasis: 0,
		flexGrow: 1,
		width: "auto",
		height: "auto",
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "flex-start",
	},
	styleSelect: {
		marginBottom: 8,
		width: "100%",
		height: "auto",
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		paddingTop: 12,
		paddingRight: 16,
		paddingBottom: 12,
		paddingLeft: 16,
	},
	styleTitleCopy1: {
		width: "100%",
		color: "rgba(51, 51, 51, 1)",
		fontSize: 18,
		fontFamily: "SF Pro Text_500",
		letterSpacing: 0,
		fontStyle: "normal",
		textAlign: "left",
		height: "auto",
		lineHeight: 21.5,
	},
	styleConteinerCopy1: {
		flexBasis: 0,
		flexGrow: 1,
		width: "auto",
		height: "auto",
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "flex-start",
	},
	styleSelectCopy1: {
		marginBottom: 8,
		width: "100%",
		height: "auto",
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		paddingTop: 12,
		paddingRight: 16,
		paddingBottom: 12,
		paddingLeft: 16,
	},
	styleTitleCopy2: {
		width: "100%",
		color: "rgba(51, 51, 51, 1)",
		fontSize: 18,
		fontFamily: "SF Pro Text_500",
		letterSpacing: 0,
		fontStyle: "normal",
		textAlign: "left",
		height: "auto",
		lineHeight: 21.5,
	},
	styleConteinerCopy2: {
		flexBasis: 0,
		flexGrow: 1,
		width: "auto",
		height: "auto",
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "flex-start",
	},
	styleSelectCopy2: {
		marginBottom: 8,
		width: "100%",
		height: "auto",
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		paddingTop: 12,
		paddingRight: 16,
		paddingBottom: 12,
		paddingLeft: 16,
	},
	styleTitleCopy3: {
		width: "100%",
		color: "rgba(51, 51, 51, 1)",
		fontSize: 18,
		fontFamily: "SF Pro Text_500",
		letterSpacing: 0,
		fontStyle: "normal",
		textAlign: "left",
		height: "auto",
		lineHeight: 21.5,
	},
	styleConteinerCopy3: {
		marginRight: 8,
		flexBasis: 0,
		flexGrow: 1,
		width: "auto",
		height: "auto",
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "flex-start",
	},
	styleIcon: {
		position: "absolute",
		left: 5,
		right: -9,
		top: 6,
		bottom: -4,
		width: "auto",
		height: "auto",
	},
	styleCheck: {
		width: 24,
		height: 24,
	},
	styleSelectCopy3: {
		marginBottom: 8,
		width: "100%",
		height: "auto",
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		paddingTop: 12,
		paddingRight: 16,
		paddingBottom: 12,
		paddingLeft: 16,
	},
	styleTitleCopy4: {
		width: "100%",
		color: "rgba(51, 51, 51, 1)",
		fontSize: 18,
		fontFamily: "SF Pro Text_500",
		letterSpacing: 0,
		fontStyle: "normal",
		textAlign: "left",
		height: "auto",
		lineHeight: 21.5,
	},
	styleConteinerCopy4: {
		marginRight: 8,
		flexBasis: 0,
		flexGrow: 1,
		width: "auto",
		height: "auto",
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "flex-start",
	},
	styleIconCopy1: {
		position: "absolute",
		left: 5,
		right: -9,
		top: 6,
		bottom: -4,
		width: "auto",
		height: "auto",
	},
	styleCheckCopy1: {
		width: 24,
		height: 24,
	},
	styleSelectCopy4: {
		marginBottom: 8,
		width: "100%",
		height: "auto",
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		paddingTop: 12,
		paddingRight: 16,
		paddingBottom: 12,
		paddingLeft: 16,
	},
	styleText: {
		width: 47,
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
	styleWrapButton: {
		width: "100%",
		height: "auto",
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "flex-start",
		paddingTop: 16,
		paddingRight: 16,
		paddingLeft: 16,
	},
	styleMainBlock: {
		position: "absolute",
		left: 0,
		right: 0,
		top: 93,
		width: "auto",
		height: "auto",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		paddingTop: 24,
		paddingBottom: 24,
	},
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
	styleStylename: {
		position: "relative",
		width: Dimensions.get("window").width,
		height: 816,
		backgroundColor: "rgba(249, 248, 246, 1)",
	},

});