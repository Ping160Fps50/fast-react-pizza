import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import PropTypes from "prop-types";
import {
  decreaseItemQuantity,
  getCurrentQuantityById,
  increaseItemQuantity,
} from "./cartSlice";

UpdateItemQuantity.propTypes = {
  pizzaId: PropTypes.number.isRequired,
};

function UpdateItemQuantity({ pizzaId }) {
  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-1">
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
      <p>{currentQuantity}</p>
      <Button
        type="round"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
