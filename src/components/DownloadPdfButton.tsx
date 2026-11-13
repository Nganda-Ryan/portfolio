'use client'
import React from 'react'
import { DownloadIcon } from "@animateicons/react/lucide";
import Button from './ui/Button'

const DownloadPdfButton = ({ label = "Download resume" }: { label?: string }) => {
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/cv-main.pdf";
        link.download = "Steve-Loic-NGANDA-ONANA-Resume.pdf";
        link.click();
    }

    return (
        <Button onClick={handleDownload}>
            <span className="inline-flex items-center gap-2">
                {label}
                <DownloadIcon size={18} color="currentColor" />
            </span>
        </Button>
    )
}

export default DownloadPdfButton