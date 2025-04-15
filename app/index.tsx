import { Animated, Dimensions, ScrollView, View } from "react-native";
import { useState } from "react";
import { GestureDetector, Gesture, Directions } from "react-native-gesture-handler";
import { useRouter } from "expo-router";

import WhatYoullFind from "@/components/WhatYoullFind";
import WhyThisApp from "@/components/WhyThisApp";
import Hero from "@/components/Hero";
import SwipeTo from "@/components/SwipeTo";
import Disclaimer from "@/components/Disclaimer";

const screenHeight = Dimensions.get("screen").height

const Index = () => {
    const [scrollY, setScrollY] = useState(3);
    const [stickyHeaderIndices, setStickyHeaderIndices] = useState(3)

    const handleScroll = (event: any) => {
        setScrollY(event.nativeEvent.contentOffset.y);
        setStickyHeaderIndices(Math.round(event.nativeEvent.contentOffset.y / (screenHeight) - 0.4)+3);
    };

    const router = useRouter();
    
    const swipeLeft = Gesture.Fling()
    .direction(Directions.LEFT)
    .onEnd(()=>{
        router.push("/videos")
    })
    .runOnJS(true);

    
    return (
        <ScrollView
            className="w-full h-max bg-secondary relative"
            stickyHeaderIndices={[stickyHeaderIndices]}
            showsVerticalScrollIndicator={false}
            onScroll={handleScroll}
            scrollEventThrottle={64}
        >   
        {/*                       Swipe Right Activity                       */}
        <View className="absolute right-0 top-0 w-[25vw] h-[81%] z-[9999]">
            <GestureDetector gesture={swipeLeft}>
                <View className="w-full h-full"/>
            </GestureDetector>
        </View>
        <View className="absolute right-0 bottom-0 w-[25vw] h-[10%] z-[9999]">
            <GestureDetector gesture={swipeLeft}>
                <View className="w-full h-full"/>
            </GestureDetector>
        </View>

        <SwipeTo scrollY={scrollY} side="l" text="Swipe Left to Watch Videos" dropAnim={-1} />

            {/*                               Hero                               */}
            <Hero /> 


            {/*                            Disclaimer                            */}
            <Animated.View
                style={{
                    position: scrollY >= 1 * screenHeight ? "sticky" : "relative",
                    top: scrollY >= 1 * screenHeight ? 0 : "auto",
                    zIndex: 20,
                }}
            >
                <Disclaimer />
            </Animated.View>

            {/*                           Why This App?                          */}
            <Animated.View
                style={{
                    position: scrollY >= 2 * screenHeight ? "sticky" : "relative",
                    top: scrollY >= 2 * screenHeight ? 0 : "auto",
                    zIndex: 50,
                }}
            >
                <WhyThisApp />
            </Animated.View>




            {/*                   What You'll Find in This App                   */}
            <Animated.View
                style={{
                    position: scrollY >= 3 * screenHeight ? "sticky" : "relative",
                    top: scrollY >= 3 * screenHeight ? 0 : "auto",
                    zIndex: 100,
                }}
            >

                <WhatYoullFind />

            </Animated.View>
        </ScrollView>
    );
};

export default Index;