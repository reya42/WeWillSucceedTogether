import React from 'react';
import { Text, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;
/*
const responsiveSize = (baseSize: number) => {
    const scale = width / guidelineBaseWidth;
    // xiaomi note 12 pro caculations 
    // 392.72727272727275 / 375 = 1.04727273
    // 1 / 1.04727273 = 0.954861109
    return Math.round(baseSize * scale*100)/100;
    
};

export default responsiveSize;
*/


export const responsiveHeight = (baseHeight: number) => {
    return Math.round(baseHeight * height) / 100;
};
