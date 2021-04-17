import React from 'react'
import { Image, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacityComponent, View } from 'react-native'

export default function Welcome({navigation}) {
    return (
        <SafeAreaView style={styles.container} >
            <StatusBar style='auto' />

            <View style={styles.header} >
                <View>
                    <Text style={{fontSize:25, paddingLeft:15, fontWeight:'bold',}}>Welcome</Text>
                </View>

                <View>
                    <Image 
                    source={require('../assets/LogoShapes41.png')}
                    style={{width:25, height:30}}
                    />
                </View>
            </View>

            <View style={styles.body}>
                <Text style={{textAlign:'center'}}>{`This app about the list of top anime from MyAnimeList\nIts just for my portofolio`}</Text>
            </View>

            <View style={styles.footer}>
                <View style={styles.buttonPosition}>
                    <Pressable
                        style={styles.login}
                        onPress={()=>navigation.navigate('Login')}
                    >
                        <Text style={{ color:'white'}}>Login</Text>
                    </Pressable>
                    <Pressable
                        style={styles.register}
                        onPress={()=>navigation.navigate('Register')}
                    >
                        <Text style={{ color:'white'}}>Register</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    //   alignItems: 'center',
      justifyContent: 'center',
    },
    header:{
        // flex:0.4,
        paddingTop:20,
        padding:20,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        // backgroundColor:'blue',
    },
    body:{
        flex:5,
        justifyContent:'center',
        marginHorizontal:10,
        // backgroundColor:'grey',
    },
    footer:{
        flex:1,
    },
    buttonPosition:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly'
        
    },
    login:{
        backgroundColor:'#FA3147',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:15,
        width:120,
        height:35,
    },
    register:{
        backgroundColor:'#B13666',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:15,
        width:120,
        height:35,
    },
})
