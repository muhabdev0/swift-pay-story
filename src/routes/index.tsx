import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { Feature } from "@/components/landing/Feature";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Testimonials } from "@/components/landing/Testimonials";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";
import heroPeople from "@/assets/hero-people.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "ImmediatePay — Access your pay when you need it most",
      },
      {
        name: "description",
        content:
          "ImmediatePay gives you access to the pay you've already earned, without waiting for payday. Calm, instant, and on your terms.",
      },
      { property: "og:title", content: "ImmediatePay — Access your pay when you need it most" },
      {
        property: "og:description",
        content:
          "Earned wage access for modern teams and the people who power them.",
      },
      { property: "og:image", content: heroPeople },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroPeople },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Feature />
        <HowItWorks />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
