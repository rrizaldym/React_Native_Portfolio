import React from 'react'
import { Image, Linking, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

export default function Profile() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style='auto' />
            <View style={styles.profile}>
                <Image source={require('../assets/Foto.png')} style={styles.image}/>
                <View style={styles.name}>
                    <Text style={{color:'black'}}>My Fullname</Text>
                    <View style={styles.borderFullname}>
                        <Text style={{fontSize:36, color:'black'}}>Rizky Rizaldy M</Text>
                        <View style={{flexDirection:'row', marginVertical:5}}>
                            <Text style={{flex:1.1, textAlign:'center', borderTopWidth:0.5}}>nickname</Text>
                            <View style={{flex:0.8}}/>
                            <Text style={{flex:0.9, textAlign:'center', borderTopWidth:0.5}}>coolname</Text>
                            <View style={{flex:0.5}}/>
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.socialMedia}>
                <View style={{flex:1, marginHorizontal:5}}>
                    <Text>you can find me</Text>
                    <Text style={{fontSize:8}}>click on logo</Text>
                </View>
                <View style={styles.socialMediaTab}>
                    <View style={styles.content}>
                        <AntDesign 
                            onPress={()=>Linking.openURL('https://www.instagram.com/rizkyrizaldym/')}
                            name="instagram"
                            size={30} 
                            color="black"
                        />
                        <Text style={{fontSize:12}}>@RIZKYRIZALDYM</Text>
                    </View>
                    <View style={styles.content}>
                        <AntDesign 
                            onPress={()=>Linking.openURL('https://web.facebook.com/Rizky.Rizaldy.M')}
                            name="facebook-square"
                            size={30}
                            color="#395185" 
                        />
                        <Text style={{fontSize:12}}>Rizky Rizaldy M</Text>
                    </View>
                    <View style={styles.content}>
                        <AntDesign 
                            onPress={()=>Linking.openURL('https://twitter.com/rizkyrizaldym')}
                            name="twitter" 
                            size={30} 
                            color="#55ACEE" 
                        />
                        <Text style={{fontSize:12}}>R_Rizaldy_M</Text>
                    </View>
                </View>
            </View>

            <View style={styles.portofolio}>
                <View style={{flex:1, marginHorizontal:5}}>
                    <Text>this is my portofolio</Text>
                </View>
                
                <View style={styles.socialMediaTab}>
                    <View style={styles.content}>
                        <AntDesign 
                            onPress={()=>Linking.openURL('https://gitlab.com/rrizaldym')}
                            name="gitlab"
                            size={30} 
                            color="#E24329"
                        />
                        <Text style={{fontSize:12}}>@rrizaldym</Text>
                    </View>
                    <View style={styles.content}>
                        <AntDesign 
                            onPress={()=>Linking.openURL('https://github.com/rrizaldym')}
                            name="github"
                            size={30}
                            color="black" 
                        />
                        <Text style={{fontSize:12}}>rrizaldym</Text>
                    </View>
                </View>
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
    profile:{
        flex:1.5,
        flexDirection:'row',
        // backgroundColor:'grey',s
        // margin:5,
    },
    socialMedia:{
        flex:1,
        // margin:5,
    },
    portofolio:{
        flex:1,
    },
    image:{
        resizeMode:'contain',
        // width:210,
        // width:'100%',
        height:272,
        // backgroundColor:'red',
        position:'absolute',
        right:0,
        opacity:0.75,
    },
    name:{
        alignItems:'center', 
        justifyContent:'center',
        margin:5,
    },
    borderFullname:{
        borderTopWidth:0.5, 
    },
    socialMediaTab:{
        flexDirection:'row',
        flex:8,
        alignItems:'center',
    },
    content:{
        flex:1, 
        justifyContent:'center',
        alignItems:'center',
        height:100,
        width:100,
        margin:5,
    },
})
