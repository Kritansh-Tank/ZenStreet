import PropTypes from "prop-types";
import styles from "./component1.module.css";

const Component1 = ({ className = "", property1 = "Frame 334" }) => {
  return (
    <div
      className={[styles.component33, className].join(" ")}
      data-property1={property1}
    >
      <div className={styles.component33Child} />
      <div className={styles.component33Item} />
      <div className={styles.component33Inner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.component33Child1} />
      <div className={styles.testimonialThreeBackground} />
      <div className={styles.testimonialFourBackground} />
      <div className={styles.testimonialFiveBackground} />
      <div className={styles.testimonialSixBackground} />
    </div>
  );
};

Component1.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.number,
};

export default Component1;
