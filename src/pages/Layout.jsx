import About from "../components/about/About";
import Home from "../components/home/Home";
import Events from "../components/events/Events"
import Team from "../components/team/Team";
import Footer from "../components/footer/Footer";
import Testimony from "../components/testimony/testimony";

import MessengerCustomerChat from 'react-messenger-customer-chat';


function Layout() {
  return (
    <>
    {/* <h1>hooo</h1> */}
    <MessengerCustomerChat
    		pageId="106947385769745"
        appId="246863197967981"
    />

      <Home />
		<About/>	
    <Events/>
    <Team/>
  	<Testimony/>
		<Footer/>
    </>
  );
}

export default Layout;
