import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

LinkButton.propTypes = {
  children: PropTypes.any.isRequired,
  path: PropTypes.string.isRequired,
};

function LinkButton({ children, path }) {
  const navigate = useNavigate();
  const linkStyles =
    "text-sm text-blue-500 hover:text-blue-700 hover:underline";
  if (path === "-1") {
    return (
      <button className={linkStyles} onClick={() => navigate(-1)}>
        {children}
      </button>
    );
  }
  return (
    <Link to={path} className={linkStyles}>
      {children}
    </Link>
  );
}

export default LinkButton;
