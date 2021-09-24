import { FC, ReactNode } from "react";
import { Heading, Stack, useColorModeValue } from "@chakra-ui/react";

import { NEON_GREEN_LIGHTMODE, NEON_GREEN_DARKMODE } from "util/constants";

type ColumnProps = {
    title: string;
    children: ReactNode;
};

const Column: FC<ColumnProps> = ({ title, children }) => {
    return (
        <Stack pt={4}>
            <Heading
                fontWeight={"medium"}
                color={useColorModeValue(
                    NEON_GREEN_LIGHTMODE,
                    NEON_GREEN_DARKMODE
                )}
            >
                {title}
            </Heading>
            {children}
        </Stack>
    );
};

export default Column;
