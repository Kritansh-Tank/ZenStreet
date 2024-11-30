import Image from "next/image";
import AboutMeComponent from "./about-me-component";
import PropTypes from "prop-types";
import styles from "./about-container.module.css";
import svg1 from "../public/Vector1.svg";
import svg2 from "../public/clarity_license-line.svg";
import svg3 from "../public/carbon_certificate.svg";
import svg4 from "../public/Vector.svg";
import svg5 from "../public/Vector2.svg";
import svg6 from "../public/Frame 522.svg";
import svg7 from "../public/Frame 523.svg";

const AboutContainer = ({ className = "" }) => {
  return (
    <div className={[styles.aboutContainer, className].join(" ")}>
      <div className={styles.aboutMeParent}>
        <div className={styles.aboutMe}>About me</div>
        <AboutMeComponent property1="Frame 296" />
      </div>
      <div className={styles.credentialsParent}>
        <div className={styles.credentials}>Credentials</div>
        <div className={styles.credentialsList}>
          <div className={styles.players}>
            <Image
              className={styles.credentialIcons}
              loading="lazy"
              width={24}
              height={20}
              alt=""
              src={svg1}
            />
            <div className={styles.phdInClinical}>
              Ph.D. in Clinical Psychology - Harvard University
            </div>
          </div>
          <div className={styles.credentialItems}>
            <Image
              className={styles.visualsIcon}
              loading="lazy"
              width={24}
              height={20}
              alt=""
              src={svg1}
            />
            <div className={styles.maInCounseling}>
              M.A. in Counseling - University of California, Berkeley
            </div>
          </div>
          <div className={styles.self}>
            <Image
              className={styles.claritylicenseLineIcon}
              loading="lazy"
              width={26}
              height={26}
              alt=""
              src={svg2}
            />
            <div className={styles.licensedProfessionalCounselo}>
              Licensed Professional Counselor (LPC) - State of DEF
            </div>
          </div>
          <div className={styles.carboncertificateParent}>
            <Image
              className={styles.carboncertificateIcon}
              loading="lazy"
              width={25}
              height={25}
              alt=""
              src={svg3}
            />
            <div className={styles.certifiedCognitiveBehavioral}>
              Certified Cognitive Behavioral Therapist (CBT)
            </div>
          </div>
          <div className={styles.credentialItems1}>
            <Image
              className={styles.vectorIcon}
              loading="lazy"
              width={22}
              height={17}
              alt=""
              src={svg4}
            />
            <div className={styles.memberAmericanPsychological}>
              Member, American Psychological Association (APA)
            </div>
          </div>
          <div className={styles.credentialItems2}>
          <Image
              className={styles.vectorIcon1}
              loading="lazy"
              width={22}
              height={17}
              alt=""
              src={svg5}
            />
            <div className={styles.yearsOfExperience}>
              10+ years of experience in individual and group therapy
            </div>
          </div>
        </div>
      </div>
      <div className={styles.availabilityContainer}>
        <div className={styles.availableOn}>Available on</div>
        <div className={styles.availabilityOptions}>
          <div className={styles.availabilityItems}>
            <Image
              className={styles.availabilityIcons}
              loading="lazy"
              width={102}
              height={102}
              alt=""
              src={svg6}
            />
            <div className={styles.inPerson}>{`In-person `}</div>
          </div>
          <div className={styles.availabilityItems1}>
            <Image
              className={styles.availabilityItemsChild}
              loading="lazy"
              width={102}
              height={102}
              alt=""
              src={svg7}
            />
            <div className={styles.videoVoiceCall}>Video/ Voice call</div>
          </div>
        </div>
      </div>
      <div className={styles.therapyAreasContainer}>
        <div className={styles.iOfferTherapy}>I offer therapy for</div>
        <div className={styles.therapyAreasList}>
          <button className={styles.therapyAreaItems}>
            <div className={styles.stressManagement}>Stress Management</div>
          </button>
          <button className={styles.therapyAreaItems1}>
            <div className={styles.relationshipSkills}>Relationship Skills</div>
          </button>
          <div className={styles.therapyAreaItems2}>
            <div className={styles.anxietyReduction}>Anxiety Reduction</div>
          </div>
          <button className={styles.therapyAreaItems3}>
            <div className={styles.depressionRelief}>Depression Relief</div>
          </button>
          <div className={styles.therapyAreaItems4}>
            <div className={styles.behavioral}>Behavioral</div>
          </div>
          <button className={styles.searchId}>
            <div className={styles.traumaHealing}>Trauma Healing</div>
          </button>
        </div>
      </div>
    </div>
  );
};

AboutContainer.propTypes = {
  className: PropTypes.string,
};

export default AboutContainer;
