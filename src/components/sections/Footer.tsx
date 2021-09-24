import { FC } from "react";
import {
    Container,
    Link as ChakraLink,
    Stack,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";

import {
    NEON_GREEN_DARKMODE,
    NEON_GREEN_LIGHTMODE,
    GITHUB_LINK,
    LINKEDIN_LINK,
    EMAIL_LINK,
} from "util/constants";

const Footer: FC<{}> = () => {
    const greenColor = useColorModeValue(
        NEON_GREEN_LIGHTMODE,
        NEON_GREEN_DARKMODE
    );
    return (
        <Container as="footer">
            <Stack
                maxW={"xl"}
                spacing={2}
                justify={"space-between"}
                align={"center"}
                pt={24}
                pb={8}
            >
                <Stack direction="row" spacing={6}>
                    {FooterLinks.map((link) => (
                        <ChakraLink
                            href={link.url}
                            isExternal
                            key={link.label}
                            _hover={{
                                color: greenColor,
                            }}
                            fontWeight={"semibold"}
                        >
                            {link.label}
                        </ChakraLink>
                    ))}
                </Stack>
                <Text>Made with Next.js and Chakra UI!</Text>
            </Stack>
        </Container>
    );
};

const FooterLinks: Array<{ url: string; label: string }> = [
    { url: GITHUB_LINK, label: "GitHub" },
    { url: LINKEDIN_LINK, label: "LinkedIn" },
    { url: EMAIL_LINK, label: "Email" },
];

export default Footer;
