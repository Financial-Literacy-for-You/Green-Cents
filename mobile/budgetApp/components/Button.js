import React from 'react'
import { StyleSheet, Text, Pressable, Platform, TouchableOpacity } from 'react-native'

function selectBtn() {
    if (Platform.OS === 'android') {

    } else if (Platform.OS === 'ios') {
        return (
            <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.text}>{title}</Text>
            </Pressable>
        )
    }
}
const Button = (props) => {
    const { onPress, title } = props;
    return (
        <TouchableOpacity
            style={styles.button}
            activeOpacity={.7}
            onPress={onPress}
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: 242,
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#275D01',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
        textAlign: "center"
    },
})

export default Button;