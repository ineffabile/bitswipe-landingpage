import type { NextPage } from "next"
import Navbar from "./components/navbar"
import Main from "./components/main"
import WhyBitswipe from "./components/why-bitswipe"
import Global from "./components/global"
import ReadyToGetStarted from "./components/ready-to-get-started"
import Footer from "./components/footer"

const Index: NextPage = () => {
  return (
    <div className="bg-grey font-OpenSans">
      <Navbar />
      <Main />
      <WhyBitswipe />
      <Global />
      <ReadyToGetStarted />
      <Footer />
    </div>
  )
}

export default Index