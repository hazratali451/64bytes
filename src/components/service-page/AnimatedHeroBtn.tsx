"use client";

import React from "react";
import { motion } from "motion/react";
import Button from "../global/Button";

export default function AnimatedHeroBtn({ text = "Projekte im Blick" }) {
  return (
    <motion.div
      className="md:hidden"
      initial={{ y: "60vh" }}
      animate={{ y: 0 }}
      transition={{ delay: 1.5, duration: 1.4, ease: "easeOut" }}
    >
      <Button variant="violet" link="/projekte">{text}</Button>
    </motion.div>
  );
}
