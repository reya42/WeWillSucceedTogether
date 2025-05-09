import React from 'react';
import { Text, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const responsiveSize = (baseSize: number) => {
    const scaleWidth = width / guidelineBaseWidth;
    const scaleHeight = height / guidelineBaseHeight;

    // Ortalama alarak daha dengeli bir sonuç üret
    const averageScale = (scaleWidth + scaleHeight) / 2;

    return Math.round(baseSize * averageScale * 100) / 100;
};

export const responsiveHeight = (baseHeight: number) => {
    return Math.round(baseHeight * (height / guidelineBaseHeight) * 100) / 100;
};

export const responsiveWidth = (baseWidth: number) => {
    return Math.round(baseWidth * (width / guidelineBaseWidth) * 100) / 100;
};


export default responsiveSize;