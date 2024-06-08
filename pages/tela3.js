import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';




import {TouchableOpacity, Image, ScrollView } from 'react-native';

const CarrinhoDeCompras = () => {
  const [quantidadeAlface, setQuantidadeAlface] = useState(1);
  const [quantidadeCenoura, setQuantidadeCenoura] = useState(1);
  const [quantidadeTomate, setQuantidadeTomate] = useState(1);
  const [quantidadeKiwi, setQuantidadeKiwi] = useState(1);
  const [quantidadeMorango, setQuantidadeMorango] = useState(1);
  const [quantidadeAbacaxi, setQuantidadeAbacaxi] = useState(1);
  const [quantidadeBanana, setQuantidadeBanana] = useState(1);
  const [quantidadeBerinjela, setQuantidadeBerinjela] = useState(1);
  const [quantidadeCebola, setQuantidadeCebola] = useState(1);
  const [quantidadeBatata, setQuantidadeBatata] = useState(1);
  const [quantidadeBeterraba, setQuantidadeBeterraba] = useState(1);
  const [quantidadeMandioca, setQuantidadeMandioca] = useState(1);

  const precoMorango = 8.00;
  const precoAbacaxi = 12.50;
  const precoBanana = 6.00;
  const precoKiwi = 10.00;
  const precoTomate = 4.50;
  const precoAlface = 2.50;
  const precoBerinjela = 7.00;
  const precoCebola = 3.00;
  const precoBatata = 5.50;
  const precoBeterraba = 3.50;
  const precoCenoura = 4.00;
  const precoMandioca = 6.00;

  const total = (quantidadeMorango * precoMorango) +
    (quantidadeAbacaxi * precoAbacaxi) +
    (quantidadeBanana * precoBanana) +
    (quantidadeKiwi * precoKiwi) +
    (quantidadeTomate * precoTomate) +
    (quantidadeAlface * precoAlface) +
    (quantidadeBerinjela * precoBerinjela) +
    (quantidadeCebola * precoCebola) +
    (quantidadeBatata * precoBatata) +
    (quantidadeBeterraba * precoBeterraba) +
    (quantidadeCenoura * precoCenoura) +
    (quantidadeMandioca * precoMandioca);

  return (
    <View style={styles.container1}>
      <View style={styles.header1}>
        <Image source={require('./imagens/logobranca.png')} style={styles.logo1} />
        <Text style={styles.headerTexto1}>Market Maven</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Text style={styles.headerText}>Seu carrinho</Text>
            <Ionicons size={25} color={"#000"} name="cart" />
          </View>
        </View>
        <ScrollView style={styles.scrollView}>
          {/* Visualização para o produto "Alface" */}
          <View style={styles.item}>
            <Image source={require('./imagens/repolho.png')} style={styles.imagem} />
            <View style={styles.detalhes}>
              <Text style={styles.nomeItem}>Alface</Text>
              <Text style={styles.precoItem}>R$ {precoAlface.toFixed(2)}</Text>
            </View>
            <View style={styles.contador}>
              <TouchableOpacity onPress={() => setQuantidadeAlface(Math.max(0, quantidadeAlface - 1))}>
                <Text style={styles.botaoContador}>-</Text>
              </TouchableOpacity>
              <Text style={styles.textoContador}>{quantidadeAlface} un</Text>
              <TouchableOpacity onPress={() => setQuantidadeAlface(quantidadeAlface + 1)}>
                <Text style={styles.botaoContador}>+</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Visualização para o produto "Tomate" */}
          <View style={styles.item}>
            <Image source={require('./imagens/tomate.png')} style={styles.imagem} />
            <View style={styles.detalhes}>
              <Text style={styles.nomeItem}>Tomate</Text>
              <Text style={styles.precoItem}>R$ {precoTomate.toFixed(2)}</Text>
            </View>
            <View style={styles.contador}>
              <TouchableOpacity onPress={() => setQuantidadeTomate(Math.max(0, quantidadeTomate - 1))}>
                <Text style={styles.botaoContador}>-</Text>
              </TouchableOpacity>
              <Text style={styles.textoContador}>{quantidadeTomate} un</Text>
              <TouchableOpacity onPress={() => setQuantidadeTomate(quantidadeTomate + 1)}>
                <Text style={styles.botaoContador}>+</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Visualização para o produto "Kiwi" */}
          <View style={styles.item}>
            <Image source={require('./imagens/kiwi.png')} style={styles.imagem} />
            <View style={styles.detalhes}>
              <Text style={styles.nomeItem}>Kiwi</Text>
              <Text style={styles.precoItem}>R$ {precoKiwi.toFixed(2)}</Text>
            </View>
            <View style={styles.contador}>
              <TouchableOpacity onPress={() => setQuantidadeKiwi(Math.max(0, quantidadeKiwi - 1))}>
                <Text style={styles.botaoContador}>-</Text>
              </TouchableOpacity>
              <Text style={styles.textoContador}>{quantidadeKiwi} un</Text>
              <TouchableOpacity onPress={() => setQuantidadeKiwi(quantidadeKiwi + 1)}>
                <Text style={styles.botaoContador}>+</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Visualização para o produto "Banana" */}
          <View style={styles.item}>
            <Image source={require('./imagens/banana.png')} style={styles.imagem} />
            <View style={styles.detalhes}>
              <Text style={styles.nomeItem}>Banana</Text>
              <Text style={styles.precoItem}>R$ {precoBanana.toFixed(2)}</Text>
            </View>
            <View style={styles.contador}>
              <TouchableOpacity onPress={() => setQuantidadeBanana(Math.max(0, quantidadeBanana - 1))}>
                <Text style={styles.botaoContador}>-</Text>
              </TouchableOpacity>
              <Text style={styles.textoContador}>{quantidadeBanana} un</Text>
              <TouchableOpacity onPress={() => setQuantidadeBanana(quantidadeBanana + 1)}>
                <Text style={styles.botaoContador}>+</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Visualização para o produto "Morango" */}
          <View style={styles.item}>
            <Image source={require('./imagens/morango.png')} style={styles.imagem} />
            <View style={styles.detalhes}>
              <Text style={styles.nomeItem}>Morango</Text>
              <Text style={styles.precoItem}>R$ {precoMorango.toFixed(2)}</Text>
            </View>
            <View style={styles.contador}>
              <TouchableOpacity onPress={() => setQuantidadeMorango(Math.max(0, quantidadeMorango - 1))}>
                <Text style={styles.botaoContador}>-</Text>
              </TouchableOpacity>
              <Text style={styles.textoContador}>{quantidadeMorango} un</Text>
              <TouchableOpacity onPress={() => setQuantidadeMorango(quantidadeMorango + 1)}>
                <Text style={styles.botaoContador}>+</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Visualização para o produto "Abacaxi" */}
          <View style={styles.item}>
            <Image source={require('./imagens/abacaxi.png')} style={styles.imagem} />
            <View style={styles.detalhes}>
              <Text style={styles.nomeItem}>Abacaxi</Text>
              <Text style={styles.precoItem}>R$ {precoAbacaxi.toFixed(2)}</Text>
            </View>
            <View style={styles.contador}>
              <TouchableOpacity onPress={() => setQuantidadeAbacaxi(Math.max(0, quantidadeAbacaxi - 1))}>
                <Text style={styles.botaoContador}>-</Text>
              </TouchableOpacity>
              <Text style={styles.textoContador}>{quantidadeAbacaxi} un</Text>
              <TouchableOpacity onPress={() => setQuantidadeAbacaxi(quantidadeAbacaxi + 1)}>
                <Text style={styles.botaoContador}>+</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Visualização para o produto "Cenoura" */}
          <View style={styles.item}>
            <Image source={require('./imagens/cenoura.png')} style={styles.imagem} />
            <View style={styles.detalhes}>
              <Text style={styles.nomeItem}>Cenoura</Text>
              <Text style={styles.precoItem}>R$ {precoCenoura.toFixed(2)}</Text>
            </View>
            <View style={styles.contador}>
              <TouchableOpacity onPress={() => setQuantidadeCenoura(Math.max(0, quantidadeCenoura - 1))}>
                <Text style={styles.botaoContador}>-</Text>
              </TouchableOpacity>
              <Text style={styles.textoContador}>{quantidadeCenoura} un</Text>
              <TouchableOpacity onPress={() => setQuantidadeCenoura(quantidadeCenoura + 1)}>
                <Text style={styles.botaoContador}>+</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Visualização para o produto "Berinjela" */}
          <View style={styles.item}>
            <Image source={require('./imagens/berinjela.png')} style={styles.imagem} />
            <View style={styles.detalhes}>
              <Text style={styles.nomeItem}>Berinjela</Text>
              <Text style={styles.precoItem}>R$ {precoBerinjela.toFixed(2)}</Text>
            </View>
            <View style={styles.contador}>
              <TouchableOpacity onPress={() => setQuantidadeBerinjela(Math.max(0, quantidadeBerinjela - 1))}>
                <Text style={styles.botaoContador}>-</Text>
              </TouchableOpacity>
              <Text style={styles.textoContador}>{quantidadeBerinjela} un</Text>
              <TouchableOpacity onPress={() => setQuantidadeBerinjela(quantidadeBerinjela + 1)}>
                <Text style={styles.botaoContador}>+</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Visualização para o produto "Cebola" */}
          <View style={styles.item}>
            <Image source={require('./imagens/cebola.png')} style={styles.imagem} />
            <View style={styles.detalhes}>
              <Text style={styles.nomeItem}>Cebola</Text>
              <Text style={styles.precoItem}>R$ {precoCebola.toFixed(2)}</Text>
            </View>
            <View style={styles.contador}>
              <TouchableOpacity onPress={() => setQuantidadeCebola(Math.max(0, quantidadeCebola - 1))}>
                <Text style={styles.botaoContador}>-</Text>
              </TouchableOpacity>
              <Text style={styles.textoContador}>{quantidadeCebola} un</Text>
              <TouchableOpacity onPress={() => setQuantidadeCebola(quantidadeCebola + 1)}>
                <Text style={styles.botaoContador}>+</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Visualização para o produto "Batata" */}
          <View style={styles.item}>
            <Image source={require('./imagens/batata.png')} style={styles.imagem} />
            <View style={styles.detalhes}>
              <Text style={styles.nomeItem}>Batata</Text>
              <Text style={styles.precoItem}>R$ {precoBatata.toFixed(2)}</Text>
            </View>
            <View style={styles.contador}>
              <TouchableOpacity onPress={() => setQuantidadeBatata(Math.max(0, quantidadeBatata - 1))}>
                <Text style={styles.botaoContador}>-</Text>
              </TouchableOpacity>
              <Text style={styles.textoContador}>{quantidadeBatata} un</Text>
              <TouchableOpacity onPress={() => setQuantidadeBatata(quantidadeBatata + 1)}>
                <Text style={styles.botaoContador}>+</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Visualização para o produto "Beterraba" */}
          <View style={styles.item}>
            <Image source={require('./imagens/beterraba.png')} style={styles.imagem} />
            <View style={styles.detalhes}>
              <Text style={styles.nomeItem}>Beterraba</Text>
              <Text style={styles.precoItem}>R$ {precoBeterraba.toFixed(2)}</Text>
            </View>
            <View style={styles.contador}>
              <TouchableOpacity onPress={() => setQuantidadeBeterraba(Math.max(0, quantidadeBeterraba - 1))}>
                <Text style={styles.botaoContador}>-</Text>
              </TouchableOpacity>
              <Text style={styles.textoContador}>{quantidadeBeterraba} un</Text>
              <TouchableOpacity onPress={() => setQuantidadeBeterraba(quantidadeBeterraba + 1)}>
                <Text style={styles.botaoContador}>+</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Visualização para o produto "Mandioca" */}
          <View style={styles.item}>
            <Image source={require('./imagens/mandioca.png')} style={styles.imagem} />
            <View style={styles.detalhes}>
              <Text style={styles.nomeItem}>Mandioca</Text>
              <Text style={styles.precoItem}>R$ {precoMandioca.toFixed(2)}</Text>
            </View>
            <View style={styles.contador}>
              <TouchableOpacity onPress={() => setQuantidadeMandioca(Math.max(0, quantidadeMandioca - 1))}>
                <Text style={styles.botaoContador}>-</Text>
              </TouchableOpacity>
              <Text style={styles.textoContador}>{quantidadeMandioca} un</Text>
              <TouchableOpacity onPress={() => setQuantidadeMandioca(quantidadeMandioca + 1)}>
                <Text style={styles.botaoContador}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <Text style={styles.totalText}>Total: R$ {total.toFixed(2)}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    padding: 6,
    backgroundColor: '#5A6650',
    paddingTop: 20,
  },
  logo1: {
    width: 50,
    height: 50,
  },
  headerTexto1: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  headerContent:{
    display:'flex',
    flexDirection: 'row',
    justifyContent:'space-around',
  },
  scrollView: {
    flex: 1,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  imagem: {
    width: 50,
    height: 50,
  },
  detalhes: {
    flex: 1,
    marginLeft: 10,
  },
  nomeItem: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  precoItem: {
    fontSize: 14,
    color: '#888',
  },
  contador: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  botaoContador: {
    fontSize: 20,
    padding: 10,
  },
  textoContador: {
    fontSize: 16,
    padding: 10,
  },
  footer: {
    padding: 10,
    alignItems: 'center',
    backgroundColor:'#5A6650',
    borderRadius:11,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'#fff',
  },
});

export default CarrinhoDeCompras;