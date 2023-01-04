import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { Dict } from "@chakra-ui/utils";

const config: ThemeConfig = {
    initialColorMode: "dark",
    useSystemColorMode: false,
};

const styles = {
    global: (props: Dict<any>) => ({
        body: {
            color: mode("gray.800", "gray.100")(props),
            bg: mode("gray.100", "#141214")(props),
        },
    }),
};

const fonts = {
    heading: `'Rubik', sans-serif`,
    body: `'Inter', 'Times New Roman', sans-serif`,
};

const theme = extendTheme({ config, fonts, styles });

export default theme;
