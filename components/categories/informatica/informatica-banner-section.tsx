const InformaticaBannerSection = () => {
  return (
    <section className="">
      <div className="flex bg-gradient-to-t shadow-inner   from-gray-100 justify-center items-center">
        <div className="w-10/12">
          <h2 className="py-4 px-3 text-gray-500 font-extralight ">
            Informatica
          </h2>
        </div>
      </div>
      <div
        className="w-full h-[50vh]"
        style={{
          backgroundImage: `url(/assets/informatica.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
    </section>
  );
};

export default InformaticaBannerSection;
