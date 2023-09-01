import React from 'react'
import { StyleSheet } from 'react-native';
import { Button } from "react-native-paper";

const styles = StyleSheet.create({
    buttonStyle:{
        backgroundColor: "#FF7A38",
        marginBottom:24,
        height: 42
    }
});
function CustomButton(props) {
    const { label } = props;
    return (
        <Button style={styles.buttonStyle} textColor="#fff">{label}</Button>
    )
}

export default CustomButton