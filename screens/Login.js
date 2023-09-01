import React from 'react'
import { StyleSheet, View } from 'react-native';
import { Avatar, Button, Card, TextInput, Text } from 'react-native-paper';
import InputField from '../component/InputField';
import CustomButton from '../component/CustomButton';

const styles = StyleSheet.create({
    center: {
        // flex: 1,
        marginTop: 50,
        alignItems: 'center',
    },
    loginText: {
        fontSize: 18,
        fontWeight: 800,
        marginBottom: 16,
        marginTop: 8
    },
    lowerContainer: {
        height: "65%",
        backgroundColor: "#fff"
    },
    upperContainer: {
        height: "35%"
    },
    centerBottomContainer: {
        alignItems: 'center',
    },
    orText: {
        marginBottom: 16
    }
});
function Login() {
    return (
        <Card theme={{ colors: { primary: '#fff' } }}>
            <Card.Cover source={require('../assets/headerImage.png')} style={styles.upperContainer} />
            <Card.Content style={styles.lowerContainer}>
                <View style={styles.center}>
                    <View style={{justifyContent: 'center', opacity: 0.6, alignItems: 'center', backgroundColor: 'lightpink', width: 100, height: 100, borderRadius: 50}}>
                    <Avatar.Image size={80} source={require('../assets/Mobile.png')}
                    style={{ backgroundColor: 'lightpink', opacity: 0.4 }}
                />
                    </View>
                
                    <Text style={styles.loginText}>Log in to your existing account</Text>
                </View>
                <View>
                    <InputField key="email" label="Email" />
                    <InputField key="password" label="Password" />
                    <CustomButton label="Login" />
                    <View style={styles.centerBottomContainer}>
                        <Text style={styles.orText}>Or</Text>
                        <Text>New User? Register Here!</Text>
                    </View>
                </View>
            </Card.Content>
        </Card>
    )
}

export default Login