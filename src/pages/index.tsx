import type { NextPage } from "next";
import { Box } from "@chakra-ui/layout";

import HomeLayout from "components/layouts/HomeLayout";

const Home: NextPage = () => {
    return (
        <HomeLayout>
            <Box>
                <div style={{ backgroundColor: "grey" }}>Hi</div>
                <footer>Test</footer>
            </Box>
        </HomeLayout>
    );
};

export default Home;
