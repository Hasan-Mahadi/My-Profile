'use client';

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

export default function DownloadCV() {
  return (
    <a href="/My-Resume-25.pdf" download>
      <Button
        variant="outline"
        size="lg"
        className="uppercase flex items-center gap-2"
      >
        <span>Download CV</span>
        <FiDownload className="text-xl" />
      </Button>
    </a>
  );
}
