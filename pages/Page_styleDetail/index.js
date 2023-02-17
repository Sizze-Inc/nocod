import React, { useState, useRef, useEffect, createRef } from "react";
import { View, Text, Image, ScrollView, Switch, SafeAreaView, TextInput, TouchableWithoutFeedback, TouchableOpacity, StyleSheet, Animated, Dimensions, Vibration, Alert, KeyboardAvoidingView, Platform} from "react-native";
import { Svg, Path } from "react-native-svg";
import { useAuth } from "../../entities/auth";
import { getTable } from "../../shared/api/data";
import { GradientView } from "../../shared/components";
export const Page_styleDetail = ({ route, navigation }) => {
	const { signIn, signOut, signUp, authData , resetPassword} = useAuth();
	return (
		<ScrollView style={{width: Dimensions.get("window").width, height: Dimensions.get("window").height, backgroundColor: "rgba(249, 248, 246, 1)"}} horizontal = {false} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} bounces={false}>
			<View style={{width: Dimensions.get("window").width, height: 1091}} >
				<View style = {stylesheet.styleStylename}>
					<GradientView style = {stylesheet.styleContent} isAction = {false}
	
	
	
	
	
	borderTopLeftRadius = {0}
						borderTopRightRadius = {0}
						borderBottomRightRadius = {0}
						borderBottomLeftRadius = {0}
						borderWidth = {0}
						borderColor = {"transparent"}
						id = {"OYbtkCiY1T0pgEVOzq5ox"}
						fills = {[
						]}>
						<GradientView style = {stylesheet.styleImageBlock} isAction = {false}
	
	
	
	
	
	
	borderTopLeftRadius = {0}
							borderTopRightRadius = {0}
							borderBottomRightRadius = {0}
							borderBottomLeftRadius = {0}
							borderWidth = {0}
							borderColor = {"transparent"}
							id = {"5Jqv5BhSJvru4B9Ukm5NQ"}
							fills = {[
							]}>
							<Image style = {[stylesheet.styleImageBlockCopy1, {transform: [{ rotate: "0deg" }]}]} source = {{uri: "https://nyc3.digitaloceanspaces.com/sizze-storage/media/images/RCeexkokU4DeJl9th11ZpdNl.jpeg"}}/>
						</GradientView>
						<GradientView style = {stylesheet.styleTextBlock} isAction = {false}
	
	
	
	
	
	
	borderTopLeftRadius = {12}
							borderTopRightRadius = {12}
							borderBottomRightRadius = {12}
							borderBottomLeftRadius = {12}
							borderWidth = {0}
							borderColor = {"transparent"}
							id = {"0ZZNszKimbJ59FF7Hz1-B"}
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
								id = {"FjwL75VW_K10zZt2tD67Q"}
								fills = {[
								]}>
								<Text style = {stylesheet.styleTitle}>
									{`Kundalini Activation Transmission`}
								</Text>
								<GradientView style = {stylesheet.styleLabel} isAction = {false}
	
	
	
	
	
	
	
	
	borderTopLeftRadius = {50}
									borderTopRightRadius = {50}
									borderBottomRightRadius = {50}
									borderBottomLeftRadius = {50}
									borderWidth = {1}
									borderColor = {"rgba(51, 51, 51, 1)"}
									id = {"YOuIJXIHiX8v_Ih8aR6iW"}
									fills = {[
									]}>
									<Text style = {stylesheet.stylePrice}>
										{`$34`}
									</Text>
								</GradientView>
							</GradientView>
							<Text style = {stylesheet.styleBody}>
								{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. `}
							</Text>
						</GradientView>
						<GradientView style = {stylesheet.styleCell} isAction = {false}
	
	
	
	
	
	
	borderTopLeftRadius = {0}
							borderTopRightRadius = {0}
							borderBottomRightRadius = {0}
							borderBottomLeftRadius = {0}
							borderWidth = {0}
							borderColor = {"transparent"}
							id = {"5lF-diJKOQtcxJjG6UkYF"}
							fills = {[
							]}>
							<GradientView style = {stylesheet.styleClock} isAction = {false}
	
	
	
	
	
	
	
	borderTopLeftRadius = {0}
								borderTopRightRadius = {0}
								borderBottomRightRadius = {0}
								borderBottomLeftRadius = {0}
								borderWidth = {0}
								borderColor = {"transparent"}
								id = {"AdaQ4RiovGmxz-nALG3fS"}
								fills = {[
								]}>
								<View style = {stylesheet.styleClockCopy1}>
									<Svg
										fill = "rgba(51, 51, 51, 1)"
									>
										<Path d="M11.0353 22.0706C17.0866 22.0706 22.0813 17.0759 22.0813 11.0353C22.0813 4.9947 17.0759 0 11.0246 0C4.98403 0 0 4.9947 0 11.0353C0 17.0759 4.9947 22.0706 11.0353 22.0706ZM11.0353 19.8721C6.13665 19.8721 2.21987 15.9339 2.21987 11.0353C2.21987 6.13665 6.13665 2.20919 11.0246 2.20919C15.9233 2.20919 19.8614 6.13665 19.8721 11.0353C19.8827 15.9339 15.9339 19.8721 11.0353 19.8721ZM5.65639 12.38L11.0246 12.38C11.5156 12.38 11.8891 12.0065 11.8891 11.5262L11.8891 4.54646C11.8891 4.0662 11.5156 3.69266 11.0246 3.69266C10.555 3.69266 10.1815 4.0662 10.1815 4.54646L10.1815 10.6724L5.65639 10.6724C5.17613 10.6724 4.8026 11.046 4.8026 11.5262C4.8026 12.0065 5.17613 12.38 5.65639 12.38Z"/>
									</Svg>
								</View>
							</GradientView>
							<GradientView style = {stylesheet.styleConteiner} isAction = {false}
	
	
	
	
	
	
	
	borderTopLeftRadius = {0}
								borderTopRightRadius = {0}
								borderBottomRightRadius = {0}
								borderBottomLeftRadius = {0}
								borderWidth = {0}
								borderColor = {"transparent"}
								id = {"BXSi8dNS3D8urBHE8CEzD"}
								fills = {[
								]}>
								<Text style = {stylesheet.styleTitleCopy1}>
									{`Fri, Feb 24, 2023`}
								</Text>
								<Text style = {stylesheet.styleSubtitle}>
									{`8:00 pm - 10:00 pm`}
								</Text>
							</GradientView>
						</GradientView>
						<GradientView style = {stylesheet.styleCellCopy1} isAction = {false}
	
	
	
	
	
	
	borderTopLeftRadius = {0}
							borderTopRightRadius = {0}
							borderBottomRightRadius = {0}
							borderBottomLeftRadius = {0}
							borderWidth = {0}
							borderColor = {"transparent"}
							id = {"gyjaFmLQfhef1APNvccIL"}
							fills = {[
							]}>
							<GradientView style = {stylesheet.styleIconLocation24} isAction = {false}
	
	
	
	
	
	
	
	borderTopLeftRadius = {0}
								borderTopRightRadius = {0}
								borderBottomRightRadius = {0}
								borderBottomLeftRadius = {0}
								borderWidth = {0}
								borderColor = {"transparent"}
								id = {"wJmIH-O4oPap12iJ5Kj41"}
								fills = {[
								]}>
								<View style = {stylesheet.styleVector}>
									<Svg
										fill = "rgba(51, 51, 51, 1)"
									>
										<Path d="M9.91667 12.5224C10.5984 12.5224 11.1823 12.2769 11.6682 11.786C12.1533 11.296 12.3958 10.7066 12.3958 10.0179C12.3958 9.32916 12.1533 8.73936 11.6682 8.24848C11.1823 7.75844 10.5984 7.51342 9.91667 7.51342C9.23489 7.51342 8.65147 7.75844 8.16638 8.24848C7.68046 8.73936 7.4375 9.32916 7.4375 10.0179C7.4375 10.7066 7.68046 11.296 8.16638 11.786C8.65147 12.2769 9.23489 12.5224 9.91667 12.5224ZM11.4589 24.8437C10.6054 25.7188 9.22795 25.7188 8.37448 24.8437C5.81182 22.2161 3.84176 19.1343 2.46429 17.0767C0.82143 14.6249 0 12.3554 0 10.2683C0 7.13775 0.997038 4.64371 2.99111 2.78623C4.98436 0.928742 7.29288 0 9.91667 0C12.5405 0 14.849 0.928742 16.8422 2.78623C18.8363 4.64371 19.8333 7.13775 19.8333 10.2683C19.8333 12.3554 19.0123 14.6249 17.3703 17.0767C15.9921 19.1343 14.0216 22.2161 11.4589 24.8437Z"/>
									</Svg>
								</View>
							</GradientView>
							<GradientView style = {stylesheet.styleConteinerCopy1} isAction = {false}
	
	
	
	
	
	
	
	borderTopLeftRadius = {0}
								borderTopRightRadius = {0}
								borderBottomRightRadius = {0}
								borderBottomLeftRadius = {0}
								borderWidth = {0}
								borderColor = {"transparent"}
								id = {"5Zdt9yTtjkhXEQ4Bjgzf3"}
								fills = {[
								]}>
								<Text style = {stylesheet.styleTitleCopy2}>
									{`Kayu Resort & Spa`}
								</Text>
								<Text style = {stylesheet.styleSubtitleCopy1}>
									{`Jalan Bukai, Keta Sel, Bali, 327891`}
								</Text>
							</GradientView>
						</GradientView>
						<GradientView style = {stylesheet.styleMapLocations} isAction = {false}
	
	
	
	
	
	
	borderTopLeftRadius = {12}
							borderTopRightRadius = {12}
							borderBottomRightRadius = {12}
							borderBottomLeftRadius = {12}
							borderWidth = {1}
							borderColor = {"rgba(229, 229, 229, 1)"}
							id = {"_kdnzOu8_8OEAQ8J0le7s"}
							fills = {[
							]}>
							<Image style = {[stylesheet.styleMap, {transform: [{ rotate: "0deg" }]}]} source = {{uri: "https://nyc3.digitaloceanspaces.com/sizze-storage/media/images/nmw5igw9gzUWODmRWyUnTdrY.png"}}/>
							<GradientView style = {stylesheet.styleIconLocation24Copy1} isAction = {false}
	
	
	
	
	
	
	
	borderTopLeftRadius = {12}
								borderTopRightRadius = {12}
								borderBottomRightRadius = {12}
								borderBottomLeftRadius = {12}
								borderWidth = {0}
								borderColor = {"transparent"}
								id = {"8qo5B52ZSEmsm_NRqS5QI"}
								fills = {[
								]}>
								<View style = {stylesheet.styleVectorCopy1}>
									<Svg
										fill = "rgba(51, 51, 51, 1)"
									>
										<Path d="M9.91667 12.5224C10.5984 12.5224 11.1823 12.2769 11.6682 11.786C12.1533 11.296 12.3958 10.7066 12.3958 10.0179C12.3958 9.32916 12.1533 8.73936 11.6682 8.24848C11.1823 7.75844 10.5984 7.51342 9.91667 7.51342C9.23489 7.51342 8.65147 7.75844 8.16638 8.24848C7.68046 8.73936 7.4375 9.32916 7.4375 10.0179C7.4375 10.7066 7.68046 11.296 8.16638 11.786C8.65147 12.2769 9.23489 12.5224 9.91667 12.5224ZM11.4589 24.8437C10.6054 25.7188 9.22795 25.7188 8.37448 24.8437C5.81182 22.2161 3.84176 19.1343 2.46429 17.0767C0.82143 14.6249 0 12.3554 0 10.2683C0 7.13775 0.997038 4.64371 2.99111 2.78623C4.98436 0.928742 7.29288 0 9.91667 0C12.5405 0 14.849 0.928742 16.8422 2.78623C18.8363 4.64371 19.8333 7.13775 19.8333 10.2683C19.8333 12.3554 19.0123 14.6249 17.3703 17.0767C15.9921 19.1343 14.0216 22.2161 11.4589 24.8437Z"/>
									</Svg>
								</View>
							</GradientView>
						</GradientView>
					</GradientView>
					<GradientView style = {stylesheet.styleButtonBar} isAction = {false}
	
	
	
	
	
	borderTopLeftRadius = {0}
						borderTopRightRadius = {0}
						borderBottomRightRadius = {0}
						borderBottomLeftRadius = {0}
						borderWidth = {0}
						borderColor = {"transparent"}
						id = {"aMZZLXToBXwCyH0R2CrsB"}
						fills = {[
							{ type: "SOLID", color: "rgb(248, 247, 245)", opacity: undefined,},
						]}>
						<GradientView style = {stylesheet.styleButton} isAction = {false}
	
	
	
	
	
	
	borderTopLeftRadius = {8}
							borderTopRightRadius = {8}
							borderBottomRightRadius = {8}
							borderBottomLeftRadius = {8}
							borderWidth = {0}
							borderColor = {"transparent"}
							id = {"EuAqHjDREJeMEjQEr6Qjj"}
							fills = {[
								{ type: "SOLID", color: "rgb(51, 51, 51)", opacity: undefined,},
							]}>
							<Text style = {stylesheet.styleText}>
								{`Buy`}
							</Text>
						</GradientView>
					</GradientView>
				</View>
			</View>
		</ScrollView>
	)
}
const stylesheet = StyleSheet.create({
 	styleImageBlockCopy1: {
		borderRadius: 12,
		width: "100%",
		height: 256,
	},
	styleImageBlock: {
		marginBottom: 24,
		width: "100%",
		height: "auto",
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "flex-start",
	},
	styleTitle: {
		marginRight: 8,
		flexBasis: 0,
		flexGrow: 1,
		width: "auto",
		color: "rgba(51, 51, 51, 1)",
		fontSize: 22,
		fontFamily: "SF Pro Text_700",
		letterSpacing: 0,
		fontStyle: "normal",
		textAlign: "left",
		height: 53,
		lineHeight: 26.3,
	},
	stylePrice: {
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
	styleLabel: {
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
	styleTopLine: {
		marginBottom: 12,
		width: "100%",
		height: "auto",
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "flex-start",
	},
	styleBody: {
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
	styleTextBlock: {
		marginBottom: 24,
		width: "100%",
		height: "auto",
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "flex-start",
		padding: 16,
		borderRadius: 12,
	},
	styleClockCopy1: {
		position: "absolute",
		left: 6,
		right: -16,
		top: 6,
		bottom: -16,
		width: "auto",
		height: "auto",
	},
	styleClock: {
		marginRight: 8,
		width: 34,
		height: 34,
	},
	styleTitleCopy1: {
		marginBottom: 4,
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
	styleSubtitle: {
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
	styleCell: {
		marginBottom: 24,
		width: "100%",
		height: "auto",
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "flex-start",
	},
	styleVector: {
		position: "absolute",
		left: 7,
		right: -13,
		top: 4,
		bottom: -22,
		width: "auto",
		height: "auto",
	},
	styleIconLocation24: {
		marginRight: 8,
		width: 34,
		height: 34,
	},
	styleTitleCopy2: {
		marginBottom: 4,
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
	styleSubtitleCopy1: {
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
	styleCellCopy1: {
		marginBottom: 24,
		width: "100%",
		height: "auto",
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "flex-start",
	},
	styleMap: {
		position: "absolute",
		left: 0,
		right: 0,
		top: 0,
		borderRadius: 12,
		width: "auto",
		height: 144,
	},
	styleVectorCopy1: {
		position: "absolute",
		left: 7,
		right: -13,
		top: 4,
		bottom: -22,
		width: "auto",
		height: "auto",
	},
	styleIconLocation24Copy1: {
		position: "absolute",
		left: 154,
		top: 54,
		width: 34,
		height: 34,
		borderRadius: 12,
	},
	styleMapLocations: {
		width: "100%",
		height: 143,
		borderRadius: 12,
	},
	styleContent: {
		position: "absolute",
		left: 0,
		right: 0,
		top: 94,
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
	styleText: {
		width: 29,
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
		width: "100%",
		height: 52,
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 8,
	},
	styleButtonBar: {
		position: "absolute",
		left: 0,
		right: 0,
		bottom: 0,
		width: "auto",
		height: "auto",
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "flex-start",
		paddingTop: 8,
		paddingRight: 16,
		paddingBottom: 40,
		paddingLeft: 16,
	},
	styleStylename: {
		position: "relative",
		width: Dimensions.get("window").width,
		height: 1091,
		backgroundColor: "rgba(249, 248, 246, 1)",
	},

});