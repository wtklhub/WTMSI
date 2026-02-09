import {
  Navbar,
  HeroSection,
  ProductSections,
  UseCasesSection,
  TestimonialsSection,
  IntegrationsSection,
  PartnersSection,
  CTASection,
  Footer,
  GridLayout,
  GridSection,
} from "@/components/landing";

export default function Home() {
  return (
    <GridLayout>
      <Navbar />
      <main>
        <GridSection topLine={false}>
          <HeroSection />
        </GridSection>
        <GridSection>
          <ProductSections />
        </GridSection>
        <GridSection>
          <IntegrationsSection />
        </GridSection>
        <GridSection>
          <UseCasesSection />
        </GridSection>
        <GridSection>
          <TestimonialsSection />
        </GridSection>
        <GridSection id="partners">
          <PartnersSection />
        </GridSection>
        <GridSection>
          <CTASection />
        </GridSection>
      </main>
      <GridSection as="footer" bottomLine>
        <Footer />
      </GridSection>
    </GridLayout>
  );
}
