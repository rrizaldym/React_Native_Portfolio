import React, { useEffect, useState } from 'react'
import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import axios from 'axios'

export default function Detail({route}) {
    const {mal} = route.params
    const [items, setItems] = useState([])
    const [genres, setGesnres] = useState([])
    
    const getDetails = () => {
        axios.get(`https://api.jikan.moe/v3/anime/${mal}/`)
            .then(res=>{
                const data = (res.data)
                console.log('res: ', data);
                setItems(data)
            })
            .catch(err=>{
                console.log('err: ', err);
            })
    }
    const getGenres = () => {
        axios.get(`https://api.jikan.moe/v3/anime/${mal}/`)
            .then(res=>{
                const data1 = (res.data.genres)
                console.log('res: ', data1);
                setGesnres(data1)
            })
            .catch(err=>{
                console.log('err: ', err);
            })
    }

    useEffect(() => {
        getDetails()
        getGenres()
    }, []) 

    const genresList = () => {
        const arr=[]
        for(let i=0; i<genres.length; i++){
            arr.push(` ${genres[i].name}`)
        }
        return arr
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style='auto' />
            <Text style={styles.title}>{items.title}</Text>
            <View style={styles.mainDetail}>
                <View style={styles.position}>
                    <Image source={{uri:`${items.image_url}`}} style={styles.image} />
                </View>
                <ScrollView style={styles.position2}>
                    {/* <Text>{items.title}</Text> */}
                    <Text>Title(eng): {items.title_english}</Text>
                    <Text>Title(jpn): {items.title_japanese}</Text>
                    <Text> </Text>
                    <Text>Episodes: {items.episodes}</Text>
                    <Text>Status: {items.status}</Text>
                    <Text>Premiered: {items.premiered}</Text>
                    {/* <Text>Aired: {items.aired.prop.from.day}/{items.aired.prop.from.month}/{items.aired.prop.from.year}</Text>
                    <Text>Aired: {items.aired.prop.to.day}/{items.aired.prop.to.month}/{items.aired.prop.to.year}</Text> */}
                    <Text>Duration: {items.duration}</Text>
                    <Text>Rating: {items.rating}</Text>
                    <Text>{`Genres:${genresList()}`}</Text>
                </ScrollView>
            </View>
            {/* <View style={styles.synopsis}></View> */}
            <ScrollView style={styles.synopsisContainer}>
                <Text style={styles.synopsis} >{`Synopsis \n ${items.synopsis}`}
                </Text>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent:'center',
        // alignItems:'center',
    },
    title:{
        textAlign:'center',
        margin:5,
        textTransform:'uppercase',
    },
    mainDetail:{
        flex:1,
        flexDirection:'row',
        // backgroundColor:'red',
        marginBottom:5,
        borderBottomWidth:0.5,
        borderBottomColor:'grey'
    },
    synopsisContainer:{
        flex:1,
        marginHorizontal:10,
        // backgroundColor:'grey',
    },
    synopsis:{
        textAlign:'justify',
    },
    image:{
        height:'100%',
        resizeMode:'contain',
        margin:10,
    },
    position:{
        flex:1,
        justifyContent:'center',
        // backgroundColor:'blue',
    },
    position2:{
        flex:1,
        marginHorizontal:5,
        marginVertical:10,
    },
})
