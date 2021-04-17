import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import axios from 'axios'

export default function Detail({route}) {
    const {mal} = route.params
    const [items, setItems] = useState([])
    
    const getDetails = () => {
        axios.get(`https://api.jikan.moe/v3/anime/${mal}/`)
            .then(res=>{
                const data = (res.data.top.mal)
                console.log('res: ', data);
                setItems(data)
            })
            .catch(err=>{
                console.log('err: ', err);
            })
    }

    useEffect(() => {
        getDetails()
    }, []) 

    return (
        <View style={styles.container}>
            <Text>{mal}</Text>
            <Text>{items.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent:'center',
        alignItems:'center',
    },
})
