import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, Picker } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import database from '@react-native-firebase/database';


function Donate() {
  const [selectedValue, setSelectedValue] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [units, setUnits] = useState("");

  const save_data = () => {
    let user = {
      name,
      contact,
      city,
      address,
      selectedValue,
      units
    }

    database().ref('/').child('users').push(user);

    setName("");
    setContact("");
    setCity("");
    setAddress("");
    setUnits("");
    setSelectedValue("");

  }

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Image
        source={require('../assets/logo.png')}
        style={{ width: 200, height: 150, marginTop: 20, resizeMode: 'contain' }}
      />

      <View style={{ marginTop: 30 }}>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <FontAwesome5 name={'user'} solid color='red' size={30} />
          <TextInput
            style={{ height: 50, borderColor: 'gray', borderWidth: 1, width: 250, marginLeft: 5 }}
            placeholder="Name"
            value={name} onChangeText={(text) => setName(text)}
          />
        </View>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <FontAwesome5 name={'phone-square-alt'} solid color='red' size={30} />
          <TextInput
            style={{ height: 50, borderColor: 'gray', borderWidth: 1, width: 250, marginLeft: 5 }}
            placeholder="Cell Number"
            value={contact} onChangeText={(text) => setContact(text)}
          />
        </View>
        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <FontAwesome5 name={'map-marker-alt'} solid color='red' size={30} />
          <TextInput
            style={{ height: 50, borderColor: 'gray', borderWidth: 1, width: 250, marginLeft: 9 }}
            placeholder="Enter City"
            value={city} onChangeText={(text) => setCity(text)}
          />
        </View>

        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <FontAwesome5 name={'house-user'} solid color='red' size={27} />
          <TextInput
            style={{ height: 50, borderColor: 'gray', borderWidth: 1, width: 250, marginLeft: 1 }}
            placeholder="Enter Full Address"
            value={address} onChangeText={(text) => setAddress(text)}
          />
        </View>

        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <FontAwesome5 name={'syringe'} solid color='red' size={27} />
          <View style={{ borderColor: 'gray', borderWidth: 1, marginLeft: 4 }}>
            <Picker
              selectedValue={selectedValue}
              style={{ height: 50, width: 249 }}
              onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
              <Picker.Item label="A+" value="A+" />
              <Picker.Item label="A-" value="A-" />
              <Picker.Item label="B+" value="B+" />
              <Picker.Item label="B-" value="B-" />
              <Picker.Item label="AB+" value="AB+" />
              <Picker.Item label="AB-" value="AB-" />
              <Picker.Item label="O+" value="O+" />
              <Picker.Item label="O-" value="O-" />
            </Picker>
          </View>
        </View>


        <View style={{ display: 'flex', flexDirection: 'row' }}>
          <FontAwesome5 name={'clinic-medical'} solid color='red' size={27} />
          <TextInput
            style={{ height: 50, borderColor: 'gray', borderWidth: 1, width: 250, marginLeft: 1 }}
            placeholder="How many units you want to donate?"
            value={units} onChangeText={(text) => setUnits(text)}
          />
        </View>
      </View>
      <TouchableOpacity onPress={save_data}

        style={{
          backgroundColor: 'red',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 15,
          padding: 15,
          width: 150,
          marginTop: 30
        }}>

        <Text style={{ color: 'white', fontSize: 15, fontWeight: '800' }}>
          Save
    </Text>

      </TouchableOpacity>


    </View>
  )
}

export default Donate;