import React, { useRef, useState } from "react";
import { Carousel } from "react-carousel-minimal";
import Swal from "sweetalert2";
import ScrollBoxes from "./Animation";
import Img01 from "../images/CAROUSEL/01.png";
import Img02 from "../images/CAROUSEL/02.png";
import Img03 from "../images/CAROUSEL/03.png";
import Img04 from "../images/CAROUSEL/04.png";
import Img05 from "../images/CAROUSEL/05.png";
import Img06 from "../images/CAROUSEL/06.png";
import Img07 from "../images/CAROUSEL/07.png";
import Img08 from "../images/CAROUSEL/08.png";
import Img09 from "../images/CAROUSEL/09.png";
import Img10 from "../images/CAROUSEL/10.png";
import Img11 from "../images/CAROUSEL/12.png";
import Img12 from "../images/CAROUSEL/13.png";
import Img13 from "../images/CAROUSEL/14.png";
import Img14 from "../images/CAROUSEL/15.png";
import Img15 from "../images/CAROUSEL/12.png";
import Img16 from "../images/CAROUSEL/16.png";
import Img17 from "../images/CAROUSEL/18.png";
import Img18 from "../images/CAROUSEL/19.png";
import Img19 from "../images/CAROUSEL/20.png";
import Img20 from "../images/CAROUSEL/21.png";

export const Main = () => {
  const projectSectionRef = useRef();
  const scrollToProjectSection = () => {
    projectSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const data = [
    {
     image: Img01,
    },
    {
      image: Img02,
    },
    {
      image: Img03,
    },
    {
      image: Img04,
    },
    {
      image: Img05,
    },
    {
      image: Img06,
    },
    {
      image: Img07,
    },
    {
      image: Img08,
    },
    {
      image: Img09,
    },
    {
      image: Img10,
    },
    {
      image: Img11,
    },
    {
      image: Img12,
    },
    {
      image: Img13,
    },
    {
      image: Img14,
    },
    {
      image: Img15,
    },
    {
      image: Img16,
    },
    {
      image: Img17,
    },
    {
      image: Img18,
    },
    {
      image: Img19,
    },
    {
      image: Img20,
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  const [m2Cubiertos, setM2Cubiertos] = useState(0);
  const [m2Semicubiertos, setM2Semicubiertos] = useState(0);

  const calcularPresupuesto = () => {
    // Convertir los valores a números
    const m2CubiertosNumber = parseFloat(m2Cubiertos);
    const m2SemicubiertosNumber = parseFloat(m2Semicubiertos);

    // Realizar cálculos
    const presupuesto = m2CubiertosNumber * 549 + m2SemicubiertosNumber * 275;
    const desembolsoInicial = presupuesto * 0.015;

    // Validar campos
    if (m2CubiertosNumber === 0 || m2SemicubiertosNumber === 0) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Por favor, completa los campos con valores válidos para que podamos ayudarte. Si necesitas ayuda con el presupuesto, podes contactarte con un asesor. :)",
      });
      return;
    }

    Swal.fire({
      title: "Felicitaciones",
      html: `<p>El valor total de inversión de tu obra es de u$d ${presupuesto} final con materiales de primera línea. </p><p> Sólo necitás realizar un desembolso inicial de u$d ${desembolsoInicial} y luego abonás lo restante a medida que estés de acuerdo con los resultados.¡Solicitá una reunion y dale vida a tu proyecto!</p>`,
      icon: "success",
    });
  };

  function showAlert() {
    const input1 = document.getElementById("name").value;
    const input2 = document.getElementById("mail").value;
    const input3 = document.getElementById("ubicacion_proyecto").value;
    const input4 = document.getElementById("msg").value;

    if (input1 === "" || input2 === "" || input3 === "" || input4 === "") {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Por favor, completa todos los campos.",
      });
      return;
    }

    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
      customClass: {
        popup: "custom-swal-popup",
      },
    });

    Toast.fire({
      icon: "success",
      title: "Mensaje enviado. ¡Muchas gracias!",
    });
  }

  return (
    <div>
      <div className="steelframe01 box">
        Tené tu casa propia sin arriesgar tu dinero
      </div>
      <div className="steelframe02 box">
        <div>Modalidad llave en mano</div>
        <div className="btn" onClick={scrollToProjectSection}>
          Quiero construir
        </div>
      </div>

      <div className="title box">Las ventajas de construir con nosotros</div>
      <div className="subtitle box">
        <ScrollBoxes />
        Te acercamos algunas de las ventajas que ofrecemos a nuestros clientes.
      </div>

      <div className="card box">
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
            tu proyecto. Nuestros anticipos no superan el 2% del total de la
            obra. El saldo restante lo abonás luego de obtener resultados.
          </div>
        </div>
        <div className="cards">
          <div className="card-title">Garantía</div>
          <div className="card-subtitle">
            Todas nuestras obras tienen garantía escrita por 10 años y podes
            cambiar lo que no te gustó hasta 6 meses después de haber finalizado
            la obra.
          </div>
        </div>
      </div>
      
      <div className="background-color-image">
        <div className="image-circle box">
          <div>
            <div className="image-circle-01"></div>
            <div className="image-circle-02"></div>
          </div>
          <div className="text-circle">
            <div className="card-subtitle">
              <div className="card-title">Resultados instantáneos</div>
              Recibirás los resultados de tu proyecto en los primeros 7 días
              después de la contratación, asegurándote una rápida y eficiente
              entrega de los avances y logros alcanzados.
            </div>

            <div className="card-subtitle">
              <div className="card-title">Reuniones flexibles</div>
              Para no entorpecer tu rutina, ofrecemos salas de reuniones en Zona
              Sur, Norte y CABA en amplias franjas horarias ya que trabajamos
              con la red de oficinas más grande de Argentina.
            </div>
          </div>
        </div>
      </div>

      <div className="image-circle box circle2">
        <div className="text-circle ">
          <div className="card-subtitle">
            <div className="card-title">Construcción Rápida</div>
            Una vez aprobado el proyecto, podes tener tu casa en 120 días lista
            para habitar y dejar de alquilar sin importar la cantidad de metros
            cuadrados.
          </div>

          <div className="card-subtitle">
            <div className="card-title">Asesoramiento</div>
            Contamos con un amplio staff de cada gremio para ayudarte a pensar,
            diseñar y decorar tu proyecto tanto en interior como en exterior.
          </div>
        </div>

        <div>
          <div className="image-circle-03"></div>
          <div className="image-circle-04"></div>
        </div>
      </div>

      <div className="steelframe box">Proyectos cumplidos:</div>
      

      <div className="box">
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              padding: "0 20px",
            }}
          >
            <Carousel
              data={data}
              time={2000}
              width="100%"
              maxWidth="100%"
              height="500px"
              captionStyle={captionStyle}
              radius="10px"
              slideNumber={true}
              slideNumberStyle={slideNumberStyle}
              captionPosition="bottom"
              automatic={true}
              dots={true}
              pauseIconColor="white"
              pauseIconSize="40px"
              slideBackgroundColor="darkgrey"
              slideImageFit="cover"
              style={{
                border: "3px solid #f4ce14",
                borderRadius: "15px",
                textAlign: "center",
                maxWidth: "1200px",
                maxHeight: "100%",
                margin: "40px auto",
              }}
            />
          </div>
        </div>
      </div>

      <div className="card card-presupuesto box">
        <div className="cards presupuesto">
          <div className="presupuesto-card">
            <div className="card-title">Gestioná tu presupuesto</div>
            <div className="card-subtitle">
              Gestionamos tu proyecto completo. Desde el diseño, permisos,
              construción y amoblamientos incluyendo también la compra de
              materiales.
            </div>

            <div className="container-presu">
              <div className="introducir-presupuesto">
                <li>
                  <label htmlFor="m2cubiertos">Introducí M2 cubiertos:</label>{" "}
                  <br />
                  <input
                    type="number"
                    id="m2cubiertos"
                    value={m2Cubiertos}
                    onChange={(e) => setM2Cubiertos(e.target.value)}
                  />
                </li>
                <li>
                  <label htmlFor="m2semicubierto">
                    Introducí M2 semicubiertos:
                  </label>{" "}
                  <br />
                  <input
                    className="p2"
                    type="number"
                    id="m2semicubierto"
                    value={m2Semicubiertos}
                    onChange={(e) => setM2Semicubiertos(e.target.value)}
                  />
                </li>
                <button
                  className="btn-info-down btn-presu"
                  onClick={calcularPresupuesto}
                >
                  Obtener presupuesto
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      <br />
      <br />

      <div ref={projectSectionRef} className="project-together box">
        <div className="banner-form ">
          <br />
          <br />
          <div className="comencemos">¡Comencemos juntos tu proyecto!</div>
          <div className="completa">
            Completá los datos de tu proyecto y cotizá tu obra en menos de un
            día.
          </div>
          <h3 className="zona-servicio">
            Zona de servicio: <br /> CABA <br /> Zona Sur <br />
            Zona Norte <br />
            Zona Oeste <br />
            Interior de Bs As <br />
            Costa Atlántica <br />
            Consultar otras zonas
          </h3>
          <div className="brs">
            <br />
            <br />
            <br />
            <br />
          </div>
          <h3>
            Av. Caseros 1750, Nuevo Quilmes Plaza, Don Bosco. <br />
            info@casedif.com <br /> Teléfono: +54 9 11 7618 0939
          </h3>
          <br />
          <br />
        </div>
        <div className="form">
          <form
            action="https://formsubmit.co/casedif@gmail.com"
            onSubmit={showAlert}
            method="POST"
          >
            <ul>
              <input
                type="hidden"
                name="_next"
                value="https://www.casedif.com"
              />
              <input type="hidden" name="_captcha" value="false" />
              <li>
                <label for="name-input">Nombre:</label> <br />
                <input type="text" id="name" name="name" />
              </li>
              <li>
                <label htmlFor="number">Teléfono: </label>
                <br />
                <input type="number" id="mail" name="user_email" />
              </li>
              <li>
                <label htmlFor="ubicacion_proyecto">
                  Ubicacion del proyecto:
                </label>{" "}
                <br />
                <input
                  type="text"
                  id="ubicacion_proyecto"
                  name="ubicacion_proyecto"
                />
              </li>
              <li>
                <label htmlFor="msg">Mensaje:</label> <br />
                <textarea id="msg" name="user_message" />
              </li>
              <button className="btn-info-down">Enviar</button>
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
};
