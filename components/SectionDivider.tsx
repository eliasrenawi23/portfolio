"use client";

import React from "react";
import { motion } from "framer-motion";

const SectionDivider = () => {
    return (
        <motion.div
            className="bg-border my-12 h-12 w-[1px] hidden sm:block"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.125 }}
        ></motion.div>
    );
}

export default SectionDivider;