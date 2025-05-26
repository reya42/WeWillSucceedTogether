import { View, Text, Image, Animated, Dimensions } from 'react-native'
import { memo } from 'react'
import { moderateScale } from "react-native-size-matters";


const Hero = () => {

    return (
        <View className="w-full h-[100vh] justify-center items-center bg-secondary z-0 relative top-0">
            <View className="w-[100vw] z-10">
                <Text 
                    className="font-poppins_light_italic text-primary text-center" 
                    style={{fontSize:moderateScale(24.826)}}
                >
                    We Will Succeed
                </Text>
                <Text 
                    className='font-poppins_medium text-primary text-center'
                    style={{
                        fontSize: moderateScale(44.99),
                        marginTop: -moderateScale(25)
                    }}>
                    Together
                </Text>
            </View>
            
            <View
                className="absolute bottom-12 left-4 flex-row items-center"
                style={{
                    width: moderateScale(190.972223),
                    height: moderateScale(51.5625001)
                }}>
                <Image
                    source={require("@/assets/images/eu.png")}
                    style={{
                        width:Math.round(moderateScale(66.8402779)),
                        height:Math.round(moderateScale(51.5625001))
                    }}
                    resizeMode="contain"
                />
                <Text className="text-primary font-poppins_medium"
                    style={{
                        fontSize: moderateScale(11),
                        marginTop: moderateScale(9),
                        height:moderateScale(43.9236112)
                    }}
                >
                    Co-funded by the{"\n"}European Union
                </Text>
            </View>
        </View>
    )
}

export default memo(Hero)