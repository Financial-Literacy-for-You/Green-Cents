import React from 'react'
import { View, StyleSheet } from 'react-native'

const Space = (props) => {
    return (
        <View style={spaceStyle(props.props)}></View>
    )
}
const spaceStyle = props => ({
    width: props.width,
    height: props.height
});

export default Space