import { defineConfig } from "astro/config";
import astroI18next from "astro-i18next";
import react from "@astrojs/react";
import image from "@astrojs/image";
import critters from "astro-critters";
import cookieconsent from "@jop-software/astro-cookieconsent";
import partytown from "@astrojs/partytown";
import astroI18nextReloader from "./astro-i18next-reloader.mjs";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    astroI18next(),
    astroI18nextReloader(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    critters(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    cookieconsent({
      guiOptions: {
        consentModal: {
          layout: "box",
          position: "bottom left",
          equalWeightButtons: true,
          flipButtons: false,
        },
        preferencesModal: {
          layout: "box",
          position: "right",
          equalWeightButtons: true,
          flipButtons: false,
        },
      },
      categories: {
        necessary: {
          readOnly: true,
        },
        analytics: {},
      },
      language: {
        default: "en",
        translations: {
          en: {
            consentModal: {
              title: "Hello there, it's cookie time!",
              description:
                "We use cookies to ensure you get the best experience on our website. To learn more about cookies, including how to control and disable them, please read our <a href='/terms'>Privacy Policy</a>.",
              acceptAllBtn: "Accept all",
              acceptNecessaryBtn: "Reject all",
              showPreferencesBtn: "Manage preferences",
              footer:
                '<a href="/terms">Privacy Policy | Terms and conditions</a>',
            },
            preferencesModal: {
              title: "Consent Preferences Center",
              acceptAllBtn: "Accept all",
              acceptNecessaryBtn: "Reject all",
              savePreferencesBtn: "Save preferences",
              closeIconLabel: "Close modal",
              serviceCounterLabel: "Service|Services",
              sections: [
                {
                  title: "Cookie Usage",
                  description:
                    'The way we use cookies for our website is to serve you the best experience. If you are happy with that, please accept all cookies. If you want to manage your preferences, please click on "Accept all".',
                },
                {
                  title:
                    'Strictly Necessary Cookies <span class="pm__badge">Always Enabled</span>',
                  description:
                    "These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms.",
                  linkedCategory: "necessary",
                },
                {
                  title: "Analytics Cookies",
                  description:
                    "These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.",
                  linkedCategory: "analytics",
                },
                {
                  title: "More information",
                  description:
                    'For any query in relation to our policy on cookies and your choices, please <a class="cc__link" href="mailto:clara@5startaconyc.com">contact me</a>.',
                },
              ],
            },
          },
          es: {
            consentModal: {
              title: "Hola, ¡es hora de las cookies!",
              description:
                "Utilizamos cookies para garantizar que obtenga la mejor experiencia en nuestro sitio web. Para obtener más información sobre las cookies, incluido cómo controlarlas y deshabilitarlas, lea nuestra <a href='#link'>Política de privacidad</a>.",
              acceptAllBtn: "Aceptar todo",
              acceptNecessaryBtn: "Rechazar todo",
              showPreferencesBtn: "Gestionar preferencias",
              footer:
                '<a href="/terms">Política de privacidad</a>\n<a href="/terms">Términos y condiciones</a>',
            },
            preferencesModal: {
              title: "Preferencias de Consentimiento",
              acceptAllBtn: "Aceptar todo",
              acceptNecessaryBtn: "Rechazar todo",
              savePreferencesBtn: "Guardar preferencias",
              closeIconLabel: "Cerrar modal",
              serviceCounterLabel: "Servicios",
              sections: [
                {
                  title: "Uso de Cookies",
                  description:
                    'La forma en que usamos cookies para nuestro sitio web es para brindarle la mejor experiencia. Si está de acuerdo con eso, acepte todas las cookies. Si desea administrar sus preferencias, haga clic en "Aceptar todo".',
                },
                {
                  title:
                    'Cookies Estrictamente Necesarias <span class="pm__badge">Siempre Habilitado</span>',
                  description:
                    "Estas cookies son necesarias para que el sitio web funcione y no se pueden desactivar en nuestros sistemas. Por lo general, solo se configuran en respuesta a acciones realizadas por usted que equivalen a una solicitud de servicios, como establecer sus preferencias de privacidad, iniciar sesión o completar formularios.",
                  linkedCategory: "necessary",
                },
                {
                  title: "Cookies Analíticas",
                  description:
                    "Estas cookies nos permiten contar las visitas y las fuentes de tráfico para que podamos medir y mejorar el rendimiento de nuestro sitio. Nos ayudan a saber qué páginas son las más y las menos populares y ver cómo se mueven los visitantes por el sitio.",
                  linkedCategory: "analytics",
                },
                {
                  title: "Más información",
                  description:
                    'Para cualquier consulta relacionada con nuestra política de cookies y sus opciones, por favor <a class="cc__link" href="mailto:clara@5startaconyc.com">contáctame</a>.',
                },
              ],
            },
          },
        },
        autoDetect: "browser",
      },
    }),
  ],
  vite: {
    ssr: {
      noExternal: ["@splidejs/react-splide"],
    },
  },
  site: "https://nye.rosieogradys.com/",
});
