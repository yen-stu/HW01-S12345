import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Intro from "./components/Intro";
import Steps from "./components/Steps";
import Tools from "./components/Tools";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="page">
      <Header />
      <Nav />
      <main>
        <Intro />
        <Steps />
        <Tools />
        <Subscribe />
      </main>
      <Footer />
    </div>
  );
}
