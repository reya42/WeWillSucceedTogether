import { View, Text, ScrollView } from 'react-native'
import { useEffect } from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Directions, Gesture, GestureDetector } from 'react-native-gesture-handler';
import VideoLinks from '@/components/VideoLinks';
import SwipeTo from '@/components/SwipeTo';
import { moderateScale } from "react-native-size-matters";

import countries from '@/constants/countries';

const Country = () => {
    const { countryName } = useLocalSearchParams();
    const router = useRouter();

    const country = countries.find(c => c.name === countryName);

    useEffect(() => {
        if (!country) {
            goBack();
        }
    }, [country]);

    if (!country) {
        return null;
    }

    const goBack = ()=>{
        try {
            router.back()
        } catch (error) {
            console.error("Error navigating back:", error);
        }
    }

    const swipeRight = Gesture.Fling().direction(Directions.RIGHT).onEnd(goBack).runOnJS(true);
    
    return (
        <ScrollView
            contentContainerStyle={{ 
                alignItems: 'center', 
                justifyContent: 'center' 
            }}
            className='bg-secondary w-[100vw] '>
                
            {/* Swipe Left Activity for going back to Index page */}
            <View className="absolute left-0 top-0 w-[23vw] h-[32%] z-[9999]">
                <GestureDetector gesture={swipeRight}>
                    <View className="w-full h-full" />
                </GestureDetector>
            </View>
            <View className="absolute left-0 top-0 w-[15vw] h-[100%] z-[9999]">
                <GestureDetector gesture={swipeRight}>
                    <View className="w-full h-full" />
                </GestureDetector>
            </View>
            <SwipeTo scrollY={0} side="r" text="Swipe from Left to Go Back" dropAnim={0}/>
            <View className='mt-[10vh] mb-[5vh] flex items-center'>
                <Text 
                    className="text-primary font-poppins_medium_italic relative z-30"
                    style={{
                        fontSize: moderateScale(country.nameFontSize),
                        textShadowColor: 'rgba(0, 0, 0, 0.75)',
                        textShadowOffset: {width: -1, height: 1},
                        textShadowRadius: 10
                    }}>
                    {country.name}
                </Text>
                <Text 
                    className="text-secondary bg-primary font-poppins_medium_italic relative z-10 text-center"
                    style={{
                        fontSize: moderateScale(country.subtitleFontSize),
                        shadowColor: 'rgba(0, 0, 0, 1)',
                        shadowOffset: {width: -1, height: 1},
                        shadowRadius: 10
                    }}>
                    {country.subtitle}
                </Text>
                <Text 
                    className="text-secondary bg-primary font-poppins_medium_italic relative z-10 text-center"
                    style={{
                        fontSize: moderateScale(country.watchVideosFontSize),
                        shadowColor: 'rgba(0, 0, 0, 1)',
                        shadowOffset: {width: -1, height: 1},
                        shadowRadius: 10,
                        width: "100%"
                    }}>
                    Watch Videos Now by Clicking Buttons
                </Text>
            </View>
            <View 
                className='w-[100vw] flex-col items-center justify-center mb-[2vh] gap-[1vh]'
            >
                {
                    country.Videos.map((item, index) =>(
                    <VideoLinks country={item.country? item.country : country.name} video={item} totalVideos={country.Videos.length} key={index}/>
                ))}
            </View>
        </ScrollView>
    );
}

export default Country;