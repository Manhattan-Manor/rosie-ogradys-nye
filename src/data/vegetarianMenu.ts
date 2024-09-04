import RestaurantMenu from "../classes/RestaurantMenu";

const vegetarianMenu: RestaurantMenu = {
  name: "Vegetarian-Vegan Menu",
  categories: [
    {
      name: "Appetizer",
      dishes: [
        {
          name: "Grilled Vegetable Napoleon",
          description: "With red pepper coulis",
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
      name: "Main Course",
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
