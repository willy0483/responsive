import "./App.scss";

import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";
import { Main } from "./Components/Main/Main";
import { Grid } from "./Components/Grid/Grid";
import { Navbar } from "./Components/NavBar/NavBar";
import { SideBar } from "./Components/SideBar/SideBar";
import { Routes, Route} from "react-router-dom";

import { HomePage } from "./Pages/HomePage/HomePage";
import { AboutPage } from "./Pages/AboutPage/AboutPage";
import { ServicesPage } from "./Pages/ServicesPage/ServicesPage";
import { ContactPage } from "./Pages/ContactPage/ContactPage";
import { ErrorPage } from "./Pages/ErrorPage/ErrorPage";

import { DashboardPage } from "./Pages/DashboardPage/DashboardPage";
import { ProfilePage } from "./Pages/ProfilePage/ProfilePage";
import { SettingsPage } from "./Pages/SettingsPage/SettingsPage"
import { LogoutPage } from "./Pages/LogoutPage/LogoutPage";
  
function App() {
  return (
    <>
      <Grid>
        <Header />
        <Navbar />
        <SideBar />
        <Main>
          <Routes>
            <Route index element={ <HomePage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/Services" element={<ServicesPage/>}/>
            <Route path="/Contact" element={<ContactPage/>}/>
            <Route path="/Dashboard" element={<DashboardPage/>}/>
            <Route path="/profile" element={<ProfilePage/>}/>
            <Route path="/Settings" element={<SettingsPage/>}/>
            <Route path="/Logout" element={<LogoutPage/>}/>
            <Route path="*" element={<ErrorPage/>}/>
          </Routes>
        </Main>
        <Footer />
      </Grid>
    </>
  );
}

export default App;
