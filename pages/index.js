import FrameComponent from "../components/frame-component";
import AboutContainer from "../components/about-container";
import LocationLanguageContainer from "../components/location-language-container";
import Testimonials from "../components/testimonials";
import styles from "./index.module.css";

const ScrollView = () => {
  return (
    <div className={styles.scrollView}>
      <section className={styles.scrollViewContainer}>
        <FrameComponent frame7="/frame-7@2x.png" />
        <div className={styles.contentContainer}>
          <AboutContainer />
        </div>
      </section>
      <div className={styles.contactContainer}>
        <LocationLanguageContainer />
      </div>
      <div className={styles.testimonialContainer}>
        <Testimonials property1="Frame 433" />
      </div>
    </div>
  );
};

export default ScrollView;
