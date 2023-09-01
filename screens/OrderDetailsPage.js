import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { Avatar, Text, Button } from 'react-native-paper'

function OrderDetailsPage() {
    return (
        <View style={{height: 'full'}}>
            <View style={styles.headerWrapper}>
                <Image source={require('../assets/backgroundOrderDetails.png')} rounded={false}
                    style={{ backgroundColor: 'white', height: 250, width: 'full' }}
                />
                <Avatar.Image source={require('../assets/back.png')} size={20} style={{ backgroundColor: 'lightgray', position: 'absolute', top: 10, left: 10, width: 35, height: 35, borderRadius: 50, padding: 8}}/>
                <Avatar.Image source={require('../assets/notification.png')} size={20} style={{ backgroundColor: 'lightgray', position: 'absolute', top: 10, right: 60, width: 35, height: 35, borderRadius: 50, padding: 8}}/>
                <Avatar.Image source={require('../assets/help.png')} size={20} style={{ backgroundColor: 'lightgray', position: 'absolute', top: 10, right: 10, width: 35, height: 35, borderRadius: 50, padding: 8}}/>
            </View>
            <View>
                <View style={{ marginVertical: 20, flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Text style={{ fontSize: 20, fontWeight: 800 }}>Order Details</Text>
                    <Button icon={require('../assets/filter.png')} mode="outlined" style={{ width: 100, height: 40 }} theme={{ colors: { primary: 'green', outline: 'green' } }}>Share</Button>
                </View>
                <Text style={{ fontSize: 16, marginLeft: 50 }}>Order Details</Text>
                <View style={styles.border}></View>

            </View>
            <View style={{padding: 30}}>
                <View style={{flexDirection: 'row', marginBottom: 20, justifyContent: 'space-around'}}>
                    <Text>Order Items:</Text>
                    <View>
                        <Text style={{fontWeight: 700}}>#12345</Text>
                        <Text style={{fontWeight: 700}}>#12345</Text>
                        <Text style={{fontWeight: 700}}>#12345</Text>
                        <Text style={{fontWeight: 700}}>#12345</Text>
                        <Text style={{fontWeight: 700}}>#12345</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row', marginBottom: 30, justifyContent: 'space-around'}}>
                    <Text>Placed By:</Text>
                    <View>
                        <Text style={{fontWeight: 700}}>#12345</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row', marginBottom: 30, justifyContent: 'space-around'}}>
                    <Text>Placed By:</Text>
                    <View>
                        <Text style={{fontWeight: 700}}>#12345</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row', marginBottom: 30, justifyContent: 'space-around'}}>
                    <Text>Placed By:</Text>
                    <View>
                        <Text style={{fontWeight: 700}}>#12345</Text>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', position: 'relative', bottom: 0, paddingHorizontal: 20, justifyContent: 'space-between' }}>
                <Text style={{ fontWeight: 'bold' }}>Did you receive your order?</Text>
                <View style={{ flexDirection: 'row', width: 120, justifyContent: 'space-around' }}>
                    <Avatar.Image size={40} source={require('../assets/charm_tick.png')} />
                    <Avatar.Image size={40} source={require('../assets/radix-icons_cross-2.png')} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    border: {
        borderBottomWidth: 0.5,
        borderBottomColor: 'gray',
        paddingTop: 20,
        marginHorizontal: 40
    }

})
export default OrderDetailsPage