import About from "@/components/sections/About";
import Access from "@/components/sections/Access";
import Attention from "@/components/sections/Attention";
import Concept from "@/components/sections/Concept";
import Hero from "@/components/sections/Hero";
import Live from "@/components/sections/Live";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <About />
      <Concept />
      <Live />
      <Access />
      <Attention />
    </main>
  );
}
