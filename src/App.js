import Container from "./components/container/Container";
import Header from "./components/Header";
import Logo from "./components/logo/Logo";
import Navbar from "./components/Navbar";
import View from "./components/view/View";
import "./App.css";
import Button from "./components/button/Button";
import { ReactComponent as Send } from "./assets/send.svg";
import Box from "./components/box/Box";

import Title from "./components/title/Title";
import Text from "./components/text/Text";
import BoxImage from "./components/box/BoxImage";

function App() {
  return (
    <>
      <Header>
        <Container>
          <View display="flex" justifyContent="space-between">
            <Logo />
            <Navbar />
            <Button variant="primary">
              Contact Us <Send />{" "}
            </Button>
          </View>
        </Container>
      </Header>
      <Container>
        <Box>
          <BoxImage src="https://static.agentestudio.com/assets/services/web-development-6870dd6c27a4b419727566e7ed22c6c8885220364432664c4974e28a415739a8.svg" />
          <Title />
          <Text />
        </Box>
      </Container>
    </>
  );
}

export default App;
