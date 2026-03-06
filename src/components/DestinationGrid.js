"use client";

import { motion } from "framer-motion";
import DestinationCard from "./DestinationCard";
import { getTravelPackages } from "../services/travelService";

export default function DestinationGrid() {
  const travelPackages = getTravelPackages();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  // Smooth, slow, elegant entrance
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {travelPackages.map((pkg) => (
        <motion.div variants={itemVariants} key={pkg.id}>
          <DestinationCard pkg={pkg} imageMode="parallax" />
        </motion.div>
      ))}
    </motion.div>
  );
}
