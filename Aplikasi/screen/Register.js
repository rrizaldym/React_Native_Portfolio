import React from 'react'
import { KeyboardAvoidingView, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import { AntDesign } from '@expo/vector-icons';
import { CardStyleInterpolators } from '@react-navigation/stack';

export default function Register() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style='auto' />
            <View style={styles.header}/>

            <View style={styles.body}>
                <View style={{marginVertical:20,marginHorizontal:10,}}>
                    <Text style={{fontSize:13}} >Please fill in a few details below</Text>
                </View>
                
                <View style={styles.input2}>
                    <View style={styles.option3}>
                        <Text style={{fontSize:10}}>Name <Text style={{color:'red'}}>*</Text></Text>
                    </View>
                    <View style={styles.option2}>
                        <TextInput
                            placeholder='e.g. your name'
                            style={styles.textInput}
                            />
                    </View>
                </View>

                <View style={styles.input2}>
                    <View style={styles.option3}>
                        <Text style={{fontSize:10}}>Email <Text style={{color:'red'}}>*</Text></Text>
                    </View>
                    <View style={styles.option2}>
                        <TextInput
                            placeholder='name@mail.com'
                            style={styles.textInput}
                            autoCapitalize='none'
                            keyboardType='email-address'
                            textContentType='emailAddress'
                            />
                    </View>
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
        margin:10,
    },
    input2:{
        height:40,
        margin:10,
    },
    option:{
        alignItems:'center',
        justifyContent:'space-between', 
        flex:1,
    },
    option3:{
        justifyContent:'center',
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
