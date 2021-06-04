import React from "react";
import {
    View, Text, StyleSheet, TouchableOpacity, Image, FlatList
} from 'react-native';
import { SIZES, COLORS, icons, FONTS, images } from "../constants";

const Home = () => {
    

    // Dummy data 
    const [newPlants, setNewPlants] = React.useState([
        {
            id: 1,
            name: "Plant 1",
            img: images.plant_1,
            favourite: false
        },
        {
            id: 2,
            name: "Plant 2",
            img: images.plant_2,
            favourite: true
        },
        {
            id: 3,
            name: "Plant 3",
            img: images.plant_3,
            favourite: false
        },
        {
            id: 4,
            name: "Plant 4",
            img: images.plant_4,
            favourite: false
        },
    ])

    // Friends data 
    const [friendList, setFriendList] = React.useState([
        {
            id: 0,
            img: images.profile_1
        },
        {
            id: 1,
            img: images.profile_2
        },
        {
            id: 2,
            img: images.profile_3
        },
        {
            id: 3,
            img: images.profile_4
        },
        {
            id: 4,
            img: images.profile_5
        },
    ])
    // Render 
    function renderNewPlants(item , index){
        return(
            <View 
                style={{
                    alignItems:"center",
                    justifyContent:"center",
                    marginHorizontal: 5
                }}
                >
                <Image
                    source={item.img}
                    resizeMode="cover"
                    style={{
                        width: SIZES.width*0.23,
                        height:"82%",
                        borderRadius: 15
                    }}
                />
                <View style={{
                    position: "absolute",
                    bottom: "17%",
                    right: 0,
                    backgroundColor: COLORS.primary,
                    paddingHorizontal: SIZES.base,
                    borderTopLeftRadius: 10,
                    borderBottomLeftRadius: 10
                }}>
                    <Text style={{color: COLORS.white, ...FONTS.body4}}>{item.name}</Text> 
                </View>
                <TouchableOpacity style={{
                    position: "absolute",
                    top: "15%",
                    left: 5 
                }}
                    onPress={() => {console.log("Favourite on pressed.")}}
                >
                    <Image
                        source={item.favourite ? icons.heart_red: icons.heart_green_outline}
                            resizeMode = "contain"
                            style={{
                                width: 20,
                                height: 20
                            }}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    function renderFriendsComponent(){
        if(friendList.length == 0){
            return(
                <View>

                </View>
            )
        }else if (friendList.length <= 3) {
            return(
                friendList.map((item, index)=>(
                    <View
                    key={'friend-${index}'}
                    style={index == 0 ? {} : {marginLeft : -20}}
                    >
                        <Image 
                            source={item.img}
                            resizeMode="cover"
                            style={{
                                height:50,
                                width:50,
                                borderRadius:25,
                                borderWidth:3,
                                borderColor:COLORS.primary
                            }}
                        />
                    </View>
                ))
            )
        }else{
            return(
                <View style={{flexDirection:"row", alignItems:"center"}}>
                    {friendList.map((item, index)=>{
                        if (index <= 2) {
                            return(
                                <View
                                    key={'friend-${index}'}
                                    style={index == 0 ? {} : {marginLeft: -20 }}
                                >
                                    <Image
                                        source={item.img}
                                        resizeMode="cover"
                                        style={{
                                            width:50,
                                            height:50,
                                            borderRadius:25,
                                            borderWidth:3,
                                            borderColor:COLORS.primary
                                        }}
                                    />
                                </View>
                            )
                        }
                    })}
                    <Text style={{marginLeft: 5, ...FONTS.body3}}>+{friendList.length -3} more</Text>
                </View>
            )
        }
    }
    return(
        <View style={styles.container}>
            {/* new Plants */}
            <View style={{height:"30%", backgroundColor: COLORS.white}}>
                <View
                    style={{
                        flex: 1,
                        borderBottomLeftRadius: 50,
                        borderBottomRightRadius: 50,
                        backgroundColor: COLORS.primary
                    }}
                >
                    <View
                        style={{marginTop: SIZES.padding * .5, marginHorizontal: SIZES.padding * .5}}
                    >
                        <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between"}}>
                            <Text style={{color: COLORS.white, ...FONTS.h2}}>New Plants</Text>
                            <TouchableOpacity onPress = {() => {console.log("Focus on password byt why?")}}>
                                <Image 
                                    source={icons.focus}
                                    resizeMode="contain"
                                    style={{
                                        width:20,
                                        height:20
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={{marginTop: SIZES.base}}>
                                <FlatList 
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                    data={newPlants}
                                    keyExtractor={ item => item.id.toString() }
                                    renderItem = {({item, index}) => renderNewPlants(item, index)}
                                />
                        </View>
                    </View>

                </View>
            </View>

            {/* Today's Share */}
            <View style={{height:"50%", backgroundColor: COLORS.lightGray}}>
                <View
                    style={{
                        flex: 1,
                        borderBottomLeftRadius: 50,
                        borderBottomRightRadius: 50,
                        backgroundColor: COLORS.white
                    }}
                >
                    <View style={{marginTop:SIZES.font, marginHorizontal: SIZES.padding}}>
                        <View style={{flexDirection:"row", alignItems:"center",justifyContent:"space-between"}}>
                        <Text style={{color: COLORS.secondary, ...FONTS.h2}}>Today's Share</Text>
                        <TouchableOpacity
                            onPress = {() => {console.log("See all onPressed")}}
                        >
                            <Text style={{}}>See All</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:"row", height:"88%", marginTop:SIZES.base}}>
                        <View style={{flex:1}}>
                            <TouchableOpacity
                            style={{flex: 1}}
                            onPress = {() => {console.log("Plant on Pressed")}}
                            >
                                <Image 
                                    source={images.plant_5}
                                    resizeMode="cover"
                                    style={{
                                        height:"100%",
                                        width:"100%",
                                        borderRadius: 20
                                    }}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                            style={{flex: 1, marginTop:SIZES.font}}
                            onPress = {() => {console.log("Plant on Pressed")}}
                            >
                                <Image 
                                    source={images.plant_5}
                                    resizeMode="cover"
                                    style={{
                                        height:"100%",
                                        width:"100%",
                                        borderRadius: 20
                                    }}
                                />
                            </TouchableOpacity>
                        </View>

                        <View style={{flex:1.3}}>
                            <TouchableOpacity
                                style = {{flex:1, marginLeft:SIZES.font}}
                            >
                                <Image 
                                    source={images.plant_7}
                                    resizeMode="cover"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        borderRadius:20
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                </View>
            </View>

            {/* Added Friend's */}
            <View style={{height:"20%", backgroundColor: COLORS.lightGray}}>
                <View style={{flex:1, backgroundColor:COLORS.lightGray}}>
                    <View style={{marginTop:SIZES.radius, marginHorizontal:SIZES.padding}}>
                        <Text style={{color:COLORS.secondary, ...FONTS.h2}}>Added Friend</Text>
                        <Text style={{color:COLORS.secondary, ...FONTS.body3}}>{friendList.length} Total</Text>

                        <View style={{
                            flexDirection:"row", height:"60%"
                        }}>
                            {/* Friends  */}
                            <View style={{flex:1.3, flexDirection:"row", alignItems:"center"}}>
                                {renderFriendsComponent()}
                            </View>
                            {/* Add Friends  */}
                            <View style={{flex:1, flexDirection:"row", alignItems:"center", justifyContent:"flex-end"}}>
                                <Text style={{color:COLORS.secondary, ...FONTS.body3}}>Add New</Text>
                                <TouchableOpacity
                                    style={{
                                        marginLeft:SIZES.base,
                                        width:40,
                                        height:40,
                                        borderRadius:10,
                                        alignItems:"center",
                                        justifyContent:"center",
                                        backgroundColor:COLORS.gray
                                    }}
                                    onPress = {()=>{console.log("Add Friend OnPress")}}
                                >
                                    <Image 
                                        source={icons.plus}
                                        resizeMode="cover"
                                        style={{
                                            height:20,
                                            width:20
                                        }}
                                    />
                                </TouchableOpacity>
                            </View>  
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex : 1
    }
})

export default Home;