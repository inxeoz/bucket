import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';

const base = 'https://dit44uotqb.execute-api.ap-south-1.amazonaws.com/default/articles';
import { fetchPost } from './Functional';
import { update } from './Global';

const App = ({ navigation, route }) => {
  const [pageNum, setPageNum] = useState(3);
  const { url } = route.params;
  const [data, setData] = useState([]);
  const [max, setMax] = useState(0);

  useEffect(() => {
    const getArt = async () => {
      const postData = { url, pageNum };
      const res = await fetchPost({ base_url: base, data: postData });
      const parsedRes = JSON.parse(res);
      const max_page = parsedRes[0].maxPageNumber;

      setMax(parseInt(max_page, 10));
      setData(parsedRes);
    };

    getArt();
  }, [url, pageNum]);

  const colors = [
    '#ff7675',
    '#74b9ff',
    '#55efc4',
    '#ffeaa7',
    '#a29bfe',
    '#fd79a8',
    '#00b894',
    '#ffeaa7',
    '#6c5ce7',
    '#fab1a0',
  ];

  const handlePress = async (itemLink) => {
    await navigation.navigate('ShowData', { link: itemLink });
  };

  const changeArticleCatlog = (pageNum) => {
    setPageNum(parseInt(pageNum, 10));
  };

  const renderArticles = ({ item, index }) => (
    <TouchableOpacity onPress={() => handlePress(item.link)}>
      <View
        style={[
          styles.card,
          { backgroundColor: colors[index % colors.length] },
        ]}>
        <Text>{item.heading}</Text>
        <Text>{item.maxPageNumber}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderPageButtons = ({ item, index }) => (
    <TouchableOpacity onPress={() => changeArticleCatlog(index + 1)}>
      <View style={[styles.number, { backgroundColor: colors[index % 3] }]}>
        <Text>{index + 1}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        numColumns={1}
        renderItem={renderArticles}
        contentContainerStyle={styles.main}
        style={styles.flatList}
      />
      <View style={[styles.search, { backgroundColor: colors[3] }]}>
        <FlatList
          data={Array.from({ length: max })}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          renderItem={renderPageButtons}
        />
      </View>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;

const CARD_MARGIN = 15;
const CARD_COLUMNS = 1;

const styles = StyleSheet.create({
  number: {
    height: '80%',
    width: 50,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    width: '100%',
  },
  main: {
    padding: CARD_MARGIN,
  },
  flatList: {
    flex: 1,
  },
  search: {
    width: '100%',
    height: 70,
    marginBottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderBlockColor: '#01204E',
    borderWidth: 2,
    backgroundColor: '#fab1a0',
    flexDirection: 'row',
  },
  card: {
    width: (windowWidth - CARD_MARGIN * (CARD_COLUMNS + 1)) / CARD_COLUMNS,
    height: 70,
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

export default App;
