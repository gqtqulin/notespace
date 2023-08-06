const ethRequestAccounts = async () => {
  const accounts = await window.ethereum
    .request({ method: "eth_requestAccounts" })
    .catch((err) => {
      if (err.code === 4001) {
        console.log("Please connect to MetaMask.");
      } else {
        console.error(err);
      }
    });
  return accounts;
};

const ethAccounts = async () => {
  const accounts = await window.ethereum
    .request({ method: "eth_accounts" })
    .catch((err) => {
      if (err.code === 4001) {
        console.log("Please connect to MetaMask.");
      } else {
        console.error(err);
      }
    });
  return accounts;
};

export { ethRequestAccounts, ethAccounts };
