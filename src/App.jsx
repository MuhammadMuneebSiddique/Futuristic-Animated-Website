import { ScrollTrigger } from "gsap/all";
import LandingPage from "./components/LandingPage"
import { SplitText } from "gsap/all";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <section>
      <LandingPage />
    </section>
  )
}

export default App