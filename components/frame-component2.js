import PropTypes from "prop-types";
import styles from "./frame-component2.module.css";

const FrameComponent2 = ({ className = "", property1 = "Default" }) => {
  return (
    <div
      className={[styles.firstNameWrapper, className].join(" ")}
      data-property1={property1}
    >
      <input
        className={styles.firstName}
        placeholder="First Name"
        type="text"
      />
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.number,
};

export default FrameComponent2;
