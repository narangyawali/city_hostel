import About from "../components/about/About";
import Home from "../components/home/Home";
import Events from "../components/events/Events"
import Team from "../components/team/Team";

function Layout() {
  return (
    <>
    {/* <h1>hooo</h1> */}
      <Home />
		<About/>	
    <Events/>
    <Team/>

    </>
  );
}

export default Layout;
