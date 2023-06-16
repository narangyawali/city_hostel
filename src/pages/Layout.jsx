import About from "../components/about/About";
import Home from "../components/home/Home";
import Events from "../components/events/Events"
import Team from "../components/team/Team";
import Footer from "../components/footer/Footer";

function Layout() {
  return (
    <>
    {/* <h1>hooo</h1> */}
      <Home />
		<About/>	
    <Events/>
    <Team/>
		<Footer/>
    </>
  );
}

export default Layout;
