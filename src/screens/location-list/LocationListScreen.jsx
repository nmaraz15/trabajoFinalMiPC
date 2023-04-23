import React, {useState} from 'react'
import { View, Text, SafeAreaView, FlatList, Pressable, Image } from 'react-native'
import { styles } from './LocationListScreen.styles'
import { data } from '../../api/data'
import { SearchBar } from '../../components/search-bar/SearchBar'

export const LocationListScreen = ({ navigation }) => {
const [searchQuery, setSearchQuery] = useState('')

const handleSearch = (query) => {
  setSearchQuery(query)
}


const filteredLocations=data.filter(location=> (
  location.title.toLowerCase().includes(searchQuery.toLowerCase())
))


  const location = ({ item }) => (
    <Pressable onPress={() =>  navigation.navigate('LocationDetail', { item })}>
      <View style={styles.itemContainer}>
        <Image source={item.images[0]} style={styles.itemImage} />
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemDate}>{item.date}</Text>
      </View>
    </Pressable>
  )

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar handleSearch={handleSearch} searchQuery={searchQuery} />
      <FlatList
        data={filteredLocations}
        renderItem={location}
        keyExtractor={item => item.id}
        style={styles.itemList}
      />
    </SafeAreaView>
  )
}
