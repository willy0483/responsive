import "./App.scss";

import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";
import { Container } from "./Components/Container/Container";
import { Main } from "./Components/Main/Main";
import { Grid } from "./Components/Grid/Grid";
import { Navbar } from "./Components/NavBar/NavBar";
import { SideBar } from "./Components/SideBar/SideBar";

function App() {
  return (
    <>
      <Grid>
        <Header />
        <Navbar />
        <SideBar />
        <Main>
          <h1>Main</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
            quidem neque blanditiis soluta, beatae cumque reprehenderit a iusto,
            vitae repudiandae tempore amet provident similique fuga ratione eum,
            itaque sint error!
          </p>
        </Main>
        <Footer />
      </Grid>
    </>
  );
}

export default App;
