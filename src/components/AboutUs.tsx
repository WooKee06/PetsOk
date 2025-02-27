import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AboutUsSvg from "../assets/aboutUsSvg.svg"; // Проверьте путь к SVG
import "../style/components/AbouUs.scss"; // Исправлена ошибка в названии файла
import { useTranslation } from "react-i18next";

const AboutUs: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });
  const { t } = useTranslation();

  // Проверяем, является ли `aboutAdventures` массивом
  const adventures = t("aboutUs.aboutAdventures", { returnObjects: true });
  if (!Array.isArray(adventures)) {
    console.error("aboutUs.aboutAdventures is not an array:", adventures);
  }

  return (
    <motion.div
      ref={ref}
      className="about wrapper"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.img
        src={AboutUsSvg}
        alt="About Us"
        width={600}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      />
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        <h2>{t("aboutUs.title")}</h2>
        <p>{t("aboutUs.description")}</p>
        {Array.isArray(adventures) && (
          <ul>
            {adventures.map((title, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM10.001 16.413L6.99545 13.4139C6.6047 13.024 6.60391 12.3912 6.99369 12.0003C7.38371 11.6092 8.01701 11.6085 8.40793 11.9987L9.999 13.587L14.586 9C14.9765 8.60953 15.6095 8.60953 16 9C16.3905 9.39047 16.3905 10.0235 16 10.414L10.001 16.413Z"
                    fill="#2FAB73"
                  />
                </svg>
                <p>{title}</p>
              </motion.li>
            ))}
          </ul>
        )}
      </motion.div>
    </motion.div>
  );
};

export default AboutUs;
