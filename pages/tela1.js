import React, {  StyleSheet, View, TextInput, Text, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StatusBar } from 'expo-status-bar';
import  { useState } from 'react';



const produtos = [
  { id: '1', nome: 'Morango', preco: 'R$ 00,00', imagem: require('./imagens/morango.png') },
  { id: '2', nome: 'Abacaxi', preco: 'R$ 00,00', imagem: require('./imagens/abacaxi.png') },
  { id: '3', nome: 'Banana', preco: 'R$ 00,00', imagem: require('./imagens/banana.png') },
  { id: '4', nome: 'Kiwi', preco: 'R$ 00,00', imagem: require('./imagens/kiwi.png') },
  { id: '5', nome: 'Tomate', preco: 'R$ 00,00', imagem: require('./imagens/tomate.png') },
  { id: '6', nome: 'Alface', preco: 'R$ 00,00', imagem: require('./imagens/repolho.png') },
  { id: '7', nome: 'Berinjela', preco: 'R$ 00,00', imagem: require('./imagens/berinjela.png') },
  { id: '8', nome: 'Cebola', preco: 'R$ 00,00', imagem: require('./imagens/cebola.png') },
  { id: '9', nome: 'Batata', preco: 'R$ 00,00', imagem: require('./imagens/batata.png') },
  { id: '10', nome: 'Beterraba', preco: 'R$ 00,00', imagem: require('./imagens/beterraba.png') },
  { id: '11', nome: 'Cenoura', preco: 'R$ 00,00', imagem: require('./imagens/cenoura.png') },
  { id: '12', nome: 'Mandioca', preco: 'R$ 00,00', imagem: require('./imagens/mandioca.png') },
];

const categorias = [
  { id: '1',  icone: 'cutlery' },
  { id: '2',  icone: 'glass' },
  { id: '3',  icone: 'coffee' },
  { id: '4',  icone: 'cheese' },

];

const ItemProduto = ({ item, onPress, onAdd, onRemove, quantidade }) => (
  <TouchableOpacity style={styles.produtoContainer} onPress={() => onPress(item)}>
    <Image source={item.imagem} style={styles.produtoImagem} />
    <Text style={styles.produtoNome}>{item.nome}</Text>
    <Text style={styles.produtoPreco}>{item.preco}</Text>
    <View style={styles.botaoContainer}>
      <TouchableOpacity style={styles.botaoMenos} onPress={() => onRemove(item.id)}>
        <Icon name="minus" size={15} color="#fff" />
      </TouchableOpacity>
      <View style={styles.carrinhoContainer}>
        <Icon name="shopping-cart" size={20} color="#000" />
        <Text style={styles.quantidadeTexto}>{quantidade[item.id] || 0}</Text>
      </View>
      <TouchableOpacity style={styles.botaoMais} onPress={() => onAdd(item.id)}>
        <Icon name="plus" size={15} color="#fff" />
      </TouchableOpacity>
    </View>
  </TouchableOpacity>
);

const Categoria = () => (
  <View style={styles.categoriaContainer}>

    <Text style={styles.headerTexto1}>Nossos produtos!</Text>
  </View>
);

const MarketMaven = () => {
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);
  const [quantidade, setQuantidade] = useState({});

  const handleAdd = (id) => {
    setQuantidade((prevQuantidade) => ({
      ...prevQuantidade,
      [id]: (prevQuantidade[id] || 0) + 1,
    }));
  };

  const handleRemove = (id) => {
    setQuantidade((prevQuantidade) => ({
      ...prevQuantidade,
      [id]: prevQuantidade[id] > 0 ? prevQuantidade[id] - 1 : 0,
    }));
  };

  const renderLinhaProdutos = ({ item }) => (
    <ScrollView horizontal contentContainerStyle={styles.linha}>
      {item.map((produto) => (
        <ItemProduto
          key={produto.id}
          item={produto}
          onPress={setProdutoSelecionado}
          onAdd={handleAdd}
          onRemove={handleRemove}
          quantidade={quantidade}
        />
      ))}
    </ScrollView>
  );

  const linhasProdutos = [];
  for (let i = 0; i < produtos.length; i += 4) {
    linhasProdutos.push(produtos.slice(i, i + 4));
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('./imagens/logobranca.png')} style={styles.logo} />
        <Text style={styles.headerTexto}>Market Maven</Text>
      </View>

      <Categoria />

      <FlatList
        data={linhasProdutos}
        renderItem={renderLinhaProdutos}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={styles.listaConteudo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 6,
    backgroundColor: '#0E402D',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
    
  },
  logo: {
    width: 50,
    height: 50,
  },
  headerTexto: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerTexto1: {
    color: '#0E402D',
    fontSize: 20,
    fontWeight: 'bold',
  },
  listaConteudo: {
    paddingHorizontal: 10,
  },
  linha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  produtoContainer: {
    width: 180,
    backgroundColor: '#fff',
    margin: 10,
    padding: 10,
    alignItems: 'center',
    borderWidth: 1,
    elevation: 2,
  },
  produtoImagem: {
    width: 70,
    height: 70,
  },
  produtoNome: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingTop: 5,
  },
  produtoPreco: {
    color: '#888',
  },
  botaoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  botaoMais: {
    backgroundColor: '#d32f2f',
    width: 20,
    height: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  botaoMenos: {
    backgroundColor: '#d32f2f',
    width: 20,
    height: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  carrinhoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 20,
    height: 20,
  },
  quantidadeTexto: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  categoriaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    elevation: 2,
  },
  categoriaImagem: {
    width: 70,
    height: 85,
    marginRight: 10,
  },
  categoriaTextoContainer: {
    flex: 1,
  },
  categoriaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  categoriaIcone: {
    marginRight: 10,
  },
  categoriaTexto: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MarketMaven;