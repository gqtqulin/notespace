import { ethRequestAccounts } from "../EthereumRequests";
import styles from "./LoginSpace.module.css";

const LoginSpace = ({
  isLogin,
  setIsLogin,
  setAccount,
  handleChangeModeButtonClick,
}) => {
  const handleGetAccountClick = async () => {
    const accounts = await ethRequestAccounts();
    setTimeout(() => {
      if (accounts == undefined) {
        alert("Metamask connection failed");
        return;
      }
      console.log(accounts[0]);
      setAccount(accounts[0]);
      setIsLogin(true);
    }, 1000);
  };

  return (
    <div className={styles.loginContainer}>
      <button
        className={`${styles.button} ${styles.goSpaceButton}`}
        disabled={!isLogin}
        onClick={handleChangeModeButtonClick}
      >
        SPACE &#127760;
      </button>
      <button
        className={`${styles.button} ${styles.connectMetamaskButton}`}
        disabled={isLogin}
        onClick={handleGetAccountClick}
      >
        METAMASK &#129418;
      </button>
      <div className={styles.buttonsContainer}>
        <button
          className={`${styles.button} ${styles.changeMetamaskButton}`}
        >
          about &#128260;
        </button>
        <button
          className={`${styles.button} ${styles.changeMetamaskButton}`}
        >
          anything &#128260;
        </button>
      </div>
    </div>
  );
};

export default LoginSpace;
