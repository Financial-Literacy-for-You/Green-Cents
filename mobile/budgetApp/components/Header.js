import React from 'react'
import { StyleSheet, View, useWindowDimensions } from 'react-native'

const Header = () => {
    return (
        <View style={styles.header}>

        </View>
    )
}

const styles =StyleSheet.create({
    header: {
        // height: windowHeight,
        height: 80,
        paddingTop: 38,
        // backgroundColor: '#1D1D1D'
        backgroundColor: 'coral'
    }
})

export default Header;