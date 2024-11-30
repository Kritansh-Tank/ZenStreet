import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./structure.module.css";

const Structure = ({ className = "" }) => {
  return (
    <div className={[styles.structure, className].join(" ")}>
      <div className={styles.structureChild} />
      <div className={styles.structure1}>
        <div className={styles.structure2}>
          <div className={styles.structure3}>
            <div className={styles.structure4}>
              <Image
                className={styles.fontistodateIcon}
                loading="lazy"
                width={21}
                height={19}
                alt=""
                src="/fontisto_date.svg"
              />
            </div>
            <div className={styles.changeDate}>Change date</div>
          </div>
        </div>
        <div className={styles.dateTime}>
          <a className={styles.sat06Aug}>Sat, 06 Aug</a>
          <div className={styles.pm420}>3:30 PM - 4:30 PM</div>
        </div>
      </div>
      <div className={styles.priceWrapper}>
        <div className={styles.price}>
          <Image
            className={styles.mdirupeeIcon}
            loading="lazy"
            width={28}
            height={28}
            alt=""
            src="/Vector5.svg"
          />
          <div className={styles.costValue}>
            <a className={styles.blankCost}>3,200/-</a>
          </div>
        </div>
      </div>
    </div>
  );
};

Structure.propTypes = {
  className: PropTypes.string,
};

export default Structure;
