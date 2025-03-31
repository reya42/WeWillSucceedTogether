import { Stack } from "expo-router";
import { useFonts } from 'expo-font';
import { GestureHandlerRootView } from "react-native-gesture-handler";

import "@/global.css"

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function RootLayout() {
    const [fontsLoaded] = useFonts({
        'PoppinsThin': require("@/assets/fonts/Poppins/Poppins-Thin.ttf"),
        'PoppinsThinItalic': require("@/assets/fonts/Poppins/Poppins-ThinItalic.ttf"),
        
        'PoppinsExtraLight': require("@/assets/fonts/Poppins/Poppins-ExtraLight.ttf"),
        'PoppinsExtraLightItalic': require("@/assets/fonts/Poppins/Poppins-ExtraLightItalic.ttf"),

        'PoppinsLight': require("@/assets/fonts/Poppins/Poppins-Light.ttf"),
        'PoppinsLightItalic': require("@/assets/fonts/Poppins/Poppins-LightItalic.ttf"),

        'Poppins': require("@/assets/fonts/Poppins/Poppins-Regular.ttf"),
        'PoppinsItalic': require("@/assets/fonts/Poppins/Poppins-Italic.ttf"),
        
        'PoppinsMedium': require("@/assets/fonts/Poppins/Poppins-Medium.ttf"),
        'PoppinsMediumItalic': require("@/assets/fonts/Poppins/Poppins-MediumItalic.ttf"),

        'PoppinsSemiBold': require("@/assets/fonts/Poppins/Poppins-SemiBold.ttf"),
        'PoppinsSemiBoldItalic': require("@/assets/fonts/Poppins/Poppins-SemiBoldItalic.ttf"),

        'PoppinsBold': require("@/assets/fonts/Poppins/Poppins-Bold.ttf"),
        'PoppinsBoldItalic': require("@/assets/fonts/Poppins/Poppins-BoldItalic.ttf"),
        
        'PoppinsExtraBold': require("@/assets/fonts/Poppins/Poppins-ExtraBold.ttf"),
        'PoppinsExtraBoldItalic': require("@/assets/fonts/Poppins/Poppins-ExtraBoldItalic.ttf"),

        'PoppinsBlack': require("@/assets/fonts/Poppins/Poppins-Black.ttf"),
        'PoppinsBlackItalic': require("@/assets/fonts/Poppins/Poppins-BlackItalic.ttf"),
    });

    if (fontsLoaded) {
        return  (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Stack screenOptions={{ headerShown: false }} initialRouteName="videos" />
        </GestureHandlerRootView>
        )
    }
    else return null
}