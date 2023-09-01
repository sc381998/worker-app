import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { Avatar, Button } from 'react-native-paper'

function getOrderHeader(label, imgName) {
    return <View style={Styles.liveOrder}>
        <View style={Styles.flex}>
            <Avatar.Image size={20} style={{ backgroundColor: 'white' }} source={require(`../assets/liveOrder.png`)} />
            <Text style={Styles.bold}>{label}</Text>
        </View>
        <Text style={Styles.bold}>View All</Text>
    </View>
}

function HomePage() {
    return (
        <View style={Styles.container}>
            <View style={Styles.header}>
                <Avatar.Image size={70} source={require('../assets/headerIcon.png')}
                    style={{ backgroundColor: 'lightpink' }}
                />
                <View>
                    <Text style={{ fontWeight: '800', fontSize: 16 }}>Jerry Maguire</Text>
                    <Text>jerry123@gmail.com</Text>
                    <Text>+91 9873566610</Text>
                    <Text>@jerry123 </Text>
                </View>
                <Avatar.Image size={30} source={require('../assets/edit.png')} style={{ backgroundColor: '#FF7A38', position: 'relative', bottom: 15 }} />
            </View>
            <View style={Styles.siteContainer}>
                <View style={Styles.siteImageWrapper}>
                    <Avatar.Image size={30} source={require('../assets/site.png')} style={{ backgroundColor: 'white' }} />
                    <View>
                        <Text>Site</Text>
                        <Text>Delhi, India</Text>
                    </View>
                </View>
                {/* <Avatar.Image size={30} source={require('../assets/edit.png')} */}
                <Avatar.Icon size={24} icon="folder" />
            </View>
            <View style={{ position: 'relative', bottom: 30 }}>
                <View style={{ alignItems: 'flex-end', paddingHorizontal: 20 }}>
                    <Button icon={require('../assets/filter.png')} mode="outlined" style={{ width: 100, height: 40 }} theme={{ colors: { primary: 'gray', outline: 'gray' } }}>Filter</Button>
                </View>
                <ScrollView style={{ marginBottom: 300, height: 'auto' }}>
                    <View style={Styles.body}>
                        {getOrderHeader('Live Order', 'liveOrder')}
                        <View style={Styles.orderView}>
                            <Avatar.Image
                                size={60} style={{ backgroundColor: 'white' }}
                                source={require('../assets/image7.png')} />
                            <View>
                                <Text style={{ fontWeight: 800 }}>Order Number</Text>
                                <Text>#234245</Text>
                                <Text>Item Name 1</Text>
                                <Text>Item Name 2</Text>
                                <Text>Item Name 3</Text>
                                <Text>View more</Text>
                            </View>
                            <Button mode="outlined" style={{ height: 40 }} theme={{ colors: { primary: 'green', outline: 'green' } }}>New Order</Button>

                        </View>
                        <View style={Styles.orderViewTwo}>
                            <Avatar.Image size={60} style={{ backgroundColor: 'white' }} source={require('../assets/image7.png')} />
                            <View>
                                <Text style={{ fontWeight: 800 }}>Order Number</Text>
                                <Text>#234245</Text>
                                <Text>Item Name 5</Text>
                                <Text>Item Name 2</Text>
                                <Text>Item Name 3</Text>
                                <Text>View more</Text>
                            </View>
                            <Button mode="outlined" style={{ height: 40 }} theme={{ colors: { primary: 'orange', outline: 'orange' } }}>New Order</Button>
                        </View>
                    </View>
                    <View style={Styles.duplicateOrderContainer}>
                        {getOrderHeader('Duplicate Order', 'duplicateOrder')}
                        <View style={Styles.duplicateOrder}>
                            <View>
                                <Avatar.Image
                                    size={100} style={{ backgroundColor: 'white' }}
                                    source={require('../assets/image7.png')} />
                                <Text style={{fontSize: 20, fontWeight: 800}}>Tool Kit</Text>
                                <Text style={{fontSize: 16}}>#12345</Text>
                                <Text style={{fontSize: 16}}>4 Units | 7 June 2023</Text>
                            </View>
                            <View>
                                <Avatar.Image
                                    size={100} style={{ backgroundColor: 'white' }}
                                    source={require('../assets/image7.png')} />
                                <Text style={{fontSize: 20, fontWeight: 800}}>Tool Kit</Text>
                                <Text style={{fontSize: 16}}>#12345</Text>
                                <Text style={{fontSize: 16}}>4 Units | 7 June 2023</Text>
                            </View>

                        </View>
                    </View>
                    <View style={Styles.body}>
                        {getOrderHeader('Past Order', 'clock')}
                        <View style={Styles.pastOrder}>
                            <Avatar.Image
                                size={70} style={{ backgroundColor: 'white', margin: 20 }}
                                source={require('../assets/image7.png')} />
                            <View style={{marginTop: 15, marginLeft: 10}}>
                                <Text style={{fontSize: 20, fontWeight: 800}}>Order Number</Text>
                                <Text style={{fontSize: 16}}>#12345</Text>
                                <Text style={{fontSize: 16}}>4 Units | 7 June 2023</Text>
                            </View>
                        </View>
                        <View style={Styles.pastOrder}>
                            <Avatar.Image
                                size={70} style={{ backgroundColor: 'white', margin: 20 }}
                                source={require('../assets/image7.png')} />
                            <View style={{marginTop: 15, marginLeft: 10}}>
                                <Text style={{fontSize: 20, fontWeight: 800}}>Order Number</Text>
                                <Text style={{fontSize: 16}}>#12345</Text>
                                <Text style={{fontSize: 16}}>4 Units | 7 June 2023</Text>
                            </View>
                        </View>
                        <View style={Styles.pastOrder}>
                            <Avatar.Image
                                size={70} style={{ backgroundColor: 'white', margin: 20 }}
                                source={require('../assets/image7.png')} />
                            <View style={{marginTop: 15, marginLeft: 10}}>
                                <Text style={{fontSize: 20, fontWeight: 800}}>Order Number</Text>
                                <Text style={{fontSize: 16}}>#12345</Text>
                                <Text style={{fontSize: 16}}>4 Units | 7 June 2023</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'F2F2F2'//'#FAFAFA'
    },
    pastOrder:{
        flexDirection: 'row',
    },
    orderView: {
        height: 180,
        backgroundColor: '#e1efef',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 10,
        borderRadius: 10,
        marginVertical: 15
    },
    orderViewTwo: {
        height: 180,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 10,
        borderRadius: 10,
    },
    bold: {
        fontWeight: '800',
        paddingLeft: 8
    },
    liveOrder: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 0.5,
        borderBottomColor: 'gray',
        marginHorizontal: 30,
        paddingVertical: 15
    },
    body: {
        backgroundColor: 'white',
        height: 420,
        // width: 'auto',
        borderRadius: 20,
        marginTop: 10,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 6,
        marginBottom: 10
    },
    duplicateOrder: {
        flexDirection: 'row',
        padding: 20,
        justifyContent: 'space-around'
    },
    duplicateOrderContainer: {
        backgroundColor: 'white',
        height: 260,
        borderRadius: 20,
        marginTop: 10,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 6,
        marginBottom: 10
    },
    siteImageWrapper: {
        flexDirection: 'row',
        width: 120,
        justifyContent: 'space-evenly'
    },
    siteContainer: {
        backgroundColor: 'white',
        height: 70,
        width: '90%',
        position: 'relative',
        left: '2%',
        bottom: '10%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 20,
        paddingHorizontal: 20,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 1,
    },
    header: {
        justifyContent: 'space-between',
        alignItems: 'center',
        // position:
        flexDirection: 'row',
        backgroundColor: '#FF7A38',//'#FF7A38',
        height: 170,
        paddingHorizontal: 20
    },
    text: {
        color: 'white',
        fontSize: 42,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000000c0',
    },
    flex: {
        flexDirection: 'row'
    }
});
export default HomePage