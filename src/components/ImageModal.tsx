import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ZoomIn, ZoomOut } from "lucide-react";
import { useState } from "react";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
}

export const ImageModal = ({ isOpen, onClose, imageSrc, imageAlt }: ImageModalProps) => {
  const [zoom, setZoom] = useState(1);

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 0.25, 0.5));
  };

  const handleClose = () => {
    setZoom(1);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 overflow-hidden bg-background/95 backdrop-blur">
        {/* Header with controls */}
        <div className="absolute top-4 right-4 z-50 flex items-center gap-2">
          <button
            onClick={handleZoomOut}
            className="p-2 rounded-full bg-background/80 hover:bg-background border border-border shadow-lg transition-colors"
            aria-label="Zoom out"
          >
            <ZoomOut className="w-5 h-5" />
          </button>
          <button
            onClick={handleZoomIn}
            className="p-2 rounded-full bg-background/80 hover:bg-background border border-border shadow-lg transition-colors"
            aria-label="Zoom in"
          >
            <ZoomIn className="w-5 h-5" />
          </button>
          <button
            onClick={handleClose}
            className="p-2 rounded-full bg-background/80 hover:bg-background border border-border shadow-lg transition-colors"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Zoom level indicator */}
        <div className="absolute top-4 left-4 z-50 px-3 py-1.5 rounded-full bg-background/80 border border-border shadow-lg text-sm font-medium">
          {Math.round(zoom * 100)}%
        </div>

        {/* Image container with scroll */}
        <div className="w-full h-[95vh] overflow-auto flex items-center justify-center p-8">
          <img
            src={imageSrc}
            alt={imageAlt}
            style={{ 
              transform: `scale(${zoom})`,
              transition: 'transform 0.2s ease-out',
            }}
            className="max-w-full h-auto object-contain"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
