import React from "react";
import { FlatList, View, StyleSheet, Image, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const DATA = [
    {
        id: '1',
        title: 'hi',
        profileImage: '프로필사진',
        name: 'Camila',
        location: 'Mexico City',
        feedImage: '피드이미지',
        likes: '5',
        comment: '3',
        likesProfile: '좋아요프로필',
        likesName: '좋아요이름',
    },
    {
        id: '2',
        title: 'bye',
        profileImage: '프로필사진',
        name: '안홍영',
        location: '창원시 마산',
        feedImage: '피드이미지',
        likes: '5.4k',
        comment: '165',
        likesProfile: '좋아요프로필',
        likesName: '좋아요이름',
    },
    {
        id: '3',
        title: 'bye',
        profileImage: '프로필사진',
        name: '정진우',
        location: '인천시 서구',
        feedImage: '피드이미지',
        likes: '1k',
        comment: '50',
        likesProfile: '좋아요프로필',
        likesName: '좋아요이름',
    },
    {
        id: '4',
        title: 'bye',
        profileImage: '프로필사진',
        name: '최승민',
        location: '강북 롯데캐슬',
        feedImage: '피드이미지',
        likes: '10k',
        comment: '1000',
        likesProfile: '좋아요프로필',
        likesName: '좋아요이름',
    },
    {
        id: '5',
        title: 'bye',
        profileImage: '프로필사진',
        name: '정찬희',
        location: '구리시 자취',
        feedImage: '피드이미지',
        likes: '5.4k',
        comment: '165',
        likesProfile: '좋아요프로필',
        likesName: '좋아요이름',
    },
    {
        id: '6',
        title: 'bye',
        profileImage: '프로필사진',
        name: '최승민2',
        location: 'Mexico City',
        feedImage: '피드이미지',
        likes: '5.4k',
        comment: '165',
        likesProfile: '좋아요프로필',
        likesName: '좋아요이름',
    },
    {
        id: '7',
        title: 'bye',
        profileImage: '프로필사진',
        name: '안홍영2',
        location: 'Mexico City',
        feedImage: '피드이미지',
        likes: '5.4k',
        comment: '165',
        likesProfile: '좋아요프로필',
        likesName: '좋아요이름',
    },
    {
        id: '8',
        title: 'bye',
        profileImage: '프로필사진',
        name: '정진우2',
        location: 'Mexico City',
        feedImage: '피드이미지',
        likes: '5.4k',
        comment: '165',
        likesProfile: '좋아요프로필',
        likesName: '좋아요이름',
    },
];

const Item = ({ title, profileImage, name, location, feedImage, likes, comment, likesProfile, likesName }) => (
    <View style={styles.card}>
        <View style={styles.row}>
            <Image
                style={styles.tinyLogo}
                source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
            />
            <View style={{ flexDirection: 'column', marginLeft: 10 }}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.location}>{location}</Text>
            </View>
        </View>
        <Image
            style={styles.feedImage}
            source={{
                uri: 'https://i.pinimg.com/736x/22/98/30/229830112ff46e0d71b8aba71619f369.jpg',
            }}
        />
        <View style={styles.row}>
            <View style={styles.likes}>
                <Ionicons name="heart-outline" size={24} color="black" />
                <Text style={{ marginLeft: 5 }}>{likes}</Text>
            </View>
            <View style={styles.comment}>
                <Ionicons name="md-chatbubble-outline" size={24} color="black" />
                <Text>{comment}</Text>
            </View>
            <Image />
            <Image />
        </View>
    </View>
);

const ListFeed = () => {
    return (
        <FlatList
            data={DATA}
            renderItem={({ item }) => <Item name={item.name} location={item.location} likes={item.likes} comment={item.comment} />}
            keyExtractor={item => item.id}
            contentContainerStyle={{ paddingBottom: 90 }}
        />
    );
};

export default ListFeed

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ffffff',
        padding: 20,
        marginVertical: 15,
        marginHorizontal: 25,
        borderRadius: 30,
        overflow: 'hidden',
    },
    name: {
        fontSize: 15,
        alignItems: 'center',
        fontWeight: 'bold',
    },
    location: {
        fontSize: 11,
        color: "#808e9b"
    },
    tinyLogo: {
        width: 30,
        height: 30,
        borderRadius: 90,
        alignItems: 'center',
    },
    feedImage: {
        resizeMode: 'contain',
        width: 60,
        height: 60,
        marginTop: 15,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    likes: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    comment: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginLeft: 15,
    }
});