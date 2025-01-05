import { useLoaderData } from "react-router-dom";

import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();
  return (
    <ul className="container mx-auto divide-y divide-stone-200 px-2 sm:px-0">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

export default Menu;
