import type { NextPage } from "next";
import Head from "next/head";
import {
    Text,
    Center,
    Container,
    Heading,
    Link as ChakraLink,
    SimpleGrid,
    Stack,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

import HomeLayout from "components/layouts/HomeLayout";
import BgParticles from "components/sections/BgParticles";
import { EMAIL_LINK, LINK_GREY, LINKEDIN_LINK } from "util/constants";

export interface EntryData {
    title: string;
    subtitle?: string;
    main: string;
    italics: string;
    link?: string;
}

const MyLink = (props: {
    text: string;
    href: string;
    isExternal?: boolean;
}) => {
    return (
        <ChakraLink
            color={LINK_GREY}
            isExternal={props.isExternal}
            href={props.href}
        >
            {props.text} <ExternalLinkIcon paddingBottom={1} />
        </ChakraLink>
    );
};

const Home: NextPage = () => {
    const renderTitle = () => (
        <Stack>
            <Heading py={2} size={"3xl"} fontWeight={"light"}>
                {`Jonathan Wang 👍`}
            </Heading>
            <Heading size={"xl"} fontWeight={"light"}>
                {`swe @ `}{" "}
                <MyLink
                    isExternal
                    href="https://withpersona.com/"
                    text="persona identities"
                />
            </Heading>
            <Text fontSize={"xl"} fontWeight={"medium"}>
                previously swe @{" "}
                <MyLink isExternal href="https://scale.com/" text="scale ai" />
            </Text>
            <Text fontSize={"lg"} fontWeight={"medium"}>
                {`bmath in computational math @ uwaterloo | interned @ aws, robinhood `}
            </Text>
            <Text fontSize={"md"} fontWeight={"normal"}>
                {`owns a camera but never uses it`}
            </Text>
        </Stack>
    );

    const renderContactButtons = () => (
        <Stack direction={"row"} py={2}>
            <Text>
                <MyLink isExternal href={EMAIL_LINK} text={"email me"} />
            </Text>
            <Text>
                <MyLink isExternal href={LINKEDIN_LINK} text={"linkedin"} />
            </Text>
            {/* <Text>
                <MyLink isExternal href={"/resume.pdf"} text={"resume"} />
            </Text> */}
        </Stack>
    );

    return (
        <HomeLayout>
            <Head>
                <title>Jonathan Wang</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <BgParticles />
            <Container maxW={"5xl"}>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                    <Center gridColumn={{ base: "1/2", md: "1/3" }} h={"100vh"}>
                        <Stack>
                            {renderTitle()}
                            {renderContactButtons()}
                        </Stack>
                    </Center>
                </SimpleGrid>
            </Container>
        </HomeLayout>
    );
};

export default Home;
