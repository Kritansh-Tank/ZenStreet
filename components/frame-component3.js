import PropTypes from "prop-types";
import styles from "./frame-component3.module.css";

const FrameComponent3 = ({ className = "", property1 = "Default" }) => {
  return (
    <div
      className={[styles.lastNameWrapper, className].join(" ")}
      data-property1={property1}
    >
      <input className={styles.lastName} placeholder="Last Name" type="text" />
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.number,
};

export default FrameComponent3;
