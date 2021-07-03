import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';

const CustomTextInput = (props) => {
    const [text, setText] = useState('');
    const { placeholder } = props
    return (
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            placeholderTextColor="#EBEBF54D"
            onChangeText={setText}
            value={text}
            clearButtonMode="always"
        />
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        color: "#FFFFFF",
        backgroundColor: "#000000"
    }
})
export default CustomTextInput;