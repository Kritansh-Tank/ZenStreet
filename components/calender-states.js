import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./calender-states.module.css";
import { useRouter } from "next/router";
import { useState } from "react";

const CalenderStates = ({ className = "", property1 = "Default" }) => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push("/booking-confirmation");
  };

  const [activeTime, setActiveTime] = useState(null);

  const handleTimeClick = (time) => {
    setActiveTime(time);
  };

  return (
    <div
      className={[styles.frameParent7, className].join(" ")}
      data-property1={property1}
    >
      <div className={styles.calenderComponent}>
        <div className={styles.mdichevronUpParent}>
          <Image
            className={styles.mdichevronUpIcon}
            width={51}
            height={51}
            alt=""
            src="/mdi_chevron-up1.svg"
          />
          <div className={styles.aug}>2024 Dec</div>
          <Image
            className={styles.mdichevronUpIcon1}
            loading="lazy"
            width={51}
            height={51}
            alt=""
            src="/mdi_chevron-up2.svg"
          />
        </div>
        <div className={styles.availableDateParent}>
          <div className={styles.availableDate}>Available date</div>
          <div className={styles.frameChild} />
        </div>
        <div className={styles.dateComponent}>
          <div className={styles.frameParent6}>
            <div className={styles.sunWrapper}>
              <div className={styles.sun}>SUN</div>
            </div>
            <div
                className={`${styles.div30} ${
                  activeTime === "01" ? styles.active : ""
                }`}
                onClick={() => handleTimeClick("01")}
              >01</div>
            <div
                className={`${styles.div31} ${
                  activeTime === "08" ? styles.active : ""
                }`}
                onClick={() => handleTimeClick("08")}
              >08</div>
            <div
                className={`${styles.div32} ${
                  activeTime === "15" ? styles.active : ""
                }`}
                onClick={() => handleTimeClick("15")}
              >15</div>
            <div
                className={`${styles.div33} ${
                  activeTime === "22" ? styles.active : ""
                }`}
                onClick={() => handleTimeClick("22")}
              >22</div>
            <div className={styles.div34}>29</div>
          </div>
          <div className={styles.weekDayNamesParent}>
            <div className={styles.weekDayNames}>
              <div className={styles.mon}>MON</div>
            </div>
            <div className={styles.div}>02</div>
            <div className={styles.div1}>09</div>
            <div
                className={`${styles.div2} ${
                  activeTime === "16" ? styles.active : ""
                }`}
                onClick={() => handleTimeClick("16")}
              >16</div>
            <div className={styles.div3}>23</div>
            <div
                className={`${styles.div4} ${
                  activeTime === "30" ? styles.active : ""
                }`}
                onClick={() => handleTimeClick("30")}
              >30</div>
          </div>
          <div className={styles.frameParent1}>
            <div className={styles.tueWrapper}>
              <div className={styles.tue}>TUE</div>
            </div>
            <div className={styles.div5}>03</div>
            <div className={styles.div6}>10</div>
            <div
                className={`${styles.div7} ${
                  activeTime === "17" ? styles.active : ""
                }`}
                onClick={() => handleTimeClick("17")}
              >17</div>
            <div className={styles.div8}>24</div>
            <div
                className={`${styles.div9} ${
                  activeTime === "31" ? styles.active : ""
                }`}
                onClick={() => handleTimeClick("31")}
              >31</div>
          </div>
          <div className={styles.frameParent2}>
            <div className={styles.wedWrapper}>
              <div className={styles.wed}>WED</div>
            </div>
            <div
                className={`${styles.div10} ${
                  activeTime === "04" ? styles.active : ""
                }`}
                onClick={() => handleTimeClick("04")}
              >04</div>
            <div className={styles.div11}>11</div>
            <div
                className={`${styles.div12} ${
                  activeTime === "18" ? styles.active : ""
                }`}
                onClick={() => handleTimeClick("18")}
              >18</div>
            <div
                className={`${styles.div13} ${
                  activeTime === "25" ? styles.active : ""
                }`}
                onClick={() => handleTimeClick("25")}
              >25</div>
            <div className={styles.div14}>01</div>
          </div>
          <div className={styles.frameParent3}>
            <div className={styles.thuWrapper}>
              <div className={styles.thu}>THU</div>
            </div>
            <div className={styles.div15}>05</div>
            <div
                className={`${styles.div16} ${
                  activeTime === "12" ? styles.active : ""
                }`}
                onClick={() => handleTimeClick("12")}
              >12</div>
            <div
                className={`${styles.div17} ${
                  activeTime === "19" ? styles.active : ""
                }`}
                onClick={() => handleTimeClick("19")}
              >19</div>
            <div className={styles.div18}>26</div>
            <div className={styles.div19}>02</div>
          </div>
          <div className={styles.frameParent4}>
            <div className={styles.friWrapper}>
              <div className={styles.fri}>FRI</div>
            </div>
            <div className={styles.div20}>06</div>
            <div className={styles.div21}>13</div>
            <div
                className={`${styles.div22} ${
                  activeTime === "20" ? styles.active : ""
                }`}
                onClick={() => handleTimeClick("20")}
              >20</div>
            <div
                className={`${styles.div23} ${
                  activeTime === "27" ? styles.active : ""
                }`}
                onClick={() => handleTimeClick("27")}
              >27</div>
            <div className={styles.div24}>03</div>
          </div>
          <div className={styles.frameParent5}>
            <div className={styles.satWrapper}>
              <div className={styles.sat}>SAT</div>
            </div>
            <div
                className={`${styles.div25} ${
                  activeTime === "07" ? styles.active : ""
                }`}
                onClick={() => handleTimeClick("07")}
              >07</div>
            <div
                className={`${styles.div26} ${
                  activeTime === "14" ? styles.active : ""
                }`}
                onClick={() => handleTimeClick("14")}
              >14</div>
            <div
                className={`${styles.div27} ${
                  activeTime === "21" ? styles.active : ""
                }`}
                onClick={() => handleTimeClick("21")}
              >21</div>
            <div
                className={`${styles.div28} ${
                  activeTime === "28" ? styles.active : ""
                }`}
                onClick={() => handleTimeClick("28")}
              >28</div>
            <div className={styles.div29}>04</div>
          </div>
        </div>
      </div>
      <div className={styles.frameDiv1}>
        <button className={styles.proceedWrapper} onClick={handleNavigation}>
          <div className={styles.proceed}>Proceed</div>
        </button>
      </div>
    </div>
  );
};

CalenderStates.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.number,
};

export default CalenderStates;
