import { View, Text, Image, Animated, Dimensions } from 'react-native'
import React, { memo, useEffect, useRef, useState } from 'react'
import responsiveSize from '@/constants/responsiveSize';


const { width, height } = Dimensions.get('screen');

const Hero = () => {

    return (
        <View className="w-full h-[100vh] justify-center items-center bg-secondary z-0 sticky top-0">
            <View className="w-[100vw] z-10">
                <Text 
                    className="font-poppins_light_italic text-primary text-center" 
                    style={{fontSize:responsiveSize(24.826)}}
                >
                    We Will Succeed
                </Text>
                <Text 
                    className='font-poppins_medium text-primary text-center'
                    style={{
                        fontSize: responsiveSize(44.99),
                        marginTop: -responsiveSize(28.6458334)
                    }}>
                    Together
                </Text>
            </View>
            
            <View
                className="absolute bottom-12 left-4 flex-row items-center"
                style={{
                    width: responsiveSize(190.972223),
                    height: responsiveSize(51.5625001)
                }}>
                <Image
                    source={require("@/assets/images/eu.png")}
                    style={{
                        width:Math.round(responsiveSize(66.8402779)),
                        height:Math.round(responsiveSize(51.5625001))
                    }}
                    resizeMode="contain"
                />
                <Text className="text-primary font-poppins_medium"
                    style={{
                        fontSize: responsiveSize(11),
                        marginTop: responsiveSize(9),
                        height:responsiveSize(43.9236112)
                    }}
                >
                    Co-funded by the{"\n"}European Union
                </Text>
            </View>
        </View>
    )
}

export default memo(Hero)