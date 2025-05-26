import { View, Text, StyleSheet } from 'react-native'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { Directions, Gesture, GestureDetector } from 'react-native-gesture-handler'
import SwipeTo from '@/components/SwipeTo'
import YoutubePlayer from 'react-native-youtube-iframe'
import { moderateScale, scale } from "react-native-size-matters";

const VideoPlayer = () => {
    const { name, link, country } = useLocalSearchParams()
    const router = useRouter()

    // Extract YouTube video ID from URL
    const getYouTubeId = (url: string) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
        const match = url.match(regExp)
        return (match && match[2].length === 11) ? match[2] : null
    }

    const videoId =getYouTubeId(String(link));

    const goBack = ()=>{
        try {
            router.back()
        } catch (error) {
            console.error("Error navigating back:", error);
        }
    }

    const swipeRight = Gesture.Fling().direction(Directions.RIGHT).onEnd(goBack).runOnJS(true);
    
    if (!videoId) {
        return (
            <View className='bg-secondary w-[100vw] h-[100vh] flex items-center justify-center'>
                <Text className="text-primary font-poppins_bold">
                    Invalid YouTube URL
                </Text>
            </View>
        )
    }

    return (
        <View className='bg-secondary w-[100vw] h-[100vh] justify-center items-center flex'>
            {/* Swipe Left Activity for going back to Country page */}
            <View className="absolute left-0 top-0 w-[25vw] h-[41%] z-[9999]">
                <GestureDetector gesture={swipeRight}>
                    <View className="w-full h-full" />
                </GestureDetector>
            </View>
            <View className="absolute left-0 bottom-0 w-[25vw] h-[34%] z-[9999]">
                <GestureDetector gesture={swipeRight}>
                    <View className="w-full h-full" />
                </GestureDetector>
            </View>
            
            <SwipeTo scrollY={0} side="r" text="Swipe from Left to Go Back" dropAnim={0} />
            
            <View className='p-4 '>
                <Text 
                    className="text-primary font-poppins_bold text-center mb-4"
                    style={{
                        fontSize: moderateScale(24),
                    }}
                >
                    {country}'s {name}
                </Text>
                
                <View style={styles.videoContainer}>
                    <YoutubePlayer
                        width={scale(330)}
                        height={scale(180)}
                        play={false}
                        videoId={videoId}
                        webViewProps={{
                            injectedJavaScript: `
                                var element = document.getElementsByClassName('container')[0];
                                element.style.position = 'unset';
                                element.style.paddingBottom = 'unset';
                                true;
                            `,
                        }}
                    />
                </View>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    videoContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: '#000',
    },
})

export default VideoPlayer