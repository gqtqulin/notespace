import {useState, useEffect} from 'react'
import LoginSpace from './LoginSpace'
import WorkSpace from './WorkSpace'
import Header from './Header'
import Footer from './Footer'
import {ethAccounts} from './EthereumRequests'

function App() {
  const [isLogin, setIsLogin] = useState(false)
  const [isSpaceMode, setIsSpaceMode] = useState(false)
  const [account, setAccount] = useState()
  const [notes, setNotes] = useState({})
  const [isEditMode, setIsEditMode] = useState(false)

  const handleChangeModeButtonClick = async () => {
    const accounts = await ethAccounts()
    if (accounts[0] === account) {
      setIsSpaceMode(!isSpaceMode)
    } else {
      alert('Re-connect account')
      setIsLogin(false)
    }
  }

  return (
    <div className="page">
      <Header isSpaceMode={isSpaceMode} setIsSpaceMode={setIsSpaceMode} account={account} setAccount={setAccount} notes={notes} setNotes={setNotes} isEditMode={isEditMode} handleChangeModeButtonClick={handleChangeModeButtonClick}/>
      <div className="main-section">
        {isSpaceMode ? 
        <WorkSpace account={account} setIsLogin={setIsLogin} notes={notes} setNotes={setNotes} handleChangeModeButtonClick={handleChangeModeButtonClick} isEditMode={isEditMode} setIsEditMode={setIsEditMode} /> :
        <LoginSpace isLogin={isLogin} setIsLogin={setIsLogin} setAccount={setAccount} isSpaceMode={isSpaceMode} setIsSpaceMode={setIsSpaceMode} handleChangeModeButtonClick={handleChangeModeButtonClick}/>}
      </div>
      <Footer/>
    </div>
  );
}

export default App