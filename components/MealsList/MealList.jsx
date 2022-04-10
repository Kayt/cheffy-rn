import { FlatList, View, StyleSheet } from "react-native";

import MealItem from "./MealItem";

function renderMealItem(mealItem) {
  const item = mealItem.item;
  const mealItemProps = {
    id: item.id,
    title: item.title,
    imageUrl: item.imageUrl,
    affordability: item.affordability,
    complexity: item.complexity,
    duration: item.duration,
  };
  return <MealItem {...mealItemProps} />;
}

function MealList({ displayedMeals }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
