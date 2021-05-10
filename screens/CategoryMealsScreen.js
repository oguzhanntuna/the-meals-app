import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

const CategoryMealsScreen = props => {
    const renderMealItem = itemData => {
        return (
            <MealItem 
                title={itemData.item.title} 
                image={itemData.item.imageUrl}
                onSelectMeal={() => { }} 
                duration={itemData.item.duration} 
                complexity={itemData.item.complexity} 
                affordability={itemData.item.affordability} 
            />
        )
    }

    const catId = props.navigation.getParam('categoryId');

    const displayedMeals = MEALS.filter(
        meal => meal.categoryIds.indexOf(catId) >= 0
    );

    return (
        <View style={styles.screen}>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item, index) => item.id}
                renderItem={renderMealItem}
                style={{ width: '100%' }}
            />
        </View>
    );
}

CategoryMealsScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return {
        headerTitle: selectedCategory.title,
        headerBackTitle: 'Back',
    };
};

const styles = StyleSheet.create({
    screen: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    }
});

export default CategoryMealsScreen;
