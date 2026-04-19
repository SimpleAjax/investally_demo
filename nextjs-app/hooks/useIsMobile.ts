"use client";

import { useState, useEffect } from "react";

/**
 * Hook to detect if the user is on a mobile device
 * Uses user agent detection for distinguishing mobile from desktop
 */
export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      if (typeof navigator !== "undefined") {
        const userAgent = navigator.userAgent.toLowerCase();
        const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile|tablet/i.test(userAgent);
        setIsMobile(isMobileDevice);
      }
    };

    checkMobile();
    
    // Re-check on resize (in case of tablet mode switches, etc.)
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
}