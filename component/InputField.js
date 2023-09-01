import React from 'react'
import { TextInput } from 'react-native-paper'
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    textField:{
        height: 56,
        marginBottom: 16
    }
});

function InputField(props) {
    const { label } = props;
    return (
        <>
            <TextInput
                mode="outlined"
                label={label}
                value={""}
                style={styles.textField}
                onChangeText={() => console.log("Sfs")}
                outlineColor={"#FF7A38"}
                activeOutlineColor={"#FF7A38"}
            />
        </>
    )
}

export default InputField