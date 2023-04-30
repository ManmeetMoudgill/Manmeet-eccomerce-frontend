const CallingService = "/assets/services-information/calling-service.jpg";
const CourierService = "/assets/services-information/courier-service.jpg";
const OnlineService = "/assets/services-information/online-service.jpg";
const ServicesInformationSection = () => {
  return (
    <section className="flex justify-center items-center my-8 mb-4 ">
      <div className=" w-full md:w-4/5   grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-10 px-4 ">
        <div
          className="  min-h-[35vh] "
          style={{
            backgroundImage: `url(${CallingService})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className=" z-50 flex flex-col ml-0 xl:ml-[25%] 2xl:ml-[50%] p-4 mt-12">
            <p className="text-2xl md:text-3xl lg:text-4xl font-medium">
              Assistenza Tecnica
            </p>
            <span className=" text-sm md:text-base my-3">
              Controlla lo stato della riparazione del prodotto che hai lasciato
              nel punto vendita.
            </span>
            <span className="text-xs md:text-sm my-3 underline cursor-pointer">
              Scopri di più
            </span>
          </div>
        </div>
        <div
          className="  min-h-[35vh] "
          style={{
            backgroundImage: `url(${CourierService})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className=" z-50 flex flex-col ml-0 xl:ml-[25%] 2xl:ml-[50%] p-4 mt-12">
            <p className="text-2xl md:text-3xl lg:text-4xl font-medium">
              Assistenza Tecnica
            </p>
            <span className=" text-sm md:text-base my-2">
              Controlla lo stato della riparazione del prodotto che hai lasciato
              nel punto vendita.
            </span>
            <span className="text-xs md:text-sm my-2 underline cursor-pointer">
              Scopri di più
            </span>
          </div>
        </div>
        <div
          className=" border-red-900 min-h-[35vh] "
          style={{
            backgroundImage: `url(${OnlineService})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="z-50 flex flex-col ml-0xl: xl:ml-[25%] 2xl:ml-[50%] p-4 mt-12">
            <p className="text-2xl md:text-3xl lg:text-4xl font-medium">
              Assistenza Tecnica
            </p>
            <span className=" text-sm md:text-base my-2">
              Controlla lo stato della riparazione del prodotto che hai lasciato
              nel punto vendita.
            </span>
            <span className="text-xs md:text-sm my-3 underline  cursor-pointer">
              Scopri di più
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesInformationSection;
