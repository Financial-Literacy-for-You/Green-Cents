import React from "react";
import { Text, View, StyleSheet, Dimensions } from 'react-native'

const { height } = Dimensions.get('window')

const Header = (props) => {
    const { back, title } = props
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>
                {title}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#1D1D1D",
        height: height * 0.173,
        // borderBottomColor: "#00ff00",
        borderBottomColor: "#FFFFFF26",
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    headerText: {
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: 38,
        paddingLeft: 16,
        paddingTop: height * 0.17 * 0.55
    }
})

export default Header;