import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffers = () => {
  return (
    <section className="flex items-center max-xl:flex-col-reverse gap-10 max-container">
      {/* image */}
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      {/* text */}
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red">Special</span> offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings,
          selections to incredible savings, we offer unparallelled value that
          sets us apart.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Navigate a realm of passibilities designed to fulfill your unique
          desires, surpassing the loftiest of expectations. Your journey with us
          is nothing short of exceptional.
        </p>
        {/* buttons */}
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};
export default SpecialOffers;
