import React, { useEffect, useState } from 'react'
import { TouchableOpacity, StyleSheet, Text, View, FlatList, Image, SafeAreaView, StatusBar } from 'react-native'
import { Button } from 'react-native-elements'
import axios from 'axios'

// import { render } from 'react-dom'
// import Axios from 'react-native-axios'

export default function Home({navigation}) {
    const [items, setItems] = useState([])
    let [pages, setPages] = useState('')

    const getTopAnimeList = () => {
        axios.get(`https://api.jikan.moe/v3/top/anime/${pages}/`)
            .then(res=>{
                const data = (res.data.top)
                console.log('res: ', data);
                setItems(data)
            })
            .catch(err=>{
                console.log('err: ', err);
            })
    }

    useEffect(() => {
        setPages(1)
        getTopAnimeList()
    }, [])

    const nextButton = () => {
        setPages(pages+=1)
        getTopAnimeList()
    }
    const previousButton = () => {
        setPages(pages-=1)
        getTopAnimeList()
    }
    const firstButton = () => {
        setPages(1)
        getTopAnimeList()
    }
    
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style='auto'/>
            <FlatList
                data={items}
                // numColumns={2}
                keyExtractor={(item)=> `${item.mal_id}`}
                renderItem={({item})=>
                <TouchableOpacity
                onPress={()=>{
                    navigation.navigate('Detail', {
                        mal:item.mal_id,
                    })
                }}
                >
                    <View style={styles.viewList} >
                        <View style={{paddingHorizontal :10}} >
                            <Image source={{uri:`${item.image_url}`}} style={styles.Image} />
                        </View>
                        <View style={styles.textContainer}>
                            <Text  numberOfLines={2} styles={styles.textItemLogin}>{item.title}</Text>
                            <Text styles={styles.textItemUrl} >Type : {item.type}</Text>
                            <Text styles={styles.textItemUrl} >Episodes : {item.episodes}</Text>
                            {/* <Text styles={styles.textItemUrl} >Start Date : {item.start_date}</Text>
                            <Text styles={styles.textItemUrl} >End Date : {item.end_date}</Text> */}
                            <Text styles={styles.textItemUrl} >Score : {item.score}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                }
            />
            <View style={styles.button}>
                <Button 
                title='First Pages' 
                titleStyle={{fontSize:10}}
                buttonStyle={{
                    height:50,
                    width:50,
                    borderRadius:100,
                    backgroundColor:'#C4C4C4'
                }}
                onPress={firstButton}
                />
                <Button 
                title='Previous Pages' 
                titleStyle={{fontSize:8}}
                buttonStyle={{
                    height:50,
                    width:50,
                    borderRadius:100,
                    backgroundColor:'#C4C4C4'
                }}
                onPress={previousButton}
                />
                <Button 
                title='Next Pages' 
                titleStyle={{fontSize:10}}
                buttonStyle={{
                    height:50,
                    width:50,
                    borderRadius:100,
                    backgroundColor:'#C4C4C4'
                }}
                onPress={nextButton}
                />

            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent:'center',
    },
    viewList:{
        flexDirection:'row',
        borderWidth:1,
        borderColor:'#DDD',
        alignItems:'center',
        paddingVertical:5,
        width:'100%',
        // height:150,
    },
    textContainer:{
        width:'100%',
        justifyContent:'center',
    },
    Image:{
        width:80,
        height:80,
        borderRadius:40,
        // size:25
    },
    textItemLogin:{
        fontWeight:'bold',
        textTransform:'capitalize',
        marginLeft:20,
        marginRight:5,
        fontSize:16,
        textAlign:'justify',
    },
    textItemUrl:{
        fontWeight:'bold',
        marginLeft:20,
        fontSize:12,
        marginTop:10,
        color:'blue'
    },
    button:{
        flexDirection:'row',
        justifyContent:'space-around',
    },
})
