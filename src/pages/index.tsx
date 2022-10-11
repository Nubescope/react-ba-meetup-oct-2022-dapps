import { Button } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useAccount, useConnect, useDisconnect, useWaitForTransaction } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'

import Nav from '../components/Nav'
import DaiBox from '../components/DaiBox'
import CdaiBox from '../components/CdaiBox'
import Footer from '../components/Footer'

import { useIsMounted } from '../hooks/useIsMounted'
import AuthorizeCompoundOverlay from '../components/AuthorizeCompoundOverlay'
import ConnectOverlay from '../components/ConnectOverlay'
import useIsCdaiAllowance from '../hooks/useIsCdaiAllowance'
import useCdaiApprove from '../hooks/useCdaiApprove'
import useCdaiDisapprove from '../hooks/useCdaiDisapprove'
import useDaiBalance from '../hooks/useDaiBalance'
import useCdaiMint from '../hooks/useCdaiMint'
import useCdaiUnderlyingBalance from '../hooks/useCdaiUnderlyingBalance'

import styles from '../styles/Home.module.css'
import { useEffect } from 'react'

const Home: NextPage = () => {
  const isMounted = useIsMounted()

  // Connection
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  const { disconnect } = useDisconnect()

  // Read
  const { address, isConnected } = useAccount()
  const daiBalance = useDaiBalance(address)
  const cdaiBalance = useCdaiUnderlyingBalance(address)
  const cdaiAllowance = useIsCdaiAllowance(address)

  // Write
  const mint = useCdaiMint()
  const authorize = useCdaiApprove()
  const unauthorize = useCdaiDisapprove()

  // Tx info
  const mintTx = useWaitForTransaction({ hash: mint.data?.hash })
  const authTx = useWaitForTransaction({ hash: authorize.data?.hash })

  useEffect(() => {
    if (mintTx.isSuccess) {
      daiBalance.refetch()
      cdaiBalance.refetch()
    }
  }, [mintTx.isSuccess])

  useEffect(() => {
    if (authTx.isSuccess) {
      cdaiAllowance.refetch()
    }
  }, [authTx.isSuccess])

  if (!isMounted) {
    return null
  }

  return (
    <div>
      <Head>
        <title>React Compound Demo</title>
        <link rel="icon" href="/underscope.png" />
      </Head>

      <Nav address={address} onConnectPress={connect} onDisconnectPress={disconnect} />

      <main className={styles.main}>
        <h1 className={styles.title} style={{ marginBottom: '30px' }}>
          👋 Welcome to Compound DAI Market
        </h1>

        <div className={styles.market}>
          <DaiBox
            balance={daiBalance.formatted}
            onDepositPress={mint.write}
            isLoading={daiBalance.isLoading || mintTx.isLoading}
          />
          &nbsp; &lt; &gt; &nbsp;
          <CdaiBox balance={cdaiBalance.formatted} isLoading={cdaiBalance.isLoading} />
          {isConnected && !cdaiAllowance.isAuthorized && (
            <AuthorizeCompoundOverlay
              onAuthorizePress={authorize.write}
              isLoading={cdaiAllowance.isLoading || authTx.isLoading}
            />
          )}
          {!isConnected && <ConnectOverlay onConnectPress={connect} />}
        </div>
      </main>

      {/* Temporary button for debug purposes */}
      <Button onClick={() => unauthorize.write?.()}>Disable Market</Button>

      <Footer />
    </div>
  )
}

/**
 * Exports
 */

export default Home
