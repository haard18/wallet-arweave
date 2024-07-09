import { ConnectButton } from 'arweave-wallet-kit'
// import React from 'react'

const Wallet = () => {
  return (
    <div>
      <div>
            <ConnectButton
                accent="rgb(255, 0, 0)"
                profileModal={false}
                showBalance={true}/>
        </div>
    </div>
  )
}

export default Wallet
