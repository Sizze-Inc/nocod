import React, { useState, useRef, useEffect, createRef } from "react";
import { View, Text, Image, ScrollView, Switch, SafeAreaView, TextInput, TouchableWithoutFeedback, TouchableOpacity, StyleSheet, Animated, Dimensions, Vibration, Alert, KeyboardAvoidingView, Platform} from "react-native";
import { Svg, Path } from "react-native-svg";
import { useAuth } from "../../entities/auth";
import { getTable } from "../../shared/api/data";
import { GradientView } from "../../shared/components";
export const Page_styleAboutCompany = ({ route, navigation }) => {
	const { signIn, signOut, signUp, authData , resetPassword} = useAuth();
	const onClickstyleButton = (value) => {
		navigation.navigate("undefinedScreen", { screen: "undefined" });
	}
	const onClickstyleButtonCopy1 = (value) => {
		navigation.navigate("undefinedScreen", { screen: "undefined" });
	}
	const onClickstyleButtonCopy2 = (value) => {
		navigation.navigate("undefinedScreen", { screen: "undefined" });
	}
	const onClickstyleButtonCopy3 = (value) => {
		navigation.navigate("undefinedScreen", { screen: "undefined" });
	}
	const onClickstyleButtonCopy4 = (value) => {
		navigation.navigate("undefinedScreen", { screen: "undefined" });
	}
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
	return (
		<ScrollView style={{width: Dimensions.get("window").width, height: Dimensions.get("window").height, backgroundColor: "rgba(249, 248, 246, 1)"}} horizontal = {false} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} bounces={false}>
			<View style={{width: Dimensions.get("window").width, height: 1101}} >
				<View style = {stylesheet.styleStylename}>
					<GradientView style = {stylesheet.styleContent} isAction = {false}
	
	
	
	
	
	borderTopLeftRadius = {0}
						borderTopRightRadius = {0}
						borderBottomRightRadius = {0}
						borderBottomLeftRadius = {0}
						borderWidth = {0}
						borderColor = {"transparent"}
						id = {"kSFG9-lXp242mJi7w5cJe"}
						fills = {[
						]}>
						<GradientView style = {stylesheet.styleTitle} isAction = {false}
	
	
	
	
	
	
	borderTopLeftRadius = {0}
							borderTopRightRadius = {0}
							borderBottomRightRadius = {0}
							borderBottomLeftRadius = {0}
							borderWidth = {0}
							borderColor = {"transparent"}
							id = {"TK8QHvDkLXhqU0Vy0cgoC"}
							fills = {[
							]}>
							<Text style = {stylesheet.styleTitleCopy1}>
								{`Company name`}
							</Text>
						</GradientView>
						<GradientView style = {stylesheet.styleImageBlock} isAction = {false}
	
	
	
	
	
	
	borderTopLeftRadius = {0}
							borderTopRightRadius = {0}
							borderBottomRightRadius = {0}
							borderBottomLeftRadius = {0}
							borderWidth = {0}
							borderColor = {"transparent"}
							id = {"_N4I8IQnj278AbfojA00r"}
							fills = {[
							]}>
							<Image style = {[stylesheet.styleImageBlockCopy1, {transform: [{ rotate: "0deg" }]}]} source = {{uri: "https://nyc3.digitaloceanspaces.com/sizze-storage/media/images/Y8T5hzXrScHEUMpvg4QD4h6w.jpeg"}}/>
						</GradientView>
						<GradientView style = {stylesheet.styleCell} isAction = {false}
	
	
	
	
	
	
	borderTopLeftRadius = {0}
							borderTopRightRadius = {0}
							borderBottomRightRadius = {0}
							borderBottomLeftRadius = {0}
							borderWidth = {0}
							borderColor = {"transparent"}
							id = {"TmLWIaRv9OSzOk-yc6I2U"}
							fills = {[
							]}>
							<GradientView style = {stylesheet.styleClock} isAction = {false}
	
	
	
	
	
	
	
	borderTopLeftRadius = {0}
								borderTopRightRadius = {0}
								borderBottomRightRadius = {0}
								borderBottomLeftRadius = {0}
								borderWidth = {0}
								borderColor = {"transparent"}
								id = {"Z0NYdQqWwggP5GTtthIk7"}
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
								id = {"4enVNQTF4nUF5Eq0sEE3l"}
								fills = {[
								]}>
								<Text style = {stylesheet.styleTitleCopy2}>
									{`Business hours`}
								</Text>
								<Text style = {stylesheet.styleSubtitle}>
									{`Monday - Friday, 10:00 - 22:00`}
								</Text>
							</GradientView>
						</GradientView>
						<GradientView style = {stylesheet.styleTextBlock} isAction = {false}
	
	
	
	
	
	
	borderTopLeftRadius = {0}
							borderTopRightRadius = {0}
							borderBottomRightRadius = {0}
							borderBottomLeftRadius = {0}
							borderWidth = {0}
							borderColor = {"transparent"}
							id = {"NQwahcmCqkMvp-m4MQES-"}
							fills = {[
							]}>
							<Text style = {stylesheet.styleTitleCopy3}>
								{`About`}
							</Text>
							<Text style = {stylesheet.styleSubtitleCopy1}>
								{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique mi eu, porta laoreet. Venenatis ut vehicula purus in malesuada suscipit risus gravida. Id turpis placerat ut integer id nibh etiam. Urna nisi, a et feugiat lectus pretium phasellus aenean eu.`}
							</Text>
						</GradientView>
						<GradientView style = {stylesheet.styleBlock} isAction = {false}
	
	
	
	
	
	
	borderTopLeftRadius = {0}
							borderTopRightRadius = {0}
							borderBottomRightRadius = {0}
							borderBottomLeftRadius = {0}
							borderWidth = {0}
							borderColor = {"transparent"}
							id = {"Ee3TSga-tugE6DMPXiAla"}
							fills = {[
							]}>
							<GradientView style = {stylesheet.styleTextBlockCopy1} isAction = {false}
	
	
	
	
	
	
	
	borderTopLeftRadius = {0}
								borderTopRightRadius = {0}
								borderBottomRightRadius = {0}
								borderBottomLeftRadius = {0}
								borderWidth = {0}
								borderColor = {"transparent"}
								id = {"m8DWEtKn7TSe1vux0h0Xw"}
								fills = {[
								]}>
								<Text style = {stylesheet.styleTitleCopy4}>
									{`Social medias`}
								</Text>
							</GradientView>
							<GradientView style = {stylesheet.styleButtons} isAction = {false}
	
	
	
	
	
	
	
	borderTopLeftRadius = {0}
								borderTopRightRadius = {0}
								borderBottomRightRadius = {0}
								borderBottomLeftRadius = {0}
								borderWidth = {0}
								borderColor = {"transparent"}
								id = {"rjZow_DsAMUwmGizV3NMj"}
								fills = {[
								]}>
								<GradientView style = {stylesheet.styleButton} onPress = {onClickstyleButton} isAction = {true}
	
	
	
	
	
	
	
	
	borderTopLeftRadius = {8}
									borderTopRightRadius = {8}
									borderBottomRightRadius = {8}
									borderBottomLeftRadius = {8}
									borderWidth = {1}
									borderColor = {"rgba(51, 51, 51, 1)"}
									id = {"52b9T_h33Xvdkbl9iFpS-"}
									fills = {[
										{ type: "SOLID", color: "rgb(255, 255, 255)", opacity: undefined,},
									]}>
									<GradientView style = {stylesheet.styleIconInstgram24} isAction = {false}
	
	
	
	
	
	
	
	
	
	borderTopLeftRadius = {0}
										borderTopRightRadius = {0}
										borderBottomRightRadius = {0}
										borderBottomLeftRadius = {0}
										borderWidth = {0}
										borderColor = {"transparent"}
										id = {"0Uqbv94LuNLuUy0qKnIgJ"}
										fills = {[
										]}>
										<View style = {stylesheet.styleUnion}>
											<Svg
												fill = "rgba(51, 51, 51, 1)"
											>
												<Path d="M11.6735 5.67715C8.36297 5.67715 5.67715 8.36297 5.67715 11.6735C5.67715 14.984 8.36297 17.6699 11.6735 17.6699C14.984 17.6699 17.6699 14.984 17.6699 11.6735C17.6699 8.36297 14.984 5.67715 11.6735 5.67715ZM11.6735 15.5632C9.52576 15.5632 7.78386 13.8212 7.78386 11.6735C7.78386 9.52576 9.52576 7.78386 11.6735 7.78386C13.8212 7.78386 15.5632 9.52576 15.5632 11.6735C15.5632 13.8212 13.8212 15.5632 11.6735 15.5632Z"/>
												<Path d="M17.9072 6.83995C18.6778 6.83995 19.3071 6.21523 19.3071 5.44004C19.3071 4.6694 18.6778 4.04013 17.9072 4.04013C17.1365 4.04013 16.5073 4.66484 16.5073 5.44004C16.5073 6.21067 17.132 6.83995 17.9072 6.83995Z"/>
												<Path d="M11.6735 0C8.50433 0 8.10762 0.0136799 6.86275 0.0683994C5.62244 0.123119 4.76972 0.323757 4.03101 0.611035C3.26037 0.911993 2.6083 1.30871 1.96078 1.96078C1.30871 2.6083 0.911993 3.26037 0.611035 4.02645C0.323757 4.76972 0.123119 5.61787 0.0683995 6.85818C0.0136799 8.10761 0 8.50433 0 11.6735C0 14.8427 0.0136799 15.2394 0.0683995 16.4843C0.123119 17.7246 0.323757 18.5773 0.611035 19.316C0.911993 20.0866 1.30871 20.7387 1.96078 21.3862C2.6083 22.0337 3.26037 22.435 4.02645 22.7314C4.76972 23.0187 5.61787 23.2193 6.85818 23.2741C8.10305 23.3288 8.49977 23.3425 11.6689 23.3425C14.8381 23.3425 15.2348 23.3288 16.4797 23.2741C17.72 23.2193 18.5727 23.0187 19.3114 22.7314C20.0775 22.435 20.7296 22.0337 21.3771 21.3862C22.0246 20.7387 22.4259 20.0866 22.7223 19.3206C23.0096 18.5773 23.2102 17.7291 23.2649 16.4888C23.3197 15.244 23.3333 14.8472 23.3333 11.6781C23.3333 8.50889 23.3197 8.11217 23.2649 6.8673C23.2102 5.62699 23.0096 4.77428 22.7223 4.03557C22.435 3.26037 22.0383 2.6083 21.3862 1.96078C20.7387 1.31327 20.0866 0.911993 19.3206 0.615595C18.5773 0.328317 17.7291 0.127679 16.4888 0.0729594C15.2394 0.0136799 14.8427 0 11.6735 0ZM11.6735 2.10214C14.7925 2.10214 15.1619 2.11582 16.3885 2.17054C17.5285 2.2207 18.1441 2.41222 18.5545 2.57182C19.0971 2.78158 19.4893 3.03694 19.8951 3.44277C20.3055 3.85317 20.5563 4.24077 20.7661 4.7834C20.9257 5.1938 21.1172 5.81395 21.1674 6.94938C21.2221 8.18057 21.2358 8.54993 21.2358 11.6644C21.2358 14.7834 21.2221 15.1528 21.1674 16.3794C21.1172 17.5194 20.9257 18.135 20.7661 18.5454C20.5563 19.088 20.301 19.4802 19.8951 19.886C19.4847 20.2964 19.0971 20.5472 18.5545 20.757C18.1441 20.9166 17.5239 21.1081 16.3885 21.1582C15.1573 21.2129 14.788 21.2266 11.6735 21.2266C8.55449 21.2266 8.18513 21.2129 6.9585 21.1582C5.81851 21.1081 5.20292 20.9166 4.79252 20.757C4.24989 20.5472 3.85773 20.2918 3.45189 19.886C3.0415 19.4756 2.7907 19.088 2.58094 18.5454C2.42134 18.135 2.22982 17.5148 2.17966 16.3794C2.12494 15.1482 2.11126 14.7788 2.11126 11.6644C2.11126 8.54537 2.12494 8.17601 2.17966 6.94938C2.22982 5.80939 2.42134 5.1938 2.58094 4.7834C2.7907 4.24077 3.04606 3.84861 3.45189 3.44277C3.86229 3.03238 4.24989 2.78158 4.79252 2.57182C5.20292 2.41222 5.82307 2.2207 6.9585 2.17054C8.18513 2.11582 8.55449 2.10214 11.6735 2.10214Z"/>
											</Svg>
										</View>
									</GradientView>
								</GradientView>
								<GradientView style = {stylesheet.styleButtonCopy1} onPress = {onClickstyleButtonCopy1} isAction = {true}
	
	
	
	
	
	
	
	
	borderTopLeftRadius = {8}
									borderTopRightRadius = {8}
									borderBottomRightRadius = {8}
									borderBottomLeftRadius = {8}
									borderWidth = {1}
									borderColor = {"rgba(51, 51, 51, 1)"}
									id = {"1LmY-ymremqSgnGZSTdA7"}
									fills = {[
										{ type: "SOLID", color: "rgb(255, 255, 255)", opacity: undefined,},
									]}>
									<GradientView style = {stylesheet.styleIconTwitter24} isAction = {false}
	
	
	
	
	
	
	
	
	
	borderTopLeftRadius = {0}
										borderTopRightRadius = {0}
										borderBottomRightRadius = {0}
										borderBottomLeftRadius = {0}
										borderWidth = {0}
										borderColor = {"transparent"}
										id = {"rRQts3OB11Zs8dOyDZ6Fv"}
										fills = {[
										]}>
										<View style = {stylesheet.styleVector}>
											<Svg
												fill = "rgba(51, 51, 51, 1)"
											>
												<Path d="M24.4067 2.33333C23.5083 2.74167 22.54 3.01 21.5367 3.13833C22.5633 2.52 23.3567 1.54 23.73 0.361667C22.7617 0.945 21.6883 1.35333 20.5567 1.58667C19.635 0.583333 18.34 0 16.87 0C14.1283 0 11.8883 2.24 11.8883 5.005C11.8883 5.40167 11.935 5.78667 12.0167 6.14833C7.86333 5.93833 4.165 3.94333 1.70333 0.921667C1.27167 1.65667 1.02667 2.52 1.02667 3.43C1.02667 5.16833 1.90167 6.70833 3.255 7.58333C2.42667 7.58333 1.65667 7.35 0.98 7L0.98 7.035C0.98 9.46167 2.70667 11.4917 4.99333 11.9467C4.25918 12.1476 3.48844 12.1755 2.74167 12.0283C3.05854 13.0229 3.67913 13.8931 4.51619 14.5168C5.35325 15.1404 6.36469 15.486 7.40833 15.505C5.63923 16.9055 3.44633 17.6625 1.19 17.6517C0.793333 17.6517 0.396667 17.6283 0 17.5817C2.21667 19.005 4.85333 19.8333 7.67667 19.8333C16.87 19.8333 21.9217 12.2033 21.9217 5.58833C21.9217 5.36667 21.9217 5.15667 21.91 4.935C22.89 4.235 23.73 3.34833 24.4067 2.33333Z"/>
											</Svg>
										</View>
									</GradientView>
								</GradientView>
								<GradientView style = {stylesheet.styleButtonCopy2} onPress = {onClickstyleButtonCopy2} isAction = {true}
	
	
	
	
	
	
	
	
	borderTopLeftRadius = {8}
									borderTopRightRadius = {8}
									borderBottomRightRadius = {8}
									borderBottomLeftRadius = {8}
									borderWidth = {1}
									borderColor = {"rgba(51, 51, 51, 1)"}
									id = {"7PGBe_pEdFgaQW0BCUQ4X"}
									fills = {[
										{ type: "SOLID", color: "rgb(255, 255, 255)", opacity: undefined,},
									]}>
									<GradientView style = {stylesheet.styleIconTripadvisor24} isAction = {false}
	
	
	
	
	
	
	
	
	
	borderTopLeftRadius = {0}
										borderTopRightRadius = {0}
										borderBottomRightRadius = {0}
										borderBottomLeftRadius = {0}
										borderWidth = {0}
										borderColor = {"transparent"}
										id = {"oDurtY5dlyEyO1_VU6zfI"}
										fills = {[
										]}>
										<View style = {stylesheet.styleUnionCopy1}>
											<Svg
												fill = "rgba(51, 51, 51, 1)"
											>
												<Path d="M19.2449 11.7103C20.5014 11.7103 21.52 10.7008 21.52 9.45549C21.52 8.2102 20.5014 7.20069 19.2449 7.20069C17.9883 7.20069 16.9697 8.2102 16.9697 9.45549C16.9697 10.7008 17.9883 11.7103 19.2449 11.7103Z"/>
												<Path d="M6.41953 11.7099C6.86953 11.7099 7.30945 11.5777 7.68364 11.33C8.05783 11.0823 8.34948 10.7301 8.52172 10.3181C8.69396 9.90607 8.73904 9.45268 8.65126 9.01526C8.56349 8.57784 8.3468 8.17605 8.0286 7.86069C7.7104 7.54533 7.30498 7.33058 6.86362 7.24359C6.42227 7.15659 5.96479 7.20127 5.54905 7.37197C5.13332 7.54267 4.778 7.83172 4.52803 8.20257C4.27806 8.57342 4.14467 9.0094 4.14473 9.45539C4.14482 10.0533 4.38451 10.6267 4.8111 11.0495C5.23769 11.4722 5.81624 11.7098 6.41953 11.7099Z"/>
												<Path d="M6.41928 15.8105C2.87757 15.8105 0.0066415 12.9656 0.0066415 9.45517C0.00549458 8.57093 0.190993 7.69622 0.55122 6.88726C0.911447 6.07829 1.43844 5.35295 2.09833 4.75783L0 2.4952L4.66471 2.4952C7.07543 0.869408 9.9239 0 12.8398 0C15.7557 0 18.6042 0.869408 21.0149 2.4952L25.6667 2.4952L23.5683 4.75783C24.2284 5.35281 24.7556 6.07806 25.116 6.88697C25.4765 7.69588 25.6622 8.57057 25.6613 9.45485C25.6613 12.9646 22.7878 15.8102 19.2458 15.8102C17.6297 15.8125 16.0729 15.2078 14.8888 14.1177L12.8332 16.3333L10.7775 14.1165C9.59342 15.2074 8.03599 15.8127 6.41928 15.8105ZM22.8534 11.8448C23.3303 11.1374 23.5848 10.3059 23.5848 9.45517C23.5848 8.31443 23.1275 7.22041 22.3136 6.41378C21.4998 5.60716 20.3959 5.154 19.2449 5.154C18.3865 5.154 17.5474 5.40626 16.8337 5.87888C16.12 6.3515 15.5638 7.02325 15.2353 7.80918C14.9068 8.59512 14.8209 9.45994 14.9883 10.2943C15.1558 11.1286 15.5691 11.895 16.1761 12.4966C16.783 13.0981 17.5563 13.5077 18.3982 13.6737C19.24 13.8396 20.1127 13.7545 20.9057 13.4289C21.6987 13.1034 22.3765 12.5521 22.8534 11.8448ZM17.6503 3.03398C16.1242 2.40179 14.4863 2.07724 12.8322 2.07928C11.1793 2.07753 9.54265 2.40197 8.01761 3.03366C10.757 4.07205 12.8344 6.5008 12.8344 9.33105C12.8344 6.50111 14.9113 4.07268 17.6503 3.03398ZM8.83041 5.87888C8.11671 5.40626 7.27763 5.154 6.41928 5.154C5.26826 5.154 4.16438 5.60716 3.35049 6.41378C2.5366 7.22041 2.07935 8.31443 2.07935 9.45517C2.07935 10.3059 2.33389 11.1374 2.81076 11.8448C3.28764 12.5521 3.96544 13.1034 4.75846 13.4289C5.55148 13.7545 6.42409 13.8396 7.26595 13.6737C8.10781 13.5077 8.88111 13.0981 9.48806 12.4966C10.095 11.895 10.5084 11.1286 10.6758 10.2943C10.8433 9.45994 10.7573 8.59512 10.4288 7.80918C10.1004 7.02325 9.5441 6.3515 8.83041 5.87888Z"/>
											</Svg>
										</View>
									</GradientView>
								</GradientView>
								<GradientView style = {stylesheet.styleButtonCopy3} onPress = {onClickstyleButtonCopy3} isAction = {true}
	
	
	
	
	
	
	
	
	borderTopLeftRadius = {8}
									borderTopRightRadius = {8}
									borderBottomRightRadius = {8}
									borderBottomLeftRadius = {8}
									borderWidth = {1}
									borderColor = {"rgba(51, 51, 51, 1)"}
									id = {"rL5XBjziPtbQoEV_2fCxI"}
									fills = {[
										{ type: "SOLID", color: "rgb(255, 255, 255)", opacity: undefined,},
									]}>
									<GradientView style = {stylesheet.styleIconFacebook24} isAction = {false}
	
	
	
	
	
	
	
	
	
	borderTopLeftRadius = {0}
										borderTopRightRadius = {0}
										borderBottomRightRadius = {0}
										borderBottomLeftRadius = {0}
										borderWidth = {0}
										borderColor = {"transparent"}
										id = {"aUft97WegMNf0XqoxyETL"}
										fills = {[
										]}>
										<View style = {stylesheet.styleVectorCopy1}>
											<Svg
												fill = "rgba(51, 51, 51, 1)"
											>
												<Path d="M16.9692 0L1.6975 0C0.758333 0 0 0.756364 0 1.69309L0 16.9251C0 17.8618 0.758333 18.6182 1.6975 18.6182L10.1815 18.6182L10.1815 11.0022L7.63583 11.0022L7.63583 8.46313L10.1815 8.46313L10.1815 7.09818C10.1815 4.51724 11.4427 3.38385 13.594 3.38385C14.6242 3.38385 15.169 3.46065 15.4257 3.4944L15.4257 5.92291L13.9592 5.92291C13.0468 5.92291 12.7272 6.40349 12.7272 7.37746L12.7272 8.46196L15.4035 8.46196L15.0407 11.001L12.7272 11.001L12.7272 18.6182L16.9692 18.6182C17.9083 18.6182 18.6667 17.8618 18.6667 16.9251L18.6667 1.69309C18.6667 0.756364 17.906 0 16.9692 0Z"/>
											</Svg>
										</View>
									</GradientView>
								</GradientView>
								<GradientView style = {stylesheet.styleButtonCopy4} onPress = {onClickstyleButtonCopy4} isAction = {true}
	
	
	
	
	
	
	
	
	borderTopLeftRadius = {8}
									borderTopRightRadius = {8}
									borderBottomRightRadius = {8}
									borderBottomLeftRadius = {8}
									borderWidth = {1}
									borderColor = {"rgba(51, 51, 51, 1)"}
									id = {"kyjRcLrsKD3GhZtBb0HQl"}
									fills = {[
										{ type: "SOLID", color: "rgb(255, 255, 255)", opacity: undefined,},
									]}>
									<GradientView style = {stylesheet.styleIconYoutube24} isAction = {false}
	
	
	
	
	
	
	
	
	
	borderTopLeftRadius = {0}
										borderTopRightRadius = {0}
										borderBottomRightRadius = {0}
										borderBottomLeftRadius = {0}
										borderWidth = {0}
										borderColor = {"transparent"}
										id = {"P5jo31PuANG3ujCUR8XQY"}
										fills = {[
										]}>
										<View style = {stylesheet.styleVectorCopy2}>
											<Svg
												fill = "rgba(51, 51, 51, 1)"
											>
												<Path d="M25.677 6.3603C25.7346 4.69039 25.3695 3.03298 24.6153 1.54196C24.1036 0.930162 23.3935 0.517292 22.6086 0.375297C19.3624 0.0807433 16.1027 -0.0399847 12.8436 0.0136305C9.59637 -0.0424181 6.34845 0.074414 3.11362 0.363631C2.47408 0.479967 1.88222 0.779946 1.41029 1.22696C0.360285 2.1953 0.243619 3.85196 0.126952 5.25196C-0.0423173 7.76912 -0.0423173 10.2948 0.126952 12.812C0.160704 13.5999 0.278028 14.3821 0.476952 15.1453C0.617623 15.7345 0.902229 16.2797 1.30529 16.732C1.78043 17.2027 2.38607 17.5197 3.04362 17.642C5.55885 17.9524 8.09321 18.0811 10.627 18.027C14.7103 18.0853 18.292 18.027 22.527 17.7003C23.2007 17.5856 23.8233 17.2681 24.312 16.7903C24.6386 16.4635 24.8825 16.0636 25.0236 15.6236C25.4409 14.3434 25.6458 13.0034 25.6303 11.657C25.677 11.0036 25.677 7.0603 25.677 6.3603ZM10.207 12.357L10.207 5.1353L17.1136 8.76363C15.177 9.83697 12.622 11.0503 10.207 12.357Z"/>
											</Svg>
										</View>
									</GradientView>
								</GradientView>
							</GradientView>
						</GradientView>
						<GradientView style = {stylesheet.styleSelects} isAction = {false}
	
	
	
	
	
	
	borderTopLeftRadius = {0}
							borderTopRightRadius = {0}
							borderBottomRightRadius = {0}
							borderBottomLeftRadius = {0}
							borderWidth = {0}
							borderColor = {"transparent"}
							id = {"ybDqnONmIZ6_yPySWPUFD"}
							fills = {[
							]}>
							<GradientView style = {stylesheet.styleSelect} onPress = {onClickstyleSelect} isAction = {true}
	
	
	
	
	
	
	
	borderTopLeftRadius = {0}
								borderTopRightRadius = {0}
								borderBottomRightRadius = {0}
								borderBottomLeftRadius = {0}
								borderWidth = {0}
								borderColor = {"transparent"}
								id = {"0j_dSK329JziWdZ7KpMq3"}
								fills = {[
								]}>
								<GradientView style = {stylesheet.styleIconLocation24} isAction = {false}
	
	
	
	
	
	
	
	
	borderTopLeftRadius = {0}
									borderTopRightRadius = {0}
									borderBottomRightRadius = {0}
									borderBottomLeftRadius = {0}
									borderWidth = {0}
									borderColor = {"transparent"}
									id = {"_CED-LRZjHaencIIj7AU9"}
									fills = {[
									]}>
									<View style = {stylesheet.styleVectorCopy3}>
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
									id = {"r_XMZRXsiWaU5G1UJQ44o"}
									fills = {[
									]}>
									<Text style = {stylesheet.styleTitleCopy5}>
										{`Map`}
									</Text>
									<Text style = {stylesheet.styleSubtitleCopy2}>
										{`2972 Westheimer Rd. Santa Ana, Illinois 85486 `}
									</Text>
								</GradientView>
								<GradientView style = {stylesheet.styleChevronRight} isAction = {false}
	
	
	
	
	
	
	
	
	borderTopLeftRadius = {0}
									borderTopRightRadius = {0}
									borderBottomRightRadius = {0}
									borderBottomLeftRadius = {0}
									borderWidth = {0}
									borderColor = {"transparent"}
									id = {"fPevxxpBIGgPV98jiuNoN"}
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
								id = {"lZJ4mjQWYlKWRkfJTcbY9"}
								fills = {[
								]}>
								<GradientView style = {stylesheet.styleIconMessage24} isAction = {false}
	
	
	
	
	
	
	
	
	borderTopLeftRadius = {0}
									borderTopRightRadius = {0}
									borderBottomRightRadius = {0}
									borderBottomLeftRadius = {0}
									borderWidth = {0}
									borderColor = {"transparent"}
									id = {"Y6XrN69qEaxs5Qqkw6VK7"}
									fills = {[
									]}>
									<View style = {stylesheet.styleMessage}>
										<Svg
											fill = "rgba(51, 51, 51, 1)"
										>
											<Path d="M4.85596 22.9457C6.33943 22.9457 9.33838 21.505 11.6009 19.8934C19.1357 20.0322 24.7707 15.6778 24.7707 9.95738C24.7707 4.43973 19.2531 0 12.38 0C5.50698 0 0 4.43973 0 9.95738C0 13.4686 2.17718 16.5956 5.51765 18.2285C5.05873 19.093 4.24763 20.2776 3.78871 20.8966C3.10568 21.8038 3.57527 22.9457 4.85596 22.9457ZM6.14732 20.7365C6.00858 20.7899 5.95522 20.7152 6.05127 20.5978C6.59556 19.9361 7.396 18.8795 7.79088 18.1325C8.11105 17.5455 8.00432 17.0332 7.32129 16.713C4.0662 15.1869 2.17718 12.7429 2.17718 9.95738C2.17718 5.66706 6.70229 2.17718 12.38 2.17718C18.0578 2.17718 22.5829 5.66706 22.5829 9.95738C22.5829 14.2477 18.0578 17.7483 12.38 17.7483C12.1879 17.7483 11.8891 17.7376 11.5262 17.7376C11.0673 17.7269 10.7258 17.8657 10.2989 18.1965C9.00753 19.157 7.09717 20.3523 6.14732 20.7365Z"/>
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
									id = {"MOaLwn6QJRiGp_v1oBlzR"}
									fills = {[
									]}>
									<Text style = {stylesheet.styleTitleCopy6}>
										{`Email`}
									</Text>
									<Text style = {stylesheet.styleSubtitleCopy3}>
										{`email@gmail.com`}
									</Text>
								</GradientView>
								<GradientView style = {stylesheet.styleChevronRightCopy2} isAction = {false}
	
	
	
	
	
	
	
	
	borderTopLeftRadius = {0}
									borderTopRightRadius = {0}
									borderBottomRightRadius = {0}
									borderBottomLeftRadius = {0}
									borderWidth = {0}
									borderColor = {"transparent"}
									id = {"0UwAf0iikeOlrUA8W0rKV"}
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
							<GradientView style = {stylesheet.styleSelectCopy2} onPress = {onClickstyleSelectCopy2} isAction = {true}
	
	
	
	
	
	
	
	borderTopLeftRadius = {0}
								borderTopRightRadius = {0}
								borderBottomRightRadius = {0}
								borderBottomLeftRadius = {0}
								borderWidth = {0}
								borderColor = {"transparent"}
								id = {"wQYbhrHS-EPMKYPxoXlYq"}
								fills = {[
								]}>
								<GradientView style = {stylesheet.styleIconNetwork24} isAction = {false}
	
	
	
	
	
	
	
	
	borderTopLeftRadius = {0}
									borderTopRightRadius = {0}
									borderBottomRightRadius = {0}
									borderBottomLeftRadius = {0}
									borderWidth = {0}
									borderColor = {"transparent"}
									id = {"SPCj5jxCu6lU9114YmaC7"}
									fills = {[
									]}>
									<View style = {stylesheet.styleNetwork}>
										<Svg
											fill = "rgba(51, 51, 51, 1)"
										>
											<Path d="M11.0353 22.0706C17.0866 22.0706 22.0813 17.0759 22.0813 11.0353C22.0813 4.9947 17.0759 0 11.0246 0C4.98403 0 0 4.9947 0 11.0353C0 17.0759 4.9947 22.0706 11.0353 22.0706ZM8.21777 8.85812C8.16441 8.45257 7.98298 8.0897 7.7055 7.81222C8.61265 5.52832 10.0428 3.46854 11.8998 1.77162C12.0172 1.7823 12.1452 1.80364 12.2733 1.81431C10.9606 4.10889 10.1708 6.6596 9.96805 9.30636C9.3704 9.19964 8.78341 9.05022 8.21777 8.85812ZM3.35114 5.83782C4.81327 3.70333 7.12919 2.18785 9.78662 1.81431C8.30315 3.43652 7.12919 5.29353 6.33943 7.31062C6.02992 7.33196 5.75244 7.42801 5.51765 7.57743C4.73856 7.0865 4.01284 6.49951 3.35114 5.83782ZM14.4505 5.90186C14.4398 4.78125 14.5785 3.66064 14.888 2.58273C16.8624 3.50056 18.4847 5.09075 19.4238 7.05448C18.3886 7.84424 17.236 8.44189 16.0193 8.85812C15.6991 8.47391 15.2296 8.22845 14.7066 8.21777C14.5465 7.46003 14.4611 6.69162 14.4505 5.90186ZM12.9884 5.90186C12.999 6.89439 13.1164 7.87626 13.3405 8.81543C13.1805 8.99686 13.0524 9.22098 12.9884 9.45578C12.7109 9.47712 12.4441 9.48779 12.1666 9.48779C11.9211 9.48779 11.665 9.48779 11.4195 9.46645C11.5903 7.19322 12.2199 4.9947 13.2765 3.0203C13.0737 3.9488 12.9777 4.91999 12.9884 5.90186ZM1.73961 11.0353C1.73961 9.65855 2.03843 8.35651 2.5934 7.17188C3.24442 7.79088 3.95947 8.34584 4.71722 8.81543C4.70654 8.90081 4.69587 8.97552 4.69587 9.0609C4.69587 9.63721 4.97335 10.1602 5.41092 10.4803C5.20815 11.5156 5.10142 12.5828 5.09075 13.65C3.90611 13.0737 2.78551 12.3373 1.75028 11.4622C1.73961 11.3235 1.73961 11.174 1.73961 11.0353ZM20.3417 11.0353C20.3417 11.8784 20.2243 12.7002 20.0108 13.4793C19.4132 13.7995 18.8048 14.0769 18.1858 14.3117C17.2253 13.4259 16.4355 12.4014 15.8272 11.2701C16.1047 11.014 16.3075 10.6724 16.3822 10.2776C17.6629 9.86133 18.8689 9.26367 19.9788 8.48458C20.2136 9.29569 20.3417 10.1495 20.3417 11.0353ZM6.55287 14.2904C6.52086 13.1057 6.61691 11.9318 6.83036 10.7898C7.19322 10.7151 7.52407 10.523 7.76953 10.2562C8.46324 10.4803 9.17829 10.6618 9.91469 10.7792C9.92536 12.0919 10.0748 13.3832 10.3523 14.6426C10.1708 14.792 10.0214 14.9734 9.91469 15.1762C8.77274 15.0054 7.64146 14.7066 6.55287 14.2904ZM12.1666 10.9499C12.5081 10.9499 12.8496 10.9392 13.1911 10.9072C13.4579 11.3235 13.8955 11.6116 14.3971 11.697C14.9841 12.8389 15.7312 13.8848 16.6277 14.8133C15.475 15.1228 14.2904 15.3043 13.1057 15.3576C12.8816 14.792 12.38 14.3758 11.7824 14.2797C11.5369 13.1911 11.3982 12.0705 11.3875 10.9286C11.6436 10.9499 11.9104 10.9499 12.1666 10.9499ZM2.10247 13.586C3.05232 14.2584 4.07687 14.824 5.12277 15.2936C5.1868 16.4035 5.35756 17.5028 5.64572 18.5807C3.95947 17.3747 2.68945 15.6138 2.10247 13.586ZM11.0353 20.3417C9.79729 20.3417 8.61265 20.0855 7.52407 19.6373C7.06515 18.4313 6.76632 17.1719 6.63825 15.8806C7.67348 16.2328 8.74072 16.4889 9.80797 16.6383C10.0534 17.2893 10.6618 17.7483 11.3875 17.7803C11.7397 18.6127 12.1666 19.4238 12.6575 20.1922C12.1346 20.2883 11.5903 20.3417 11.0353 20.3417ZM12.7536 17.236C12.871 17.1186 12.967 16.9692 13.0417 16.8198C14.6853 16.7557 16.3075 16.4782 17.887 15.966C18.1111 16.1474 18.3352 16.3075 18.5594 16.4676C17.4601 17.983 15.9233 19.157 14.141 19.7974C13.5967 18.9863 13.1378 18.1325 12.7536 17.236Z"/>
										</Svg>
									</View>
								</GradientView>
								<GradientView style = {stylesheet.styleConteinerCopy3} isAction = {false}
	
	
	
	
	
	
	
	
	borderTopLeftRadius = {0}
									borderTopRightRadius = {0}
									borderBottomRightRadius = {0}
									borderBottomLeftRadius = {0}
									borderWidth = {0}
									borderColor = {"transparent"}
									id = {"LA-XhKmiWbE6026Yhctx3"}
									fills = {[
									]}>
									<Text style = {stylesheet.styleTitleCopy7}>
										{`Website`}
									</Text>
									<Text style = {stylesheet.styleSubtitleCopy4}>
										{`www.website.com`}
									</Text>
								</GradientView>
								<GradientView style = {stylesheet.styleChevronRightCopy4} isAction = {false}
	
	
	
	
	
	
	
	
	borderTopLeftRadius = {0}
									borderTopRightRadius = {0}
									borderBottomRightRadius = {0}
									borderBottomLeftRadius = {0}
									borderWidth = {0}
									borderColor = {"transparent"}
									id = {"kjRFqYiuG2MUDUzK3ENk6"}
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
							<GradientView style = {stylesheet.styleSelectCopy3} onPress = {onClickstyleSelectCopy3} isAction = {true}
	
	
	
	
	
	
	
	borderTopLeftRadius = {0}
								borderTopRightRadius = {0}
								borderBottomRightRadius = {0}
								borderBottomLeftRadius = {0}
								borderWidth = {0}
								borderColor = {"transparent"}
								id = {"xki6dX1JRC9TV-LJ3ZPU-"}
								fills = {[
								]}>
								<GradientView style = {stylesheet.styleIconPhone24} isAction = {false}
	
	
	
	
	
	
	
	
	borderTopLeftRadius = {0}
									borderTopRightRadius = {0}
									borderBottomRightRadius = {0}
									borderBottomLeftRadius = {0}
									borderWidth = {0}
									borderColor = {"transparent"}
									id = {"eM_swvts0sDvL7HHguX89"}
									fills = {[
									]}>
									<View style = {stylesheet.stylePhone}>
										<Svg
											fill = "rgba(51, 51, 51, 1)"
										>
											<Path d="M15.8059 21.2171C17.6735 21.2171 18.9436 20.6834 20.0962 19.4348C20.1709 19.3494 20.2456 19.2533 20.3203 19.168C20.95 18.4636 21.2595 17.7272 21.2595 17.0441C21.2595 16.2437 20.8326 15.518 19.8827 14.867L16.7024 12.6471C15.6991 11.9534 14.5359 11.9 13.6394 12.7965L12.8496 13.5863C12.5721 13.8638 12.3053 13.8851 11.9851 13.661C11.4088 13.2768 10.3202 12.3163 9.57317 11.5692C8.81543 10.8114 8.04701 9.95765 7.63079 9.30663C7.40667 8.97578 7.42801 8.71964 7.7055 8.44216L8.49526 7.6524C9.39174 6.75592 9.33838 5.59262 8.634 4.58941L6.37144 1.35567C5.74177 0.437837 4.98403 0.0109393 4.18359 0.00026686C3.50056 -0.0104056 2.77483 0.299095 2.07045 0.918096C1.98507 0.992803 1.89969 1.06751 1.81431 1.14222C0.544294 2.30551 0 3.55419 0 5.49657C0 8.64494 1.82499 12.3589 5.37891 15.8915C8.91148 19.4028 12.5828 21.2171 15.8059 21.2171ZM15.8059 19.4348C13.0844 19.4775 9.70124 17.5457 6.73431 14.6002C3.74602 11.6546 1.76095 8.14333 1.80364 5.42186C1.82499 4.27991 2.23054 3.2767 3.03097 2.57232C3.11635 2.50829 3.18039 2.45493 3.26576 2.39089C3.56459 2.13475 3.88477 1.99601 4.18359 1.99601C4.49309 1.99601 4.77058 2.12408 4.98403 2.44425L6.97977 5.44321C7.23591 5.80607 7.24658 6.2223 6.87305 6.58516L6.01925 7.42828C5.20815 8.21804 5.28285 9.14654 5.79513 9.87227C6.37144 10.6727 7.44936 11.9 8.35651 12.7965C9.32771 13.757 10.6511 14.9417 11.4195 15.4966C12.1452 16.0089 13.0737 16.0836 13.8635 15.2725L14.7066 14.4187C15.0588 14.0452 15.475 14.0559 15.8486 14.3013L18.7942 16.2651C19.125 16.4785 19.2424 16.7453 19.2424 17.0548C19.2424 17.3536 19.1037 17.6738 18.8475 17.9833C18.7835 18.058 18.7301 18.1221 18.6661 18.2074C17.9617 19.0185 16.9585 19.4241 15.8059 19.4348Z"/>
										</Svg>
									</View>
								</GradientView>
								<GradientView style = {stylesheet.styleConteinerCopy4} isAction = {false}
	
	
	
	
	
	
	
	
	borderTopLeftRadius = {0}
									borderTopRightRadius = {0}
									borderBottomRightRadius = {0}
									borderBottomLeftRadius = {0}
									borderWidth = {0}
									borderColor = {"transparent"}
									id = {"B1hAh_W0PEMkmC5EWMKAr"}
									fills = {[
									]}>
									<Text style = {stylesheet.styleTitleCopy8}>
										{`Phone`}
									</Text>
									<Text style = {stylesheet.styleSubtitleCopy5}>
										{`+ 1 000 000 0000`}
									</Text>
								</GradientView>
								<GradientView style = {stylesheet.styleChevronRightCopy6} isAction = {false}
	
	
	
	
	
	
	
	
	borderTopLeftRadius = {0}
									borderTopRightRadius = {0}
									borderBottomRightRadius = {0}
									borderBottomLeftRadius = {0}
									borderWidth = {0}
									borderColor = {"transparent"}
									id = {"0DdDSP1za7UCnzbxGLMyT"}
									fills = {[
									]}>
									<View style = {stylesheet.styleChevronRightCopy7}>
										<Svg
											fill = "rgba(132, 132, 132, 1)"
										>
											<Path d="M7.69168 6.6822C7.68415 6.41853 7.58622 6.19252 7.38281 5.98912L1.52176 0.256138C1.34849 0.0904018 1.14509 0 0.896484 0C0.391741 0 0 0.391741 0 0.896484C0 1.13756 0.0979353 1.36356 0.271205 1.53683L5.54464 6.6822L0.271205 11.8276C0.0979353 12.0008 0 12.2193 0 12.4679C0 12.9727 0.391741 13.3644 0.896484 13.3644C1.13756 13.3644 1.34849 13.274 1.52176 13.1083L7.38281 7.36775C7.59375 7.17188 7.69168 6.94587 7.69168 6.6822Z"/>
										</Svg>
									</View>
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
 	styleTitleCopy1: {
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
	styleTitle: {
		width: "100%",
		height: "auto",
		display: "flex",
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "flex-start",
		paddingTop: 8,
		paddingRight: 16,
		paddingBottom: 8,
		paddingLeft: 16,
	},
	styleImageBlockCopy1: {
		flexBasis: 0,
		flexGrow: 1,
		borderRadius: 12,
		width: "100%",
		height: "100%",
	},
	styleImageBlock: {
		width: "100%",
		height: 256,
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "flex-start",
		paddingTop: 8,
		paddingRight: 16,
		paddingBottom: 8,
		paddingLeft: 16,
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
		width: "100%",
		height: "auto",
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "flex-start",
		paddingTop: 8,
		paddingRight: 16,
		paddingBottom: 8,
		paddingLeft: 16,
	},
	styleTitleCopy3: {
		marginBottom: 8,
		width: "100%",
		color: "rgba(51, 51, 51, 1)",
		fontSize: 22,
		fontFamily: "SF Pro Display_700",
		letterSpacing: 0,
		fontStyle: "normal",
		textAlign: "left",
		height: "auto",
		lineHeight: 26.3,
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
	styleTextBlock: {
		width: "100%",
		height: "auto",
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "flex-start",
		paddingTop: 12,
		paddingRight: 16,
		paddingBottom: 12,
		paddingLeft: 16,
	},
	styleTitleCopy4: {
		width: "100%",
		color: "rgba(51, 51, 51, 1)",
		fontSize: 22,
		fontFamily: "SF Pro Display_700",
		letterSpacing: 0,
		fontStyle: "normal",
		textAlign: "left",
		height: "auto",
		lineHeight: 26.3,
	},
	styleTextBlockCopy1: {
		width: "100%",
		height: "auto",
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "flex-start",
		paddingTop: 12,
		paddingRight: 16,
		paddingBottom: 12,
		paddingLeft: 16,
	},
	styleUnion: {
		position: "absolute",
		left: 2,
		right: -21,
		top: 2,
		bottom: -21,
		width: "auto",
		height: "auto",
	},
	styleIconInstgram24: {
		width: 28,
		height: 28,
	},
	styleButton: {
		marginRight: 8,
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
	styleVector: {
		position: "absolute",
		left: 2,
		right: -22,
		top: 5,
		bottom: -15,
		width: "auto",
		height: "auto",
	},
	styleIconTwitter24: {
		width: 28,
		height: 28,
	},
	styleButtonCopy1: {
		marginRight: 8,
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
	styleUnionCopy1: {
		position: "absolute",
		left: 1,
		right: -25,
		top: 6,
		bottom: -10,
		width: "auto",
		height: "auto",
	},
	styleIconTripadvisor24: {
		width: 28,
		height: 28,
	},
	styleButtonCopy2: {
		marginRight: 8,
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
	styleVectorCopy1: {
		position: "absolute",
		left: 4,
		right: -15,
		top: 5,
		bottom: -14,
		width: "auto",
		height: "auto",
	},
	styleIconFacebook24: {
		width: 28,
		height: 28,
	},
	styleButtonCopy3: {
		marginRight: 8,
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
	styleVectorCopy2: {
		position: "absolute",
		left: 1,
		right: -25,
		top: 5,
		bottom: -13,
		width: "auto",
		height: "auto",
	},
	styleIconYoutube24: {
		width: 28,
		height: 28,
	},
	styleButtonCopy4: {
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
	styleButtons: {
		width: "100%",
		height: "auto",
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		paddingRight: 16,
		paddingLeft: 16,
	},
	styleBlock: {
		width: "100%",
		height: "auto",
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "flex-start",
		paddingBottom: 12,
	},
	styleVectorCopy3: {
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
	styleTitleCopy5: {
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
	styleSubtitleCopy2: {
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
	styleMessage: {
		position: "absolute",
		left: 5,
		right: -20,
		top: 5,
		bottom: -18,
		width: "auto",
		height: "auto",
	},
	styleIconMessage24: {
		marginRight: 8,
		width: 34,
		height: 34,
	},
	styleTitleCopy6: {
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
	styleSubtitleCopy3: {
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
	styleNetwork: {
		position: "absolute",
		left: 6,
		right: -16,
		top: 5,
		bottom: -17,
		width: "auto",
		height: "auto",
	},
	styleIconNetwork24: {
		marginRight: 8,
		width: 34,
		height: 34,
	},
	styleTitleCopy7: {
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
	styleSubtitleCopy4: {
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
	stylePhone: {
		position: "absolute",
		left: 6,
		right: -15,
		top: 6,
		bottom: -15,
		width: "auto",
		height: "auto",
	},
	styleIconPhone24: {
		marginRight: 8,
		width: 34,
		height: 34,
	},
	styleTitleCopy8: {
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
	styleSubtitleCopy5: {
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
	styleChevronRightCopy7: {
		position: "absolute",
		left: 9,
		right: 1,
		top: 5,
		bottom: -8,
		width: "auto",
		height: "auto",
	},
	styleChevronRightCopy6: {
		width: 24,
		height: 24,
	},
	styleSelectCopy3: {
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
	styleSelects: {
		width: "100%",
		height: "auto",
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "flex-start",
	},
	styleContent: {
		position: "absolute",
		left: 0,
		right: 0,
		top: 93,
		width: "auto",
		height: "auto",
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "flex-start",
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
		height: 1101,
		backgroundColor: "rgba(249, 248, 246, 1)",
	},

});