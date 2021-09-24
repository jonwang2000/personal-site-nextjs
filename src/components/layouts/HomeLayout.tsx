import { FC, ReactNode } from "react";
import { Flex } from "@chakra-ui/react";

import Header from "components/sections/Header";
import Footer from "components/sections/Footer";

type HomeLayoutProps = {
    children: ReactNode;
};

const HomeLayout: FC<HomeLayoutProps> = ({ children }) => {
    return (
        <Flex
            direction={"column"}
            align={"center"}
            maxW={{ xl: "1200px" }}
            m={"0 auto"}
            justify="space-between"
            minH={"100vh"}
        >
            <Header />
            {children}
            <Footer />
        </Flex>
    );
};

export default HomeLayout;
