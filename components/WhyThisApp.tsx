import { StyleSheet, Text, View } from 'react-native'
import { memo } from 'react'

import Book from "@/assets/svg/book.svg"
import PeopleGroup from "@/assets/svg/people-group.svg"
import Star from "@/assets/svg/star.svg"
import responsiveSize from '@/constants/responsiveSize'

function WhyThisApp() {
    return (
        <View 
            className="landing-page w-[100vw] h-[100vh] bg-secondary pt-[10%] pb-[20%] relative justify-around"
            style={{
                borderTopLeftRadius: responsiveSize(43.63),
                borderTopRightRadius: responsiveSize(43.63),
                paddingLeft: responsiveSize(15.27),
                paddingRight: responsiveSize(15.27),
            }}
            >
            <Text
                className="font-poppins_extra_bold text-primary text-center"
                style={{
                    fontSize: responsiveSize(27.8)
                }}    
            >
                Why This App?
            </Text>
            <View 
                className="flex flex-col w-[95%] mx-[2.5%] items-center bg-primary shadow-xl"
                style={{
                    borderRadius:responsiveSize(22.91),
                    padding: responsiveSize(15.27),
                }}
            >
                <View className="relative" style={{width: Math.round(responsiveSize(100)), height:Math.round(responsiveSize(100))}}>
                    <View className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]" style={{width: Math.round(responsiveSize(100)), height:Math.round(responsiveSize(100))}}> 
                        <Star width={Math.round(responsiveSize(100))} height={Math.round(responsiveSize(100))} fill="#070029" className="  "/>
                    </View>
                    <View className="absolute left-[50%] top-[55%] -translate-x-[50%] -translate-y-[55%]" style={{width: Math.round(responsiveSize(54)), height:Math.round(responsiveSize(54))}}>
                        <PeopleGroup width={Math.round(responsiveSize(54))} height={Math.round(responsiveSize(54))} fill="#fff"/>
                    </View>
                </View>
                <Text
                    className="font-poppins_semi_bold text-secondary text-center"
                    style={{
                        fontSize:responsiveSize(16.75),
                        marginTop:responsiveSize(7.6388889)
                    }}>
                    Helping Migrant Communities
                </Text>
                <Text 
                    className="font-poppins_light_italic text-secondary text-center"
                    style={{fontSize:responsiveSize(13)}}
                >
                    Supporting students and families in understanding their new social and educational environment.
                </Text>
            </View>
            <View 
                className="flex flex-col w-[95%] mx-[2.5%] items-center bg-primary shadow-xl"
                style={{
                    borderRadius:responsiveSize(22.91),
                    padding: responsiveSize(15.27),
                }}
            >
                <View className="relative" style={{width: Math.round(responsiveSize(88.7)), height:Math.round(responsiveSize(88.7))}}>
                    <View
                        className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] "
                        style={{
                        width: Math.round(responsiveSize(88.7)),
                        height: Math.round(responsiveSize(88.7)) 
                        }}>
                        <Book width={Math.round(responsiveSize(88.7))} height={Math.round(responsiveSize(88.7))} fill="#070029" className="  "/>
                    </View>
                </View>
                <Text
                    className="font-poppins_semi_bold text-secondary text-center"
                    style={{
                        fontSize:responsiveSize(16.75),
                        marginTop:responsiveSize(7.6388889)
                    }}>
                    Empowering Educators
                </Text>
                <Text 
                    className="font-poppins_light_italic text-secondary text-center"
                    style={{fontSize:responsiveSize(13)}}
                >
                    Providing resources to help teachers guide students through the integration process.
                </Text>
            </View>
        </View>
    )
}
export default memo(WhyThisApp)