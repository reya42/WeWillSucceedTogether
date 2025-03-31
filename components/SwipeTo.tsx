import { View, Text, Animated, Dimensions } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import AnglesRight from "@/assets/svg/angles-right.svg";
import responsiveSize, { responsiveHeight } from '@/constants/responsiveSize';

const screenWidth = Dimensions.get("screen").width;
const SCROLL_POSITION_TOLERANCE = 2; // pixels
const ANIMATION_DELAY = 5000; // 5 seconds

interface SwipeToProps {
  scrollY: number;
  side: 'l' | 'r' | 'b';
  text: string;
  dropAnim: number; // Changed to required prop
}

const SwipeTo = ({ scrollY, side, text, dropAnim }: SwipeToProps) => {
    const [visible, setVisible] = useState(false);
    const animationTimeout = useRef<NodeJS.Timeout | null>(null);
    const shakeInterval = useRef<NodeJS.Timeout | null>(null);
    const lastScrollY = useRef(scrollY);
    const lastDropAnim = useRef(dropAnim);
    
    const translate = useRef(new Animated.Value(0)).current;
    const opacity = useRef(new Animated.Value(0)).current;

    // Check if scroll positions are effectively equal within tolerance
    const scrollPositionsEqual = (a: number, b: number) => {
        return Math.abs(a - b) < SCROLL_POSITION_TOLERANCE;
    };

    // Cancel all animations and timeouts
    const cancelAnimations = () => {
        translate.stopAnimation();
        opacity.stopAnimation();
        if (animationTimeout.current) clearTimeout(animationTimeout.current);
        if (shakeInterval.current) clearInterval(shakeInterval.current);
    };

    // Smooth fade out animation
    const fadeOut = () => {
        return new Promise<void>((resolve) => {
            Animated.spring(opacity, {
                toValue: 0,
                friction: 100,
                tension: 4000,
                useNativeDriver: true,
            }).start(({ finished }) => {
                if (finished) {
                    setVisible(false);
                }
                resolve();
            });
        });
    };

    // Shaking animation sequence
    const startShakeAnimation = () => {
        cancelAnimations();
        setVisible(true);
        
        // Fade in
        Animated.spring(opacity, {
            toValue: 1,
            friction: 25,
            tension: 1.5,
            useNativeDriver: true,
        }).start();

        // Shake animation (left-right movement)
        const shakeAnimation = () => {
            const moveDistance = responsiveSize(side === 'l' ? -10 : 10);
            
            Animated.sequence([
                Animated.timing(translate, {
                    toValue: moveDistance,
                    duration: 200,
                    useNativeDriver: true,
                }),
                Animated.timing(translate, {
                    toValue: -moveDistance,
                    duration: 250,
                    useNativeDriver: true,
                }),
                Animated.timing(translate, {
                    toValue: moveDistance,
                    duration: 250,
                    useNativeDriver: true,
                }),
                Animated.timing(translate, {
                    toValue: 0,
                    duration: 200,
                    useNativeDriver: true,
                }),
            ]).start();
        };

        // Initial shake
        shakeAnimation();
        
        // Run shake animation every 5 seconds
        shakeInterval.current = setInterval(shakeAnimation, 5000);
    };

    // Handle scroll changes
    const handleScrollChange = async () => {
        const currentScrollY = scrollY;
        const prevScrollY = lastScrollY.current;

        if (!scrollPositionsEqual(currentScrollY, prevScrollY)) {
            // If currently visible, fade out first
            if (visible) {
                await fadeOut();
            }
            
            lastScrollY.current = currentScrollY;
            
            // Schedule to check again after delay
            animationTimeout.current = setTimeout(() => {
                if (scrollPositionsEqual(scrollY, lastScrollY.current)) {
                    startShakeAnimation();
                }
            }, ANIMATION_DELAY);
        } else if (!visible) {
            // If scroll hasn't changed and not visible, start animation after delay
            animationTimeout.current = setTimeout(() => {
                startShakeAnimation();
            }, ANIMATION_DELAY);
        }
    };

    // Handle dropAnim changes
    const handleDropAnimChange = async () => {
        const currentDropAnim = dropAnim;
        const prevDropAnim = lastDropAnim.current;

        if (currentDropAnim !== prevDropAnim) {
            if (visible) {
                await fadeOut();
            }
            lastDropAnim.current = currentDropAnim;
            cancelAnimations();
        }
    };

    useEffect(() => {
        handleScrollChange();
    }, [scrollY]);

    useEffect(() => {
        handleDropAnimChange();
    }, [dropAnim]);

    useEffect(() => {
        return () => {
            cancelAnimations();
        };
    }, []);

    if (!visible) return null;

    return (
        <Animated.View 
            className="flex-row z-[999] items-center"
            style={[{
                position: "absolute",
                opacity: opacity,
                top: side === "b" ? responsiveHeight(90) + scrollY:responsiveHeight(2) + scrollY,
                transform: [
                    side !== "b" ? { translateX: translate } : { translateY: translate }
                ],
                width: responsiveSize(155) + responsiveSize(15) + responsiveSize(30),
                padding: responsiveSize(15),
                borderRadius: responsiveSize(15),
                backgroundColor: scrollY <= 0.95 && scrollY >= 0 ? "transparent" : 'rgba(7, 0, 41, 0.5)',
            },
            side === "r" ? { left: screenWidth * 0.025 } : { right: screenWidth * 0.025 }
            ]}
        >
            {side === "r" && (
                <View style={{ width: responsiveSize(20), height: responsiveSize(20), marginRight: responsiveSize(5) }}>
                    <AnglesRight 
                        fill='white'
                        width={responsiveSize(20)}
                        height={responsiveSize(20)}
                    />
                </View>
            )}
            
            <Text 
                className='text-primary font-poppins_medium_italic'
                style={{
                    width: responsiveSize(155),
                    fontSize: responsiveSize(10),
                    textShadowColor: 'rgba(0, 0, 0, 1)',
                    textShadowOffset: {width: -1, height: 1},
                    textShadowRadius: 10
                }}
            >
                {text}
            </Text>
            
            {(side === "l" || side === "b") && (
                <View style={{ 
                    width: responsiveSize(20),
                    height: responsiveSize(20),
                    transform: [{ 
                        rotate: side === "l"?"180deg":"-90deg"
                    }],
                }}>
                    <AnglesRight 
                        fill='white'
                        width={responsiveSize(20)}
                        height={responsiveSize(20)}
                    />
                </View>
            )}
        </Animated.View>
    );
};

export default SwipeTo;