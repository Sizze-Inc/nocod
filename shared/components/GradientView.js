import * as React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Svg, { Defs, RadialGradient, LinearGradient, Stop, Ellipse, Rect } from "react-native-svg";

const ParentView = ({
  style,
  isAction,
  children,
  ...other
}) => {
  if (isAction) {
    return <TouchableOpacity
       style={style} {...other}
    >
      {children}
    </TouchableOpacity>
  } else {
    return <View
        style={style} {...other}
    >
      {children}
    </View>
  }
}

export const GradientView = (props) => {
  const {
    style,
    borderTopLeftRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    borderTopRightRadius,
    fills,
    children,
    borderWidth,
    borderColor,
    id,
    isAction,
    ...other
  } = props;

 const [width, setWidth] = React.useState(0);
 const [height, setHeight] = React.useState(0);
 const onLayout=(event)=> {
    const {x, y, height, width} = event.nativeEvent.layout;
    setWidth(width);
    setHeight(height);
  }
  return (
    <ParentView style={style} isAction={isAction} {...other} onLayout={onLayout}>
      {
        fills.map((fill, index) => {
          if (fill.type === "SOLID") {
            return (
              <View
                key={`${id}${index}`}                style={{ 
                  zIndex: -1,
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width,
                  height,
                  borderTopLeftRadius,
                  borderBottomLeftRadius,
                  borderBottomRightRadius,
                  borderTopRightRadius,
                  opacity: fill.opacity,
                  backgroundColor: fill.color,
                }}
              >
              
              </View>
            )
          } else if (fill.type === "GRADIENT_LINEAR") {
            return (
              <View
                key={`${id}${index}`}                style={{ 
                  zIndex: -1,
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width,
                  height,
                  overflow: "hidden",
                  borderTopLeftRadius,
                  borderBottomLeftRadius,
                  borderBottomRightRadius,
                  borderTopRightRadius,
                }}
              >
                 <Svg height="100%" width="100%">
                  <Defs>
                    <LinearGradient
                      id={`${id}grad${index}`}
                      x1={`${fill.gradientStartPoint.x * 100}%`}
                      y1={`${fill.gradientStartPoint.y * 100}%`}
                      x2={`${fill.gradientEndPoint.x * 100}%`}
                      y2={`${fill.gradientEndPoint.y * 100}%`}
                    >
                      {
                        fill.gradientStops.map(({ position ,color }) => {
                          return <Stop offset={`${position}`} stopColor={color} stopOpacity={fill.opacity} />;
                        })
                      }
                    </LinearGradient>
                  </Defs>
                  <Rect width="100%" height="100%" fill={`url(#${`${id}grad${index}`})`} />
                </Svg>
              </View>
            )
          } else if (fill.type === "GRADIENT_RADIAL") {
            return (
              <View
                key={`${id}${index}`}                style={{ 
                  zIndex: -1,
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width,
                  height,
                  overflow: "hidden",
                  borderTopLeftRadius,
                  borderBottomLeftRadius,
                  borderBottomRightRadius,
                  borderTopRightRadius,
                }}
              >
                 <Svg height="100%" width="100%">
                  <Defs>
                    <RadialGradient
                      id={`${id}grad${index}`}
                      cx={`${fill.gradientStartPoint.x * 100}%`}
                      cy={`${fill.gradientStartPoint.y * 100}%`}
                      fx={`${fill.gradientEndPoint.x * 100}%`}
                      fy={`${fill.gradientEndPoint.y * 100}%`}
                      // rx="100%"
                      // ry="100%"
                      gradientUnits="userSpaceOnUse"
                    >
                      {
                        fill.gradientStops.map(({ position ,color }) => {
                          return <Stop offset={`${position}`} stopColor={color} stopOpacity={fill.opacity} />;
                        })
                      }
                    </RadialGradient>
                  </Defs>
                  <Rect width="100%" height="100%" fill={`url(#${`${id}grad${index}`})`} />
                </Svg>
              </View>
            )
          } else if (fill.type === "IMAGE") {
            return (
              <View
                key={`${id}${index}`}                style={{ 
                  zIndex: -1,
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width,
                  height,
                  overflow: "hidden",
                  borderTopLeftRadius,
                  borderBottomLeftRadius,
                  borderBottomRightRadius,
                  borderTopRightRadius,
                  opacity: fill.opacity,
                }}
              >
                <Image
                  style={{ 
                    width: "100%",
                    height: "100%",
                  }}
                  source={{uri: fill.image}}
                />
              </View>
            )
          }
          return (
            <View key={`${id}${index}`}>
                <Text>Nice</Text>
            </View>
          )
        })
      }
      <View style={{
        zIndex: -1,
        position: "absolute",
        left: 0,
        top: 0,
        width,
        height,
        borderTopLeftRadius,
        borderBottomLeftRadius,
        borderBottomRightRadius,
        borderTopRightRadius,
        borderWidth,
        borderColor,
      }}>
      </View>
      {children}
    </ParentView>
  )
}