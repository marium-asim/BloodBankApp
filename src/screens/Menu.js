import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth';

function Menu(props) {

const sign_out = () =>
{
    auth()
  .signOut()
  .then(() => console.log('User signed out!'));
  props.navigation.navigate("Home")
}

    return (
        <SafeAreaProvider>
            <ScrollView>
                <TouchableOpacity onPress={sign_out}

                    style={{
                        backgroundColor: 'red',
                        alignItems: 'center',
                        marginTop: 20,
                        borderRadius: 15,
                        padding: 15,
                        width: 150,
                        marginLeft: 190
                    }}>

                    <Text style={{ color: 'white', fontSize: 15, fontWeight: '800' }}>
                        Sign Out
 </Text>

                </TouchableOpacity>
                <View>
                    <View style={{ alignItems: 'center' }}>

                        <Image
                            source={require('../assets/img1.png')}
                            style={{ width: 350, height: 200, resizeMode: 'contain' }}

                        />
                    </View>

                    <View style={{ height: 140, marginTop: 0, backgroundColor: 'pink' }}>
                        <Text style={{ fontSize: 20, padding: 15 }}>
                            Click on the button to view profile!
</Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate("My Profile")}

                            style={{
                                backgroundColor: 'red',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 15,
                                padding: 15,
                                width: 150,
                                marginLeft: 100
                            }}>

                            <Text style={{ color: 'white', fontSize: 15, fontWeight: '800' }}>
                                View Profile
    </Text>

                        </TouchableOpacity>
                    </View>

                    <View style={{ height: 140, marginTop: 17, backgroundColor: 'pink' }}>
                        <Text style={{ fontSize: 20, padding: 15 }}>
                            Find a donor nearby and save lives!
</Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate("Life Savers")}

                            style={{
                                backgroundColor: 'red',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 15,
                                padding: 15,
                                width: 150,
                                marginLeft: 100
                            }}>

                            <Text style={{ color: 'white', fontSize: 15, fontWeight: '800' }}>
                                See Donors
    </Text>

                        </TouchableOpacity>
                    </View>

                    <View style={{ height: 140, marginTop: 17, backgroundColor: 'pink' }}>
                        <Text style={{ fontSize: 20, padding: 15 }}>
                            Save a life by donating blood!
</Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate("Donate Blood")}

                            style={{
                                backgroundColor: 'red',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 15,
                                padding: 15,
                                width: 150,
                                marginLeft: 100
                            }}>

                            <Text style={{ color: 'white', fontSize: 15, fontWeight: '800' }}>
                                Donate
    </Text>

                        </TouchableOpacity>
                    </View>


                </View>
            </ScrollView>
        </SafeAreaProvider>
    )
}



export default Menu;