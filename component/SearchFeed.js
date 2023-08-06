import React, { useState } from "react";
import { FlatList, View, StyleSheet, Image, Text, StatusBar, TouchableOpacity, Dimensions} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from "react-native-gesture-handler";
import SearchBox from "./SearchBox";
import SearchContent from "./SearchContent";
import AntDesign from "react-native-vector-icons/AntDesign";
import { set } from "react-native-reanimated";
import Ionic from "react-native-vector-icons/Ionicons"
import Feather from "react-native-vector-icons/Feather"

const SearchFeed = () => {
    const [image, setImage] = useState(null);

    const getData = data => {
        setImage(data);
    };

    const windoWidth = Dimensions.get('window').width
    const windoHeight = Dimensions.get('window').height

    return(
        <View style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
            position: 'relative'
        }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <SearchBox />
                <SearchContent data={getData} />
                <TouchableOpacity style={{
                    margin:25,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <AntDesign name="pluscircleo" style={{fontSize:40, opacity: 0.5}}/>
                </TouchableOpacity>
            </ScrollView>
            {
                image ?
                (
                    <View style={{
                        position: 'absolute',
                        zIndex: 1,
                        width:'100%',
                        height:'100%',
                        backgroundColor: 'rgba(52,52,52,0.8)',
                    }}>
                        <StatusBar backgroundColor="#525252" barStyle="dark-content"/>
                        <View style={{
                            position:'absolute',
                            top: windoHeight / 6,
                            left: windoWidth/18,
                            backgroundColor: 'white',
                            width:350,
                            height:465,
                            borderRadius: 15,
                            zIndex: 1,
                            elevation: 50,
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                paddingVertical: 10,
                                paddingHorizontal: 15,
                            }}>
                                <Image source={image} style={{
                                    width:30,
                                    height:30,
                                    borderRadius:100
                                }}/>
                                <View style={{paddingLeft:8}}>
                                    <Text style={{fontSize: 12, fontWeight: '600'}}>
                                        the_anoymous_guy
                                    </Text>
                                </View>
                            </View>
                            <Image source={image} style={{width: '100%', height:'80%'}}/>
                            <View style={{
                                justifyContent:'space-around',
                                width: '100%',
                                flexDirection: 'row',
                                alignItems: 'center',
                                padding: 8
                            }}>
                                <Ionic name="ios-heart-outline" style={{fontSize: 26}} />
                                <Ionic name="ios-person-circle-outline" style={{fontSize: 26}} />
                                <Feather name="navigation" style={{fontSize: 26}}/>
                            </View>
                        </View>
                    </View>
                ) : null
            }
        </View>
    );
};

// const Item = ({ title, profileImage, name, location, feedImage, likes, comment, likesProfile, likesName }) => (
//     <View style={styles.card}>
//         <View style={styles.row}>
//             <Image
//                 style={styles.tinyLogo}
//                 source={{
//                     uri: 'https://reactnative.dev/img/tiny_logo.png',
//                 }}
//             />
//             <View style={{ flexDirection: 'column', marginLeft: 10 }}>
//                 <Text style={styles.name}>{name}</Text>
//                 <Text style={styles.location}>{location}</Text>
//             </View>
//         </View>
//         <Image
//             style={styles.feedImage}
//             source={{
//                 uri: 'https://i.pinimg.com/736x/22/98/30/229830112ff46e0d71b8aba71619f369.jpg',
//             }}
//         />
//         <View style={styles.row}>
//             <View style={styles.likes}>
//                 <Ionicons name="heart-outline" size={24} color="black" />
//                 <Text style={{ marginLeft: 5 }}>{likes}</Text>
//             </View>
//             <View style={styles.comment}>
//                 <Ionicons name="md-chatbubble-outline" size={24} color="black" />
//                 <Text>{comment}</Text>
//             </View>
//             <Image />
//             <Image />
//         </View>
//     </View>
// );

// const SearchFeed = () => {
//     return (
//         <FlatList
//             data={DATA}
//             renderItem={({ item }) => <Item name={item.name} location={item.location} likes={item.likes} comment={item.comment} />}
//             keyExtractor={item => item.id}
//             contentContainerStyle={{ paddingBottom: 90 }}
//         />
//     );
// };

export default SearchFeed

// const styles = StyleSheet.create({
//     card: {
//         backgroundColor: '#ffffff',
//         padding: 20,
//         marginVertical: 15,
//         marginHorizontal: 25,
//         borderRadius: 30,
//         overflow: 'hidden',
//     },
//     name: {
//         fontSize: 15,
//         alignItems: 'center',
//         fontWeight: 'bold',
//     },
//     location: {
//         fontSize: 11,
//         color: "#808e9b"
//     },
//     tinyLogo: {
//         width: 30,
//         height: 30,
//         borderRadius: 90,
//         alignItems: 'center',
//     },
//     feedImage: {
//         resizeMode: 'contain',
//         width: 60,
//         height: 60,
//         marginTop: 15,
//     },
//     row: {
//         flexDirection: 'row',
//         justifyContent: 'flex-start',
//     },
//     likes: {
//         flexDirection: 'row',
//         justifyContent: 'flex-start',
//     },
//     comment: {
//         flexDirection: 'row',
//         justifyContent: 'flex-start',
//         marginLeft: 15,
//     }
// });