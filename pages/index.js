import Head from "next/head";
import Intro from "../components/intro";
import About from "../components/about";
import SideMenu from "../components/sideMenu";
import Facts from "../components/facts";
import Skills from "../components/skills";
import Resume from "../components/resume";
import Services from "../components/services";
import Contact from "../components/contact";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Portfolio from "../components/portfolio";

export default function Home() {
  return (
    <div className="app" id="home">
      <Head>
        <title>Portfolio, Touseef Haider</title>
        <meta name="description" content="Software engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SideMenu />
      <Intro />
      <div className="layout">
        <About />
        <Facts />
        <Skills />
        <Resume />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
