import PropTypes from "prop-types";
import styles from "./frame-component4.module.css";

const FrameComponent4 = ({ className = "", property1 = "Default" }) => {
  return (
    <div
      className={[styles.eMailWrapper, className].join(" ")}
      data-property1={property1}
    >
      <input className={styles.eMail} placeholder="E-mail" type="text" />
    </div>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.number,
};

export default FrameComponent4;
