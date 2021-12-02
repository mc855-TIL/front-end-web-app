import "../../styles/globals.css";

import { AnimatePresence } from "framer-motion";
import { AppProvider } from "../context/AppContext";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AppProvider>
        <AnimatePresence
          exitBeforeEnter
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component {...pageProps} />
        </AnimatePresence>
      </AppProvider>
    </>
  );
}

export default MyApp;
