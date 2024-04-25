export default function App() {
    return (
      <View style={styles.container}>
        <Image source={logo}/>
        <View style={styles.reader}>
      <Text style={styles.readerText}>Create your Account </Text>
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
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
        />
        </View>
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
   