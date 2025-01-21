import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import PropTypes from "prop-types";
import placeholderImage from "../pictures/R.jpg";

LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  styles: PropTypes.string.isRequired,
};

function LazyImage({ src, alt, styles }) {
  const [loaded, setLoaded] = useState(false);
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      setShowPlaceholder(false);
    }
  }, [inView]);

  return (
    <div ref={ref} className="lazy-image-wrapper">
      <img
        src={showPlaceholder ? placeholderImage : src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`lazy-image ${styles} ${loaded ? "loaded" : ""}`}
      />
    </div>
  );
}

export default LazyImage;
