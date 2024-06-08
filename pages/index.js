import React, { useState } from 'react';
import { TouchableOpacity, Alert, StyleSheet, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

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

export default function Bem_Vindo() {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginPress = () => {
    if (username === 'usuario' && password === 'senha') {
      navigation.navigate('Rotainterna'); // Navega para a rota interna após login bem-sucedido
    } else {
      Alert.alert('Erro', 'Usuário ou senha incorretos.');
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

      <StatusBar style="auto" />
    </Container>
  );
}
