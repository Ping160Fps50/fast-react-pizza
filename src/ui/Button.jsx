import PropTypes from "prop-types";
import { Link } from "react-router-dom";

//setting type of Button props
Button.propTypes = {
  children: PropTypes.any.isRequired,
  disabled: PropTypes.bool,
  path: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

//reusable button
function Button({ children, disabled, path, type, onClick }) {
  const base =
    "text-sm inline-block rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 ease-in-out hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";
  const buttonStyles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    secondary:
      "text-sm inline-block rounded-full font-semibold uppercase tracking-wide border-2 border-stone-300 text-stone-400 transition-colors duration-300 ease-in-out hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
  };
  if (path) {
    return (
      <Link to={path} className={buttonStyles[type]}>
        {children}
      </Link>
    );
  }
  if (onClick) {
    return (
      <button
        type="submit"
        onClick={onClick}
        disabled={disabled}
        className={buttonStyles[type]}
      >
        {children}
      </button>
    );
  }
  return (
    <button type="submit" disabled={disabled} className={buttonStyles[type]}>
      {children}
    </button>
  );
}

export default Button;
