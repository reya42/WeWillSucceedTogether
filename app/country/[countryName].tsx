import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router';
import responsiveSize from '@/constants/responsiveSize';
import { Directions, Gesture, GestureDetector, ScrollView } from 'react-native-gesture-handler';
import VideoLinks from '@/components/VideoLinks';
import SwipeTo from '@/components/SwipeTo';

import countries from '@/constants/countries';

const Country = () => {
    const { countryName } = useLocalSearchParams();
    const router = useRouter();

    const country = countries.find(c => c.name === countryName);

    useEffect(() => {
        if (!country) {
            router.replace('/');
        }
    }, [country]);

    if (!country) {
        return null;
    }


    const swipeRight = Gesture.Fling().direction(Directions.RIGHT) 
    .onEnd(() => {
        router.back();
    }).runOnJS(true);

    const multiplier = countryName == "Italy" ? 0.8 : 1

    return (
        <View className='bg-secondary w-[100vw] h-[100vh] flex items-center justify-center'>
            {/* Swipe Left Activity for going back to Index page */}
            <View className="absolute left-0 top-0 w-[25vw] h-[40%] z-[50]">
                <GestureDetector gesture={swipeRight}>
                    <View className="w-full h-full" />
                </GestureDetector>
            </View>
            <View className="absolute left-0 bottom-0 w-[25vw] h-[34%] z-[50]">
                <GestureDetector gesture={swipeRight}>
                    <View className="w-full h-full" />
                </GestureDetector>
            </View>
            <SwipeTo scrollY={0} side="r" text="Swipe from Left to Go Back" dropAnim={0}/>
            <View className='mt-[8vh] mb-[4vh] flex items-center'>
                <Text 
                    className="text-primary font-poppins_medium_italic z-10"
                    style={{
                        fontSize: responsiveSize(country.titleFontSize*multiplier),
                        textShadowColor: 'rgba(0, 0, 0, 1)',
                        textShadowOffset: {width: -1, height: 1},
                        textShadowRadius: 10
                    }}>
                    {country.title}
                </Text>
                <Text 
                    className="text-primary font-poppins_medium_italic relative z-30"
                    style={{
                        fontSize: responsiveSize(country.nameFontSize*multiplier),
                        marginTop: responsiveSize(country.nameMargin*multiplier),
                        textShadowColor: 'rgba(0, 0, 0, 0.75)',
                        textShadowOffset: {width: -1, height: 1},
                        textShadowRadius: 10
                    }}>
                    {country.name}
                </Text>
                <Text 
                    className="text-secondary bg-primary font-poppins_medium_italic relative z-10 text-center"
                    style={{
                        fontSize: responsiveSize(country.subtitleFontSize*multiplier),
                        marginTop: responsiveSize(country.subtitleMargin*multiplier),
                        shadowColor: 'rgba(0, 0, 0, 1)',
                        shadowOffset: {width: -1, height: 1},
                        shadowRadius: 10
                    }}>
                    {country.subtitle}
                </Text>
                <Text 
                    className="text-secondary bg-primary font-poppins_medium_italic relative z-10 text-center"
                    style={{
                        fontSize: responsiveSize(country.watchVideosFontSize*multiplier),
                        shadowColor: 'rgba(0, 0, 0, 1)',
                        shadowOffset: {width: -1, height: 1},
                        shadowRadius: 10,
                        width: "100%"
                    }}>
                    Watch Videos Now by Clicking Buttons
                </Text>
            </View>
            <View 
                className='w-[100vw] h-[70vh] flex-col items-center justify-center mb-[2vh] gap-[0.5vh]'
            >
                {
                    country.Videos.map((item, index) =>(
                    <VideoLinks country={item.country? item.country : country.name} video={item} totalVideos={country.Videos.length} key={index}/>
                ))}
            </View>
        </View>
    );
}

export default Country;