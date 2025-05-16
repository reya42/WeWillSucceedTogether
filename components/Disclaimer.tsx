import { View, Text, Image } from 'react-native'
import React from 'react'
import { moderateScale } from "react-native-size-matters";

const Disclaimer = () => {
    return (
        <View
            className="landing-page w-[100vw] h-[100vh] bg-primary pt-[10%] pb-[20%] relative justify-center items-center z-20"
            style={{
                borderTopLeftRadius: moderateScale(43.63),
                borderTopRightRadius: moderateScale(43.63),
                paddingLeft: moderateScale(15.27),
                paddingRight: moderateScale(15.27),
        }}>
            <Image
                source={require("@/assets/images/eu.png")}
                style={{
                    width:Math.round(moderateScale(280*0.6)),
                    height:Math.round(moderateScale(217*0.6))
                }}
                className=''
            />
            <Text
                className='font-poppins_extra_bold text-eu pb-[4vh] text-center'
                style={{
                    fontSize: moderateScale(20)
                }}
            >
                Co-funded by the{"\n"}European Union
            </Text>
            <Text
                className='font-poppins_medium text-secondary pb-[4vh] text-center'
                style={{
                    fontSize: moderateScale(12.4)
                }}
            >
                Funded by the European Union. Views and opinions expressed are however those of the author(s) only and do not necessarily reflect those of the European Union or the European Education and Culture Executive Agency (EACEA). Neither the European Union nor EACEA can be held responsible for them.
            </Text>
        </View>
    )
}

export default Disclaimer