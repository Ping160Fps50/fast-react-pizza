import { getMenu } from "../../services/apiRestaurant";

// ./features/menu/menuLoader.js
export const menuLoader = async () => {
  const menu = await getMenu();
  return menu;
};


