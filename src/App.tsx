// ============== imports: the dependencies ==============
// ======= react ==========
import { useEffect, useState } from "react"
import { Routes, Route, useNavigate, useLocation } from "react-router-dom"

// ======= chakra UI ==========
import { Box } from "@chakra-ui/react"
// ======= firebase ==========
// import { seedSkills } from "./helperFunctions/firebase/skillsFunctions"
// import { userSetupAll } from "./helperFunctions/firebase/userAuthFunctions"
// ======= zustand/state ==========
import useUser from "./store/userStore"

// ======= custom components (if any)==========
import Navbar from "./components/general/Navbar"

// ============== interfaces (if any) ==============

// ============== external variables (if any) ==============

// ======= external functions  ==========

// ============== main component ==============

// ============== sub component(s) if any ==============

// ======================== authentication pages ========================
import LoginPage from "./pages/authentication/LoginPage"
import RegisterPage from "./pages/authentication/RegisterPage"
import SetupPage from "./pages/authentication/SetupPage"
import LogoutPage from "./pages/authentication/LogoutPage"

// ======================== home page ========================
import HomePage from "./pages/home/HomePage"

// ======================== mentee pages ========================
import CompanyPage from "./pages/mentees/CompanyPage"
import MentorPage from "./pages/mentees/MentorPage"
import ViewIndividualMentorship from "./pages/mentees/ViewIndividualMentorship"
import MenteeBadgePage from "./components/mentee/MenteePage"
// ======================== mentorPages ========================
import MenteePage from "./pages/mentors/MenteePage"
import MentorshipApplicationPage from "./pages/mentors/MentorshipApplicationPage"
import IndividualMentorshipPage from "./pages/mentors/IndividualMentorshipPage"

// ======================== law firm pages ========================
import LawyersPage from "./pages/lawfirms/LawyersPage"
import LaywerApplicationPage from "./pages/lawfirms/LaywerApplicationPage"

// ======================== resources pages ========================
import ResourcesPage from "./pages/resources/ResourcesPage"
import CurrentFolderPage from "./pages/resources/CurrentFolderPage"

// ======================== other pages ========================
import LandingPage from "./pages/others/LandingPage"
import { Landing } from "./pages/others/Landing"

// ============== main component ==============
function App() {
    // ============== constant variables if any ==============
    const location = useLocation()
    const navigate = useNavigate()
    const { user } = useUser()

    // ============== states (if any) ==============

    // ============== useEffect statement(s) ==============
    useEffect(() => {
        // seedSkills()
        // userSetupAll()
    }, [])
    useEffect(() => {
        if (user && user.userType == "-1") {
            navigate("/setup/" + user.userId)
        }
    }, [location.pathname])

    // monitor logged User (needed especially for navbar and homepage)

    // ============== helper functions if any ==============

    // ============== key functions if any ==============

    return (
        <>
            <Navbar />
            <Box p="10px">
                <Routes>
                    {/* landing page */}
                    <Route path="/" element={<Landing />} />

                    {/* homepage */}
                    <Route path="/home" element={<HomePage />} />

                    {/* authentication */}
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/setup/:userId" element={<SetupPage />} />
                    <Route path="/logout" element={<LogoutPage />} />

                    {/* mentee */}
                    <Route path="/company" element={<CompanyPage />} />
                    <Route path="/mentors" element={<MentorPage />} />
                    <Route
                        path="/mentee/m/:mentorshipId"
                        element={<ViewIndividualMentorship />}
                    />
                    <Route path="/skills" element={<MenteeBadgePage />} />

                    {/* mentor */}
                    <Route path="/mentees" element={<MenteePage />} />
                    <Route
                        path="/mentees/application/:mentorshipApplicationId"
                        element={<MentorshipApplicationPage />}
                    />
                    <Route
                        path="/mentorship/:mentorshipId"
                        element={<IndividualMentorshipPage />}
                    />

                    {/* lawyer */}
                    <Route path="/lawyers" element={<LawyersPage />} />
                    <Route
                        path="/lawyers/:applicationId"
                        element={<LaywerApplicationPage />}
                    />

                    {/* resources */}
                    <Route path="/resources" element={<ResourcesPage />} />
                    <Route
                        path="/resources/:folderId"
                        element={<CurrentFolderPage />}
                    />
                </Routes>
            </Box>
        </>
    )
}

export default App
