import React, { useEffect, useState } from 'react';
import { View, Text,  Picker,  FlatList, ScrollView } from 'react-native';
import database from '@react-native-firebase/database';
import { createFilter } from 'react-native-search-filter';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';




function Request() {
  const [selectedValue, setSelectedValue] = useState("");
  const [users, setUsers] = useState([]);


  useEffect(() => {
    database().ref('users').on('value', function (snapshot) {
      const users = [];

      snapshot.forEach(function (childSnapshot) {

        {
          {

            users.push({
              ...childSnapshot.val()
            })
          }
          console.log("sel==>", selectedValue)
        }
      });
      setUsers(users);
    });
  }, [])



  const updateSearch = (i) => {

    setSelectedValue(i);
    database().ref('users').on('value', function (snapshot) {
      const users = [];

      snapshot.forEach(function (childSnapshot) {

        {
          {
            if (selectedValue == childSnapshot.val().city)
              users.push({
                ...childSnapshot.val()
              })
          }

          console.log("sel==>", selectedValue)
        }
      });
      setUsers(users);
    });

  }

  return (
    <ScrollView>
      <View>
        <Picker
          selectedValue={selectedValue}
          style={{ height: 50, width: 249 }}
          onValueChange={(itemValue, itemIndex) => {
            updateSearch(itemValue);
          }}
        >
          <Picker.Item label="All" value="All" />
          <Picker.Item label="Lahore" value="Lahore" />
          <Picker.Item label="Karachi" value="Karachi" />
          <Picker.Item label="Hyderabad" value="Hyderabad" />
          <Picker.Item label="Islamabad" value="Islamabad" />
        </Picker>


        <FlatList
          data={users}

          renderItem={({ item }) => (

            <View style={{ height: 120, backgroundColor: 'pink', width: 350, padding: 10 }}>

              <View style={{ backgroundColor: 'white', padding: 10 }}>
                <Text style={{ fontSize: 20 }}><FontAwesome5 name={'user'} solid color='red' size={20} />&ensp;{item.name} &emsp;
         <Text style={{ fontSize: 20, color: 'white', fontWeight: '700', backgroundColor: 'red' }} >
                    {item.selectedValue}
                  </Text>

                </Text>
                <Text><FontAwesome5 name={'clinic-medical'} solid color='red' /><Text style={{ color: 'red' }}>&ensp;{item.units}</Text> unit(s)</Text>
                <Text><FontAwesome5 name={'map-marker-alt'} solid color='red' />&ensp; {item.address}</Text>
                <Text><FontAwesome5 name={'phone-square-alt'} solid color='red' />&ensp; {item.contact}</Text>
              </View>

            </View>
          )}
        />

      </View>
    </ScrollView>
  )
}

export default Request;