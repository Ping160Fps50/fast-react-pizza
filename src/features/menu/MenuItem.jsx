import { useDispatch, useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import { addItem, getCurrentQuantityById } from "../cart/cartSlice";
import Button from "../../ui/Button";
import LazyImage from "../../ui/LazyImage";
import PropTypes from "prop-types";
import DeleteItem from "../cart/DeleteItem";

MenuItem.propTypes = {
  pizza: PropTypes.object.isRequired,
};

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const dispatch = useDispatch();
  const isInCart = currentQuantity > 0;

  function handleAddItem() {
    const newPizza = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice,
    };
    dispatch(addItem(newPizza));
  }

  return (
    <li className="flex gap-4 py-2">
      <LazyImage
        src={imageUrl}
        alt={name}
        styles={`h-28 object-cover md:h-32 ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="flex grow flex-col">
        <h2 className="font-medium">{name}</h2>
        <p className="text-s capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-400">
              Sold out
            </p>
          )}
          {isInCart && <DeleteItem pizzaId={id} />}
          {!soldOut && !isInCart && (
            <Button type="small" onClick={handleAddItem}>
              Add To Cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
