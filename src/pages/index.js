import Initial from "@/components/initial";
import About from "@/components/about";
import Vision from "@/components/vision";
import Portfolio from "@/components/portfolio";
import Contato from "@/components/contato";
import Footer from "@/components/footer";

export default function Home() {

  return (
    <main id="page">
      <Initial />
      <About />
      <Vision />
      <Portfolio />
      <Contato />
      <Footer />
    </main>
  );
}
