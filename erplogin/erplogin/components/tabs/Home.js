

// HomeScreen.js
import * as React from 'react';
import { View } from 'react-native';
import { Ionicons, Octicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Fees from './Fees'


export default function HomeScreen({ navigation }) {

  
  const print = () => {
    console.log('pressed');
  }
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Ionicons
          name="settings"
          size={24}
          color="black"
          style={{ marginRight: 20 }}
          onPress={() => {
            print()
            }}
        />
      ),
    });
  }, [navigation]);

  return (
    <View>
     <Fees/>
    </View>
  );
}