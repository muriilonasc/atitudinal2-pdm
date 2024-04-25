import { View } from "react-native";
import { Text} from "react-native";
import { StyleSheet } from "react-native";
import { Image } from "react-native";
import logo from './src/assets/icon.jpeg'
import { Button } from "react-native";
import { TextInput } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={logo}/>
      <View style={styles.reader}>
    <Text style={styles.readerText}>Login to your Account </Text>
    <View>
    </View>
    </View>
    <View>
    <TextInput
        style={styles.input}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
      />
      </View>
      <Button
        title="Sign in"
        onPress={() => navigation.navigate('Details')}
      />
  </View> 
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 20,
    
  },
  reader: {
    width:"100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  readerText : {
    color: "#000",
    fontSize: 20,
    fontWeight: "700"
  },
  cardEmail:{
  },
 
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5
  },
});
 