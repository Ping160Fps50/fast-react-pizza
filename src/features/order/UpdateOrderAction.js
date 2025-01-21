import PropTypes from "prop-types";
import { updateOrder } from "../../services/apiRestaurant";

UpdateOrderAction.propTypes = {
  request: PropTypes.any,
  params: PropTypes.any,
};

export async function UpdateOrderAction({ params }) {
  const data = {
    priority: true,
  };
  await updateOrder(params.orderId, data);

  return null;
}
