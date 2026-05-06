import React, { useEffect, useState } from "react";

const clockConfig = [
  {
    key: "hongkong",
    label: "HONG KONG",
    timeZone: "Asia/Hong_Kong",
    flag: "/images/hongkong.png",
  },
  {
    key: "london",
    label: "LONDON",
    timeZone: "Europe/London",
    flag: "/images/uk.png",
  },
  {
    key: "chicago",
    label: "CHICAGO",
    timeZone: "America/Chicago",
    flag: "/images/chicago.png",
  },
];

export default function WorldClockCircular() {
  const [times, setTimes] = useState({});

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const opts = { hour: "2-digit", minute: "2-digit", hour12: true };
      const next = {};
      clockConfig.forEach((c) => {
        next[c.key] = now.toLocaleTimeString("en-US", {
          ...opts,
          timeZone: c.timeZone,
        });
      });
      setTimes(next);
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex items-center justify-center gap-[2vw]">
    {clockConfig.map((c) => (
      <div
        key={c.key}
        className="
        w-[10vw] h-[10vw] rounded-full p-[0.9vw]
        bg-gradient-to-br from-white/20 to-white/5
        backdrop-blur-sm
        border border-white/30
        "
      >
        <div
          className="w-full h-full rounded-full overflow-hidden 
          border-[0.35vw] border-[#392F2D] 
          ring-[0.35vw] ring-[#E7C788]
          bg-[#392F2D] flex flex-col items-center"
        >
          <div
            className="w-full overflow-hidden flex-shrink-0"
            style={{ height: "50%" }}
          >
            <img
              src={c.flag}
              alt={c.label}
              className="w-full h-full object-cover"
            />
          </div>
  
          {/* City + Time */}
          <div className="flex flex-col items-center justify-center flex-1 pb-[0.2vw]">
            <span className="text-[#b89840] text-[0.7vw] font-semibold tracking-[0.15vw] uppercase leading-none mb-[0.1vw]">
              {c.label}
            </span>
            <span className="text-[#f0e8d0] text-[1.2vw] font-bold tracking-[0.05vw] leading-tight">
              {times[c.key] || "--:-- AM"}
            </span>
          </div>
        </div>
      </div>
    ))}
  </div>
  
  );
}
