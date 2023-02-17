import React, { useState, useRef, useEffect, createRef } from "react";
import { View, Text, Image, ScrollView, Switch, SafeAreaView, TextInput, TouchableWithoutFeedback, TouchableOpacity, StyleSheet, Animated, Dimensions, Vibration, Alert, KeyboardAvoidingView, Platform} from "react-native";
import { Svg, Path } from "react-native-svg";
import { useAuth } from "../../entities/auth";
import { getTable } from "../../shared/api/data";
import { GradientView } from "../../shared/components";
export const Page_styleMap = ({ route, navigation }) => {
	const { signIn, signOut, signUp, authData , resetPassword} = useAuth();
	return (
		<ScrollView style={{width: Dimensions.get("window").width, height: Dimensions.get("window").height, backgroundColor: "rgba(249, 248, 246, 1)"}} horizontal = {false} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} bounces={false}>
			<View style={{width: Dimensions.get("window").width, height: 812}} >
				<View style = {stylesheet.styleStylename}>
					<GradientView style = {stylesheet.styleMapLocations} isAction = {false}
	
	
	
	
	
	borderTopLeftRadius = {0}
						borderTopRightRadius = {0}
						borderBottomRightRadius = {0}
						borderBottomLeftRadius = {0}
						borderWidth = {0}
						borderColor = {"transparent"}
						id = {"Nz-KWw3_xhsP09VVjgyKh"}
						fills = {[
						]}>
						<Image style = {[stylesheet.styleMap, {transform: [{ rotate: "0deg" }]}]} source = {{uri: "https://nyc3.digitaloceanspaces.com/sizze-storage/media/images/z1JwcbiIGzNB3jI9e7UaOu07.png"}}/>
						<GradientView style = {stylesheet.styleIconLocation24} isAction = {false}
	
	
	
	
	
	
	borderTopLeftRadius = {0}
							borderTopRightRadius = {0}
							borderBottomRightRadius = {0}
							borderBottomLeftRadius = {0}
							borderWidth = {0}
							borderColor = {"transparent"}
							id = {"4BxJLLzioDsSmTk16SoTB"}
							fills = {[
							]}>
							<View style = {stylesheet.styleVector}>
								<Svg
									fill = "rgba(132, 132, 132, 1)"
								>
									<Path d="M11.0833 13.9956C11.8453 13.9956 12.4978 13.7213 13.0409 13.1726C13.5831 12.6249 13.8542 11.9662 13.8542 11.1965C13.8542 10.4267 13.5831 9.76752 13.0409 9.21889C12.4978 8.6712 11.8453 8.39735 11.0833 8.39735C10.3214 8.39735 9.66929 8.6712 9.12713 9.21889C8.58404 9.76752 8.3125 10.4267 8.3125 11.1965C8.3125 11.9662 8.58404 12.6249 9.12713 13.1726C9.66929 13.7213 10.3214 13.9956 11.0833 13.9956ZM12.807 27.7665C11.8531 28.7445 10.3136 28.7445 9.35971 27.7665C6.49557 24.8297 4.29373 21.3854 2.75421 19.0858C0.918069 16.3454 0 13.809 0 11.4764C0 7.97748 1.11434 5.19003 3.34301 3.11402C5.57076 1.03801 8.15087 0 11.0833 0C14.0158 0 16.5959 1.03801 18.8237 3.11402C21.0523 5.19003 22.1667 7.97748 22.1667 11.4764C22.1667 13.809 21.2491 16.3454 19.4138 19.0858C17.8735 21.3854 15.6713 24.8298 12.807 27.7665Z"/>
								</Svg>
							</View>
						</GradientView>
						<GradientView style = {stylesheet.styleIconLocation24Copy1} isAction = {false}
	
	
	
	
	
	
	borderTopLeftRadius = {0}
							borderTopRightRadius = {0}
							borderBottomRightRadius = {0}
							borderBottomLeftRadius = {0}
							borderWidth = {0}
							borderColor = {"transparent"}
							id = {"uHhkOFMYsc3dfFb9DrBap"}
							fills = {[
							]}>
							<View style = {stylesheet.styleVectorCopy1}>
								<Svg
									fill = "rgba(132, 132, 132, 1)"
								>
									<Path d="M11.0833 13.9956C11.8453 13.9956 12.4978 13.7213 13.0409 13.1726C13.5831 12.6249 13.8542 11.9662 13.8542 11.1965C13.8542 10.4267 13.5831 9.76752 13.0409 9.21889C12.4978 8.6712 11.8453 8.39735 11.0833 8.39735C10.3214 8.39735 9.66929 8.6712 9.12713 9.21889C8.58404 9.76752 8.3125 10.4267 8.3125 11.1965C8.3125 11.9662 8.58404 12.6249 9.12713 13.1726C9.66929 13.7213 10.3214 13.9956 11.0833 13.9956ZM12.807 27.7665C11.8531 28.7445 10.3136 28.7445 9.35971 27.7665C6.49557 24.8297 4.29373 21.3854 2.75421 19.0858C0.918069 16.3454 0 13.809 0 11.4764C0 7.97748 1.11434 5.19003 3.34301 3.11402C5.57076 1.03801 8.15087 0 11.0833 0C14.0158 0 16.5959 1.03801 18.8237 3.11402C21.0523 5.19003 22.1667 7.97748 22.1667 11.4764C22.1667 13.809 21.2491 16.3454 19.4138 19.0858C17.8735 21.3854 15.6713 24.8298 12.807 27.7665Z"/>
								</Svg>
							</View>
						</GradientView>
						<GradientView style = {stylesheet.styleIconLocation24Copy2} isAction = {false}
	
	
	
	
	
	
	borderTopLeftRadius = {0}
							borderTopRightRadius = {0}
							borderBottomRightRadius = {0}
							borderBottomLeftRadius = {0}
							borderWidth = {0}
							borderColor = {"transparent"}
							id = {"U1AkThDerHNjCxfKp1A9w"}
							fills = {[
							]}>
							<View style = {stylesheet.styleVectorCopy2}>
								<Svg
									fill = "rgba(51, 51, 51, 1)"
								>
									<Path d="M14 17.6786C14.9625 17.6786 15.7867 17.3321 16.4727 16.6391C17.1576 15.9473 17.5 15.1152 17.5 14.1429C17.5 13.1706 17.1576 12.3379 16.4727 11.6449C15.7867 10.9531 14.9625 10.6072 14 10.6072C13.0375 10.6072 12.2138 10.9531 11.529 11.6449C10.843 12.3379 10.5 13.1706 10.5 14.1429C10.5 15.1152 10.843 15.9473 11.529 16.6391C12.2138 17.3321 13.0375 17.6786 14 17.6786ZM16.1772 35.0735C14.9723 36.3089 13.0277 36.3089 11.8228 35.0734C8.20493 31.3639 5.42366 27.0131 3.479 24.1083C1.15967 20.6469 0 17.4429 0 14.4965C0 10.0768 1.40758 6.55582 4.22275 3.93349C7.03675 1.31116 10.2958 0 14 0C17.7042 0 20.9632 1.31116 23.7773 3.93349C26.5924 6.55582 28 10.0768 28 14.4965C28 17.4429 26.8409 20.6469 24.5228 24.1083C22.5771 27.0131 19.7953 31.3639 16.1772 35.0735Z"/>
								</Svg>
							</View>
						</GradientView>
						<GradientView style = {stylesheet.styleIconLocation24Copy3} isAction = {false}
	
	
	
	
	
	
	borderTopLeftRadius = {0}
							borderTopRightRadius = {0}
							borderBottomRightRadius = {0}
							borderBottomLeftRadius = {0}
							borderWidth = {0}
							borderColor = {"transparent"}
							id = {"cSoV2cYKxNxseCnpdrk-k"}
							fills = {[
							]}>
							<View style = {stylesheet.styleVectorCopy3}>
								<Svg
									fill = "rgba(132, 132, 132, 1)"
								>
									<Path d="M11.0833 13.9956C11.8453 13.9956 12.4978 13.7213 13.0409 13.1726C13.5831 12.6249 13.8542 11.9662 13.8542 11.1965C13.8542 10.4267 13.5831 9.76752 13.0409 9.21889C12.4978 8.6712 11.8453 8.39735 11.0833 8.39735C10.3214 8.39735 9.66929 8.6712 9.12713 9.21889C8.58404 9.76752 8.3125 10.4267 8.3125 11.1965C8.3125 11.9662 8.58404 12.6249 9.12713 13.1726C9.66929 13.7213 10.3214 13.9956 11.0833 13.9956ZM12.807 27.7665C11.8531 28.7445 10.3136 28.7445 9.35971 27.7665C6.49557 24.8297 4.29373 21.3854 2.75421 19.0858C0.918069 16.3454 0 13.809 0 11.4764C0 7.97748 1.11434 5.19003 3.34301 3.11402C5.57076 1.03801 8.15087 0 11.0833 0C14.0158 0 16.5959 1.03801 18.8237 3.11402C21.0523 5.19003 22.1667 7.97748 22.1667 11.4764C22.1667 13.809 21.2491 16.3454 19.4138 19.0858C17.8735 21.3854 15.6713 24.8298 12.807 27.7665Z"/>
								</Svg>
							</View>
						</GradientView>
						<GradientView style = {stylesheet.styleIconLocation24Copy4} isAction = {false}
	
	
	
	
	
	
	borderTopLeftRadius = {0}
							borderTopRightRadius = {0}
							borderBottomRightRadius = {0}
							borderBottomLeftRadius = {0}
							borderWidth = {0}
							borderColor = {"transparent"}
							id = {"yxV4M5JD44l_PxgVQDUEu"}
							fills = {[
							]}>
							<View style = {stylesheet.styleVectorCopy4}>
								<Svg
									fill = "rgba(132, 132, 132, 1)"
								>
									<Path d="M11.0833 13.9956C11.8453 13.9956 12.4978 13.7213 13.0409 13.1726C13.5831 12.6249 13.8542 11.9662 13.8542 11.1965C13.8542 10.4267 13.5831 9.76752 13.0409 9.21889C12.4978 8.6712 11.8453 8.39735 11.0833 8.39735C10.3214 8.39735 9.66929 8.6712 9.12713 9.21889C8.58404 9.76752 8.3125 10.4267 8.3125 11.1965C8.3125 11.9662 8.58404 12.6249 9.12713 13.1726C9.66929 13.7213 10.3214 13.9956 11.0833 13.9956ZM12.807 27.7665C11.8531 28.7445 10.3136 28.7445 9.35971 27.7665C6.49557 24.8297 4.29373 21.3854 2.75421 19.0858C0.918069 16.3454 0 13.809 0 11.4764C0 7.97748 1.11434 5.19003 3.34301 3.11402C5.57076 1.03801 8.15087 0 11.0833 0C14.0158 0 16.5959 1.03801 18.8237 3.11402C21.0523 5.19003 22.1667 7.97748 22.1667 11.4764C22.1667 13.809 21.2491 16.3454 19.4138 19.0858C17.8735 21.3854 15.6713 24.8298 12.807 27.7665Z"/>
								</Svg>
							</View>
						</GradientView>
						<GradientView style = {stylesheet.styleHomeCard} isAction = {false}
	
	
	
	
	
	
	borderTopLeftRadius = {16}
							borderTopRightRadius = {16}
							borderBottomRightRadius = {16}
							borderBottomLeftRadius = {16}
							borderWidth = {0}
							borderColor = {"transparent"}
							id = {"370x-BLFRiCxbXR_7f2fD"}
							fills = {[
								{ type: "SOLID", color: "rgb(255, 255, 255)", opacity: undefined,},
							]}>
							<Image style = {[stylesheet.styleImage, {transform: [{ rotate: "0deg" }]}]} source = {{uri: "https://nyc3.digitaloceanspaces.com/sizze-storage/media/images/4FItN9VjP7Fb82JL8k4XF8yV.jpeg"}}/>
							<GradientView style = {stylesheet.styleText} isAction = {false}
	
	
	
	
	
	
	
	borderTopLeftRadius = {0}
								borderTopRightRadius = {0}
								borderBottomRightRadius = {0}
								borderBottomLeftRadius = {0}
								borderWidth = {0}
								borderColor = {"transparent"}
								id = {"Q7_SB9m9NLITu2jqnmU7U"}
								fills = {[
								]}>
								<GradientView style = {stylesheet.styleLeft} isAction = {false}
	
	
	
	
	
	
	
	
	borderTopLeftRadius = {0}
									borderTopRightRadius = {0}
									borderBottomRightRadius = {0}
									borderBottomLeftRadius = {0}
									borderWidth = {0}
									borderColor = {"transparent"}
									id = {"SzEupyNDK-KZ58-34AfBi"}
									fills = {[
									]}>
									<Text style = {stylesheet.styleTitle}>
										{`Shamanic journey to find your inner spirit animal`}
									</Text>
									<GradientView style = {stylesheet.styleDateTime} isAction = {false}
	
	
	
	
	
	
	
	
	
	borderTopLeftRadius = {0}
										borderTopRightRadius = {0}
										borderBottomRightRadius = {0}
										borderBottomLeftRadius = {0}
										borderWidth = {0}
										borderColor = {"transparent"}
										id = {"YZLs6279ioi1cylQSlcLN"}
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
							</GradientView>
						</GradientView>
					</GradientView>
				</View>
			</View>
		</ScrollView>
	)
}
const stylesheet = StyleSheet.create({
 	styleMap: {
		position: "absolute",
		left: 0,
		right: 0,
		top: -13,
		borderRadius: 0,
		width: "auto",
		height: 557,
	},
	styleVector: {
		position: "absolute",
		left: 8,
		right: -14,
		top: 5,
		bottom: -24,
		width: "auto",
		height: "auto",
	},
	styleIconLocation24: {
		position: "absolute",
		left: 77,
		top: 165,
		width: 38,
		height: 38,
	},
	styleVectorCopy1: {
		position: "absolute",
		left: 8,
		right: -14,
		top: 5,
		bottom: -24,
		width: "auto",
		height: "auto",
	},
	styleIconLocation24Copy1: {
		position: "absolute",
		left: 151,
		top: 201,
		width: 38,
		height: 38,
	},
	styleVectorCopy2: {
		position: "absolute",
		left: 10,
		right: -18,
		top: 6,
		bottom: -30,
		width: "auto",
		height: "auto",
	},
	styleIconLocation24Copy2: {
		position: "absolute",
		left: 219,
		top: 279,
		width: 48,
		height: 48,
	},
	styleVectorCopy3: {
		position: "absolute",
		left: 7,
		right: -15,
		top: 5,
		bottom: -24,
		width: "auto",
		height: "auto",
	},
	styleIconLocation24Copy3: {
		position: "absolute",
		left: 115,
		top: 384,
		width: 38,
		height: 38,
	},
	styleVectorCopy4: {
		position: "absolute",
		left: 8,
		right: -14,
		top: 5,
		bottom: -24,
		width: "auto",
		height: "auto",
	},
	styleIconLocation24Copy4: {
		position: "absolute",
		left: 298,
		top: 92,
		width: 38,
		height: 38,
	},
	styleImage: {
		marginRight: 16,
		borderRadius: 12,
		width: 100,
		height: 100,
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
		flexBasis: 0,
		flexGrow: 1,
		width: "auto",
		height: "auto",
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "flex-start",
	},
	styleText: {
		width: 203,
		height: 92,
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "flex-start",
	},
	styleHomeCard: {
		position: "absolute",
		left: 16,
		right: 16,
		top: 372,
		width: "auto",
		height: "auto",
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "flex-start",
		padding: 12,
		borderRadius: 16,
	},
	styleMapLocations: {
		position: "absolute",
		left: -3.7865323450608567e-29,
		right: 0,
		top: 153.00000000000017,
		width: "auto",
		height: 659,
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
		height: 812,
		backgroundColor: "rgba(249, 248, 246, 1)",
	},

});