import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SectionList, TouchableOpacity, Image } from 'react-native';
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
      style={[styles.item, { backgroundColor: section.itemcolor, borderLeftColor: section.bgcolor }]}>
      <View>
        <Text style={[styles.itemText, { color: section.textcolor }]}>{item.key}</Text>
        <Text style={[styles.itemSubText, { color: section.textcolor }]}>
          Card #{String(item.cardNumber).padStart(3, '0')}
        </Text>
      </View>
      <Image source={{ uri: cardImage(item.cardNumber) }} style={styles.cardImage} />
    </TouchableOpacity>
  );
};

const renderSectionHeader = ({ section: { title, icon, bgcolor, data } }) => {
  return (
    <View style={[styles.header, { backgroundColor: bgcolor }]}>
      <MaterialCommunityIcons name={icon} size={26} color="white" />
      <Text style={styles.headerText}>{title}</Text>
      <Text style={styles.headerCount}>{data.length} cards</Text>
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.titleRow}>
        <MaterialCommunityIcons name="pokeball" size={30} color="#E3350D" />
        <Text style={styles.title}>Pokemon Cards</Text>
      </View>
      <TouchableOpacity style={styles.addButton}>
        <MaterialCommunityIcons name="plus" size={22} color="white" />
        <Text style={styles.addButtonText}>Add Pokemon</Text>
      </TouchableOpacity>
      <SectionList
        sections={datasource}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        contentContainerStyle={styles.list}
        stickySectionHeadersEnabled={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
    paddingTop: 50,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 12,
    marginBottom: 12,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#222',
    marginLeft: 8,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E3350D',
    marginHorizontal: 12,
    marginBottom: 6,
    paddingVertical: 12,
    borderRadius: 10,
  },
  addButtonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 6,
  },
  list: {
    paddingHorizontal: 12,
    paddingBottom: 30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 14,
    marginTop: 16,
    borderRadius: 10,
  },
  headerText: {
    flex: 1,
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 8,
  },
  headerCount: {
    fontSize: 14,
    fontWeight: '600',
    color: 'white',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderLeftWidth: 6,
    borderRadius: 10,
    marginTop: 8,
    paddingVertical: 10,
    paddingLeft: 14,
    paddingRight: 10,
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.12)',
  },
  itemText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  itemSubText: {
    fontSize: 14,
    marginTop: 4,
    opacity: 0.7,
  },
  cardImage: {
    width: 100,
    height: 140,
    borderRadius: 6,
  },
});
