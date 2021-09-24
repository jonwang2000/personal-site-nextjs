import { FC } from "react";
import { Flex, IconButton, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const Header: FC<{}> = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Flex
            flexDirection="row-reverse"
            position={"absolute"}
            p={{ base: 4, md: 12 }}
            w={"100%"}
        >
            <IconButton
                aria-label="Change Color Mode"
                onClick={toggleColorMode}
                icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
            />
        </Flex>
        // <> </>
    );
};

export default Header;
