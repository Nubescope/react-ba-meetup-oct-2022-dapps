import { formatUnits } from "ethers/lib/utils";
import {
  Box,
  Button,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import {
  createClient,
  useAccount,
  useBalance,
  useConnect,
  useContractRead,
  useContractWrite,
  useDisconnect,
  usePrepareContractWrite,
  useWaitForTransaction,
  WagmiConfig,
} from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { foramtAddress, formatBigNumber } from "../helpers";
import { useIsMounted } from "../hooks/useIsMounted";
import styles from "../styles/Home.module.css";
import Nav from "../components/Nav";
import { getDefaultProvider } from "ethers";

const RINKEBY_CHAIN_ID = 4; // Check on chainlist.org

const wagmiClient = createClient({
  provider: getDefaultProvider(RINKEBY_CHAIN_ID),
});

const Home: NextPage = () => {
  const { data } = useContractRead({
    addressOrName: DAI.address,
    contractInterface: DAI.abi,
    functionName: "balanceOf",
    args: address,
  });

  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });

  const { config } = usePrepareContractWrite({
    addressOrName: CDAI.address,
    contractInterface: CDAI.abi,
    functionName: "mint",
    args: "0",
  });

  const { write } = useContractWrite(config);

  const { isLoading: isApproveRunning } = useWaitForTransaction({
    hash: approveResponseData?.hash,
  });

  return <WagmiConfig client={wagmiClient}></WagmiConfig>;
};

export default Home;
