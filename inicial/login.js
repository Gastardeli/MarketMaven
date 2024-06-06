import React, { useState } from 'react';
import { TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: #295135;
  align-items: center;
  justify-content: center;
`;

const LogoContainer = styled.View`
  margin-bottom: 40px;
`;

const Logo = styled.Image`
  width: 200px;
  height: 200px;
`;

const ContainerInputWrapper = styled.View`
  flex-direction: row;
  width: 80%;
  height: 40px;
  background-color: #295135;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 5px;
  align-items: center;
  border-bottom-width: 3px;
  border-bottom-color: #fff;
`;

const Entrada = styled.TextInput`
  flex: 1;
  margin-left: 10px;
  color: #fff;
`;

const BotaoWrapper = styled.TouchableOpacity`
  width: 80%;
  height: 40px;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  flex-direction: row;
`;

const TextoBotao = styled.Text`
  color: #000;
  font-size: 16px;
`;

const TextoLink = styled.Text`
  color: #fff;
  margin-top: 20px;
`;

const ContainerInput = ({ icon, placeholder, secureTextEntry = false, onChangeText }) => (
  <ContainerInputWrapper>
    <Ionicons name={icon} size={20} color="#fff" />
    <Entrada
      placeholder={placeholder}
      placeholderTextColor="#fff"
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
    />
  </ContainerInputWrapper>
);

const Botao = ({ onPress, children }) => (
  <BotaoWrapper onPress={onPress}>
    <TextoBotao>{children}</TextoBotao>
    <Ionicons name="arrow-forward-outline" size={20} color="#000" />
  </BotaoWrapper>
);

const TelaDeLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginPress = () => {
    if (username === 'user' && password === '123') {
      // Aqui você pode realizar ações após o login bem-sucedido, como navegar para outra tela
      Alert.alert('Login bem-sucedido!');
    } else {
      Alert.alert('Usuário ou senha incorretos.');
    }
  };

  return (
    <Container>
      <LogoContainer>
        <Logo source={require('./imagens/logobranca.png')} />
      </LogoContainer>

      <ContainerInput
        icon="person"
        placeholder="Usuário"
        onChangeText={(text) => setUsername(text)}
      />
      <ContainerInput
        icon="lock-closed"
        placeholder="Senha"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
      />

      <Botao onPress={handleLoginPress}>
        LOGIN
      </Botao>

      <TouchableOpacity>
        <TextoLink>Esqueceu sua senha?</TextoLink>
      </TouchableOpacity>

      <TouchableOpacity>
        <TextoLink>Cadastre-se</TextoLink>
      </TouchableOpacity>
    </Container>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 200,
  },
  input: {
    width: '80%',
    height: 40,
    backgroundColor: '#295135',
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    flexDirection: 'row',
    borderBottomWidth: 3,
    borderBottomColor: '#fff',
  },
  button: {
    width: '80%',
    height: 40,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    flexDirection: 'row',
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
  },
  linkText: {
    color: '#fff',
    marginTop: 20,
  },
});

export default TelaDeLogin;
