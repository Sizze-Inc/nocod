import React, { useState, useRef, useEffect, createRef } from "react";
import { View, Text, Image, ScrollView, Switch, SafeAreaView, TextInput, TouchableWithoutFeedback, TouchableOpacity, StyleSheet, Animated, Dimensions, Vibration, Alert, KeyboardAvoidingView, Platform} from "react-native";
import { Svg, Path } from "react-native-svg";
import { useAuth } from "../../entities/auth";
import { getTable } from "../../shared/api/data";
import { GradientView } from "../../shared/components";
export const Page_styleSignIn = ({ route, navigation }) => {
	const { signIn, signOut, signUp, authData , resetPassword} = useAuth();
	const [focusstyleTextField, setFocusstyleTextField] = useState(false);
	const refstyleTextField = useRef();
	const [focusstyleTextFieldCopy1, setFocusstyleTextFieldCopy1] = useState(false);
	const refstyleTextFieldCopy1 = useRef();
	const onClickstyleFrame = (value) => {
		navigation.navigate("styleProfileScreen", { screen: "styleProfile" });
	}
	return (
		<ScrollView style={{width: Dimensions.get("window").width, height: Dimensions.get("window").height, backgroundColor: "rgba(249, 248, 246, 1)"}} horizontal = {false} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} bounces={false}>
			<View style={{width: Dimensions.get("window").width, height: 812}} >
				<View style = {stylesheet.styleStylename}>
					<GradientView style = {stylesheet.styleNavBar} isAction = {false}
	
	
	
	
	
	borderTopLeftRadius = {0}
						borderTopRightRadius = {0}
						borderBottomRightRadius = {0}
						borderBottomLeftRadius = {0}
						borderWidth = {0}
						borderColor = {"transparent"}
						id = {"J7XriibQCMBTGfy5u3YZJ"}
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
							id = {"aL2SXFo2rsIwP419FHJeS"}
							fills = {[
							]}>
							<GradientView style = {stylesheet.styleLeft} isAction = {false}
	
	
	
	
	
	
	
	borderTopLeftRadius = {0}
								borderTopRightRadius = {0}
								borderBottomRightRadius = {0}
								borderBottomLeftRadius = {0}
								borderWidth = {0}
								borderColor = {"transparent"}
								id = {"Ccg1qccBzvGZ87CWIneGA"}
								fills = {[
								]}>
								<GradientView style = {stylesheet.styleIconsArrowLeft} isAction = {false}
	
	
	
	
	
	
	
	
	borderTopLeftRadius = {0}
									borderTopRightRadius = {0}
									borderBottomRightRadius = {0}
									borderBottomLeftRadius = {0}
									borderWidth = {0}
									borderColor = {"transparent"}
									id = {"_tr989_Z0DFhnrqkE0esv"}
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
								id = {"9B8qsKPPJy3sbLUKyiPDf"}
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
								id = {"6Wdi4noB-RIwitI-gWKW7"}
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
							id = {"V6RkQ4bkDyhSbY2_wINze"}
							fills = {[
								{ type: "SOLID", color: "rgb(229, 229, 229)", opacity: undefined,},
							]}>
						</GradientView>
					</GradientView>
					<GradientView style = {stylesheet.styleBottomSheet} isAction = {false}
	
	
	
	
	
	borderTopLeftRadius = {24}
						borderTopRightRadius = {24}
						borderBottomRightRadius = {0}
						borderBottomLeftRadius = {0}
						borderWidth = {0}
						borderColor = {"transparent"}
						id = {"eBL2Qznj51R02um4y0STI"}
						fills = {[
							{ type: "SOLID", color: "rgb(255, 255, 255)", opacity: undefined,},
						]}>
						<GradientView style = {stylesheet.styleConteiner} isAction = {false}
	
	
	
	
	
	
	borderTopLeftRadius = {0}
							borderTopRightRadius = {0}
							borderBottomRightRadius = {0}
							borderBottomLeftRadius = {0}
							borderWidth = {0}
							borderColor = {"transparent"}
							id = {"AAE1TqJ_hZg-0tfsLeuRA"}
							fills = {[
							]}>
							<GradientView style = {stylesheet.styleFrame} onPress = {onClickstyleFrame} isAction = {true}
	
	
	
	
	
	
	
	borderTopLeftRadius = {0}
								borderTopRightRadius = {0}
								borderBottomRightRadius = {0}
								borderBottomLeftRadius = {0}
								borderWidth = {0}
								borderColor = {"transparent"}
								id = {"6CRRPAInA9dQOUpdbuU0w"}
								fills = {[
									{ type: "SOLID", color: "rgb(128, 128, 128)", opacity: 0,},
								]}>
								<GradientView style = {stylesheet.styleXmark} isAction = {false}
	
	
	
	
	
	
	
	
	borderTopLeftRadius = {0}
									borderTopRightRadius = {0}
									borderBottomRightRadius = {0}
									borderBottomLeftRadius = {0}
									borderWidth = {0}
									borderColor = {"transparent"}
									id = {"BiUCwW9On0oBL3OAZ8yAM"}
									fills = {[
									]}>
									<View style = {stylesheet.styleXmarkCopy1}>
										<Svg
											fill = "rgba(51, 51, 51, 1)"
										>
											<Path d="M0.282358 12.4728C-0.0867825 12.8419 -0.104361 13.5011 0.291147 13.8878C0.677866 14.2745 1.33705 14.2658 1.70619 13.8966L7.08509 8.50892L12.4728 13.8966C12.8507 14.2745 13.5011 14.2745 13.8878 13.8878C14.2658 13.4923 14.2745 12.8507 13.8878 12.4728L8.50892 7.08509L13.8878 1.70619C14.2745 1.32826 14.2745 0.677866 13.8878 0.291147C13.4923 -0.0867825 12.8507 -0.0955716 12.4728 0.282358L7.08509 5.67005L1.70619 0.282358C1.33705 -0.0867825 0.669077 -0.104361 0.291147 0.291147C-0.0955716 0.677866 -0.0867825 1.33705 0.282358 1.70619L5.67005 7.08509L0.282358 12.4728Z"/>
										</Svg>
									</View>
								</GradientView>
							</GradientView>
						</GradientView>
						<GradientView style = {stylesheet.styleContent} isAction = {false}
	
	
	
	
	
	
	borderTopLeftRadius = {0}
							borderTopRightRadius = {0}
							borderBottomRightRadius = {0}
							borderBottomLeftRadius = {0}
							borderWidth = {0}
							borderColor = {"transparent"}
							id = {"0ElXukNPKZa871rdi9mys"}
							fills = {[
							]}>
							<GradientView style = {stylesheet.styleBlockWithLogo} isAction = {false}
	
	
	
	
	
	
	
	borderTopLeftRadius = {0}
								borderTopRightRadius = {0}
								borderBottomRightRadius = {0}
								borderBottomLeftRadius = {0}
								borderWidth = {0}
								borderColor = {"transparent"}
								id = {"sm0dikywpD-KUJUyxzHGB"}
								fills = {[
								]}>
								<GradientView style = {stylesheet.styleTextBlocks} isAction = {false}
	
	
	
	
	
	
	
	
	borderTopLeftRadius = {0}
									borderTopRightRadius = {0}
									borderBottomRightRadius = {0}
									borderBottomLeftRadius = {0}
									borderWidth = {0}
									borderColor = {"transparent"}
									id = {"HTpiRUIPJDD26BkG0LM1e"}
									fills = {[
									]}>
									<Text style = {stylesheet.styleHeyThere}>
										{`Sign in with email`}
									</Text>
									<Text style = {stylesheet.styleYouCanUseYourEmailOrUsernameOrContinueWithYourSocialAccount}>
										{`Please enter your email, we will send a verification code to it`}
									</Text>
								</GradientView>
							</GradientView>
							<GradientView style = {stylesheet.styleInputs} isAction = {false}
	
	
	
	
	
	
	
	borderTopLeftRadius = {0}
								borderTopRightRadius = {0}
								borderBottomRightRadius = {0}
								borderBottomLeftRadius = {0}
								borderWidth = {0}
								borderColor = {"transparent"}
								id = {"I44BjxuURnLi_-LUBt2p9"}
								fills = {[
								]}>
								<TouchableOpacity style = {[stylesheet.styleTextField, {backgroundColor : focusstyleTextField ? "rgba(255, 255, 255, 1)" : "rgb(255, 255, 255)"}, {borderWidth : 1} , {borderColor : focusstyleTextField ? "rgba(126, 88, 255, 1)" : "rgba(132, 132, 132, 1)"}]} onPress={() => refstyleTextField.current.focus()} onClick={() => refstyleTextField.current.focus()}>
									<TextInput
										secureTextEntry={false}
										placeholderTextColor = {"rgba(102, 102, 102, 1)"}
										placeholder = {"Email"}
										multiline={false}
										ref={refstyleTextField}
										onBlur = {() => setFocusstyleTextField(false)}
										onFocus = {() => setFocusstyleTextField(true)}
										style = {[stylesheet.styleText, {outline: "none", position: "relative", left: 0, right:0, top:0}]}>
									</TextInput>
									<GradientView style = {stylesheet.styleButton} isAction = {false}
	
	
	
	
	
	
	
	
	
	borderTopLeftRadius = {8}
										borderTopRightRadius = {8}
										borderBottomRightRadius = {8}
										borderBottomLeftRadius = {8}
										borderWidth = {0}
										borderColor = {"transparent"}
										id = {"Q5cLbNVddVqhesJO8Es2W"}
										fills = {[
											{ type: "SOLID", color: "rgb(51, 51, 51)", opacity: undefined,},
										]}>
										<Text style = {stylesheet.styleSendCode}>
											{`Send Code`}
										</Text>
									</GradientView>
								</TouchableOpacity>
								<TouchableOpacity style = {[stylesheet.styleTextFieldCopy1, {backgroundColor : focusstyleTextFieldCopy1 ? "rgba(255, 255, 255, 1)" : "rgb(255, 255, 255)"}, {borderWidth : 1} , {borderColor : focusstyleTextFieldCopy1 ? "rgba(126, 88, 255, 1)" : "rgba(132, 132, 132, 1)"}]} onPress={() => refstyleTextFieldCopy1.current.focus()} onClick={() => refstyleTextFieldCopy1.current.focus()}>
									<TextInput
										secureTextEntry={false}
										placeholderTextColor = {"rgba(102, 102, 102, 1)"}
										placeholder = {"Verification code"}
										multiline={false}
										ref={refstyleTextFieldCopy1}
										onBlur = {() => setFocusstyleTextFieldCopy1(false)}
										onFocus = {() => setFocusstyleTextFieldCopy1(true)}
										style = {[stylesheet.styleTextCopy1, {outline: "none", position: "relative", left: 0, right:0, top:0}]}>
									</TextInput>
								</TouchableOpacity>
							</GradientView>
						</GradientView>
						<GradientView style = {stylesheet.styleConteinerCopy1} isAction = {false}
	
	
	
	
	
	
	borderTopLeftRadius = {0}
							borderTopRightRadius = {0}
							borderBottomRightRadius = {0}
							borderBottomLeftRadius = {0}
							borderWidth = {0}
							borderColor = {"transparent"}
							id = {"JqdynQr6dVmg1Q4a87dYc"}
							fills = {[
							]}>
							<Text style = {stylesheet.styleByClickingContinueIAgreeToPrivacyPolicy}>
								{`By clicking “Continue”, I agree to Privacy Policy`}
							</Text>
							<GradientView style = {stylesheet.styleButtonCopy1} isAction = {false}
	
	
	
	
	
	
	
	borderTopLeftRadius = {0}
								borderTopRightRadius = {0}
								borderBottomRightRadius = {0}
								borderBottomLeftRadius = {0}
								borderWidth = {0}
								borderColor = {"transparent"}
								id = {"yvQD6rtOJ3vPQMVIgRqUi"}
								fills = {[
								]}>
								<GradientView style = {stylesheet.styleButtonCopy2} isAction = {false}
	
	
	
	
	
	
	
	
	borderTopLeftRadius = {8}
									borderTopRightRadius = {8}
									borderBottomRightRadius = {8}
									borderBottomLeftRadius = {8}
									borderWidth = {0}
									borderColor = {"transparent"}
									id = {"w5XNyI25SORhqCeb4yaav"}
									fills = {[
										{ type: "SOLID", color: "rgb(51, 51, 51)", opacity: undefined,},
									]}>
									<Text style = {stylesheet.styleTextCopy2}>
										{`Continue`}
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
	styleXmarkCopy1: {
		position: "absolute",
		left: 7,
		right: -7,
		top: 7,
		bottom: -7,
		width: "auto",
		height: "auto",
	},
	styleXmark: {
		position: "absolute",
		left: 0,
		top: 0,
		width: 28,
		height: 28,
	},
	styleFrame: {
		width: 28,
		height: 28,
	},
	styleConteiner: {
		marginBottom: 108,
		width: "100%",
		height: "auto",
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-end",
		alignItems: "flex-start",
		paddingRight: 16,
		paddingLeft: 16,
	},
	styleHeyThere: {
		marginBottom: 8,
		width: "100%",
		color: "rgba(51, 51, 51, 1)",
		fontSize: 24,
		fontFamily: "SF Pro Display_700",
		letterSpacing: 0,
		fontStyle: "normal",
		textAlign: "center",
		height: "auto",
		lineHeight: 28.6,
	},
	styleYouCanUseYourEmailOrUsernameOrContinueWithYourSocialAccount: {
		width: "100%",
		color: "rgba(132, 132, 132, 1)",
		fontSize: 16,
		fontFamily: "SF Pro Display_400",
		letterSpacing: 0,
		fontStyle: "normal",
		textAlign: "center",
		height: "auto",
		lineHeight: 19.1,
	},
	styleTextBlocks: {
		width: "100%",
		height: "auto",
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "flex-start",
		paddingRight: 16,
		paddingLeft: 16,
	},
	styleBlockWithLogo: {
		marginBottom: 24,
		width: "100%",
		height: "auto",
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "flex-start",
	},
	styleText: {
		marginRight: 10,
		flexBasis: 0,
		flexGrow: 1,
		width: "auto",
		color: "rgba(132, 132, 132, 1)",
		fontSize: 16,
		fontFamily: "SF Pro Text_400",
		letterSpacing: -0.32,
		fontStyle: "normal",
		textAlign: "left",
		height: 20,
		lineHeight: 20,
	},
	styleSendCode: {
		width: 79,
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
		width: "auto",
		height: "auto",
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		paddingTop: 6,
		paddingRight: 8,
		paddingBottom: 6,
		paddingLeft: 8,
		borderRadius: 8,
	},
	styleTextField: {
		marginBottom: 8,
		width: "100%",
		height: 52,
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		paddingRight: 12,
		paddingLeft: 12,
		borderRadius: 10,
	},
	styleTextCopy1: {
		flexBasis: 0,
		flexGrow: 1,
		width: "auto",
		color: "rgba(132, 132, 132, 1)",
		fontSize: 16,
		fontFamily: "SF Pro Text_400",
		letterSpacing: -0.32,
		fontStyle: "normal",
		textAlign: "left",
		height: 20,
		lineHeight: 20,
	},
	styleTextFieldCopy1: {
		width: "100%",
		height: 52,
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		paddingRight: 12,
		paddingLeft: 12,
		borderRadius: 10,
	},
	styleInputs: {
		width: "100%",
		height: "auto",
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "flex-start",
	},
	styleContent: {
		marginBottom: 108,
		width: "100%",
		height: "auto",
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "center",
		paddingRight: 16,
		paddingLeft: 16,
	},
	styleByClickingContinueIAgreeToPrivacyPolicy: {
		marginBottom: 12,
		width: 345,
		color: "rgba(132, 132, 132, 1)",
		fontSize: 14,
		fontFamily: "SF Pro Text_400",
		letterSpacing: 0,
		fontStyle: "normal",
		textAlign: "center",
		height: "auto",
		lineHeight: 16.7,
	},
	styleTextCopy2: {
		width: 66,
		color: "rgba(255, 255, 255, 1)",
		fontSize: 16,
		fontFamily: "SF Pro Display_500",
		letterSpacing: 0,
		fontStyle: "normal",
		textAlign: "center",
		height: 19,
		lineHeight: 19.1,
	},
	styleButtonCopy2: {
		flexBasis: 0,
		flexGrow: 1,
		width: "auto",
		height: 52,
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 8,
	},
	styleButtonCopy1: {
		width: "100%",
		height: "auto",
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "flex-start",
	},
	styleConteinerCopy1: {
		width: "100%",
		height: "auto",
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "center",
		paddingRight: 16,
		paddingLeft: 16,
	},
	styleBottomSheet: {
		position: "absolute",
		left: 0,
		right: 0,
		top: 43,
		width: "auto",
		height: 769,
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		alignItems: "center",
		paddingTop: 16,
		paddingBottom: 40,
		borderTopLeftRadius: 24,
		borderTopRightRadius: 24,
	},
	styleStylename: {
		position: "relative",
		width: Dimensions.get("window").width,
		height: 812,
		backgroundColor: "rgba(249, 248, 246, 1)",
	},

});