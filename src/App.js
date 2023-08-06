import {useState, useEffect} from 'react'
import LoginSpace from './components/LoginSpace'
import WorkSpace from './components/WorkSpace'
import Header from './components/Header'
import Footer from './components/Footer'
import {ethAccounts} from './EthereumRequests'

function App() {
  const [isLogin, setIsLogin] = useState(false)
  const [isSpaceMode, setIsSpaceMode] = useState(false)
  const [account, setAccount] = useState()
  const [notes, setNotes] = useState({})
  const [id, setId] = useState(1);
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
      <Header isSpaceMode={isSpaceMode} id={id} setId={setId} setIsSpaceMode={setIsSpaceMode} account={account} setAccount={setAccount} notes={notes} setNotes={setNotes} isEditMode={isEditMode} handleChangeModeButtonClick={handleChangeModeButtonClick}/>
      <div className="main-section">
        {isSpaceMode ? 
        <WorkSpace id={id} setId={setId} account={account} setIsLogin={setIsLogin} notes={notes} setNotes={setNotes} handleChangeModeButtonClick={handleChangeModeButtonClick} isEditMode={isEditMode} setIsEditMode={setIsEditMode} /> :
        <LoginSpace isLogin={isLogin} setIsLogin={setIsLogin} setAccount={setAccount} isSpaceMode={isSpaceMode} setIsSpaceMode={setIsSpaceMode} handleChangeModeButtonClick={handleChangeModeButtonClick}/>}
      </div>
      <Footer/>
    </div>
  );
}

export default App