import { ArweaveWalletKit } from "arweave-wallet-kit";
import Home from "./components/Home";

const App = () => {
  return (
    <ArweaveWalletKit>
      <Home />
    </ArweaveWalletKit>
  );
};
export default App;