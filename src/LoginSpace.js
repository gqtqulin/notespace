import {ethRequestAccounts} from './EthereumRequests'
import {useState} from 'react'

const LoginSpace = ({isLogin, setIsLogin, setAccount, handleChangeModeButtonClick}) => {

    const handleGetAccountClick = async () => {
        const accounts = await ethRequestAccounts()
        if (accounts == undefined) {
            alert('Metamask connection failed')
            return;
        }
        console.log(accounts)
        setAccount(accounts[0])
        setIsLogin(true)
    }

    return (
        <div className='login-container'>
            <button className='button go-space-button' disabled={!isLogin} onClick={handleChangeModeButtonClick}>go into SPACE &#127760;</button>
            <button className='button connect-metamask-button' disabled={isLogin} onClick={handleGetAccountClick}>connect METAMASK &#129418;</button>
            <button className='button change-metamask-button' disabled={!isLogin}>change account &#128260;</button>
        </div>
    )
}

export default LoginSpace