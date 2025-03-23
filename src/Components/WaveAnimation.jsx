import React from "react";

export default function WaveAnimation({ isPlaying }) {
  const waveClass = isPlaying ? "animate-wave" : "";

  return (
    <div className="flex justify-between h-[54px] w-[calc((4px+8px)*13)]">
      {Array.from({ length: 13 }, (_, index) => (
        <div
          key={index}
          className={`w-[4px] h-full bg-gradient-to-b from-[#364562] to-[#C96850] rounded-[18px] scale-[0.4] transition-transform duration-300 ease-in-out ${
            isPlaying ? `animate-${getAnimationName(index)}` : ""
          }`}
        ></div>
      ))}
    </div>
  );
}

const getAnimationName = (index) => {
  const animations = ["quiet", "normal", "quiet", "loud", "quiet", "normal", "quiet"];
  return animations[index % animations.length];
};
