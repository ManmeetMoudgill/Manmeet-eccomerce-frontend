import React from "react";

const CompanyInformationSection = () => {
  return (
    <section className="flex justify-center items-center bg-gray-200">
      <div className=" w-full px-4 sm:px-0 sm:w-3/4">
        <h1 className="text-center lg:text-left text-xl md:text-2xl lg:text-3xl tracking-wide font-bold text-blueCustom-100 mt-10">
          Manmeet Eccomerce il tuo negozio di elettronica, informatica e gaming,
          telefonia
        </h1>
        <span className="flex flex-col">
          <p className="my-2 text-center md:text-left md:my-4 text-base md:text-lg lg:text-xl text-blueCustom-100">
            Manmeet Eccomerce è{" "}
            <span className="font-semibold">
              un gruppo leader nella distribuzione di elettrodomestici ed
              elettronica di consumo in Italia.
            </span>{" "}
            Dall&apos; informatica alla telefonia, senza dimenticare i piccoli e
            grandi elettrodomestici, il nostro sito mette a disposizione un
            vasto assortimento di prodotti. Per un catalogo sempre aggiornato e
            ricco di offerte pensate per soddisfare la clientela, anche quella
            più esigente.{" "}
          </p>
          <p className="my-2 text-center md:text-left md:my-4 text-base md:text-lg lg:text-xl text-blueCustom-100">
            {" "}
            Non ci occupiamo semplicemente di vendita di elettrodomestici, la
            nostra è una vera e propria filosofia ventennale orientata al
            consumatore. Sullo store online di Euronics puoi trovare tante
            offerte per elettronica, di cui approfittare comodamente da casa e
            in totale sicurezza. Così come nei negozi di tecnologia presenti su
            tutto il territorio italiano, anche con l&apos;eShopping puntiamo a
            soddisfare le esigenze più disparate, con una selezione in continuo
            aggiornamento dedicata ai nostri clienti. Puoi anche visitare i
            nostri shop in shop,{" "}
            <span className="font-semibold">
              suddivisi tra le migliori marche di televisori, computer,
              smartphone, tablet, console da gioco, contenuti digitali,
              accessori e apparecchi elettrici assortiti.
            </span>{" "}
            Tra le categorie più ricche c&apos;è indubbiamente quella
            specializzata negli smartphone: ogni giorno puoi approfittare sul
            sito delle offerte sui cellulari del momento, che ti verranno
            recapitati in poco tempo o che puoi ritirare in negozio gratis per
            24 ore. Non mancano poi le promozioni dedicate a tablet e
            televisori, e le offerte di PC di Euronics.it, sia notebook che
            desktop. La varietà e la convenienza fanno del nostro uno dei
            migliori negozi di elettronica sul mercato.
          </p>
          <p className="my-2 text-center md:text-left md:my-4 text-base md:text-lg lg:text-xl text-blueCustom-100">
            Alla consegna di un nuovo prodotto, Euronics garantisce il ritiro
            dell&apos;apparecchiatura usata e{" "}
            <span className="font-semibold">
              il suo smaltimento nel rispetto delle normative in materia,
              assieme a un team di Installatori Professionisti che si occupano
              anche delle apparecchiature più complesse.
            </span>{" "}
            Completano il quadro tutti i vantaggi dei finanziamenti online:
            direttamente sul sito è possibile controllare le condizioni di
            finanziamento e ottenere in breve tempo un preventivo gratuito e
            senza impegno.
          </p>
        </span>
      </div>
    </section>
  );
};

export default CompanyInformationSection;
