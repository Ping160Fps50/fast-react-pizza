import { formatCurrency } from "../../utils/helpers";
import PropTypes, { string } from "prop-types";

OrderItem.propTypes = {
  item: PropTypes.object.isRequired,
  isLoadingIngredients: PropTypes.bool,
  ingredients: PropTypes.arrayOf(string),
};

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="py-3">
      <div className="flex items-center justify-between gap-4 text-sm">
        <div className="space-y-1">
          <p>
            <span className="font-bold">{quantity}&times;</span> {name}
          </p>
          <div className="flex items-center gap-5">
            <p className="text-sm capitalize italic text-stone-500">
              {isLoadingIngredients ? "...Loading" : ingredients.join(", ")}
            </p>
          </div>
        </div>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;
