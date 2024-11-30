import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./therapy-mode.module.css";
import { useRouter } from "next/router";
import { useState } from "react";

const TherapyMode = ({ className = "", property1 = "Default" }) => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push("/sessions");
  };

  const [activeTime, setActiveTime] = useState(null);

  const handleTimeClick = (time) => {
    setActiveTime(time);
  };

  return (
    <div
      className={[styles.frameParent, className].join(" ")}
      data-property1={property1}
    >
      <div className={styles.selectTherapyModeParent}>
        <div className={styles.vectorWrapper} onClick={handleNavigation}>
          <Image
            className={styles.vectorIcon}
            loading="lazy"
            width={26}
            height={23}
            alt=""
            src="/Frame 230.svg"
          />
        </div>
        <div className={styles.selectTherapyMode}>
          Please select therapy mode
        </div>
        <nav className={styles.therapyModeOptionsParent}>
          <div className={styles.therapyModeOption}>
            <Image
              className={styles.optionIcon}
              loading="lazy"
              width={123}
              height={123}
              alt="In-person"
              src="/Frame 607.svg"
            />
            <div className={styles.optionLabel}>In-person</div>
          </div>
          <div className={styles.therapyModeOption}>
            <Image
              className={styles.optionIcon}
              loading="lazy"
              width={123}
              height={123}
              alt="Video"
              src="/Frame 609.svg"
            />
            <div className={styles.optionLabel}>Video</div>
          </div>
          <div className={styles.therapyModeOption}>
            <Image
              className={styles.optionIcon}
              loading="lazy"
              width={123}
              height={123}
              alt="Call"
              src="/Frame 608.svg"
            />
            <div className={styles.optionLabel}>Call</div>
          </div>
        </nav>
      </div>
      <div className={styles.locationDetails}>
        <Image
          className={styles.locationIcon}
          loading="lazy"
          width={32}
          height={32}
          alt="Location Icon"
          src="/carbon_location.svg"
        />
        <div className={styles.address}>3rd Floor, A2, 35, Block A2, Delhi</div>
      </div>
      <div className={styles.filterBy}>Filter by</div>
      <div className={styles.filterSection}>
        <button className={styles.filterButton}>Slots</button>
        <button className={styles.filterButton1}>Date</button>
      </div>
      <div className={styles.selectBy}>Select slots</div>
      <div className={styles.slotSelection}>
        <div className={styles.slotGroup}>
          <div className={styles.timings}>Morning</div>
          <div className={styles.timeSelectionContainer}>
            <div className={styles.timeSelection}>
              <div
                className={`${styles.timeSlot} ${
                  activeTime === "8:00 - 8:45 AM" ? styles.active : ""
                }`}
                onClick={() => handleTimeClick("8:00 - 8:45 AM")}
              >
                8:00 - 8:45 AM
              </div>
              <div
                className={`${styles.timeSlot} ${
                  activeTime === "9:00 - 9:45 AM" ? styles.active : ""
                }`}
                onClick={() => handleTimeClick("9:00 - 9:45 AM")}
              >
                9:00 - 9:45 AM
              </div>
            </div>
            <div className={styles.timeSelection}>
              <div
                className={`${styles.timeSlot} ${
                  activeTime === "10:00 - 10:45 AM" ? styles.active : ""
                }`}
                onClick={() => handleTimeClick("10:00 - 10:45 AM")}
              >
                10:00 - 10:45 AM
              </div>
              <div
                className={`${styles.timeSlot} ${
                  activeTime === "11:00 - 11:45 AM" ? styles.active : ""
                }`}
                onClick={() => handleTimeClick("11:00 - 11:45 AM")}
              >
                11:00 - 11:45 AM
              </div>
            </div>
          </div>
        </div>
        <div className={styles.slotGroup}>
          <div className={styles.timings}>Afternoon</div>
          <div className={styles.timeSelectionContainer}>
            <div className={styles.timeSelection}>
              <div
                className={`${styles.timeSlot} ${
                  activeTime === "12:00 - 12:45 PM" ? styles.active : ""
                }`}
                onClick={() => handleTimeClick("12:00 - 12:45 PM")}
              >
                12:00 - 12:45 PM
              </div>
              <div
                className={`${styles.timeSlot} ${
                  activeTime === "2:00 - 2:45 PM" ? styles.active : ""
                }`}
                onClick={() => handleTimeClick("2:00 - 2:45 PM")}
              >
                2:00 - 2:45 PM
              </div>
            </div>
            <div className={styles.timeSelection}>
              <div
                className={`${styles.timeSlot} ${
                  activeTime === "3:00 - 3:45 PM" ? styles.active : ""
                }`}
                onClick={() => handleTimeClick("3:00 - 3:45 PM")}
              >
                3:00 - 3:45 PM
              </div>
              <div
                className={`${styles.timeSlot} ${
                  activeTime === "4:00 - 4:45 PM" ? styles.active : ""
                }`}
                onClick={() => handleTimeClick("4:00 - 4:45 PM")}
              >
                4:00 - 4:45 PM
              </div>
            </div>
          </div>
        </div>
        <div className={styles.slotGroup}>
          <div className={styles.timings}>Evening</div>
          <div className={styles.timeSelectionContainer}>
            <div className={styles.timeSelection}>
              <div
                className={`${styles.timeSlot} ${
                  activeTime === "5:00 - 5:45 PM" ? styles.active : ""
                }`}
                onClick={() => handleTimeClick("5:00 - 5:45 PM")}
              >
                5:00 - 5:45 PM
              </div>
              <div
                className={`${styles.timeSlot} ${
                  activeTime === "6:00 - 6:45 PM" ? styles.active : ""
                }`}
                onClick={() => handleTimeClick("6:00 - 6:45 PM")}
              >
                6:00 - 6:45 PM
              </div>
            </div>
            <div className={styles.timeSelection}>
              <div
                className={`${styles.timeSlot} ${
                  activeTime === "7:00 - 7:45 PM" ? styles.active : ""
                }`}
                onClick={() => handleTimeClick("7:00 - 7:45 PM")}
              >
                7:00 - 7:45 PM
              </div>
              <div
                className={`${styles.timeSlot} ${
                  activeTime === "8:00 - 8:45 PM" ? styles.active : ""
                }`}
                onClick={() => handleTimeClick("8:00 - 8:45 PM")}
              >
                8:00 - 8:45 PM
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.note}>
        i. Please select one or more slots to see when the slot or slots are
        next available.
      </div>
    </div>
  );
};

TherapyMode.propTypes = {
  className: PropTypes.string,
  property1: PropTypes.number,
};

export default TherapyMode;
