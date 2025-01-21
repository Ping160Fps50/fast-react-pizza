import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import PropTypes, { func } from "prop-types";

UpdateOrder.propTypes = {
  order: PropTypes.object,
};

function UpdateOrder({ order }) {
  const fetcher = useFetcher();
  return (
    <fetcher.Form method="PATCH">
      <Button type="primary">Make Priority</Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;
