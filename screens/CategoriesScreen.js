import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const CategoriesScreen = () => {
    return (
        <View style={styles.screen}>
            <Text>The Categories Screen!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoriesScreen;
