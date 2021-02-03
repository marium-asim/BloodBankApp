import React, { useEffect } from 'react';
import { View, Text, Image, Button } from 'react-native';
import { GoogleSignin } from '@react-native-community/google-signin';
import auth from '@react-native-firebase/auth';


function Home(props) {

  useEffect(() => {
    // initialize the Google SDK
    GoogleSignin.configure({
      webClientId: '584747563141-0iiv7o9t33jbp4c0q70jgnljrk9ssvis.apps.googleusercontent.com',
    });
  }, []);

  async function onGoogleButtonPress() {
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);


  }



  return (
    <View style={{ flex: 1, marginTop: 120, alignItems: 'center' }}>
      <Image
        source={require('../assets/logo.png')}
        style={{ width: 200, height: 200, resizeMode: 'contain' }}

      />
      <Text style={{ fontSize: 30 }}>
        Welcome to Blood Bank!
    </Text>
      <Text style={{ fontSize: 17 }}>
        Please sign in to continue
    </Text>
      <Button
        title="Sign-In with Google"
        onPress={() => onGoogleButtonPress().then(() => {
          console.log('Signed in with Google!')
          props.navigation.navigate("Give Blood Give Life")

        })}
      />


    </View>
  )
}

export default Home;