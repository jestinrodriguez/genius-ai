"use client"

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web"

const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("91a8e7b7-8f94-4260-83ff-cf2848710b48");
    }, []);
  return null;
}

export default CrispChat