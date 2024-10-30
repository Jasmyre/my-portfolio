"use client"

import React, { useState, useEffect } from "react";

const FollowCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX - 15, y: event.clientY - 10 });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed hidden lg:block top-0 left-0 opacity-25 z-[999999] size-6 bg-primary mix-blend-difference rounded-full pointer-events-none transition-transform duration-75 ease-out"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    />
  );
};

export default FollowCursor;
