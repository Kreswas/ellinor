// import { Pacifico_400Regular, useFonts } from '@expo-google-fonts/pacifico';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { Link } from 'expo-router';
// import { StatusBar } from 'expo-status-bar';
// import * as React from 'react';
// import { useState } from 'react';
// import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
// import Header from './components/Header';
// import PostItem from './components/PostItem';
// import { colors } from './styles/constants';

// const renderItem = (item: any) => <PostItem post={item.item} />;

// export default function App(navigation) {
//   return (
//     <View style={styles.container}>
//       <Header label="Happy Birthday!!"></Header>
//       <StatusBar style="auto" />
//       <Text>Hello</Text>
//       <Button
//         title="Go to Reasons Page"
//         onPress={() => navigation.navigate('ReasonsPage')}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: colors.background,
//   },
//   text: {
//     color: colors.text,
//     fontSize: 40,
//   },
//   list: {
//     marginTop: 30,
//     paddingLeft: 30,
//     paddingRight: 30,
//     width: '100%',
//   },
// });

// function ReasonsPage({}) {
//   let [posts, setPosts] = useState([
//     {
//       sender: 'Ramon',
//       handle: 'hola_soy_milk',
//       body: "You're awesome!",
//       createdAt: new Date(),
//     },
//     {
//       sender: 'Pearl',
//       handle: 'punk_rock_swords',
//       body: 'Affluent!',
//       createdAt: new Date(),
//     },
//     {
//       sender: 'Garnet',
//       handle: 'stronger_than_u',
//       body: 'An experience!',
//       createdAt: new Date(),
//     },
//   ]);
//   let [fontsLoaded] = useFonts({
//     Pacifico_400Regular,
//   });

//   if (!fontsLoaded) {
//     return null;
//   }
//   return (
//     <View style={styles.container}>
//       <Header label="Happy Birthday!!"></Header>
//       <StatusBar style="auto" />
//       <FlatList
//         style={styles.list}
//         data={posts}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.body}
//       />
//     </View>
//   );
// }
// import { Pacifico_400Regular, useFonts } from '@expo-google-fonts/pacifico';
// import { Link } from 'expo-router';
// import { StatusBar } from 'expo-status-bar';
// import { useState } from 'react';
// import { FlatList, StyleSheet, View } from 'react-native';
// import Header from './components/Header';
// import PostItem from './components/PostItem';
// import { colors } from './styles/constants';

// const renderItem = (item: any) => <PostItem post={item.item} />;

// export default function App() {
//   <Link href="/">Idk yet</Link>;
//   let [posts, setPosts] = useState([
//     {
//       sender: 'Ramon',
//       handle: 'hola_soy_milk',
//       body: "You're awesome!",
//       createdAt: new Date(),
//     },
//     {
//       sender: 'Pearl',
//       handle: 'punk_rock_swords',
//       body: 'Affluent!',
//       createdAt: new Date(),
//     },
//     {
//       sender: 'Garnet',
//       handle: 'stronger_than_u',
//       body: 'An experience!',
//       createdAt: new Date(),
//     },
//   ]);
//   let [fontsLoaded] = useFonts({
//     Pacifico_400Regular,
//   });

//   if (!fontsLoaded) {
//     return null;
//   }
//   return (
//     <View style={styles.container}>
//       <Header label="Happy Birthday!!"></Header>
//       <StatusBar style="auto" />
//       <FlatList
//         style={styles.list}
//         data={posts}
//         renderItem={renderItem}
//         keyExtractor={(item) => item.body}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: colors.background,
//   },
//   text: {
//     color: colors.text,
//   },
//   list: {
//     marginTop: 30,
//     paddingLeft: 30,
//     paddingRight: 30,
//     width: '100%',
//   },
// });

// In App.js in a new project

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { Button, FlatList, StatusBar, Text, View } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'black',
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          fontSize: 40,
          marginLeft: 20,
          marginRight: 20,
          color: 'white',
        }}
      >
        {`Happy Fricking Birthday!! \nI love you \nSO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO...`}
      </Text>
      <Button title="Continue" onPress={() => navigation.navigate('Second')} />
    </View>
  );
}

function SecondScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          fontSize: 40,
          marginLeft: 20,
          marginRight: 20,
          color: 'white',
        }}
      >
        {`SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO...`}
      </Text>
      <Button title="Continue" onPress={() => navigation.navigate('Third')} />
    </View>
  );
}
function ThirdScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          fontSize: 40,
          marginLeft: 20,
          marginRight: 20,
          color: 'white',
        }}
      >
        {`SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO...`}
      </Text>
      <Button title="Continue" onPress={() => navigation.navigate('Fourth')} />
    </View>
  );
}
function FourthScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          fontSize: 40,
          marginLeft: 20,
          marginRight: 20,
          color: 'white',
        }}
      >
        {`SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO...`}
      </Text>
      <Button title="Continue" onPress={() => navigation.navigate('Fifth')} />
    </View>
  );
}
function FifthScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          fontSize: 40,
          marginLeft: 20,
          marginRight: 20,
          color: 'white',
        }}
      >
        {`SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO...`}
      </Text>
      <Button title="Continue" onPress={() => navigation.navigate('Sixth')} />
    </View>
  );
}
function SixthScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          fontSize: 40,
          marginLeft: 20,
          marginRight: 20,
          color: 'white',
        }}
      >
        {`SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO...`}
      </Text>
      <Button title="Continue" onPress={() => navigation.navigate('Seventh')} />
    </View>
  );
}
function SeventhScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          fontSize: 40,
          marginLeft: 20,
          marginRight: 20,
          color: 'white',
        }}
      >
        {`SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO...`}
      </Text>
      <Button title="Continue" onPress={() => navigation.navigate('Eighth')} />
    </View>
  );
}
function EighthScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          fontSize: 40,
          marginLeft: 20,
          marginRight: 20,
          color: 'white',
        }}
      >
        {`SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO SO Very Very Much!!`}
      </Text>
      <Button
        title="One Last Page"
        onPress={() => navigation.navigate('Last')}
      />
      <Text
        style={{
          textAlign: 'center',
          fontSize: 15,
          marginLeft: 20,
          marginRight: 20,
          color: 'white',
        }}
      >
        Also i'm sorry, im not very good at react native, this is kinda ugly :(
      </Text>
    </View>
  );
}
function LastPage({}) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          fontSize: 20,
          marginLeft: 20,
          marginRight: 20,
          color: 'white',
        }}
      >
        {`Even though im a hard person to deal with time to time and bring you down or whatnot, Thank you for always forgiving me and staying with me. I appreciate you a lot and I am incredibly Lucky AND Happy to have you in my life. \nMost of the time I am not that good at showing my feelings or talk about them (im getting there tho thx to you) i hope that you can still see and feel that i have an immense GIGANTIC love for you. \nThanks for making me a better person. \nThanks for making my life much better and happier. \nThanks for always supporting me even though you have your own stuff going on. \nI couldn't ask for a better partner and I Love You so Very Much.\nHappy birthday once again. ❤️  `}
      </Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Happy Birthday!!!!' }}
        />
        <Stack.Screen
          name="Second"
          component={SecondScreen}
          options={{ title: 'Happy Birthday!!!!' }}
        />
        <Stack.Screen
          name="Third"
          component={ThirdScreen}
          options={{ title: 'Happy Birthday!!!!' }}
        />
        <Stack.Screen
          name="Fourth"
          component={FourthScreen}
          options={{ title: 'Happy Birthday!!!!' }}
        />
        <Stack.Screen
          name="Fifth"
          component={FifthScreen}
          options={{ title: 'Happy Birthday!!!!' }}
        />
        <Stack.Screen
          name="Sixth"
          component={SixthScreen}
          options={{ title: 'Happy Birthday!!!!' }}
        />
        <Stack.Screen
          name="Seventh"
          component={SeventhScreen}
          options={{ title: 'Happy Birthday!!!!' }}
        />
        <Stack.Screen
          name="Eighth"
          component={EighthScreen}
          options={{ title: 'Happy Birthday!!!!' }}
        />
        <Stack.Screen
          name="Last"
          component={LastPage}
          options={{ title: 'Thank You And I Love You.' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
