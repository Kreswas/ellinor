import { Pacifico_400Regular, useFonts } from '@expo-google-fonts/pacifico';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Header from './components/Header';
import PostItem from './components/PostItem';
import { colors } from './styles/constants';

const renderItem = (item: any) => <PostItem post={item.item} />;

export default function App() {
  let [posts, setPosts] = useState([
    {
      sender: 'Ramon',
      handle: 'hola_soy_milk',
      body: "You're awesome!",
      createdAt: new Date(),
    },
    {
      sender: 'Pearl',
      handle: 'punk_rock_swords',
      body: 'Affluent!',
      createdAt: new Date(),
    },
    {
      sender: 'Garnet',
      handle: 'stronger_than_u',
      body: 'An experience!',
      createdAt: new Date(),
    },
  ]);
  let [fontsLoaded] = useFonts({
    Pacifico_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Header label="Happy Birthday!!"></Header>
      <StatusBar style="auto" />
      <FlatList
        style={styles.list}
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => item.body}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  text: {
    color: colors.text,
  },
  list: {
    marginTop: 30,
    paddingLeft: 30,
    paddingRight: 30,
    width: '100%',
  },
});
