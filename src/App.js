import React from "react";
import ContainerLayout from "./components/ContainerLayout";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import "./styles.css";
import SearchBar from "./components/SearchBar";
function App() {
  return (
    <ContainerLayout>
      <Navbar></Navbar>
      <Content>
        <SearchBar />
      </Content>
      <Footer></Footer>
    </ContainerLayout>
  );
}
export default App;
