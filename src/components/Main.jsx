import React from "react";

export const Main = () => {
  return (
    <div>
      <div className="title">Las ventajas de construir con nosotros</div>
      <div className="subtitle">
        Te acercamos algunas de las ventajas que ofrecemos a nuestros clientes.
      </div>

      <div className="card">
        <div className="cards">
          <div className="card-title">Gestion Integral</div>
          <div className="card-subtitle">
            Gestionamos tu proyecto completo. Desde el diseño, permisos,
            construción y amoblamientos incluyendo también la compra de
            materiales.
          </div>
        </div>
        <div className="cards">
          <div className="card-title">Minimo anticipo</div>
          <div className="card-subtitle">
            No necesitas desembolsar grandes inversiones para que trabajemos en
            tu proyecto. Nuestros anticipos no superan el 5% del total de la
            obra.
          </div>
        </div>
        <div className="cards">
          <div className="card-title">Garantía</div>
          <div className="card-subtitle">
            Todas nuestras obras tienen garantía y podes cambiar lo que no te
            gustó hasta 6 meses después de haber finalizado la obra.
          </div>
        </div>
      </div>
    </div>
  );
};
