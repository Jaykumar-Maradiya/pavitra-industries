'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';

export interface Motor360ViewerProps {
  images?: string[];
  spriteSheet?: string; // Single merged 3D image sprite sheet
  totalFrames?: number; // Total number of angles in the single 3D image (default 8)
  alt?: string;
  initialIndex?: number;
  autoRotate?: boolean;
  autoRotateSpeed?: number;
  className?: string;
  badgeLabel?: string;
}

export function Motor360Viewer({
  images,
  spriteSheet = '/images/360/induction-motor/motor_3d_spritesheet.webp',
  totalFrames: propTotalFrames,
  alt = 'Motor 3D View',
  initialIndex = 0,
  autoRotate = false,
  autoRotateSpeed = 220,
  className = '',
}: Motor360ViewerProps) {
  const totalFrames = propTotalFrames || (images ? images.length : 8);

  const [currentIndex, setCurrentIndex] = useState(
    Math.max(0, Math.min(initialIndex, totalFrames - 1))
  );
  const [isDragging, setIsDragging] = useState(false);
  const [isPlaying] = useState(autoRotate);

  const containerRef = useRef<HTMLDivElement>(null);
  const startXRef = useRef<number>(0);
  const startIndexRef = useRef<number>(0);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Preload single sprite sheet
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (spriteSheet) {
      const img = new Image();
      img.src = spriteSheet;
    }
  }, [spriteSheet]);

  const nextFrame = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalFrames);
  }, [totalFrames]);

  const prevFrame = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalFrames) % totalFrames);
  }, [totalFrames]);

  // Autoplay loop (if enabled)
  useEffect(() => {
    if (isPlaying && !isDragging && totalFrames > 1) {
      autoPlayTimerRef.current = setInterval(() => {
        nextFrame();
      }, autoRotateSpeed);
    } else {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
      }
    }
    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
      }
    };
  }, [isPlaying, isDragging, totalFrames, autoRotateSpeed, nextFrame]);

  // CAD-style 3D Rotation dragging
  const handlePointerDown = (clientX: number) => {
    setIsDragging(true);
    startXRef.current = clientX;
    startIndexRef.current = currentIndex;
  };

  const handlePointerMove = (clientX: number) => {
    if (!isDragging || totalFrames <= 1) return;

    const deltaX = clientX - startXRef.current;
    // Granular sensitivity: ~18px horizontal movement steps 1 angle
    const sensitivity = 18;
    const frameOffset = Math.round(deltaX / sensitivity);

    let newIndex = (startIndexRef.current - frameOffset) % totalFrames;
    if (newIndex < 0) {
      newIndex += totalFrames;
    }
    setCurrentIndex(newIndex);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handlePointerDown(e.clientX);
  };

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        handlePointerMove(e.clientX);
      }
    };
    const onMouseUp = () => {
      if (isDragging) {
        handlePointerUp();
      }
    };

    if (isDragging) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', onMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [isDragging, totalFrames]);

  const onTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      handlePointerDown(e.touches[0].clientX);
    }
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      handlePointerMove(e.touches[0].clientX);
    }
  };

  const onTouchEnd = () => {
    handlePointerUp();
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prevFrame();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      nextFrame();
    }
  };

  if (totalFrames === 0) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      onKeyDown={onKeyDown}
      tabIndex={0}
      role="region"
      aria-label={`${alt} 3D CAD rotation view`}
    >
      {/* Pure borderless, transparent CAD Viewport */}
      <div
        className={`relative flex items-center justify-center overflow-hidden touch-pan-y ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* Single Merged 3D CAD Object */}
        <div
          className="w-[340px] h-[260px] max-w-full bg-no-repeat pointer-events-none transition-none"
          style={{
            backgroundImage: `url(${spriteSheet})`,
            backgroundSize: `${totalFrames * 100}% 100%`,
            backgroundPosition: `${(currentIndex / (totalFrames - 1)) * 100}% 50%`,
          }}
          role="img"
          aria-label={alt}
        />
      </div>
    </div>
  );
}
