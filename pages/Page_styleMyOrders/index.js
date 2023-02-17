import React, { useState, useRef, useEffect, createRef } from "react";
import { View, Text, Image, ScrollView, Switch, SafeAreaView, TextInput, TouchableWithoutFeedback, TouchableOpacity, StyleSheet, Animated, Dimensions, Vibration, Alert, KeyboardAvoidingView, Platform} from "react-native";
import { Svg, Path } from "react-native-svg";
import { useAuth } from "../../entities/auth";
import { getTable } from "../../shared/api/data";
import { GradientView } from "../../shared/components";
export const Page_styleMyOrders = ({ route, navigation }) => {
	const { signIn, signOut, signUp, authData , resetPassword} = useAuth();
	const onClickstyleHomeCard = (value) => {
		navigation.navigate("styleDetailScreen", { screen: "styleDetail" });
	}
	const onClickstyleHomeCardCopy1 = (value) => {
		navigation.navigate("styleDetailScreen", { screen: "styleDetail" });
	}
	return (
		<ScrollView style={{width: Dimensions.get("window").width, height: Dimensions.get("window").height, backgroundColor: "rgba(249, 248, 246, 1)"}} horizontal = {false} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} bounces={false}>
			<View style={{width: Dimensions.get("window").width, height: 812}} >
				<View style = {stylesheet.styleStylename}>
					<GradientView style = {stylesheet.styleContent} isAction = {false}
	
	
	
	
	
	borderTopLeftRadius = {0}
						borderTopRightRadius = {0}
						borderBottomRightRadius = {0}
						borderBottomLeftRadius = {0}
						borderWidth = {0}
						borderColor = {"transparent"}
						id = {"p05VvpSpNbp-87hmtypxH"}
						fills = {[
						]}>
						<GradientView style = {stylesheet.styleHomeCard} onPress = {onClickstyleHomeCard} isAction = {true}
	
	
	
	
	
	
	borderTopLeftRadius = {16}
							borderTopRightRadius = {16}
							borderBottomRightRadius = {16}
							borderBottomLeftRadius = {16}
							borderWidth = {0}
							borderColor = {"transparent"}
							id = {"ujd6cKgwJll9y_tKyGj2N"}
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
								id = {"ZySHnvh80CvPAnuP8VX8M"}
								fills = {[
									{
										type: "IMAGE",
										opacity: undefined,
										image: "https://nyc3.digitaloceanspaces.com/sizze-storage/media/images/wKJhmKi6vTMnaopemNgkstSf.jpeg",
									},
									{
										type: "IMAGE",
										opacity: undefined,
										image: "https://nyc3.digitaloceanspaces.com/sizze-storage/media/images/Gl4R1JfsrVPIMM89qYIQusni.jpeg",
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
								id = {"uZSFY5vBpDtr9VKfcB_yA"}
								fills = {[
								]}>
								<GradientView style = {stylesheet.styleLeft} isAction = {false}
	
	
	
	
	
	
	
	
	borderTopLeftRadius = {0}
									borderTopRightRadius = {0}
									borderBottomRightRadius = {0}
									borderBottomLeftRadius = {0}
									borderWidth = {0}
									borderColor = {"transparent"}
									id = {"U3CE1PNhTR79I_JaxUJo5"}
									fills = {[
									]}>
									<Text style = {stylesheet.styleTitle}>
										{`Meet the Bali Startup Ecosystem`}
									</Text>
									<Text style = {stylesheet.styleSubtitle}>
										{`Livit Hub place`}
									</Text>
									<GradientView style = {stylesheet.styleDateTime} isAction = {false}
	
	
	
	
	
	
	
	
	
	borderTopLeftRadius = {0}
										borderTopRightRadius = {0}
										borderBottomRightRadius = {0}
										borderBottomLeftRadius = {0}
										borderWidth = {0}
										borderColor = {"transparent"}
										id = {"iGn2ocQ-DbSIA8neOTm77"}
										fills = {[
										]}>
										<Text style = {stylesheet.styleDate}>
											{`24 Feb 2023`}
										</Text>
										<Text style = {stylesheet.styleTime}>
											{`8:00 pm - 10:00 pm`}
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
									id = {"coKduhtUPTy49Rkrqb7If"}
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
							id = {"q1k0-nQeKnlSE-IUzJi8s"}
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
								id = {"6UT4qDmoGTv4WvtbSY0BH"}
								fills = {[
									{
										type: "IMAGE",
										opacity: undefined,
										image: "https://nyc3.digitaloceanspaces.com/sizze-storage/media/images/wKJhmKi6vTMnaopemNgkstSf.jpeg",
									},
									{
										type: "IMAGE",
										opacity: undefined,
										image: "https://nyc3.digitaloceanspaces.com/sizze-storage/media/images/gcoUk0DIGo6p80Mo7ouhXS55.jpeg",
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
								id = {"udE-q1E_ns80h7PSuomb0"}
								fills = {[
								]}>
								<GradientView style = {stylesheet.styleLeftCopy1} isAction = {false}
	
	
	
	
	
	
	
	
	borderTopLeftRadius = {0}
									borderTopRightRadius = {0}
									borderBottomRightRadius = {0}
									borderBottomLeftRadius = {0}
									borderWidth = {0}
									borderColor = {"transparent"}
									id = {"Yoj-CCYcv9q6ZyMEBFIQe"}
									fills = {[
									]}>
									<Text style = {stylesheet.styleTitleCopy1}>
										{`Kundalini Activation Transmission`}
									</Text>
									<Text style = {stylesheet.styleSubtitleCopy1}>
										{`Kayu Resort & Spa`}
									</Text>
									<GradientView style = {stylesheet.styleDateTimeCopy1} isAction = {false}
	
	
	
	
	
	
	
	
	
	borderTopLeftRadius = {0}
										borderTopRightRadius = {0}
										borderBottomRightRadius = {0}
										borderBottomLeftRadius = {0}
										borderWidth = {0}
										borderColor = {"transparent"}
										id = {"FZ3NhZiSqNKkAK_xDvwm4"}
										fills = {[
										]}>
										<Text style = {stylesheet.styleDateCopy1}>
											{`24 Feb`}
										</Text>
										<Text style = {stylesheet.styleTimeCopy1}>
											{`8:00 pm`}
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
									id = {"C-yjZXYW8ekF7mxf5CGat"}
									fills = {[
									]}>
									<Text style = {stylesheet.stylePriceCopy1}>
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
		width: 99,
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
		width: 153,
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
		top: 101,
		width: "auto",
		height: "auto",
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "flex-start",
		padding: 16,
	},
	styleStylename: {
		position: "relative",
		width: Dimensions.get("window").width,
		height: 812,
		backgroundColor: "rgba(249, 248, 246, 1)",
	},

});