import "../styles/global.css";
import "@rainbow-me/rainbowkit/styles.css";
import type { AppProps } from "next/app";
import {
  RainbowKitProvider,
  getDefaultWallets,
  connectorsForWallets,
  Locale,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import {
  argentWallet,
  trustWallet,
  ledgerWallet,
  phantomWallet,
  coinbaseWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import {
  mainnet,
  polygon,
  goerli,
  polygonMumbai,
  bscTestnet,
} from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { useRouter } from "next/router";
import Head from "next/head";
import { ModalProvider } from "../contexts/ModalContext";
import ProgressBar from "../components/progressBar";
import { Layout } from "../components/Layout/layout";
import GetNFTDataProvider from "../contexts/NFTDataContext";
import { ToastContainer } from "react-toastify";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [bscTestnet],
  [publicProvider()]
);

const projectId = "46beb8085b8e1976f43a3dea3aaecf33";

const { wallets } = getDefaultWallets({
  appName: "RainbowKit",
  projectId,
  chains,
});

const demoAppInfo = {
  appName: "Rainbowkit Demo",
};

const connectors = connectorsForWallets([
  ...wallets,
  {
    groupName: "Other",
    wallets: [
      argentWallet({ projectId, chains }),
      trustWallet({ projectId, chains }),
      ledgerWallet({ projectId, chains }),
      phantomWallet({ chains }),
    ],
  },
]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

function MyApp({ Component, pageProps }: AppProps) {
  const { locale } = useRouter() as { locale: Locale };
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider
        appInfo={demoAppInfo}
        chains={chains}
        locale={locale}
        modalSize="compact"
        theme={darkTheme()}
        coolMode
      >
        <ToastContainer style={{ fontSize: 14 }} />
        <GetNFTDataProvider>
          <ModalProvider>
            <Head>
              <link rel="icon" type="image/x-icon" href="/imgs/logo.png" />
              <title>TEKIO STAKING</title>
            </Head>
            <Layout>
              <Component {...pageProps} />
            </Layout>
            <ProgressBar />
          </ModalProvider>
        </GetNFTDataProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
