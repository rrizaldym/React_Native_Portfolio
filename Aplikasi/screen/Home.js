import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Home() {
    // const [isError, setIsError] = useState(false)

    // useEffect(() => {
    //     setTimeout(()=>{
    //         setIsError(true)
    //     },1000)
    // }, [])

    return (
        <View style={styles.container}>
            <Text>Home</Text>
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
