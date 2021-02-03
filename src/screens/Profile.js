import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

function Profile() {


  const user = auth().currentUser;
  const [name, setName] = useState(user.displayName);
  const [email, setEmail] = useState(user.email);
  const [contact, setContact] = useState(user.phoneNumber);
  const [photo, setPhoto] = useState(user.photoURL)

  if (user) {
    console.log('User email: ', user);
    console.log(photo)
  }

  const save_data = () => {
    const update = {
      displayName: name,
      email: email,
      phoneNumber: contact
    };

    auth().currentUser.updateProfile(update);

  }

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>

      <Image
        source={{ uri: photo }}
        style={{ width: 200, height: 150, marginTop: 20, resizeMode: 'contain', borderRadius: 100 }}
      />
      <View style={{ marginTop: 30 }}>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <FontAwesome5 name={'user'} solid color='red' size={30} />
          <TextInput
            style={{ height: 50, borderColor: 'gray', borderWidth: 1, width: 250, marginLeft: 5 }}

            value={name} onChangeText={(text) => setName(text)}
          />
        </View>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <FontAwesome5 name={'envelope'} solid color='red' size={26.5} />
          <TextInput
            style={{ height: 50, borderColor: 'gray', borderWidth: 1, width: 250, marginLeft: 5 }}

            value={email} onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <FontAwesome5 name={'phone-square-alt'} solid color='red' size={30} />
          <TextInput
            style={{ height: 50, borderColor: 'gray', borderWidth: 1, width: 250, marginLeft: 5 }}
            placeholder="+92 XXXXXXXXXX"
            value={contact} onChangeText={(text) => setContact(text)}
          />
        </View>
        <TouchableOpacity onPress={save_data}

          style={{
            backgroundColor: 'red',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 15,
            padding: 15,
            width: 150,
            marginTop: 30,
            marginLeft: 70

          }}>

          <Text style={{ color: 'white', fontSize: 15, fontWeight: '800' }}>
            Save
    </Text>

        </TouchableOpacity>

      </View>
    </View>

  )
}

export default Profile;