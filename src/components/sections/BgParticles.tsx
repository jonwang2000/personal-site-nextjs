import { FC } from "react";
import Particles from "react-particles-js";
import { useBreakpointValue } from "@chakra-ui/media-query";

const BgParticles: FC<{}> = () => {
    const particleNum = useBreakpointValue({ base: 15, sm: 30, md: 50 });
    return (
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
                        value: particleNum,
                    },
                    size: {
                        value: 3,
                    },
                    opacity: {
                        value: 0.8,
                    },
                    color: {
                        value: "6e6e6e",
                    },
                    links: {
                        color: {
                            value: "6e6e6e",
                        },
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
    );
};

export default BgParticles;
