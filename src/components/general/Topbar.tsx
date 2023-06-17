// ======= react ==========
import { useState } from "react";
// ======= chakra UI ==========
import { Card, Flex, Box } from "@chakra-ui/react";
// ======= external functions  ==========

// ======= custom components (if any)==========
import CustomButton from "./CustomButton";
// ============== interfaces (if any) ==============
interface TopbarProps {
    firstTabWords: string;
    secondTabWords: string;
    tab: any;
    changeTab: any;
}
// ============== external variables (if any) ==============

// ============== main component ==============

// ============== sub component(s) if any ==============
export function Topbar({
    firstTabWords,
    secondTabWords,
    tab,
    changeTab,
}: TopbarProps) {
    // ============== constant variables if any ==============
    // ============== states (if any) ==============

    // ============== useEffect statement(s) ==============

    // ============== helper functions if any ==============

    // ============== key functions if any ==============
    const selectTab = (newTabIndex: number) => {
        changeTab(newTabIndex);
    };
    return (
        <Card>
            <Box padding="10px" display={"flex"}>
                {/* <Flex align={"center"}> */}
                <Box m="5px">
                    <CustomButton
                        buttonColor={tab == 0 ? "#3609EA" : "#E2E2E2"}
                        textColor={tab == 0 ? "white" : "black"}
                        buttonText={firstTabWords}
                        buttonOnClick={() => selectTab(0)}
                        buttonWidth="100%"
                    />
                </Box>
                <Box m="5px">
                    {" "}
                    <CustomButton
                        buttonColor={tab == 1 ? "#3609EA" : "#E2E2E2"}
                        textColor={tab == 1 ? "white" : "black"}
                        buttonText={secondTabWords}
                        buttonOnClick={() => selectTab(1)}
                        buttonWidth="100%"
                    />
                </Box>
                {/* </Flex> */}
            </Box>
        </Card>
    );
}
