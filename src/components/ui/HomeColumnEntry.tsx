import { FC } from "react";
import {
    Heading,
    Link as ChakraLink,
    Stack,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import { NEON_GREEN_LIGHTMODE, NEON_GREEN_DARKMODE } from "util/constants";

import { EntryData } from "pages/index";

type HomeColumnEntryProps = EntryData;

const HomeColumnEntry: FC<HomeColumnEntryProps> = ({
    title,
    subtitle,
    main,
    italics,
    link,
}) => {
    return (
        <Stack>
            <ChakraLink
                isExternal
                href={link}
                _hover={{
                    color: useColorModeValue(
                        NEON_GREEN_LIGHTMODE,
                        NEON_GREEN_DARKMODE
                    ),
                }}
            >
                <Heading size={"md"} fontWeight={"medium"} pt={1}>
                    {title}
                </Heading>
                <Heading size={"md"} fontWeight={"medium"} py={1}>
                    {subtitle}
                </Heading>
                <Text>{main}</Text>
                <Text as="i">{italics}</Text>
            </ChakraLink>
        </Stack>
    );
};

export default HomeColumnEntry;
