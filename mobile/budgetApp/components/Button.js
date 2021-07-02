import React from 'react'
import { StyleSheet, Text, Pressable, Platform, TouchableOpacity } from 'react-native'


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