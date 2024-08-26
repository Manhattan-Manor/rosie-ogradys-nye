import RestaurantMenu from "../classes/RestaurantMenu";

const vegetarianMenu: RestaurantMenu = {
  name: "Menu 3 Vegetarian-Vegan",
  categories: [
    {
      name: "Appetizer",
      dishes: [
        {
          name: "Grilled Vegetable Napoleon",
          description: "With beet salad",
        },
      ],
    },
    {
      name: "Salad",
      dishes: [
        {
          name: "Golden Beets",
          description: "Arugula, Pistachios, Blackberry Vinaigrette",
        },
      ],
    },
    {
      name: "Main Course (Choose one)",
      dishes: [
        {
          name: "Wild Mushroom Ravioli (V)",
          description: "Sauteed Spinach, Grape Tomatoes, Lemon-Thyme",
        },
      ],
    },
    {
      name: "Dessert",
      dishes: [
        {
          name: 'Chia "Panna Cotta"',
          description:
            "Almond Milk, Chia Seeds, Fresh Berries, Raspberry Coulis",
        },
      ],
    },
    {
      name: "After Dinner",
      dishes: [
        {
          name: "Petit Fours",
        },
      ],
    },
  ],
};

export default vegetarianMenu;
