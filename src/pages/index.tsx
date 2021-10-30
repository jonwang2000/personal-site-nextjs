import { useRef, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import {
    Box,
    Button,
    Center,
    Collapse,
    Container,
    Heading,
    Link as ChakraLink,
    SimpleGrid,
    Stack,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { FaLinkedin } from "react-icons/fa";

import HomeLayout from "components/layouts/HomeLayout";
import Column from "components/ui/Column";
import HomeColumnEntry from "components/ui/HomeColumnEntry";
import BgParticles from "components/sections/BgParticles";
import {
    NEON_GREEN_DARKMODE,
    NEON_GREEN_LIGHTMODE,
    GITHUB_LINK,
    EMAIL_LINK,
    LINKEDIN_LINK,
} from "util/constants";

export interface EntryData {
    title: string;
    subtitle?: string;
    main: string;
    italics: string;
    link?: string;
}

const Home: NextPage = () => {
    const [isAboutOpen, setIsAboutOpen] = useState(false);
    const prjRef = useRef<null | HTMLDivElement>(null);
    const expRef = useRef<null | HTMLDivElement>(null);
    const color = useColorModeValue(NEON_GREEN_LIGHTMODE, NEON_GREEN_DARKMODE);

    const dataToSections = (data: Array<EntryData>) =>
        data.map((entry, index) => <HomeColumnEntry key={index} {...entry} />);

    const renderTitle = () => (
        <Stack>
            <Heading size={"2xl"} fontWeight={"semibold"} color={color}>
                {`Jonathan Wang`}
            </Heading>
            <Heading size={"lg"} fontWeight={"medium"}>
                {`Computational Mathematics, UW 2023`}
            </Heading>
        </Stack>
    );

    const renderButtons = () => (
        <Stack direction="row" py={4}>
            <Button
                py={6}
                onClick={() => setIsAboutOpen(!isAboutOpen)}
                variant="outline"
            >
                {isAboutOpen ? "Collapse" : "About Me"}
            </Button>
            <Button
                py={6}
                onClick={() =>
                    prjRef.current
                        ? prjRef.current.scrollIntoView({
                              behavior: "smooth",
                          })
                        : null
                }
                variant="outline"
            >
                {`Projects`}
            </Button>
            <Button
                py={6}
                onClick={() =>
                    expRef.current
                        ? expRef.current.scrollIntoView({
                              behavior: "smooth",
                          })
                        : null
                }
                variant="outline"
            >
                Experience
            </Button>
        </Stack>
    );

    const renderCollapse = () => (
        <Collapse in={isAboutOpen}>
            <Text minW={"100%"} fontSize={"xl"} pb={4}>
                {`👋 I'm a mathematics student at the University of Waterloo,
                                            working on my programming and math skills. I'm always
                                            looking to learn new things, and I enjoy hands-on
                                            experiences.`}
            </Text>
            <Text minW={"100%"} fontSize={"xl"} pb={2}>
                {`Huge fan of the Toronto Raptors. Also I just migrated this
                                            site from Gatsby to Next.js + Chakra, so let me know
                                            how it looks!`}
            </Text>
        </Collapse>
    );

    const renderContactButtons = () => (
        <Stack direction={"row"} py={2}>
            <Button
                py={6}
                as={"a"}
                href={EMAIL_LINK}
                leftIcon={<EmailIcon />}
                variant={"solid"}
            >
                {`Email me!`}
            </Button>
            <Button
                py={6}
                as={"a"}
                href={LINKEDIN_LINK}
                leftIcon={<FaLinkedin />}
                variant={"solid"}
            >
                {`LinkedIn`}
            </Button>
        </Stack>
    );

    return (
        <HomeLayout>
            <Head>
                <title>Jonathan Wang - UW 2023</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <BgParticles />
            <Container maxW={"5xl"}>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                    <Center gridColumn={{ base: "1/2", md: "1/3" }} h={"100vh"}>
                        <Stack w={{ md: "5xl" }}>
                            {renderTitle()}
                            {renderButtons()}
                            {renderCollapse()}
                            {renderContactButtons()}
                        </Stack>
                    </Center>
                    <Box ref={prjRef}>
                        <Column title="Projects">
                            <Stack spacing={4}>
                                {dataToSections(projData)}
                                <ChakraLink
                                    href={GITHUB_LINK}
                                    _hover={{
                                        color: useColorModeValue(
                                            NEON_GREEN_LIGHTMODE,
                                            NEON_GREEN_DARKMODE
                                        ),
                                    }}
                                >
                                    {`→ See more on Github`}
                                </ChakraLink>
                            </Stack>
                        </Column>
                    </Box>
                    <Box ref={expRef}>
                        <Column title="Experience">
                            <Stack spacing={4}>
                                {dataToSections(expData)}
                                <ChakraLink
                                    href={"/resume.pdf"}
                                    _hover={{
                                        color: useColorModeValue(
                                            NEON_GREEN_LIGHTMODE,
                                            NEON_GREEN_DARKMODE
                                        ),
                                    }}
                                >
                                    {`→ See full resume`}
                                </ChakraLink>
                            </Stack>
                        </Column>
                    </Box>
                </SimpleGrid>
            </Container>
        </HomeLayout>
    );
};

const expData = [
    {
        title: "Web Engineer Intern",
        subtitle: "Robinhood",
        main: "Incoming Winter 2022 intern",
        italics: "Jan 2022 - May 2022",
        link: "https://robinhood.com/us/en/",
    },
    {
        title: "Software Developer",
        subtitle: "Accedo.tv",
        main: "Full Stack work on various connected TV applications and applications for clients including Bloomberg and Tier-1 Cable Operator in US",
        italics: "May 2021 - Aug 2021",
        link: "https://www.accedo.tv/",
    },
    {
        title: "Software Developer",
        subtitle: "Box Labs",
        main: "Features/services for Box Labs, an electron application for pharmacies connecting healthcare services",
        italics: "Sept 2020 - Dec 2020",
        link: "https://boxlabs.ca",
    },
    {
        title: "Developer in Computational Medicine",
        subtitle: "SickKids CCM",
        main: "Developed React app for medical DICOM bulk image processing and features/bugfixes for Rareconnect, a social network for rare disease patients",
        italics: "Jan 2020 - Apr 2020",
        link: "https://ccm.sickkids.ca/",
    },
    {
        title: "Software Developer Co-op",
        subtitle: "Monogram CC (Palette Gear)",
        main: "Implemented error/minidump service in Node.js backend, developed integrations for Qt front end and Adobe CC extension",
        italics: "May 2019 - Aug 2019",
        link: "https://monogramcc.com/",
    },
];

const projData = [
    {
        title: "Replacer",
        subtitle: "",
        main: "Webapp that transforms text live based on user-inputted rules, designed with Material UI",
        italics: "React, Javascript, CSS",
        link: "https://replacer.netlify.com",
    },
    {
        title: "Two Player Snake",
        subtitle: "",
        main: "Classic game of snake with additional head-to-head multiplayer mode",
        italics: "Pygame, Python",
        link: "https://github.com/jonwang2000/twoPlayerSnake",
    },
    {
        title: "Goosify",
        subtitle: "",
        main: "Chrome extension that turns any and all images on a page into an image of a goose",
        italics: "Javascript",
        link: "https://github.com/jonwang2000/goosify",
    },
];

export default Home;
