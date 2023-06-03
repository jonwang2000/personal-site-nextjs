import { FC, ReactNode } from "react";
import { Flex } from "@chakra-ui/react";

type HomeLayoutProps = {
    children: ReactNode;
};

const HomeLayout: FC<HomeLayoutProps> = ({ children }) => {
    return (
        <Flex
            component="div"
            direction={"column"}
            align={"center"}
            maxW={{ xl: "1200px" }}
            m={"0 auto"}
            justify="space-between"
            minH={"100vh"}
        >
            {children}
        </Flex>
    );
};

export default HomeLayout;
