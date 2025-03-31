import responsiveSize from "@/constants/responsiveSize";
import { useEffect, useRef, useState } from "react";
import { Text, Dimensions, Pressable, ImageBackground, View, Animated } from "react-native";

const screenWidth = Dimensions.get("window").width;

const elements = [
    { x: 0 * screenWidth, y: 0 * screenWidth, size: screenWidth * 0.56 },
    { x: 0.58 * screenWidth, y: 0 * screenWidth, size: screenWidth * 0.27 },
    { x: 0.58 * screenWidth, y: 0.29 * screenWidth, size: screenWidth * 0.27 },
];

interface WhatToFindItem {
    id: number;
    title: string;
    detail: string;
    Icon: React.FC<React.SVGAttributes<SVGElement>>;
}

const Carousel = ({data, id, active, setActive}: { data: WhatToFindItem; id: number; active: number; setActive: Function;}) => {
    
    const [currentOrder, setCurrentOrder] = useState(id);
    
    const size = useRef(new Animated.Value(elements[id].size)).current;
    const locations = useRef(new Animated.ValueXY({x:elements[id].x, y:elements[id].y})).current;
    const fontSize = useRef(new Animated.Value(active === id ? responsiveSize(16.2326389) : responsiveSize(11.7447916))).current;
    const lSide = useRef(new Animated.Value(active === id ? responsiveSize(23.8715277) : 0)).current;
    const rtSide = useRef(new Animated.Value(active === id ? 0 : id == 1 ? responsiveSize(23.8715277) : 0)).current;
    const rbSide = useRef(new Animated.Value(active === id ? 0 : id == 1 ? 0 : responsiveSize(23.8715277))).current;
    
    const friction= 50;
    const tension= 30;

    const [isActive, setIsActive] = useState(active === id)

    const [pressable,setPressable] = useState(active !== id)

    useEffect(() => {
        const order = active == id ? 0 : active == 0 ? id : active == 1 && id == 2 ? 1 : active == 1 && id == 0 ? 2 : id + 1;
        
        setPressable(false);
        setTimeout(() => {
            setPressable(active !== id)
        }, 500);

        if (order !== currentOrder) {
            Animated.spring(size, {
                toValue: elements[order].size,
                friction: friction,
                tension: tension,
                useNativeDriver: false,
            }).start();

            Animated.spring(locations, {
                toValue: {x:elements[order].x, y:elements[order].y},
                friction: friction,
                tension: tension,
                useNativeDriver: false,
            }).start();

            Animated.spring(fontSize, {
                toValue: active === id ? responsiveSize(16.2326389) : responsiveSize(11.7447916) ,
                friction: friction,
                tension: tension,
                useNativeDriver: false,
            }).start();

            Animated.spring(lSide, {
                toValue: active === id ? responsiveSize(23.8715277) : 0,
                friction: friction,
                tension: tension,
                useNativeDriver: false,
            }).start();

            Animated.spring(rtSide, {
                toValue: active === id ? 0 : order == 1 ? responsiveSize(23.8715277) : 0,
                friction: friction,
                tension: tension,
                useNativeDriver: false,
            }).start();

            Animated.spring(rbSide, {
                toValue: active === id ? 0 : order == 1 ? 0 : responsiveSize(23.8715277),
                friction: friction,
                tension: tension,
                useNativeDriver: false,
            }).start();

            
            setCurrentOrder(order);
            setIsActive(active === id);
        }
    }, [active]);

    const bgOpacity = size.interpolate({ inputRange: [elements[1].size, elements[0].size], outputRange: [ 0.9, 1]});
    const textOpacity = size.interpolate({ inputRange: [elements[1].size, elements[0].size], outputRange: [ 0, 1]});
    const mTop = size.interpolate({ inputRange: [elements[1].size, elements[0].size], outputRange: [ 0, responsiveSize(9.54861109) ]});

    return (
        <Animated.View
            className="bg-secondary absolute z-[999]"
            style={{
                height: size,
                width: size,
                left: locations.x,
                top: locations.y,
                opacity: bgOpacity,
                borderBottomLeftRadius:lSide,
                borderTopLeftRadius:lSide,
                borderTopRightRadius:rtSide,
                borderBottomRightRadius:rbSide,
                zIndex: isActive ? 40 : 30
            }}
        >   
            <Pressable 
                className="w-full h-full flex items-center justify-center overflow-hidden" 
                style={{ 
                    paddingLeft: active==id ? 8 : 0,
                    paddingRight: active==id ? 8 : 0
                }} 
                onPress={() => {if (pressable) {setActive(id)}}}
            >
                <Animated.View style={{ width: size, height: size }} className="absolute top-0 left-0 items-center justify-center opacity-[20%] z-[-1]">
                    <data.Icon width="80%" height="80%" fill="#fff"/>
                </Animated.View>
                <Animated.Text
                    className="text-primary text-center font-poppins_bold z-10 relative"
                    style={{ 
                        fontSize: fontSize,
                        paddingLeft: responsiveSize(3.81944444),
                        paddingRight:responsiveSize(3.81944444)
                    }}
                >
                    {data.title}
                </Animated.Text>
                <Animated.Text
                    className="text-primary text-center font-poppins z-10 relative px-2"
                    style={{
                        opacity: textOpacity,
                        height: active == id? "auto":0,
                        marginTop: mTop,
                        fontSize: fontSize,
                        paddingLeft: responsiveSize(3.81944444),
                        paddingRight:responsiveSize(3.81944444)
                    }}
                >
                    {data.detail}
                </Animated.Text>
            </Pressable>
        </Animated.View>
    );
};

export default Carousel;