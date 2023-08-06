import { StatusBar } from "expo-status-bar";
import { React, useEffect, useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { StyleSheet, View, Text, TextInput, Alert } from "react-native";
import { Fontisto } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Btn = styled.TouchableOpacity`
    flex:1;
    justify-content: center;
    align-items: center;
`
const Title = styled.Text`
`;

const STORAGE_KEY = "@toDos"

const FeedAdd = () => {
    const [working, setWorking] = useState(true);
    const [text, setText] = useState("");
    const [toDos, setToDos] = useState({});
    useEffect(() => {
        loadToDos();
    }, []);
    const work = () => setWorking(true);
    const travel = () => setWorking(false);
    const onChangeText = (payload) => setText(payload)
    const saveToDos = async (toSave) => {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
    }
    const loadToDos = async () => {
        try {
            const s = await AsyncStorage.getItem(STORAGE_KEY);
            return s != null ? setToDos(JSON.parse(s)) : null;
        } catch (error) {
            console.log(error);
        }

    }
    const addToDo = async () => {
        if (text === "") { return }
        const newToDos = {
            ...toDos, [Date.now()]: { text, working },
        };
        setToDos(newToDos);
        await saveToDos(newToDos);
        setText("");
    }
    const deleteToDo = async (key) => {
        Alert.alert("Delete To Do", "Are you sure?",
            [{ text: "cancel" }, {
                text: "I'm Sure", style: "destructive", onPress: async () => {
                    const newToDos = { ...toDos }
                    delete newToDos[key]
                    setToDos(newToDos);
                    await saveToDos(newToDos);
                }
            },
            ]);
        return;

    }
    return (
        <View style={styles.container}>
            <StatusBar style='auto' />
            <View style={styles.header}>
                <TouchableOpacity onPress={work}>
                    <Text style={{ ...styles.btnText, color: working ? "white" : "gray" }}>Work</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={travel}>
                    <Text style={{ ...styles.btnText, color: !working ? "white" : "gray" }}>Travel</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TextInput
                    onSubmitEditing={addToDo}
                    onChangeText={onChangeText}
                    returnKeyType="done"
                    value={text}
                    placeholder={working ? "Add a To Do" : "Where do you want to go?"}
                    style={styles.input}
                />
                <ScrollView>
                    {Object.keys(toDos).map((key) => (
                        toDos[key].working === working ? (
                            <View style={styles.toDo} key={key}>
                                <Text style={styles.toDoText}>{toDos[key].text}</Text>
                                <TouchableOpacity onPress={() => deleteToDo(key)}>
                                    <Fontisto name="trash" size={18} color="white" />
                                </TouchableOpacity>
                            </View>
                        ) : null
                    )
                    )}
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        paddingHorizontal: 20,
    },
    header: {
        justifyContent: "space-between",
        flexDirection: "row",
        marginTop: 30,
    },
    btnText: {
        fontSize: 38,
        fontWeight: "600",
        color: "white",
    },
    input: {
        backgroundColor: "white",
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 30,
        marginVertical: 20,
        fontSize: 18,
    },
    toDo: {
        backgroundColor: "black",
        marginBottom: 10,
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderRadius: 15,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    toDoText: {
        color: "white",
        fontSize: 16,
        fontWeight: "500",
    },
});

export default FeedAdd;