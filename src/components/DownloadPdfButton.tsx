'use client'
import React from 'react'
import Button from './ui/Button'

const DownloadPdfButton = () => {
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/cv-main.pdf";   // chemin vers ton CV dans public/
        link.download = "Mon-CV.pdf"; // nom du fichier téléchargé
        link.click();
    }

    return (
        <Button onClick={handleDownload}>
            Download CV
        </Button>
    )
}

export default DownloadPdfButton