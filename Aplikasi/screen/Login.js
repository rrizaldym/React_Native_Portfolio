import React from 'react'
import { KeyboardAvoidingView, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import { Button } from 'react-native-elements'
import { AntDesign } from '@expo/vector-icons';

export default function Login() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style='auto'/>
            <View style={styles.header}/>

            <View style={styles.body}>
                <View style={{marginVertical:20,marginHorizontal:10,}}>
                    <Text style={{fontSize:13}} >Enter your registered phone number to login</Text>
                </View>
                <View style={styles.input}>
                    <View style={styles.option}>
                        <Text style={{fontSize:10}}>Phone Number <Text style={{color:'red'}}>*</Text></Text>
                        <Button
                            title= ' +62'
                            titleStyle={{fontSize:10, color:'black'}}
                            buttonStyle={styles.buttonFlag}
                            onPress={()=>alert('flag')}
                            />
                    </View>
                    <View style={styles.option2}>
                        <TextInput
                            placeholder='8...'
                            style={styles.textInput}
                            keyboardType='numeric'
                            maxLength={11}
                            dataDetectorTypes='phoneNumber'
                        />
                    </View>
                </View>
            </View>

            <View style={styles.footer}>
                <KeyboardAvoidingView>
                    <Button
                        onPress={()=>alert('home')}
                        buttonStyle={styles.buttonNext}
                        icon={
                            <AntDesign
                                name='arrowright'
                                size={30}
                                color='white'
                            />
                        }
                    />
                </KeyboardAvoidingView>
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
    header:{
        flex:0.5,
        // backgroundColor:'cyan',
    },
    body:{
        flex:5,
    },
    input:{
        flexDirection:'row',
        height:40,
        marginHorizontal:10,
    },
    option:{
        alignItems:'center',
        justifyContent:'space-between', 
        flex:1,
    },
    buttonFlag:{
        borderRadius:50,
        height:20,
        width:50,
        backgroundColor:'#C4C4C4'
    },
    option2:{
        justifyContent:'flex-end',
        flex:3,
    },
    textInput:{
        borderBottomWidth:1,
    },
    footer:{
        flex:1,
        justifyContent:'flex-end',
        flexDirection:'row',
        // backgroundColor:'orange',
        margin:10,
    },
    buttonNext:{
        height:50,
        width:50,
        borderRadius:100,
        backgroundColor:'#C4C4C4'
    },
})
