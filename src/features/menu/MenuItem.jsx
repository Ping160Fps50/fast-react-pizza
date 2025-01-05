import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import PropTypes from "prop-types";

MenuItem.propTypes = {
  pizza: PropTypes.object.isRequired,
};
function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className="flex gap-4 py-2">
      <img src={imageUrl} alt={name} className={`h-28 md:h-32 object-cover ${soldOut ? "opacity-70 grayscale" : ""}`}/>
      <div className="flex flex-col grow">
        <h2 className="font-medium">{name}</h2>
        <p className="text-stone-500 italic text-s capitalize">{ingredients.join(", ")}</p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? <p className="text-sm">{formatCurrency(unitPrice)}</p> : <p className="text-sm font-medium uppercase text-stone-400">Sold out</p>}
          <Button type="small">Add To Cart</Button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
