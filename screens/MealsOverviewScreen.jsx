import { useLayoutEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";

import MealList from "../components/MealsList/MealList";

import { MEALS, CATEGORIES } from "../data/dummy-data";

function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((itemData) => {
    return itemData.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const catTitle = CATEGORIES.find((category) => category.id === catId).title;

    navigation.setOptions({
      title: catTitle,
    });
  }, [catId, navigation]);

  return <MealList displayedMeals={displayedMeals} />;
}

export default MealsOverviewScreen;
