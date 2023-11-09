import React, { useRef } from "react";
import { Carousel } from "react-carousel-minimal";
import Swal from "sweetalert2";
import { useState } from "react";

export const Main = () => {
  const projectSectionRef = useRef();
  const scrollToProjectSection = () => {
    projectSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const data = [
    {
      image:
        "https://fibrasymallas.com/wp-content/uploads/2018/07/steel-frame.jpg",
      caption: "Estas son las estructuras que usamos para trabajar",
    },
    {
      image:
        "https://fibrasymallas.com/wp-content/uploads/2018/07/steel-frame.jpg",
      caption: "Estas son las estructuras que usamos para trabajar",
    },
    {
      image:
        "https://fibrasymallas.com/wp-content/uploads/2018/07/steel-frame.jpg",
      caption: "Estas son las estructuras que usamos para trabajar",
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

  function showAlert(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    const name = document.getElementById("name").value;
    const email = document.getElementById("mail").value;
    const message = document.getElementById("msg").value;

    if (name && email && message) {
      // Si los campos requeridos están llenos, muestra la notificación
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
    } else {
      // Si faltan campos requeridos, muestra un mensaje de error
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Por favor, complete todos los campos obligatorios.",
      });
    }
  }

  return (
    <div>
      <div className="steelframe02">
        <div>Modalidad llave en mano</div>
        <div className="btn" onClick={scrollToProjectSection}>
          Quiero construir
        </div>
      </div>
      
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
      <br />
      <br />
      <br />
      <br />
      <div className="background-color-image">
        <div className="image-circle">
          <div>
            <div className="image-circle-01"></div>
            <div className="image-circle-02"></div>
          </div>
          <div className="text-circle">
            <div className="card-subtitle">
              <div className="card-title">Construcción Rápida</div>
              Una vez aprobado el proyecto, podes tener tu casa en 150 días
              lista para habitar y dejar de alquilar.
            </div>

            <div className="card-subtitle">
              <div className="card-title">Asesoramiento</div>
              Contamos con un amplio staff de cada gremio para ayudarte a
              pensar, diseñar y decorar tu proyecto tanto en interior como en
              exterior.
            </div>
          </div>
        </div>
      </div>

      <div className="image-circle">
        <div className="text-circle">
          <div className="card-subtitle">
            <div className="card-title">Construcción Rápida</div>
            Una vez aprobado el proyecto, podes tener tu casa en 150 días lista
            para habitar y dejar de alquilar.
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

      <div className="steelframe">Trabajos terminados</div>
      <br />

      <div>
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

      <div className="card">
        <div className="cards">
          <img
            src="https://i.pinimg.com/564x/38/5b/2a/385b2a98b89800b79b4cf72c8d47b5e2.jpg"
            className="steelframe-img"
            alt=""
          />
          <div className="card-title">Gestion Integral</div>
          <div className="card-subtitle">
            Gestionamos tu proyecto completo. Desde el diseño, permisos,
            construción y amoblamientos incluyendo también la compra de
            materiales.
          </div>
          <button className="btn-info">Más info.</button>
        </div>
        <div className="cards">
          <img
            src="https://i.pinimg.com/564x/38/5b/2a/385b2a98b89800b79b4cf72c8d47b5e2.jpg"
            className="steelframe-img"
            alt=""
          />
          <div className="card-title">Gestion Integral</div>
          <div className="card-subtitle">
            Gestionamos tu proyecto completo. Desde el diseño, permisos,
            construción y amoblamientos incluyendo también la compra de
            materiales.
          </div>
          <button className="btn-info">Más info.</button>
        </div>
        <div className="cards">
          <img
            src="https://i.pinimg.com/564x/38/5b/2a/385b2a98b89800b79b4cf72c8d47b5e2.jpg"
            className="steelframe-img"
            alt=""
          />
          <div className="card-title">Gestion Integral</div>
          <div className="card-subtitle">
            Gestionamos tu proyecto completo. Desde el diseño, permisos,
            construción y amoblamientos incluyendo también la compra de
            materiales.
          </div>
          <button className="btn-info">Más info.</button>
        </div>
      </div>

      <br />
      <br />
      <br />

      <div ref={projectSectionRef} className="project-together">
        <div className="banner-form">
          <br />
          <br />
          <div className="comencemos">¡Comencemos juntos tu proyecto!</div>
          <div className="completa">
            Completá los datos de tu proyecto y cotizá tu obra en menos de un
            día.
          </div>
          <h3 className="">
            Zona de servicio: <br /> Buenos Aires, Argentina.
          </h3>
          <br />
          <br />
          <br />
          <br />
          <h3>
            Lavalle 333, CABA <br />
            casedif@gmail.com <br /> +54 9 11 7618 0939
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
                <label for="name-input">Name:</label> <br />
                <input type="text" id="name" name="name" />
              </li>
              <li>
                <label htmlFor="mail">Email: </label>
                <br />
                <input type="email" id="mail" name="user_email" />
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
                <label htmlFor="msg">Message:</label> <br />
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
