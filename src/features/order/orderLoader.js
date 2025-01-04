import { getOrder } from "../../services/apiRestaurant";

export const orderLoader = async ({ params }) => {
  const order = await getOrder(params.orderId);
  return order;
};
