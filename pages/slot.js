import Image from "next/image";
import TherapyMode from "../components/therapy-mode";
import CalenderStates from "../components/calender-states";
import styles from "./index.module.css";

const Slot = () => {
  return (
    <div className={styles.slot}>
      <section className={styles.frameParent}>
        <div className={styles.instanceWrapper}>
          <TherapyMode property1="Default" />
        </div>
      </section>
      <section className={styles.slotInner}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <CalenderStates property1="Default" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Slot;
