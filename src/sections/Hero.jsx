import { arrowRight } from "../assets/icons";
import Button from "../components/Button";

const Hero = () => {
  return (
    <section
      id="hero"
      className="w-full flex xl:flex-row flex-col justify-center items-center min-h-screen gap-10 max-container bg-hero bg-cover bg-no-repeat bg-opacity-10 bg-center padding-b"
    >
      {/* text */}
      <div className="flex flex-col justify-center items-center text-center w-full max-xl:padding-x pt-28">
        {/* <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collection
        </p> */}
        <h1 className="text-white break-all mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="">Your</span>
          <br />
          <span className="text-coral-red italic inline-block mt-3">
            Attention!
          </span>{" "}
          <br />
          Here
        </h1>
        <p className="font-montserrat text-white-400 text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover dtylish Nike arrivals, quality comfort and innovation for
          your active life.
        </p>
        <Button label="Shop Now" link="#products" iconURL={arrowRight} />

        {/* stat */}
        {/* <div className="flex justify-center items-center flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div> */}
      </div>

      {/* image */}
      {/* <div className="relative flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 ">
        <img
          src={mainShirt}
          alt="shoe collection"
          width={610}
          height={500}
          className="object-cover relative z-10"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImage={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div> */}
    </section>
  );
};
export default Hero;
