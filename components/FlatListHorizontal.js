import React from 'react';
import { FlatList, Image, Text, View, StyleSheet, TouchableOpacity, } from 'react-native';

const Item = ({ item, onPress }) => (
    <TouchableOpacity onPress={onPress}>
        <Image
            style={styles.item}
            source={item.imgPath}
        />
        <View style={styles.titleTextView}>
            <Text style={styles.titleText}>{item.name}</Text>
        </View>
    </TouchableOpacity>
);

export default function FlatListHorizontal(props) {

    const renderItem = ({ item }) => {
        return (
            <Item
                item={item}
                onPress={() => {
                    props.onPressFn(item)
                }}
            />
        );
    };

    return (

        <View>
            <Text style={styles.headline}>{props.headline}</Text>
            <FlatList
                style={styles.list}
                showsHorizontalScrollIndicator={false}
                horizontal
                data={props.listData}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headline: {
        color: 'lightgrey',
        fontSize: 16,
        paddingLeft: 5,
    },
    item: {
        height: 150,
        width: 100,
        maxHeight: 150,
        maxWidth: 100,
        padding: 20,
        marginVertical: 5,
        marginHorizontal: 5,
        borderRadius: 5,
    },
    titleTextView: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        backgroundColor: 'rgba(0,0,0,0.5)',
        alignItems: 'center',
        borderRadius: 5,
        paddingHorizontal: 5,
        width: 90,
        maxWidth: 90,
    },
    titleText: {
        fontSize: 12,
        color: 'white',
    }
});
