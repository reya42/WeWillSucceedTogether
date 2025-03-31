import React from 'react';
import { Text, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const responsiveSize = (baseSize: number) => {
    const screenWidth = width;
    const scale = screenWidth / 375; 
    // 392.72727272727275 / 375 = 1.04727273
    // 1 / 1.04727273 = 0.954861109
    return Math.round(baseSize * scale*100)/100;
    
};

export const responsiveHeight = (baseHeight: number) => {
    return Math.round(baseHeight * height) / 100;
};

export default responsiveSize;