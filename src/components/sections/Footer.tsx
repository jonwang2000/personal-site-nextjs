import { FC } from "react";
import { Box, Container, Stack } from "@chakra-ui/react";

const Footer: FC<{}> = () => {
    return (
        <Container as="footer">
            <Stack
                maxW={"xl"}
                py={4}
                spacing={4}
                justify={"space-between"}
                align={"center"}
            >
                <Box>JW</Box>
                <Stack direction="row" spacing={6}>
                    <Box>FOOTEr</Box>
                    <Box>FOOTEr</Box>
                    <Box>FOOTEr</Box>
                    <Box>FOOTEr</Box>
                </Stack>
            </Stack>
        </Container>
    );
};

export default Footer;
