import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Avatar, Button, Text } from 'react-native-paper'

function OrderReceiptsPage() {
    return (
        <View style={{flex: 1, height: 1000}}>
            <View style={styles.headerWrapper}>
                <Avatar.Image source={require('../assets/back.png')} size={20} style={{ backgroundColor: 'lightgray', marginRight: 20 }} />
                <Text style={{ fontSize: 18 }}>Receipt</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <View style={{ flexDirection: 'row' }}>
                    <Button icon={require('../assets/filter.png')} mode="outlined" style={{ width: 100, height: 40 }} theme={{ colors: { primary: 'gray', outline: 'gray' } }}>Filter</Button>
                    <Button mode="outlined" style={{ width: 100, height: 40, marginLeft: 10 }} theme={{ colors: { primary: 'gray', outline: 'gray' } }}>Sort By</Button>
                </View>
                <Button mode="outlined" style={{ width: 150, height: 40 }} theme={{ colors: { primary: 'gray', outline: 'gray' } }}>Share On</Button>
            </View>
            <ScrollView>
            <View style={styles.container}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{fontWeight: 800, fontSize: 20}}>ORDER#12345</Text>
                    <Button mode="outlined" style={{ marginRight: 10, width: 150, height: 60, paddingTop: 8 }} theme={{ colors: { primary: 'skyblue', outline: 'skyblue' } }}>Order Details</Button>
                </View>
                <Text>3 Item(s) arriving</Text>
                <Text>Estimated Delivery Date: DD/MM</Text>
            </View>
            <View style={styles.container}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{fontWeight: 800, fontSize: 20}}>ORDER#12345</Text>
                    <Button mode="outlined" style={{ marginRight: 10, width: 150, height: 60, paddingTop: 8 }} theme={{ colors: { primary: 'skyblue', outline: 'skyblue' } }}>Order Details</Button>
                </View>
                <Text>3 Item(s) arriving</Text>
                <Text>Estimated Delivery Date: DD/MM</Text>
            </View>
            <View style={styles.container}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{fontWeight: 800, fontSize: 20}}>ORDER#12345</Text>
                    <Button mode="outlined" style={{ marginRight: 10, width: 150, height: 60, paddingTop: 8 }} theme={{ colors: { primary: 'skyblue', outline: 'skyblue' } }}>Order Details</Button>
                </View>
                <Text>3 Item(s) arriving</Text>
                <Text>Estimated Delivery Date: DD/MM</Text>
            </View>
            <View style={styles.container}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{fontWeight: 800, fontSize: 20}}>ORDER#12345</Text>
                    <Button mode="outlined" style={{ marginRight: 10, width: 150, height: 60, paddingTop: 8 }} theme={{ colors: { primary: 'skyblue', outline: 'skyblue' } }}>Order Details</Button>
                </View>
                <Text>3 Item(s) arriving</Text>
                <Text>Estimated Delivery Date: DD/MM</Text>
            </View>
            <View style={styles.container}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{fontWeight: 800, fontSize: 20}}>ORDER#12345</Text>
                    <Button mode="outlined" style={{ marginRight: 10, width: 150, height: 60, paddingTop: 8 }} theme={{ colors: { primary: 'skyblue', outline: 'skyblue' } }}>Order Details</Button>
                </View>
                <Text>3 Item(s) arriving</Text>
                <Text>Estimated Delivery Date: DD/MM</Text>
            </View>
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: 130,
        shadowColor: '#000',
        paddingLeft: 10,
        paddingTop: 10,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 6,
        margin: 10,
        borderRadius: 20
    },
    headerWrapper: {
        backgroundColor: 'white',
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#000',
        paddingLeft: 30,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 2,
        marginBottom: 10
    }

})

export default OrderReceiptsPage