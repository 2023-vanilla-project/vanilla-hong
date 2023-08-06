import React from "react";
import {View, Text, TouchableOpacity, Image, Dimensions} from "react-native";

const SearchContent = (props) => {


    const windoWidth = Dimensions.get('window').width
    const windoHeight = Dimensions.get('window').height

    const searchData = [
        {
            id:0,
            images: [
                require("../storage/images/post1.jpg"),
                require("../storage/images/post2.jpg"),
                require("../storage/images/post3.jpg"),
                require("../storage/images/post4.jpg"),
                require("../storage/images/post5.jpg"),
                require("../storage/images/post6.jpg"),
            ]
        },
        {
            id:1,
            images: [
                require("../storage/images/post7.jpg"),
                require("../storage/images/post8.jpg"),
                require("../storage/images/post9.jpg"),
                require("../storage/images/post10.jpg"),
                require("../storage/images/post11.jpg"),
                require("../storage/images/post12.jpg"),
            ]
        },
        {
            id:2,
            images: [
                require("../storage/images/post13.jpg"),
                require("../storage/images/post14.jpg"),
                require("../storage/images/post15.jpg"),
            ]
        }
    ]
    return(
        <View>
            {
                searchData.map((data, index) => {
                    return(
                        <>
                        {
                            data.id === 0 ?
                            (
                                <View 
                                style={{
                                    flexDirection: "row",
                                    flexWrap: "wrap",
                                    justifyContent: "space-between",
                                }}>
                                    {
                                        data.images.map((imageData, imgIndex)=> {
                                            return(
                                                <TouchableOpacity 
                                                    onPressIn={() => props.data(imageData)}
                                                    onPressOut={() => props.data(null)}
                                                    style={{paddingBottom: 2}}>
                                                    <Image 
                                                        source={imageData} 
                                                        style={{width:windoWidth/3.05,height:150}}
                                                    />
                                                </TouchableOpacity>
                                            );
                                        })
                                    }
                                </View>
                            ) : null
                        }
                        {
                            data.id === 1 ?
                            (
                                <View style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                }}>
                                <View style={{
                                    flexDirection: "row",
                                    flexWrap: "wrap",
                                    width: 249,
                                    justifyContent: "space-between"
                                }}>
                                    {
                                        data.images.slice(0,4).map((imageData, imgIndex) => {
                                            return(
                                                <TouchableOpacity 
                                                    onPressIn={() => props.data(imageData)}
                                                    onPressOut={() => props.data(null)}
                                                    style={{paddingBottom: 2}}>
                                                    <Image 
                                                        source={imageData}
                                                        style={{width:windoWidth/3.05, height:150}}
                                                    />
                                                </TouchableOpacity>
                                            );
                                        })
                                    }
                                </View>
                                    <TouchableOpacity 
                                        onPressIn={() => props.data(data.images[5])}
                                        onPressOut={() => props.data(null)}
                                        style={{marginLeft:2}}>
                                        <Image
                                            source={data.images[5]}
                                            style={{width: windoWidth/3.05, height:300}}
                                        />
                                    </TouchableOpacity>
                                </View>
                            ): null
                        } 
                        {
                            data.id === 2 ?
                            (
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                }}>
                                    <TouchableOpacity 
                                        onPressIn={() => props.data(data.images[2])}
                                        onPressOut={() => props.data(null)}
                                        style={{paddingRight: 2}}>
                                        <Image 
                                            source={data.images[2]}
                                            style={{width: windoWidth/1.5, height:300}}
                                        />
                                    </TouchableOpacity>
                                    <View style={{
                                        flexDirection:'row',
                                        flexWrap:'wrap',
                                        width:130,
                                        justifyContent: 'space-between',
                                    }}>
                                        {
                                            data.images.slice(0,2).map((imageData, imgIndex) => {
                                                return ( 
                                                    <TouchableOpacity 
                                                        onPressIn={() => props.data(imageData)}
                                                        onPressOut={() => props.data(null)}
                                                        style={{paddingBottom:2}}>
                                                        <Image 
                                                            source={imageData}
                                                            style={{width: windoWidth/3.05, height: 150}}
                                                        />
                                                    </TouchableOpacity>
                                                );
                                            })
                                        }
                                    </View>
                                </View>
                            ) : null
                        }
                        </>
                    );
                })
            }
        </View>
    );
};

export default SearchContent;