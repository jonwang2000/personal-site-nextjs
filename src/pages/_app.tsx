import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Particles from "react-particles-js";

import theme from "util/theme";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <Particles
                style={{
                    position: "fixed",
                    zIndex: -100,
                    left: 0,
                    top: 0,
                    width: "100%",
                    height: "100%",
                }}
                params={{
                    particles: {
                        number: {
                            value: 50,
                        },
                        size: {
                            value: 3,
                        },
                    },
                    interactivity: {
                        events: {
                            onhover: {
                                enable: true,
                                mode: "repulse",
                            },
                        },
                    },
                }}
            />
            <Component {...pageProps} />
        </ChakraProvider>
    );
}
export default MyApp;
