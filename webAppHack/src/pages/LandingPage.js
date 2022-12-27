import styles from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <div className={styles.landingPage}>
      <div className={styles.landingPageChild} />
      <button className={styles.landingPageItem} />
      <div className={styles.landingPageInner} />
      <input className={styles.rectangleInput} type="text" />
      <div className={styles.rectangleDiv} />
      <input className={styles.landingPageChild1} type="text" />
      <div className={styles.landingPageChild2} />
      <div className={styles.landingPageChild3} />
      <div className={styles.landingPageChild4} />
      <div className={styles.landingPageChild5} />
      <div className={styles.y2waste}>y2waste</div>
      <div className={styles.home}>Home</div>
      <div className={styles.about}>About</div>
      <div className={styles.letsLogin}>Let’s Login</div>
      <div className={styles.login}>LOGIN</div>
      <div className={styles.email}>Email</div>
      <div className={styles.password}>Password</div>
    </div>
  );
};

export default LandingPage;
