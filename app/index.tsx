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

    const handleScroll = (event: any) => {
        setScrollY(event.nativeEvent.contentOffset.y);
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
            stickyHeaderIndices={[3]}
            showsVerticalScrollIndicator={false}
            onScroll={handleScroll}
            scrollEventThrottle={16}
        >   
        {/*                       Swipe Right Activity                       */}
        <View className="absolute right-0 top-0 w-[33.333vw] h-[85.75%] z-[9999]">
            <GestureDetector gesture={swipeLeft}>
                <View className="w-full h-full"/>
            </GestureDetector>
        </View>
        <View className="absolute right-0 top-[85.75%] w-[10vw] h-[6.75%] z-[9999]">
            <GestureDetector gesture={swipeLeft}>
                <View className="w-full h-full"/>
            </GestureDetector>
        <View className="absolute right-0 top-[98%] w-[33.333vw] h-[200%] z-[9999]">
            <GestureDetector gesture={swipeLeft}>
                <View className="w-full h-full"/>
            </GestureDetector>
        </View>
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