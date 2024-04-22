import Nav from "./components/Nav";
import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffers,
  Subscribe,
  SuperQuality,
} from "./sections";

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffers />
      </section>
      <section className="padding bg-[#010101] dark:bg-primary ">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="bg-white padding-x padding-t pb-8 dark:bg-[#010101]">
        <Footer />
      </section>
    </main>
  );
};

export default App;
