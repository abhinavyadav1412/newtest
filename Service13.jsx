import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLink,
  faShieldAlt,
  faQrcode,
  faDatabase,
  faChartLine,
  faFingerprint
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { motion, useAnimation, useInView } from "framer-motion";
import "./Service13.css";

const serviceList = [
  {
    color: "#3b82f6", // blue
    icon: faLink,
    title: "Blockchain Integration",
    description: "Secure pharmaceutical data with immutable blockchain technology.",
  },
  {
    color: "#10b981", // emerald
    icon: faShieldAlt,
    title: "Drug Authentication",
    description: "Verify medicine authenticity with tamper-proof blockchain records.",
  },
  {
    color: "#8b5cf6", // violet
    icon: faQrcode,
    title: "QR Code Tracking",
    description: "Track every product from manufacturer to consumer.",
  },
  {
    color: "#ef4444", // red
    icon: faDatabase,
    title: "Supply Chain Visibility",
    description: "Real-time monitoring of pharmaceutical supply chains.",
  },
  {
    color: "#f59e0b", // amber
    icon: faChartLine,
    title: "Data Analytics",
    description: "Powerful insights from your supply chain data.",
  },
  {
    color: "#ec4899", // pink
    icon: faFingerprint,
    title: "Smart Contracts",
    description: "Automate transactions with blockchain smart contracts.",
  },
];

const ServiceItem = ({ service, index, direction }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  // Special case for QR code card (index 2 in left column)
  const isQRCodeCard = service.title === "QR Code Tracking";
  const delay = isQRCodeCard ? index * 0.1 : index * 0.15;

  useEffect(() => {
    if (isInView) {
      controls.start("animate");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      className={`service-item ${direction}`}
      initial={{ opacity: 0 }}
      animate={controls}
      variants={{
        animate: {
          opacity: 1,
          x: 0,
          rotateY: 0,
          transition: {
            duration: isQRCodeCard ? 0.4 : 0.6, // Faster duration for QR card
            delay: delay,
            ease: isQRCodeCard ? "easeOut" : [0.16, 1, 0.3, 1]
          }
        }
      }}
      whileHover={{ 
        y: -10,
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
    >
      <div className="icon-wrapper" style={{ backgroundColor: service.color }}>
        <FontAwesomeIcon icon={service.icon} />
      </div>
      <div className="text-content">
        <h4>{service.title}</h4>
        <p>{service.description}</p>
      </div>
    </motion.div>
  );
};

const Service13 = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start({
        scale: 1,
        opacity: 1,
        transition: {
          type: "spring",
          damping: 10,
          stiffness: 100,
          delay: 0.2
        }
      });
    }
  }, [isInView, controls]);

  return (
    <section className="service13-section" ref={ref}>
      <div className="container">
        <motion.div 
          className="header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2>Our Services</h2>
          <p>
            Leveraging distributed ledger technology to revolutionize pharmaceutical security and transparency.
          </p>
        </motion.div>

        <div className="service13-grid">
          <div className="service-column">
            {serviceList.slice(0, 3).map((service, i) => (
              <ServiceItem key={i} service={service} index={i} direction="left" />
            ))}
          </div>

          <motion.div
            className="image-column"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={controls}
          >
            <div
              className="service-image"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80)",
              }}
            ></div>
          </motion.div>

          <div className="service-column">
            {serviceList.slice(3, 6).map((service, i) => (
              <ServiceItem key={i + 3} service={service} index={i} direction="right" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service13;



