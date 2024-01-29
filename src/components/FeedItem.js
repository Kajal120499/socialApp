import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Images } from '../utils/Images'
import { black } from '../utils/Color'

const FeedItem = ({ data }) => {
    const time = () => {
        const current= new Date()
       
    }
    return (
        <View style={styles.feed}>
            <View style={styles.topView}>
                <View style={styles.topLeft}>
                    <Image source={Images.user} style={[styles.icon]} />
                    <View>
                        <Text style={styles.userName}>{data.username}</Text>
                        {/* <Text style={styles.time}>{time(new Date(data.createdAt))}</Text> */}
                        <Text style={styles.time}>{data.createdAt}</Text>

                    </View>
                </View>
                
                <View>
                {/* <Image source={{uri:data.imageUrl}} style={{width:200,height:100}} /> */}
                <TouchableOpacity>
                    <Image source={Images.dot} style={[styles.icon]} />
                </TouchableOpacity>
                </View>
            </View>
            <Text style={styles.caption}>{data.caption}</Text>

        </View>
    )
}

export default FeedItem

const styles = StyleSheet.create({
    feed: {
        width: '90%',
        backgroundColor: "#f2f2f2",
        // height:200,
        paddingBottom: 20,
        alignSelf: 'center',
        marginTop: 20
    },
    topView: {
        flexDirection: "row",
        justifyContent: 'space-between',
        marginTop: 10,
        width: '100%'
    },
    icon: {
        width: 24,
        height: 24,
        tintColor: '#9e9e9e',
        marginLeft: 15
    },
    topLeft: {
        flexDirection: 'row',
        marginTop: 10,
    },
    userName: {
        fontSize: 16,
        fontWeight: '600',
        color: black,
        marginLeft: 10
    },
    time: {
        fontSize: 14,
        fontWeight: '600',
        color: 'gray',
        marginLeft: 10
    },
    caption: {
        fontSize: 16,
        fontWeight: '600',
        color: black,
        marginTop: 10,
        width: '90%',
        alignSelf: "center"
    }
})