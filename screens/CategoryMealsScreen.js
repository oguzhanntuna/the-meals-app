import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

const CategoryMealsScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The Category Meals Screen!</Text>
            <Button title="Go to Meal Detail!" onPress={() =>  {
                props.navigation.navigate({routeName: 'MealDetail'});
            }} />
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

export default CategoryMealsScreen;
