import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SectionList, TouchableOpacity, Image, Button, Alert } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

// Card images come from the Pokemon TCG "151" gallery:
// https://tcg.pokemon.com/en-us/galleries/151/
// Each card's number is used to build its image URL.
const CARD_BASE_URL = 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_';
const cardImage = (cardNumber) => CARD_BASE_URL + cardNumber + '.png';

const datasource = [
  {
    title: 'Fire',
    icon: 'fire',
    bgcolor: '#E8501E',
    itemcolor: '#FDE3D6',
    textcolor: '#7A2005',
    data: [
      { key: 'Charmander', cardNumber: 4 },
      { key: 'Charmeleon', cardNumber: 5 },
      { key: 'Vulpix', cardNumber: 37 },
      { key: 'Growlithe', cardNumber: 58 },
    ],
  },

  {
    title: 'Water',
    icon: 'water',
    bgcolor: '#2F80D1',
    itemcolor: '#DCEBFA',
    textcolor: '#0F3D6B',
    data: [
      { key: 'Squirtle', cardNumber: 7 },
      { key: 'Wartortle', cardNumber: 8 },
      { key: 'Psyduck', cardNumber: 54 },
    ],
  },

  {
    title: 'Grass',
    icon: 'leaf',
    bgcolor: '#3E9A3A',
    itemcolor: '#DFF2DC',
    textcolor: '#1D4A1B',
    data: [
      { key: 'Bulbasaur', cardNumber: 1 },
      { key: 'Ivysaur', cardNumber: 2 },
    ],
  },

  {
    title: 'Lightning',
    icon: 'lightning-bolt',
    bgcolor: '#F2C420',
    itemcolor: '#FFF6D1',
    textcolor: '#6B5200',
    data: [
      { key: 'Pikachu', cardNumber: 25 },
      { key: 'Raichu', cardNumber: 26 },
    ],
  },
];

const renderItem = ({ item, section }) => {
  return (
    <TouchableOpacity
      style={[styles.item, { backgroundColor: section.itemcolor, borderColor: section.bgcolor }]}>
      <Text style={[styles.itemText, { color: section.textcolor }]}>{item.key}</Text>
      <Image source={{ uri: cardImage(item.cardNumber) }} style={styles.cardImage} />
    </TouchableOpacity>
  );
};

const renderSectionHeader = ({ section: { title, icon, bgcolor } }) => {
  return (
    <View style={[styles.header, { backgroundColor: bgcolor }]}>
      <MaterialCommunityIcons name={icon} size={28} color="white" />
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.buttonContainer}>
        <Button title="Add Pokemon"/>
      </View>
      <SectionList
        sections={datasource}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  buttonContainer: {
    marginHorizontal: 10,
    marginBottom: 10,
  },
  list: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    marginTop: 10,
    borderRadius: 8,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 8,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 8,
    padding: 10,
  },
  itemText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  cardImage: {
    width: 120,
    height: 167,
  },
});
