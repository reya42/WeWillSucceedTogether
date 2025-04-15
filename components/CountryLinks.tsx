import responsiveSize, { responsiveHeight } from "@/constants/responsiveSize";
import { Link } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { Text, Image, TouchableOpacity, View, Animated, Dimensions, ImageBackground, Linking } from "react-native";

import ChevronLeft from "@/assets/svg/chevron-left.svg"

interface videoItem {
    name:string;
    image: any;
    link:string;
}

interface countryItem {
    name:string;
    secondName: string | null;
    title:string;
    subtitle:string;
    nameFontSize:number;
    secondNameFontSize: number;
    titleFontSize:number;
    subtitleFontSize:number;
    buttonFontSize: number;
    background: any;
    bgAttribution: string;
    license: string;
    Videos: videoItem[];
}


const CountryLinks = ({ country, index, active }: { country: countryItem, index:number, active:number }) => {

    return (
        <View
            className="w-[100vw] flex items-center justify-center relative"
            style={{
                height: responsiveHeight(25),
            }}
        >
            <Text 
                className="text-primary font-poppins_medium_italic relative z-30 text-center w-[100vw]"
                style={{
                    fontSize:responsiveSize(country.nameFontSize),
                    textShadowColor: 'rgba(0, 0, 0, 0.75)',
                    textShadowOffset: {width: -1, height: 1},
                    textShadowRadius: 10,
                    margin: 0,
                    padding: 0,
                }}>
                {
                    country.name
                }
            </Text>
            {
                country.secondName && 
                <Text 
                    className="text-primary font-poppins_medium_italic relative z-30 text-center"
                    style={{
                        fontSize:responsiveSize(country.secondNameFontSize),
                        textShadowColor: 'rgba(0, 0, 0, 0.75)',
                        textShadowOffset: {width: -1, height: 1},
                        textShadowRadius: 10,
                        margin: 0,
                        padding: 0,
                    }}>
                    {
                        country.secondName
                    }
                </Text>
            }
            <Text 
                className="bg-secondary text-primary font-poppins_medium_italic relative z-10 text-center"
                style={{
                    fontSize:responsiveSize(country.titleFontSize),
                    textShadowColor: 'rgba(0, 0, 0, 1)',
                    textShadowOffset: {width: -1, height: 1},
                    textShadowRadius: 10,
                    margin: 0,
                    padding: 0,
                }}>
                {
                    country.title
                }
            </Text>
            <Text 
                className="text-secondary bg-primary font-poppins_medium_italic relative z-10 text-center"
                style={{
                    fontSize:responsiveSize(country.subtitleFontSize),
                    shadowColor: 'rgba(0, 0, 0, 1)',
                    shadowOffset: {width: -1, height: 1},
                    shadowRadius: 10,
                    margin: 0,
                    padding: 0,
                }}>
                {
                    country.subtitle
                }
            </Text>
            <Link
                href={{
                    pathname:"/country/[countryName]",
                    params: { countryName: country.name },
                }}
                className="bg-secondary flex flex-row relative"
                style={{
                    padding:responsiveSize(5),
                    zIndex: 1000,
                }}
            >
                    <Text
                        className="text-primary font-poppins_light_italic text-center relative z-[1000]"
                        style={{
                            fontSize: responsiveSize(country.buttonFontSize),
                        }}    
                    >
                        Go to {country.name}'s Videos
                    </Text>
                    <View 
                        style={{
                            zIndex:1001,
                        width: responsiveSize(20),
                        height: responsiveSize(20),
                        transform:[
                            {translateY:responsiveSize(3)},
                            {rotate: "180deg"}
                        ]
                    }}>
                        <ChevronLeft width={responsiveSize(20)} height={responsiveSize(20)} fill="white" />
                    </View>
            </Link>
        </View>
    );
};

export default CountryLinks;