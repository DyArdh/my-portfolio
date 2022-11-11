import BannerImg from "../assets/images/Programming-amico.svg";

const AppBanner = () => {
  return (
    <section id="home">
      <div className="container max-w-full md:px-[40px] lg:px-[8%] mt-[30px]">
        <div className="flex flex-col sm:flex-row items-center justify-between pt-12">
          <div className="pl-4 pr-8">
            <h1 className="text-2xl text-center sm:text-left lg:text-3xl text-text-primary font-semibold">
              HI, I AM ANDIKO YOGA WARDHANA
            </h1>
            <p className="mt-4 text-lg text-center sm:text-left md:text-xl lg:text-2xl leading-normal text-text-secondary font-semibold">
              A Animeh Enjoyer & Light Novel Reader
            </p>
          </div>
          <div className="px-4">
            <img src={BannerImg} alt="" className="w-[700px] mt-4 sm:mt-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppBanner;
