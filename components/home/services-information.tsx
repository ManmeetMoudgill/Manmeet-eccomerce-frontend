const CallingService = "/assets/services-information/calling-service.jpg";
const CourierService = "/assets/services-information/courier-service.jpg";
const OnlineService = "/assets/services-information/online-service.jpg";
const ServicesInformationSection = () => {
  return (
    <section className="flex justify-center items-center my-8 mb-4 ">
      <div className="w-4/5   grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-10 px-4 ">
        <div
          className="  min-h-[35vh] "
          style={{
            backgroundImage: `url(${CallingService})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className=" flex flex-col  ml-[50%] p-4 mt-12">
            <p className="text-4xl font-medium">Assistenza Tecnica</p>
            <span className="text-base my-3">
              Controlla lo stato della riparazione del prodotto che hai lasciato
              nel punto vendita.
            </span>
            <span className="my-3 underline cursor-pointer">Scopri di più</span>
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
          <div className=" flex flex-col  ml-[50%] p-4 mt-12">
            <p className="text-4xl font-medium">Assistenza Tecnica</p>
            <span className="text-base my-2">
              Controlla lo stato della riparazione del prodotto che hai lasciato
              nel punto vendita.
            </span>
            <span className="my-2 underline cursor-pointer">Scopri di più</span>
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
          <div className=" flex flex-col  ml-[50%] p-4 mt-12">
            <p className="text-4xl font-medium">Assistenza Tecnica</p>
            <span className="text-base my-2">
              Controlla lo stato della riparazione del prodotto che hai lasciato
              nel punto vendita.
            </span>
            <span className="my-3 underline  cursor-pointer">
              Scopri di più
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesInformationSection;
