import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

const Home = () => {
  return (
    <div>
      <FadeIn direction="up">
        <About />
      </FadeIn>
      <FadeIn direction="up" delay={0.05}>
        <Experience />
      </FadeIn>
      <FadeIn direction="up" delay={0.05}>
        <Projects />
      </FadeIn>
      <FadeIn direction="up" delay={0.05}>
        <Footer />
      </FadeIn>
    </div>
  );
};

export default Home;
