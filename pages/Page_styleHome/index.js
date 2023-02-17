import React, { useState, useRef, useEffect, createRef } from "react";
import { View, Text, Image, ScrollView, Switch, SafeAreaView, TextInput, TouchableWithoutFeedback, TouchableOpacity, StyleSheet, Animated, Dimensions, Vibration, Alert, KeyboardAvoidingView, Platform} from "react-native";
import { Svg, Path } from "react-native-svg";
import { useAuth } from "../../entities/auth";
import { getTable } from "../../shared/api/data";
import { GradientView } from "../../shared/components";
export const Page_styleHome = ({ route, navigation }) => {
	const { signIn, signOut, signUp, authData , resetPassword} = useAuth();
	const onClickstyleHomeCard = (value) => {
		navigation.navigate("styleDetailScreen", { screen: "styleDetail" });
	}
	const onClickstyleHomeCardCopy1 = (value) => {
		navigation.navigate("styleDetailScreen", { screen: "styleDetail" });
	}
	const onClickstyleHomeCardCopy2 = (value) => {
		navigation.navigate("styleDetailScreen", { screen: "styleDetail" });
	}
	return (
		<ScrollView style={{width: Dimensions.get("window").width, height: Dimensions.get("window").height, backgroundColor: "rgba(249, 248, 246, 1)"}} horizontal = {false} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} bounces={false}>
			<View style={{width: Dimensions.get("window").width, height: 1232}} >
				<View style = {stylesheet.styleStylename}>
					<GradientView style = {stylesheet.styleContent} isAction = {false}
	
	
	
	
	
	borderTopLeftRadius = {0}
						borderTopRightRadius = {0}
						borderBottomRightRadius = {0}
						borderBottomLeftRadius = {0}
						borderWidth = {0}
						borderColor = {"transparent"}
						id = {"hWTtvhaeHHlsaMzD1Mmbk"}
						fills = {[
						]}>
						<GradientView style = {stylesheet.styleHomeCard} onPress = {onClickstyleHomeCard} isAction = {true}
	
	
	
	
	
	
	borderTopLeftRadius = {16}
							borderTopRightRadius = {16}
							borderBottomRightRadius = {16}
							borderBottomLeftRadius = {16}
							borderWidth = {0}
							borderColor = {"transparent"}
							id = {"8mmi-rIv-MN_5-VJGhFnp"}
							fills = {[
								{ type: "SOLID", color: "rgb(255, 255, 255)", opacity: undefined,},
							]}>
							<GradientView style = {stylesheet.styleImage} isAction = {false}
	
	
	
	
	
	
	
	borderTopLeftRadius = {12}
								borderTopRightRadius = {12}
								borderBottomRightRadius = {12}
								borderBottomLeftRadius = {12}
								borderWidth = {0}
								borderColor = {"transparent"}
								id = {"70e8Kl8QPBIkmI4i4cXnx"}
								fills = {[
									{ type: "SOLID", color: "rgb(196, 196, 196)", opacity: undefined,},
									{
										type: "IMAGE",
										opacity: undefined,
										image: "https://nyc3.digitaloceanspaces.com/sizze-storage/media/images/YjPEllMx5bObiwyuBiuP5Nxj.jpeg",
									},
								]}>
							</GradientView>
							<GradientView style = {stylesheet.styleText} isAction = {false}
	
	
	
	
	
	
	
	borderTopLeftRadius = {0}
								borderTopRightRadius = {0}
								borderBottomRightRadius = {0}
								borderBottomLeftRadius = {0}
								borderWidth = {0}
								borderColor = {"transparent"}
								id = {"Q8bwEKuqf8oVok1wxELXL"}
								fills = {[
								]}>
								<GradientView style = {stylesheet.styleLeft} isAction = {false}
	
	
	
	
	
	
	
	
	borderTopLeftRadius = {0}
									borderTopRightRadius = {0}
									borderBottomRightRadius = {0}
									borderBottomLeftRadius = {0}
									borderWidth = {0}
									borderColor = {"transparent"}
									id = {"0KECTmj6yRQQJxdH4V5yv"}
									fills = {[
									]}>
									<Text style = {stylesheet.styleTitle}>
										{`Shamanic journey to find your inner spirit animal`}
									</Text>
									<Text style = {stylesheet.styleSubtitle}>
										{`Ubud city`}
									</Text>
									<GradientView style = {stylesheet.styleDateTime} isAction = {false}
	
	
	
	
	
	
	
	
	
	borderTopLeftRadius = {0}
										borderTopRightRadius = {0}
										borderBottomRightRadius = {0}
										borderBottomLeftRadius = {0}
										borderWidth = {0}
										borderColor = {"transparent"}
										id = {"3nGt1fE1R_IfEWS0vIq44"}
										fills = {[
										]}>
										<Text style = {stylesheet.styleDate}>
											{`13 Feb 2023`}
										</Text>
										<Text style = {stylesheet.styleTime}>
											{`7:00 pm`}
										</Text>
									</GradientView>
								</GradientView>
								<GradientView style = {stylesheet.stylePriceLabel} isAction = {false}
	
	
	
	
	
	
	
	
	borderTopLeftRadius = {50}
									borderTopRightRadius = {50}
									borderBottomRightRadius = {50}
									borderBottomLeftRadius = {50}
									borderWidth = {1}
									borderColor = {"rgba(51, 51, 51, 1)"}
									id = {"5_ZL69uguOgpzpbOLEMTP"}
									fills = {[
									]}>
									<Text style = {stylesheet.stylePrice}>
										{`Free`}
									</Text>
								</GradientView>
							</GradientView>
						</GradientView>
						<GradientView style = {stylesheet.styleHomeCardCopy1} onPress = {onClickstyleHomeCardCopy1} isAction = {true}
	
	
	
	
	
	
	borderTopLeftRadius = {16}
							borderTopRightRadius = {16}
							borderBottomRightRadius = {16}
							borderBottomLeftRadius = {16}
							borderWidth = {0}
							borderColor = {"transparent"}
							id = {"LsVxQUZtLRNDrAfFH1SyP"}
							fills = {[
								{ type: "SOLID", color: "rgb(255, 255, 255)", opacity: undefined,},
							]}>
							<GradientView style = {stylesheet.styleImageCopy1} isAction = {false}
	
	
	
	
	
	
	
	borderTopLeftRadius = {12}
								borderTopRightRadius = {12}
								borderBottomRightRadius = {12}
								borderBottomLeftRadius = {12}
								borderWidth = {0}
								borderColor = {"transparent"}
								id = {"uVGgcgHTFB4Q3160zecB6"}
								fills = {[
									{
										type: "IMAGE",
										opacity: undefined,
										image: "https://nyc3.digitaloceanspaces.com/sizze-storage/media/images/xh6fbfCETAjve94eIC649u3h.jpeg",
									},
									{
										type: "IMAGE",
										opacity: undefined,
										image: "https://nyc3.digitaloceanspaces.com/sizze-storage/media/images/GUpNCI4GYyvqjFQXiZSnrB1W.jpeg",
									},
								]}>
							</GradientView>
							<GradientView style = {stylesheet.styleTextCopy1} isAction = {false}
	
	
	
	
	
	
	
	borderTopLeftRadius = {0}
								borderTopRightRadius = {0}
								borderBottomRightRadius = {0}
								borderBottomLeftRadius = {0}
								borderWidth = {0}
								borderColor = {"transparent"}
								id = {"4vQXKLTFyJGpjqAnDhsKL"}
								fills = {[
								]}>
								<GradientView style = {stylesheet.styleLeftCopy1} isAction = {false}
	
	
	
	
	
	
	
	
	borderTopLeftRadius = {0}
									borderTopRightRadius = {0}
									borderBottomRightRadius = {0}
									borderBottomLeftRadius = {0}
									borderWidth = {0}
									borderColor = {"transparent"}
									id = {"a39CNgdIN_rQSJi7tk4Ms"}
									fills = {[
									]}>
									<Text style = {stylesheet.styleTitleCopy1}>
										{`Meet the Bali Startup Ecosystem`}
									</Text>
									<Text style = {stylesheet.styleSubtitleCopy1}>
										{`Livit Hub place`}
									</Text>
									<GradientView style = {stylesheet.styleDateTimeCopy1} isAction = {false}
	
	
	
	
	
	
	
	
	
	borderTopLeftRadius = {0}
										borderTopRightRadius = {0}
										borderBottomRightRadius = {0}
										borderBottomLeftRadius = {0}
										borderWidth = {0}
										borderColor = {"transparent"}
										id = {"01Tbn3vI98xKGb4aftMOF"}
										fills = {[
										]}>
										<Text style = {stylesheet.styleDateCopy1}>
											{`21 Feb 2023`}
										</Text>
										<Text style = {stylesheet.styleTimeCopy1}>
											{`4:30 pm`}
										</Text>
									</GradientView>
								</GradientView>
								<GradientView style = {stylesheet.stylePriceLabelCopy1} isAction = {false}
	
	
	
	
	
	
	
	
	borderTopLeftRadius = {50}
									borderTopRightRadius = {50}
									borderBottomRightRadius = {50}
									borderBottomLeftRadius = {50}
									borderWidth = {1}
									borderColor = {"rgba(51, 51, 51, 1)"}
									id = {"2U_vzn_7jX-c-Ttt4tyKR"}
									fills = {[
									]}>
									<Text style = {stylesheet.stylePriceCopy1}>
										{`Free`}
									</Text>
								</GradientView>
							</GradientView>
						</GradientView>
						<GradientView style = {stylesheet.styleHomeCardCopy2} onPress = {onClickstyleHomeCardCopy2} isAction = {true}
	
	
	
	
	
	
	borderTopLeftRadius = {16}
							borderTopRightRadius = {16}
							borderBottomRightRadius = {16}
							borderBottomLeftRadius = {16}
							borderWidth = {0}
							borderColor = {"transparent"}
							id = {"r1LPiVf1OiIX5L_dPE10Z"}
							fills = {[
								{ type: "SOLID", color: "rgb(255, 255, 255)", opacity: undefined,},
							]}>
							<GradientView style = {stylesheet.styleImageCopy2} isAction = {false}
	
	
	
	
	
	
	
	borderTopLeftRadius = {12}
								borderTopRightRadius = {12}
								borderBottomRightRadius = {12}
								borderBottomLeftRadius = {12}
								borderWidth = {0}
								borderColor = {"transparent"}
								id = {"2g6OKTluOXqr8mUVZ8lL9"}
								fills = {[
									{
										type: "IMAGE",
										opacity: undefined,
										image: "https://nyc3.digitaloceanspaces.com/sizze-storage/media/images/xh6fbfCETAjve94eIC649u3h.jpeg",
									},
									{
										type: "IMAGE",
										opacity: undefined,
										image: "https://nyc3.digitaloceanspaces.com/sizze-storage/media/images/2aoQTxapb74B4FldaCOQXbSl.jpeg",
									},
								]}>
							</GradientView>
							<GradientView style = {stylesheet.styleTextCopy2} isAction = {false}
	
	
	
	
	
	
	
	borderTopLeftRadius = {0}
								borderTopRightRadius = {0}
								borderBottomRightRadius = {0}
								borderBottomLeftRadius = {0}
								borderWidth = {0}
								borderColor = {"transparent"}
								id = {"92lnjMpM8iC96R7Kj9wjH"}
								fills = {[
								]}>
								<GradientView style = {stylesheet.styleLeftCopy2} isAction = {false}
	
	
	
	
	
	
	
	
	borderTopLeftRadius = {0}
									borderTopRightRadius = {0}
									borderBottomRightRadius = {0}
									borderBottomLeftRadius = {0}
									borderWidth = {0}
									borderColor = {"transparent"}
									id = {"1by9JTyG0QtkbNvUjAgTh"}
									fills = {[
									]}>
									<Text style = {stylesheet.styleTitleCopy2}>
										{`Kundalini Activation Transmission`}
									</Text>
									<Text style = {stylesheet.styleSubtitleCopy2}>
										{`Kayu Resort & Spa`}
									</Text>
									<GradientView style = {stylesheet.styleDateTimeCopy2} isAction = {false}
	
	
	
	
	
	
	
	
	
	borderTopLeftRadius = {0}
										borderTopRightRadius = {0}
										borderBottomRightRadius = {0}
										borderBottomLeftRadius = {0}
										borderWidth = {0}
										borderColor = {"transparent"}
										id = {"YuHTsXcMn8REtQk03Le5w"}
										fills = {[
										]}>
										<Text style = {stylesheet.styleDateCopy2}>
											{`24 Feb`}
										</Text>
										<Text style = {stylesheet.styleTimeCopy2}>
											{`8:00 pm`}
										</Text>
									</GradientView>
								</GradientView>
								<GradientView style = {stylesheet.stylePriceLabelCopy2} isAction = {false}
	
	
	
	
	
	
	
	
	borderTopLeftRadius = {50}
									borderTopRightRadius = {50}
									borderBottomRightRadius = {50}
									borderBottomLeftRadius = {50}
									borderWidth = {1}
									borderColor = {"rgba(51, 51, 51, 1)"}
									id = {"IhGcm0Ey4mwZulr8Gulsy"}
									fills = {[
									]}>
									<Text style = {stylesheet.stylePriceCopy2}>
										{`$34 `}
									</Text>
								</GradientView>
							</GradientView>
						</GradientView>
					</GradientView>
				</View>
			</View>
		</ScrollView>
	)
}
const stylesheet = StyleSheet.create({
 	styleImage: {
		marginBottom: 12,
		width: "100%",
		height: 164,
		borderRadius: 12,
	},
	styleTitle: {
		marginBottom: 8,
		width: "100%",
		color: "rgba(51, 51, 51, 1)",
		fontSize: 18,
		fontFamily: "SF Pro Text_700",
		letterSpacing: 0,
		fontStyle: "normal",
		textAlign: "left",
		height: "auto",
		lineHeight: 21.5,
	},
	styleSubtitle: {
		marginBottom: 8,
		width: "100%",
		color: "rgba(132, 132, 132, 1)",
		fontSize: 16,
		fontFamily: "SF Pro Text_400",
		letterSpacing: 0,
		fontStyle: "normal",
		textAlign: "left",
		height: "auto",
		lineHeight: 19.1,
	},
	styleDate: {
		marginRight: 8,
		width: 96,
		color: "rgba(51, 51, 51, 1)",
		fontSize: 16,
		fontFamily: "SF Pro Text_400",
		letterSpacing: 0,
		fontStyle: "normal",
		textAlign: "left",
		height: 19,
		lineHeight: 19.1,
	},
	styleTime: {
		width: 65,
		color: "rgba(51, 51, 51, 1)",
		fontSize: 16,
		fontFamily: "SF Pro Text_400",
		letterSpacing: 0,
		fontStyle: "normal",
		textAlign: "left",
		height: 19,
		lineHeight: 19.1,
	},
	styleDateTime: {
		width: "100%",
		height: "auto",
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "flex-start",
	},
	styleLeft: {
		marginRight: 6,
		flexBasis: 0,
		flexGrow: 1,
		width: "auto",
		height: 97,
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "flex-start",
	},
	stylePrice: {
		width: 33,
		color: "rgba(51, 51, 51, 1)",
		fontSize: 16,
		fontFamily: "SF Pro Display_500",
		letterSpacing: 0,
		fontStyle: "normal",
		textAlign: "center",
		height: 19,
		lineHeight: 19.1,
	},
	stylePriceLabel: {
		width: "auto",
		height: "auto",
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		paddingTop: 4,
		paddingRight: 12,
		paddingBottom: 4,
		paddingLeft: 12,
		borderRadius: 50,
	},
	styleText: {
		width: "100%",
		height: "auto",
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "flex-start",
	},
	styleHomeCard: {
		marginBottom: 12,
		width: "100%",
		height: "auto",
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "flex-start",
		padding: 12,
		borderRadius: 16,
	},
	styleImageCopy1: {
		marginBottom: 12,
		width: "100%",
		height: 164,
		borderRadius: 12,
	},
	styleTitleCopy1: {
		marginBottom: 8,
		width: "100%",
		color: "rgba(51, 51, 51, 1)",
		fontSize: 18,
		fontFamily: "SF Pro Text_700",
		letterSpacing: 0,
		fontStyle: "normal",
		textAlign: "left",
		height: "auto",
		lineHeight: 21.5,
	},
	styleSubtitleCopy1: {
		marginBottom: 8,
		width: "100%",
		color: "rgba(132, 132, 132, 1)",
		fontSize: 16,
		fontFamily: "SF Pro Text_400",
		letterSpacing: 0,
		fontStyle: "normal",
		textAlign: "left",
		height: "auto",
		lineHeight: 19.1,
	},
	styleDateCopy1: {
		marginRight: 8,
		width: 96,
		color: "rgba(51, 51, 51, 1)",
		fontSize: 16,
		fontFamily: "SF Pro Text_400",
		letterSpacing: 0,
		fontStyle: "normal",
		textAlign: "left",
		height: 19,
		lineHeight: 19.1,
	},
	styleTimeCopy1: {
		width: 66,
		color: "rgba(51, 51, 51, 1)",
		fontSize: 16,
		fontFamily: "SF Pro Text_400",
		letterSpacing: 0,
		fontStyle: "normal",
		textAlign: "left",
		height: 19,
		lineHeight: 19.1,
	},
	styleDateTimeCopy1: {
		width: "100%",
		height: "auto",
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "flex-start",
	},
	styleLeftCopy1: {
		marginRight: 6,
		flexBasis: 0,
		flexGrow: 1,
		width: "auto",
		height: 97,
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "flex-start",
	},
	stylePriceCopy1: {
		width: 33,
		color: "rgba(51, 51, 51, 1)",
		fontSize: 16,
		fontFamily: "SF Pro Display_500",
		letterSpacing: 0,
		fontStyle: "normal",
		textAlign: "center",
		height: 19,
		lineHeight: 19.1,
	},
	stylePriceLabelCopy1: {
		width: "auto",
		height: "auto",
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		paddingTop: 4,
		paddingRight: 12,
		paddingBottom: 4,
		paddingLeft: 12,
		borderRadius: 50,
	},
	styleTextCopy1: {
		width: "100%",
		height: "auto",
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "flex-start",
	},
	styleHomeCardCopy1: {
		marginBottom: 12,
		width: "100%",
		height: 288,
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "flex-start",
		padding: 12,
		borderRadius: 16,
	},
	styleImageCopy2: {
		marginBottom: 12,
		width: "100%",
		height: 164,
		borderRadius: 12,
	},
	styleTitleCopy2: {
		marginBottom: 8,
		width: "100%",
		color: "rgba(51, 51, 51, 1)",
		fontSize: 18,
		fontFamily: "SF Pro Text_700",
		letterSpacing: 0,
		fontStyle: "normal",
		textAlign: "left",
		height: "auto",
		lineHeight: 21.5,
	},
	styleSubtitleCopy2: {
		marginBottom: 8,
		width: "100%",
		color: "rgba(132, 132, 132, 1)",
		fontSize: 16,
		fontFamily: "SF Pro Text_400",
		letterSpacing: 0,
		fontStyle: "normal",
		textAlign: "left",
		height: "auto",
		lineHeight: 19.1,
	},
	styleDateCopy2: {
		marginRight: 8,
		width: 55,
		color: "rgba(51, 51, 51, 1)",
		fontSize: 16,
		fontFamily: "SF Pro Text_400",
		letterSpacing: 0,
		fontStyle: "normal",
		textAlign: "left",
		height: 19,
		lineHeight: 19.1,
	},
	styleTimeCopy2: {
		width: 66,
		color: "rgba(51, 51, 51, 1)",
		fontSize: 16,
		fontFamily: "SF Pro Text_400",
		letterSpacing: 0,
		fontStyle: "normal",
		textAlign: "left",
		height: 19,
		lineHeight: 19.1,
	},
	styleDateTimeCopy2: {
		width: "100%",
		height: "auto",
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "flex-start",
	},
	styleLeftCopy2: {
		marginRight: 6,
		flexBasis: 0,
		flexGrow: 1,
		width: "auto",
		height: 97,
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "flex-start",
	},
	stylePriceCopy2: {
		width: 32,
		color: "rgba(51, 51, 51, 1)",
		fontSize: 16,
		fontFamily: "SF Pro Display_500",
		letterSpacing: 0,
		fontStyle: "normal",
		textAlign: "center",
		height: 19,
		lineHeight: 19.1,
	},
	stylePriceLabelCopy2: {
		width: "auto",
		height: "auto",
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		paddingTop: 4,
		paddingRight: 12,
		paddingBottom: 4,
		paddingLeft: 12,
		borderRadius: 50,
	},
	styleTextCopy2: {
		width: "100%",
		height: "auto",
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "flex-start",
	},
	styleHomeCardCopy2: {
		width: "100%",
		height: "auto",
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "flex-start",
		padding: 12,
		borderRadius: 16,
	},
	styleContent: {
		position: "absolute",
		left: 0,
		right: 0,
		top: 196,
		width: "auto",
		height: "auto",
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "flex-start",
		padding: 16,
	},
	styleNavBar: {
		position: "absolute",
		left: -3.960775614864329e-13,
		right: 3.979039320256561e-13,
		top: 0,
		width: "auto",
		height: 196,
	},
	styleTabBar: {
		width: "auto",
		height: 83,
		backgroundColor: "rgb(248, 247, 245)",
	},
	styleStylename: {
		position: "relative",
		width: Dimensions.get("window").width,
		height: 1232,
		backgroundColor: "rgba(249, 248, 246, 1)",
	},

});