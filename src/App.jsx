import {Draggable} from "gsap/Draggable"
import gsap from "gsap";

import Navbar from "#components/Navbar.jsx";
import Welcome from "#components/Welcome.jsx";
import Dock from "#components/Dock.jsx";
import Home from "#components/Home.jsx";
import Wifi from "#windows/Wifi.jsx";
import User from "#windows/User.jsx";

import {Safari, Terminal,Resume,Finder,Text,Image,Contact} from "#windows";
gsap.registerPlugin(Draggable);

const App = () => {
    return (
        <main>
            <Navbar/>
            <Wifi />
            <User />
            <Welcome/>
            <Dock/>
            <Terminal/>
            <Safari/>
            <Resume/>
            <Finder/>
            <Text/>
            <Image/>
            <Contact />
            <Home/>
        </main>
    )
}
export default App
