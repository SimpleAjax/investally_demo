"use client";

import { useEffect, useRef } from "react";

export default function CopyAttribution({ children }: { children: React.ReactNode }) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleCopy = (e: ClipboardEvent) => {
            const selection = window.getSelection();
            if (!selection || selection.rangeCount === 0) return;

            // Check if the selection is within our container (or at least starts there)
            if (!container.contains(selection.anchorNode)) return;

            const selectedText = selection.toString();
            // Only hijack if text is selected
            if (!selectedText || selectedText.length < 10) return;

            e.preventDefault();

            const pageUrl = window.location.href;

            // Prepare plain text version
            // User requested that the copied content should NOT be part of the clipboard, 
            // and only the attribution should be present (replacing the content).
            const attributionPlain = `Read more at: ${pageUrl}\nCopyright © InvestAlly`;
            const newText = attributionPlain;

            if (e.clipboardData) {
                // Set plain text
                e.clipboardData.setData("text/plain", newText);

                // Set HTML version
                try {
                    const attributionHtml = `Read more at: <a href="${pageUrl}">${pageUrl}</a><br/>Copyright © InvestAlly`;
                    e.clipboardData.setData("text/html", attributionHtml);
                } catch (err) {
                    console.error("Failed to set HTML clipboard data", err);
                }
            }
        };

        document.addEventListener("copy", handleCopy);

        return () => {
            document.removeEventListener("copy", handleCopy);
        };
    }, []);

    return <div ref={containerRef}>{children}</div>;
}
