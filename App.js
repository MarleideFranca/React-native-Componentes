import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, Header} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements';
import ModernHeader from "react-native-modern-header";



const Login = () => {
  return (
    <View style={[styles.container, {
      flexDirection: "column"
    }]}>
      <View style={{ flex: 1, alignItems: "center" }} >
        <Avatar
          size="large"
          rounded
          source={{
            uri:
              'https://avatars.githubusercontent.com/u/104798487?v=4',
          }}
        />

      </View>

      <View style={{ flex: 1, }}>
        <Input
          placeholder='E-mail'
          leftIcon={
            <Icon
              name='user'
              size={24}
              color='black'
            />
          }
        />

        <Input
          placeholder='Senha'
          leftIcon={
            <Icon
              name='lock'
              size={24}
              color='black'
            />
          }
        />


      </View>
      <View style={{ flex: 1, }}>
        <Button style={{marginBottom: 15}}
          title="Logar"
        />

        <Button
          title="Cadastrar-se"
        />
        
      </View>
    </View>
  );
};

const Cadastro = () => {
  return (
    <View style={[styles.container, {
      flexDirection: "column"
    }]}>
      <View style={{ flex: 1, alignItems: "center" }} >
      <ModernHeader title=" Cadastro"
      leftComponentDisable
      rightComponentDisable
      />
        
      </View>

      <View style={{ flex: 5, }}>
        <Input
          placeholder='Nome'
          leftIcon={
            <Icon
              name='user'
              size={24}
              color='black'
            />
          }
        />


        <Input
          placeholder='E-mail'
          leftIcon={
            <Icon
              name='user'
              size={24}
              color='black'
            />
          }
        />

        <Input 
          placeholder='Senha'
          leftIcon={
            <Icon
              name='lock'
              size={24}
              color='black'
            />
            
          }
        />
<Button
          title="Cadastrar"
        />
        

      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default Cadastro;