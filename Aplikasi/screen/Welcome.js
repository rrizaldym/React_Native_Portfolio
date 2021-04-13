import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'

export default function Welcome() {
    return (
        <SafeAreaView>
            <View style={styles.header} >
                <View>
                    <Image 
                    source={require('../assets/LogoShapes41.png')}
                    style={{width:25, height:30}}
                    />
                </View>
            </View>

            <View style={styles.body} >
                <Text>oke</Text>
            </View>

            <View>
                <View>
                    
                </View>
            </View>
        </SafeAreaView>
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
