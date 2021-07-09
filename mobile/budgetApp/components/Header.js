import React from "react";
import { Text, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

const { height } = Dimensions.get('window')

function headerHandler(back, title, onPressAction) {
    const adjustDueToTextLen = title.length > 15 && height < 667 // if len > 15, adjustment needed on 4in screens
    if (back) {
        return (
            <View style={styles.header}>
                <TouchableOpacity
                    style={styles.backBtn}
                    onPress={onPressAction}
                >
                    <Text style={styles.backText}> <Icon name="ios-chevron-back" color="#FFF"></Icon> Back</Text>
                </TouchableOpacity>
                <Text style={adjustDueToTextLen ? styles.headerTextSmall : styles.headerTextBack}>
                    {title}
                </Text>
            </View>
        )
    } else if (!back) {
        return (
            <View style={styles.header}>
                <Text style={styles.headerText}>
                    {title}
                </Text>
            </View>
        )
    }
}
const Header = (props) => {
    const { back, title, onPressAction } = props
    return (headerHandler(back, title, onPressAction))
    // return (headerHandler(false, title, onPressAction))
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
        fontSize: 34,
        paddingLeft: 20,
        paddingTop: height * 0.17 * 0.55
    },
    headerTextBack: {
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: 34,
        paddingLeft: 20,
        paddingTop: height < 667 ? 0 : height * 0.17 * 0.15 // only need to adjust for 4in screens
    },
    headerTextSmall: {
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: 30,
        paddingLeft: 20,
        paddingTop: height < 667 ? 0 : height * 0.17 * 0.15 // only need to adjust for 4in screens
    },
    backBtn: {
        // backgroundColor: "blue",
        // paddingLeft: "1%",
        paddingTop: "5%",
        width: 70,
        height: 50
    },
    backText: {
        color: "#FFF"
    }
})

export default Header;