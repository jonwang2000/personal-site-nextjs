import type { AppProps } from "next/app";
import { ChakraProvider, createLocalStorageManager } from "@chakra-ui/react";
import "@fontsource/rubik/400.css";
import "@fontsource/inter/400.css";

import theme from "util/theme";

const manager = createLocalStorageManager("my-key");

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme} colorModeManager={manager}>
            <Component {...pageProps} />
        </ChakraProvider>
    );
}
export default MyApp;
