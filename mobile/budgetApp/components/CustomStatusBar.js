import React from 'react';
import { StatusBar } from 'react-native';

const CustomStatusBar = () => {
    return (
        <StatusBar
            animated={true}
            backgroundColor="#1D1D1D"
            barStyle="light-content"
        />
    )
}

export default CustomStatusBar