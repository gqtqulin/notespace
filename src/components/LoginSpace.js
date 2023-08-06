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
        go into SPACE &#127760;
      </button>
      <button
        className={`${styles.button} ${styles.connectMetamaskButton}`}
        disabled={isLogin}
        onClick={handleGetAccountClick}
      >
        connect METAMASK &#129418;
      </button>
      <button
        className={`${styles.button} ${styles.changeMetamaskButton}`}
        disabled={!isLogin}
      >
        change account &#128260;
      </button>
    </div>
  );
};

export default LoginSpace;
