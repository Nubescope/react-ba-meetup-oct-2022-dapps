// Setup

import { WagmiConfig, createClient } from 'wagmi'
import { getDefaultProvider } from 'ethers'

const NETWORK_ID = 5 // Goerli

const client = createClient({
  autoConnect: true,
  provider: getDefaultProvider(NETWORK_ID),
})

function App() {
  return (
    <WagmiConfig client={client}>
      <Content />
    </WagmiConfig>
  )
}

// Read Contract

import { useContractRead } from 'wagmi'

function ReadContractExample() {
  const { data } = useContractRead({
    addressOrName: DAI.address,
    contractInterface: DAI.abi,
    functionName: 'balanceOf',
    args: '0xD2e2B135BCA466271069c394f655e0c70535C2dd',
  })

  return <div>Balance: {data ? formatUnits(data) : '...'}</div>
}

// Connect

import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'

function ConnectExample() {
  const { address, isConnected } = useAccount()
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  const { disconnect } = useDisconnect()

  if (isConnected) {
    return (
      <div>
        Connected to {address}
        <button onClick={() => disconnect()}>Disconnect</button>
      </div>
    )
  }

  return <button onClick={() => connect()}>Connect Wallet</button>
}

// Write

import { usePrepareContractWrite, useContractWrite } from 'wagmi'
import { formatUnits } from 'ethers/lib/utils'

function WriteContractExample() {
  const { config } = usePrepareContractWrite({
    addressOrName: CDAI.address,
    contractInterface: CDAI.abi,
    functionName: 'mint',
    args: '0.01',
  })

  const { write } = useContractWrite(config)

  return <button onClick={() => write()}>Mint</button>
}
