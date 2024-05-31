# Sample Snack app

Open the `App.js` file to start writing some code. You can preview the changes directly on your phone or tablet by scanning the **QR code** or use the iOS or Android emulators. When you're done, click **Save** and share the link!

When you're ready to see everything that Expo provides (or if you want to use your own editor) you can **Download** your project and use it with [expo cli](https://docs.expo.dev/get-started/installation/#expo-cli)).

All projects created in Snack are publicly available, so you can easily share the link to this project via link, or embed it on a web page with the `<>` button.

If you're having problems, you can tweet to us [@expo](https://twitter.com/expo) or ask in our [forums](https://forums.expo.dev/c/expo-dev-tools/61) or [Discord](https://chat.expo.dev/).

Snack is Open Source. You can find the code on the [GitHub repo](https://github.com/expo/snack).


import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
const base =
  'https://dit44uotqb.execute-api.ap-south-1.amazonaws.com/default/articles';

const url = 'https://www.nrigroupindia.com/category/blog/';
const pageNum = 3;
import { fetchPost, fetchGet } from './Functional';

const App = () => {
  const [data, setData] = useState('hiiu');

  useEffect(() => {
    const getArt = async () => {
      const data = { url, pageNum };
      const res = await fetchPost({ url: base, data });
      console.log(res);
      setData(res);
    };

    getArt();
  }, []);

  return (
    <ScrollView>
      <View style={styles.main}>
        {JSON.parse(data).articles.map((item, index) => {
          <View
            key={index}
            style={[
              styles.card,
              { backgroundColor: colors[rowIndex % colors.length] },
            ]}>
            <Text>{JSON.stringify(item.heading)}</Text>
          </View>;
        })}
      </View>
    </ScrollView>
  );
};

const windowWidth = Dimensions.get('window').width;

const CARD_MARGIN = 15;
const CARD_COLUMNS = 1;

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: CARD_MARGIN,
    height: '100%',
    width: '100%',
  },
  card: {
    width: (windowWidth - CARD_MARGIN * (CARD_COLUMNS + 1)) / CARD_COLUMNS,
    height: 140,
    marginBottom: CARD_MARGIN,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default Component;
