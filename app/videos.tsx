import { View, Text, Animated, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'expo-router';
import { Directions, Gesture, GestureDetector } from 'react-native-gesture-handler';
import responsiveSize, { responsiveHeight } from '@/constants/responsiveSize';
import CountryLinks from '@/components/CountryLinks';
import countries from '@/constants/countries';
import Caret from "@/assets/svg/caret.svg";
import SwipeTo from '@/components/SwipeTo';

const { width, height } = Dimensions.get('screen');
const AnimatedBG = Animated.createAnimatedComponent(ImageBackground);

const targets = [
    [0.5*height, 1.5*height, 2.5*height, -0.5*height],
    [-0.5*height, 0.5*height, 1.5*height, 2.5*height],
    [2.5*height, -0.5*height, 0.5*height, 1.5*height],
    [1.5*height, 2.5*height, -0.5*height, 0.5*height]
]

const Videos = () => {
    const [active, setActive] = useState(0);
    const router = useRouter();

    const positions = useRef<Animated.Value[]>(
        countries.map((_, i) => new Animated.Value(i === 0 ? 0.5*height : i === 1 ? 1.5*height : -0.5*height))
    ).current;

    useEffect(() => {

        // Create animations array
        const animations = active == 0 ? [
            Animated.timing(positions[2], {
                toValue: 1.5*height,
                duration: 0,
                useNativeDriver: false,
            }),Animated.spring(positions[0], {
                toValue: targets[active][0],
                friction: 10,
                tension: 50,
                useNativeDriver: false,
            }),
            Animated.spring(positions[1], {
                toValue: targets[active][1],
                friction: 10,
                tension: 50,
                useNativeDriver: false,
            }),
            Animated.spring(positions[3], {
                toValue: targets[active][3],
                friction: 10,
                tension: 50,
                useNativeDriver: false,
            })
        ]: active == 1 ? [
            Animated.timing(positions[3], {
                toValue: 1.5*height,
                duration: 0,
                useNativeDriver: false,
            }),Animated.spring(positions[0], {
                toValue: targets[active][0],
                friction: 10,
                tension: 50,
                useNativeDriver: false,
            }),
            Animated.spring(positions[1], {
                toValue: targets[active][1],
                friction: 10,
                tension: 50,
                useNativeDriver: false,
            }),
            Animated.spring(positions[2], {
                toValue: targets[active][2],
                friction: 10,
                tension: 50,
                useNativeDriver: false,
            })
        ]: active == 2 ? [
            Animated.timing(positions[0], {
                toValue: 1.5*height,
                duration: 0,
                useNativeDriver: false,
            }),Animated.spring(positions[1], {
                toValue: targets[active][1],
                friction: 10,
                tension: 50,
                useNativeDriver: false,
            }),
            Animated.spring(positions[2], {
                toValue: targets[active][2],
                friction: 10,
                tension: 50,
                useNativeDriver: false,
            }),
            Animated.spring(positions[3], {
                toValue: targets[active][3],
                friction: 10,
                tension: 50,
                useNativeDriver: false,
            })
        ]:[
            Animated.timing(positions[1], {
                toValue: 1.5*height,
                duration: 0,
                useNativeDriver: false,
            }),
            Animated.spring(positions[0], {
                toValue: targets[active][0],
                friction: 10,
                tension: 50,
                useNativeDriver: false,
            }),
            Animated.spring(positions[2], {
                toValue: targets[active][2],
                friction: 10,
                tension: 50,
                useNativeDriver: false,
            }),
            Animated.spring(positions[3], {
                toValue: targets[active][3],
                friction: 10,
                tension: 50,
                useNativeDriver: false,
            })
        ] as Animated.CompositeAnimation[]; // Filter out nulls and cast to correct type

        Animated.parallel(animations).start();
    }, [active]);

    const swipeRight = Gesture.Fling().direction(Directions.RIGHT) 
        .onEnd(() => router.back())
        .runOnJS(true);

    const swipeUp = Gesture.Fling().direction(Directions.UP) 
        .onEnd(() => setActive(prev => (prev !== 3 ? prev + 1 : 0)))
        .runOnJS(true);

    return (
        <View className="w-[100vw] h-[100vh] items-center bg-secondary z-0 top-0 relative">
            {/* Swipe Right Activity for going back to Index page */}
            <View className="absolute left-0 top-0 w-[20vw] h-[100vh] z-[9999]">
                <GestureDetector gesture={swipeRight}>
                    <View className="w-full h-full" />
                </GestureDetector>
            </View>
            <SwipeTo scrollY={-1} side="r" text="Swipe Right to Go Back" dropAnim={active}/>

            {/* Swipe Up Activity for going back to Index page */}
            <View className="absolute left-0 bottom-0 w-[100vw] h-[33.3vh] z-[9999]">
                <GestureDetector gesture={swipeUp}>
                    <View className="w-full h-full" />
                </GestureDetector>
            </View>
            <SwipeTo scrollY={0} side="b" text="Swipe Up to Change Country" dropAnim={active}/>

            {/* Content */}
            <View className="w-full z-10 mt-[33vh] -translate-y-1/2">
                <Text
                    className="font-poppins_light_italic text-primary text-center"
                    style={{
                        fontSize: responsiveSize(22.9166666),
                        textShadowColor: 'rgba(0, 0, 0, 0.5)',
                        textShadowOffset: {width: -1, height: 1},
                        textShadowRadius: 10,
                    }}
                >
                    Explore Cultures & Traditions
                </Text>
                <Text
                    className="font-poppins_medium text-primary text-center"
                    style={{
                        fontSize: responsiveSize(10.0260416),
                        marginTop: -responsiveSize(10.6944444),
                        textShadowColor: 'rgba(0, 0, 0, 0.5)',
                        textShadowOffset: {width: -1, height: 1},
                        textShadowRadius: 10
                    }}
                >
                    Select a country to discover its unique heritage through videos.
                </Text>
            </View>
            
            {countries.map((item, index) => (
                    
                    <AnimatedBG
                        source={item.background}
                        style={{
                            position: 'absolute',
                            width: width,
                            height: height,
                            top: positions[index],
                            backgroundPosition:"middle middle"
                        }}
                        resizeMode="cover"
                        className=" flex items-center justify-center -translate-y-1/2"
                        key={index}
                    >
                            <CountryLinks
                                country={item}
                                index={index}
                                active={active}
                            />
                            <Text 
                                className="absolute text-primary bottom-[2.5vh] left-[0vw] p-[1rem] -translate-y-[50%]"
                                style={{
                                    fontSize:responsiveSize(12),
                                    textShadowColor: 'rgba(0, 0, 0, 1)',
                                    textShadowOffset: {width: -1, height: 1},
                                    textShadowRadius: 2,
                                }}
                                >
                                    Image by {item.bgAttribution}
                            </Text>
                    </AnimatedBG>
                ))}
            
        </View>
    );
};

export default Videos;
