import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import responsiveSize, { responsiveHeight } from '@/constants/responsiveSize';
import { Link } from 'expo-router';

interface videoItem {
    name: string;
    image: any;
    attribution: string;
    link: string;
}

const VideoLinks = ({country, video, totalVideos}:{ country: string, video:videoItem, totalVideos:number}) => {
    return (
        <Link
            href={{
                pathname:"/video/[name]",
                params: { name: video.name, link: video.link, country: country},
        }}>
            <ImageBackground
                source={video.image}
                className='w-full flex justify-center items-center relative'
                style={{
                    height: responsiveHeight(70/totalVideos-0.5),
                }}
            >
                <Text
                    className='text-white font-poppins_bold text-center w-[90vw]'
                    style={{
                        fontSize: responsiveSize(20),
                        textShadowColor: 'rgba(0, 0, 0, 0.75)',
                        textShadowOffset: {width: -1, height: 1},
                        textShadowRadius: 10
                    }}    
                >
                    {
                        video.name
                    }
                </Text>
                <Text
                    className='text-white font-poppins_bold text-center absolute bottom-0 right-1'
                    style={{
                        fontSize: responsiveSize(7),
                        textShadowColor: 'rgba(0, 0, 0, 0.75)',
                        textShadowOffset: {width: -1, height: 1},
                        textShadowRadius: 10
                }}>
                    Image by {video.attribution}
                </Text>
            </ImageBackground>
        </Link>
    )
}

export default VideoLinks