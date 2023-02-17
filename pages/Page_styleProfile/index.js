import React, { useState, useRef, useEffect, createRef } from "react";
import { View, Text, Image, ScrollView, Switch, SafeAreaView, TextInput, TouchableWithoutFeedback, TouchableOpacity, StyleSheet, Animated, Dimensions, Vibration, Alert, KeyboardAvoidingView, Platform} from "react-native";
import { Svg, Path } from "react-native-svg";
import { useAuth } from "../../entities/auth";
import { getTable } from "../../shared/api/data";
import { GradientView } from "../../shared/components";
export const Page_styleProfile = ({ route, navigation }) => {
	const { signIn, signOut, signUp, authData , resetPassword} = useAuth();
	const onClickstyleSelect = (value) => {
		navigation.navigate("styleAboutCompanyScreen", { screen: "styleAboutCompany" });
	}
	const onClickstyleSelectCopy1 = (value) => {
		navigation.navigate("styleHelpScreen", { screen: "styleHelp" });
	}
	const onClickstyleButton = (value) => {
		navigation.navigate("styleSignInScreen", { screen: "styleSignIn" });
	}
	return (
		<ScrollView style={{width: Dimensions.get("window").width, height: Dimensions.get("window").height, backgroundColor: "rgba(249, 248, 246, 1)"}} horizontal = {false} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} bounces={false}>
			<View style={{width: Dimensions.get("window").width, height: 812}} >
				<View style = {stylesheet.styleStylename}>
					<GradientView style = {stylesheet.styleMainBlock} isAction = {false}
	
	
	
	
	
	borderTopLeftRadius = {0}
						borderTopRightRadius = {0}
						borderBottomRightRadius = {0}
						borderBottomLeftRadius = {0}
						borderWidth = {0}
						borderColor = {"transparent"}
						id = {"Ck722gCZNsf6LdVbaVCrH"}
						fills = {[
						]}>
						<GradientView style = {stylesheet.styleSelect} onPress = {onClickstyleSelect} isAction = {true}
	
	
	
	
	
	
	borderTopLeftRadius = {0}
							borderTopRightRadius = {0}
							borderBottomRightRadius = {0}
							borderBottomLeftRadius = {0}
							borderWidth = {0}
							borderColor = {"transparent"}
							id = {"fcnFhafzz8trwndUNksXv"}
							fills = {[
							]}>
							<GradientView style = {stylesheet.styleGlobe} isAction = {false}
	
	
	
	
	
	
	
	borderTopLeftRadius = {0}
								borderTopRightRadius = {0}
								borderBottomRightRadius = {0}
								borderBottomLeftRadius = {0}
								borderWidth = {0}
								borderColor = {"transparent"}
								id = {"wdIPE04UMRndVwwxkfxn4"}
								fills = {[
								]}>
								<View style = {stylesheet.styleGlobeCopy1}>
									<Svg
										fill = "rgba(51, 51, 51, 1)"
									>
										<Path d="M11.0353 22.0706C17.0866 22.0706 22.0813 17.0759 22.0813 11.0353C22.0813 4.9947 17.0759 0 11.0246 0C4.98403 0 0 4.9947 0 11.0353C0 17.0759 4.9947 22.0706 11.0353 22.0706ZM4.61049 4.34368C5.66706 3.3298 6.9691 2.55071 8.40988 2.11314C7.65213 2.87088 7.01179 3.9488 6.53153 5.25084C5.78446 5.01604 5.13344 4.70654 4.61049 4.34368ZM13.6714 2.12381C15.1122 2.56138 16.4035 3.3298 17.4601 4.35435C16.9372 4.71722 16.2968 5.01604 15.5497 5.26151C15.0695 3.9488 14.4291 2.88156 13.6714 2.12381ZM8.015 5.62437C8.60198 4.05552 9.40241 2.9029 10.2882 2.48668L10.2882 5.85917C9.47712 5.82715 8.71938 5.75244 8.015 5.62437ZM11.7824 2.48668C12.6682 2.9029 13.4793 4.05552 14.0556 5.62437C13.3619 5.75244 12.5935 5.82715 11.7824 5.85917L11.7824 2.48668ZM1.76095 10.2882C1.91037 8.48458 2.58273 6.81968 3.62863 5.45361C4.26897 5.93387 5.1121 6.3501 6.09396 6.6596C5.81648 7.75886 5.64572 8.98619 5.59235 10.2882L1.76095 10.2882ZM16.4782 10.2882C16.4355 8.98619 16.2541 7.75886 15.9766 6.6596C16.9585 6.3501 17.8016 5.93387 18.442 5.45361C19.4879 6.81968 20.1602 8.48458 20.3096 10.2882L16.4782 10.2882ZM11.7824 10.2882L11.7824 7.35331C12.7322 7.32129 13.65 7.21456 14.4932 7.04381C14.7386 8.03634 14.9094 9.1356 14.9521 10.2882L11.7824 10.2882ZM7.11851 10.2882C7.17188 9.1356 7.33196 8.03634 7.57743 7.04381C8.43122 7.21456 9.33838 7.32129 10.2882 7.35331L10.2882 10.2882L7.11851 10.2882ZM1.76095 11.7824L5.59235 11.7824C5.63504 13.1057 5.81648 14.3438 6.10463 15.4644C5.13344 15.7739 4.29032 16.1794 3.64997 16.649C2.5934 15.2723 1.91037 13.5967 1.76095 11.7824ZM7.11851 11.7824L10.2882 11.7824L10.2882 14.7706C9.34905 14.8027 8.43122 14.9094 7.5881 15.0801C7.33196 14.0663 7.17188 12.9457 7.11851 11.7824ZM11.7824 14.7706L11.7824 11.7824L14.9628 11.7824C14.9094 12.9457 14.7386 14.0663 14.4825 15.0801C13.6394 14.9094 12.7322 14.8027 11.7824 14.7706ZM15.9766 15.4644C16.2541 14.3438 16.4355 13.1057 16.4889 11.7824L20.3096 11.7824C20.1602 13.5967 19.4772 15.2723 18.4206 16.649C17.7803 16.1794 16.9478 15.7739 15.9766 15.4644ZM11.7824 16.2648C12.5935 16.2968 13.3405 16.3715 14.0449 16.4996C13.4686 18.0364 12.6682 19.1784 11.7824 19.5946L11.7824 16.2648ZM8.03634 16.4996C8.73005 16.3715 9.48779 16.2968 10.2882 16.2648L10.2882 19.5946C9.41309 19.1784 8.61265 18.0364 8.03634 16.4996ZM4.64251 17.7483C5.16546 17.3961 5.8058 17.0972 6.5422 16.8624C7.01179 18.1431 7.65213 19.1997 8.38853 19.9468C6.9691 19.5199 5.68841 18.7515 4.64251 17.7483ZM15.5391 16.8624C16.2755 17.0972 16.9158 17.3961 17.4388 17.7483C16.3822 18.7515 15.1015 19.5199 13.6821 19.9468C14.4291 19.1997 15.0588 18.1431 15.5391 16.8624Z"/>
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
								id = {"UygyR84EW_jNV3JAsIO51"}
								fills = {[
								]}>
								<Text style = {stylesheet.styleTitle}>
									{`About Company`}
								</Text>
							</GradientView>
							<GradientView style = {stylesheet.styleChevronRight} isAction = {false}
	
	
	
	
	
	
	
	borderTopLeftRadius = {0}
								borderTopRightRadius = {0}
								borderBottomRightRadius = {0}
								borderBottomLeftRadius = {0}
								borderWidth = {0}
								borderColor = {"transparent"}
								id = {"GfZ4aV7BYsb9HlHRfBNVv"}
								fills = {[
								]}>
								<View style = {stylesheet.styleChevronRightCopy1}>
									<Svg
										fill = "rgba(132, 132, 132, 1)"
									>
										<Path d="M7.69168 6.6822C7.68415 6.41853 7.58622 6.19252 7.38281 5.98912L1.52176 0.256138C1.34849 0.0904018 1.14509 0 0.896484 0C0.391741 0 0 0.391741 0 0.896484C0 1.13756 0.0979353 1.36356 0.271205 1.53683L5.54464 6.6822L0.271205 11.8276C0.0979353 12.0008 0 12.2193 0 12.4679C0 12.9727 0.391741 13.3644 0.896484 13.3644C1.13756 13.3644 1.34849 13.274 1.52176 13.1083L7.38281 7.36775C7.59375 7.17188 7.69168 6.94587 7.69168 6.6822Z"/>
									</Svg>
								</View>
							</GradientView>
						</GradientView>
						<GradientView style = {stylesheet.styleSelectCopy1} onPress = {onClickstyleSelectCopy1} isAction = {true}
	
	
	
	
	
	
	borderTopLeftRadius = {0}
							borderTopRightRadius = {0}
							borderBottomRightRadius = {0}
							borderBottomLeftRadius = {0}
							borderWidth = {0}
							borderColor = {"transparent"}
							id = {"NQlywt-aHbVYK2GwUj-ja"}
							fills = {[
							]}>
							<GradientView style = {stylesheet.styleMessage} isAction = {false}
	
	
	
	
	
	
	
	borderTopLeftRadius = {0}
								borderTopRightRadius = {0}
								borderBottomRightRadius = {0}
								borderBottomLeftRadius = {0}
								borderWidth = {0}
								borderColor = {"transparent"}
								id = {"d6rfDDI94VUWOk6MElVil"}
								fills = {[
								]}>
								<View style = {stylesheet.styleMessageCopy1}>
									<Svg
										fill = "rgba(51, 51, 51, 1)"
									>
										<Path d="M4.85596 22.9457C6.33943 22.9457 9.33838 21.505 11.6009 19.8934C19.1357 20.0322 24.7707 15.6778 24.7707 9.95738C24.7707 4.43973 19.2531 0 12.38 0C5.50698 0 0 4.43973 0 9.95738C0 13.4686 2.17718 16.5956 5.51765 18.2285C5.05873 19.093 4.24763 20.2776 3.78871 20.8966C3.10568 21.8038 3.57527 22.9457 4.85596 22.9457ZM6.14732 20.7365C6.00858 20.7899 5.95522 20.7152 6.05127 20.5978C6.59556 19.9361 7.396 18.8795 7.79088 18.1325C8.11105 17.5455 8.00432 17.0332 7.32129 16.713C4.0662 15.1869 2.17718 12.7429 2.17718 9.95738C2.17718 5.66706 6.70229 2.17718 12.38 2.17718C18.0578 2.17718 22.5829 5.66706 22.5829 9.95738C22.5829 14.2477 18.0578 17.7483 12.38 17.7483C12.1879 17.7483 11.8891 17.7376 11.5262 17.7376C11.0673 17.7269 10.7258 17.8657 10.2989 18.1965C9.00753 19.157 7.09717 20.3523 6.14732 20.7365Z"/>
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
								id = {"YWb04fBGQAadmh06IrzXU"}
								fills = {[
								]}>
								<Text style = {stylesheet.styleTitleCopy1}>
									{`Сhat with support`}
								</Text>
							</GradientView>
							<GradientView style = {stylesheet.styleChevronRightCopy2} isAction = {false}
	
	
	
	
	
	
	
	borderTopLeftRadius = {0}
								borderTopRightRadius = {0}
								borderBottomRightRadius = {0}
								borderBottomLeftRadius = {0}
								borderWidth = {0}
								borderColor = {"transparent"}
								id = {"v8wYKTNLDSRju6QcyBQme"}
								fills = {[
								]}>
								<View style = {stylesheet.styleChevronRightCopy3}>
									<Svg
										fill = "rgba(132, 132, 132, 1)"
									>
										<Path d="M7.69168 6.6822C7.68415 6.41853 7.58622 6.19252 7.38281 5.98912L1.52176 0.256138C1.34849 0.0904018 1.14509 0 0.896484 0C0.391741 0 0 0.391741 0 0.896484C0 1.13756 0.0979353 1.36356 0.271205 1.53683L5.54464 6.6822L0.271205 11.8276C0.0979353 12.0008 0 12.2193 0 12.4679C0 12.9727 0.391741 13.3644 0.896484 13.3644C1.13756 13.3644 1.34849 13.274 1.52176 13.1083L7.38281 7.36775C7.59375 7.17188 7.69168 6.94587 7.69168 6.6822Z"/>
									</Svg>
								</View>
							</GradientView>
						</GradientView>
						<GradientView style = {stylesheet.styleSelectCopy2} isAction = {false}
	
	
	
	
	
	
	borderTopLeftRadius = {0}
							borderTopRightRadius = {0}
							borderBottomRightRadius = {0}
							borderBottomLeftRadius = {0}
							borderWidth = {0}
							borderColor = {"transparent"}
							id = {"45CbbONrweXPX05aFrR3L"}
							fills = {[
							]}>
							<GradientView style = {stylesheet.styleDocText} isAction = {false}
	
	
	
	
	
	
	
	borderTopLeftRadius = {0}
								borderTopRightRadius = {0}
								borderBottomRightRadius = {0}
								borderBottomLeftRadius = {0}
								borderWidth = {0}
								borderColor = {"transparent"}
								id = {"Y8YAiqZhb6O89ExMAjQu5"}
								fills = {[
								]}>
								<View style = {stylesheet.styleDocTextCopy1}>
									<Svg
										fill = "rgba(51, 51, 51, 1)"
									>
										<Path d="M3.47921 23.1272L14.856 23.1272C17.1506 23.1272 18.3352 21.9212 18.3352 19.6159L18.3352 9.92536C18.3352 8.43122 18.1431 7.74819 17.2146 6.79834L11.633 1.13128C10.7258 0.213449 9.97873 0 8.634 0L3.47921 0C1.19531 0 0 1.20598 0 3.5219L0 19.6159C0 21.9212 1.19531 23.1272 3.47921 23.1272ZM3.66064 20.9927C2.63609 20.9927 2.12381 20.4591 2.12381 19.4772L2.12381 3.64997C2.12381 2.67878 2.63609 2.13449 3.67132 2.13449L8.19643 2.13449L8.19643 7.94029C8.19643 9.48779 8.95417 10.2349 10.491 10.2349L16.2114 10.2349L16.2114 19.4772C16.2114 20.4591 15.6991 20.9927 14.6639 20.9927L3.66064 20.9927ZM10.6938 8.36719C10.2455 8.36719 10.0534 8.17508 10.0534 7.73751L10.0534 2.41197L15.9233 8.36719L10.6938 8.36719ZM12.9243 13.031L5.21882 13.031C4.81327 13.031 4.52511 13.3192 4.52511 13.6927C4.52511 14.0769 4.81327 14.3758 5.21882 14.3758L12.9243 14.3758C13.3085 14.3758 13.5967 14.0769 13.5967 13.6927C13.5967 13.3192 13.3085 13.031 12.9243 13.031ZM12.9243 16.5956L5.21882 16.5956C4.81327 16.5956 4.52511 16.8945 4.52511 17.2787C4.52511 17.6522 4.81327 17.9404 5.21882 17.9404L12.9243 17.9404C13.3085 17.9404 13.5967 17.6522 13.5967 17.2787C13.5967 16.8945 13.3085 16.5956 12.9243 16.5956Z"/>
									</Svg>
								</View>
							</GradientView>
							<GradientView style = {stylesheet.styleConteinerCopy2} isAction = {false}
	
	
	
	
	
	
	
	borderTopLeftRadius = {0}
								borderTopRightRadius = {0}
								borderBottomRightRadius = {0}
								borderBottomLeftRadius = {0}
								borderWidth = {0}
								borderColor = {"transparent"}
								id = {"SPq2hKTIS5GtxT-EbwEwg"}
								fills = {[
								]}>
								<Text style = {stylesheet.styleTitleCopy2}>
									{`Privacy policy`}
								</Text>
							</GradientView>
							<GradientView style = {stylesheet.styleChevronRightCopy4} isAction = {false}
	
	
	
	
	
	
	
	borderTopLeftRadius = {0}
								borderTopRightRadius = {0}
								borderBottomRightRadius = {0}
								borderBottomLeftRadius = {0}
								borderWidth = {0}
								borderColor = {"transparent"}
								id = {"6Vrzew13ZO_uKsq-Y0jwY"}
								fills = {[
								]}>
								<View style = {stylesheet.styleChevronRightCopy5}>
									<Svg
										fill = "rgba(132, 132, 132, 1)"
									>
										<Path d="M7.69168 6.6822C7.68415 6.41853 7.58622 6.19252 7.38281 5.98912L1.52176 0.256138C1.34849 0.0904018 1.14509 0 0.896484 0C0.391741 0 0 0.391741 0 0.896484C0 1.13756 0.0979353 1.36356 0.271205 1.53683L5.54464 6.6822L0.271205 11.8276C0.0979353 12.0008 0 12.2193 0 12.4679C0 12.9727 0.391741 13.3644 0.896484 13.3644C1.13756 13.3644 1.34849 13.274 1.52176 13.1083L7.38281 7.36775C7.59375 7.17188 7.69168 6.94587 7.69168 6.6822Z"/>
									</Svg>
								</View>
							</GradientView>
						</GradientView>
					</GradientView>
					<GradientView style = {stylesheet.styleFrame427318986} isAction = {false}
	
	
	
	
	
	borderTopLeftRadius = {16}
						borderTopRightRadius = {16}
						borderBottomRightRadius = {16}
						borderBottomLeftRadius = {16}
						borderWidth = {0}
						borderColor = {"transparent"}
						id = {"_-Ks_8PaoaG92XIl4s9m0"}
						fills = {[
							{ type: "SOLID", color: "rgb(255, 255, 255)", opacity: undefined,},
						]}>
						<GradientView style = {stylesheet.styleTextBlock} isAction = {false}
	
	
	
	
	
	
	borderTopLeftRadius = {12}
							borderTopRightRadius = {12}
							borderBottomRightRadius = {12}
							borderBottomLeftRadius = {12}
							borderWidth = {0}
							borderColor = {"transparent"}
							id = {"JRzP4wVWcOnTE8KhVlJeJ"}
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
								id = {"PFdEUmrSD1d0by_Dkog3m"}
								fills = {[
								]}>
								<Text style = {stylesheet.styleTitleCopy3}>
									{`Sign in to your profile`}
								</Text>
							</GradientView>
							<Text style = {stylesheet.styleBody}>
								{`To access the extended profile, please register in the application`}
							</Text>
						</GradientView>
						<GradientView style = {stylesheet.styleButton} onPress = {onClickstyleButton} isAction = {true}
	
	
	
	
	
	
	borderTopLeftRadius = {8}
							borderTopRightRadius = {8}
							borderBottomRightRadius = {8}
							borderBottomLeftRadius = {8}
							borderWidth = {0}
							borderColor = {"transparent"}
							id = {"TuvK51ViP0U9b-6y9jKU5"}
							fills = {[
								{ type: "SOLID", color: "rgb(51, 51, 51)", opacity: undefined,},
							]}>
							<Text style = {stylesheet.styleText}>
								{`Sign in`}
							</Text>
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
	styleGlobeCopy1: {
		position: "absolute",
		left: 6,
		right: -16,
		top: 6,
		bottom: -16,
		width: "auto",
		height: "auto",
	},
	styleGlobe: {
		marginRight: 8,
		width: 34,
		height: 34,
	},
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
		marginRight: 8,
		flexBasis: 0,
		flexGrow: 1,
		width: "auto",
		height: 22,
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "flex-start",
	},
	styleChevronRightCopy1: {
		position: "absolute",
		left: 9,
		right: 1,
		top: 5,
		bottom: -8,
		width: "auto",
		height: "auto",
	},
	styleChevronRight: {
		width: 24,
		height: 24,
	},
	styleSelect: {
		marginBottom: 24,
		width: "100%",
		height: "auto",
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	styleMessageCopy1: {
		position: "absolute",
		left: 5,
		right: -20,
		top: 5,
		bottom: -18,
		width: "auto",
		height: "auto",
	},
	styleMessage: {
		marginRight: 8,
		width: 34,
		height: 34,
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
		marginRight: 8,
		flexBasis: 0,
		flexGrow: 1,
		width: "auto",
		height: 22,
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "flex-start",
	},
	styleChevronRightCopy3: {
		position: "absolute",
		left: 9,
		right: 1,
		top: 5,
		bottom: -8,
		width: "auto",
		height: "auto",
	},
	styleChevronRightCopy2: {
		width: 24,
		height: 24,
	},
	styleSelectCopy1: {
		marginBottom: 24,
		width: "100%",
		height: "auto",
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	styleDocTextCopy1: {
		position: "absolute",
		left: 8,
		right: -10,
		top: 5,
		bottom: -18,
		width: "auto",
		height: "auto",
	},
	styleDocText: {
		marginRight: 8,
		width: 34,
		height: 34,
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
	styleChevronRightCopy5: {
		position: "absolute",
		left: 9,
		right: 1,
		top: 5,
		bottom: -8,
		width: "auto",
		height: "auto",
	},
	styleChevronRightCopy4: {
		width: 24,
		height: 24,
	},
	styleSelectCopy2: {
		width: "100%",
		height: 34,
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	styleMainBlock: {
		position: "absolute",
		left: 0,
		right: 0,
		top: 101,
		width: "auto",
		height: "auto",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		paddingTop: 24,
		paddingRight: 16,
		paddingBottom: 24,
		paddingLeft: 16,
	},
	styleTitleCopy3: {
		flexBasis: 0,
		flexGrow: 1,
		width: "auto",
		color: "rgba(51, 51, 51, 1)",
		fontSize: 22,
		fontFamily: "SF Pro Text_700",
		letterSpacing: 0,
		fontStyle: "normal",
		textAlign: "center",
		height: 26,
		lineHeight: 26.3,
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
		color: "rgba(132, 132, 132, 1)",
		fontSize: 16,
		fontFamily: "SF Pro Text_400",
		letterSpacing: 0,
		fontStyle: "normal",
		textAlign: "center",
		height: "auto",
		lineHeight: 19.1,
	},
	styleTextBlock: {
		marginBottom: 12,
		width: 343,
		height: "auto",
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "flex-start",
		padding: 16,
		borderRadius: 12,
	},
	styleText: {
		width: 49,
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
		width: 311,
		height: 52,
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 8,
	},
	styleFrame427318986: {
		position: "absolute",
		left: 16,
		right: 16,
		bottom: 107,
		width: "auto",
		height: "auto",
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "center",
		paddingTop: 4,
		paddingBottom: 16,
		borderRadius: 16,
	},
	styleStylename: {
		position: "relative",
		width: Dimensions.get("window").width,
		height: 812,
		backgroundColor: "rgba(249, 248, 246, 1)",
	},

});