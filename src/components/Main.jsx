import React from "react";
import { Carousel } from "react-carousel-minimal";
import Swal from "sweetalert2";
import { useState } from "react";

export const Main = () => {
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

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    ubicacion_proyecto: "",
    user_message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Envía los datos del formulario al servidor
    try {
      const response = await fetch("/my-handling-form-page", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 200) {
        // Muestra una notificación exitosa con SweetAlert
        Swal.fire({
          icon: "success",
          title: "¡Formulario enviado!",
          text: "Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.",
        });

        // Limpia el formulario
        setFormData({
          user_name: "",
          user_email: "",
          ubicacion_proyecto: "",
          user_message: "",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Hubo un problema al enviar el formulario. Por favor, inténtalo de nuevo.",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un problema al enviar el formulario. Por favor, inténtalo de nuevo.",
      });
    }
  };

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

      <div className="project-together">
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
          <form onSubmit={handleSubmit}>
            <ul>
              <li>
                <label htmlFor="name">Name:</label> <br />
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  value={formData.user_name}
                  onChange={handleChange}
                />
              </li>
              <li>
                <label htmlFor="mail">Email: </label>
                <br />
                <input
                  type="email"
                  id="mail"
                  name="user_email"
                  value={formData.user_email}
                  onChange={handleChange}
                />
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
                  value={formData.ubicacion_proyecto}
                  onChange={handleChange}
                />
              </li>
              <li>
                <label htmlFor="msg">Message:</label> <br />
                <textarea
                  id="msg"
                  name="user_message"
                  value={formData.user_message}
                  onChange={handleChange}
                />
              </li>
              <button className="btn-info-down">Enviar</button>
            </ul>
          </form>
        </div>
      </div>
    </div>
  );
};
