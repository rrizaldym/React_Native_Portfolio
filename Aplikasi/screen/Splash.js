import React, {useEffect} from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements'

export default function Splash({navigation}) {

    useEffect(() => {
        setTimeout (()=>{
            navigation.replace('Welcome')
        }, 3000) 
    }, [])

    return (
        <View style={styles.container}>
            <Image source={require('../assets/LogoShapes41.png')} />
            <Button
                type='clear'
                loading
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
