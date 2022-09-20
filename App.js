import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {Provider as PaperProvider, DefaultTheme, Text, TextInput, useTheme} from 'react-native-paper'; 
import {theme} from './styles/Theme';

export default function App() {

  const [value, setValue] = useState('');

  return (
    <PaperProvider theme={theme}>
      <View style={styles.container}>
        <TextInput  
          onChangeText={x=>setValue(x)}
          value={value}
          label={'Username'}
          mode='outlined'
          style={{width:200}}
        />
        <UserInfo></UserInfo>
      </View>
    </PaperProvider>
  );
}
const UserInfo = ()=>{

  const {colors} = useTheme(theme);

  return(
    <View>
      <Text style={{color: colors.accent}}>Tekstiä</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginTop:100
  },
});
