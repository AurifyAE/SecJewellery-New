import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { Clock4 } from "lucide-react";

const SystemClock = () => {
  const [timeData, setTimeData] = useState({
    day: "",
    date: "",
    time: "",
  });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const dayStr = now
        .toLocaleDateString("en-GB", { weekday: "long" })
        .toUpperCase();

      const dateStr = now
        .toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })
        .toUpperCase();

      const timeStr = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });

      setTimeData({
        day: dayStr,
        date: dateStr,
        time: timeStr,
      });
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "start",
        gap: ".7vw",
        borderRadius: "20px",
      }}
    >
      {/* Date */}
      <Typography
        sx={{
          fontSize: {
            xs: "12px",
            sm: "2vw",
          },
          fontWeight: 400,
          letterSpacing: "2px",
          lineHeight: "1",
          color: "#FFFFFF",
          fontFamily: "Nexa",
        }}
      >
        {timeData.date || "-- --- ----"}
      </Typography>
      {/* Day */}
      <Typography
        sx={{
          fontSize: {
            xs: "12px",
            sm: "1vw",
          },
          lineHeight: "1",
          color: "#E7C788",
          letterSpacing: "2px",
        }}
      >
        {timeData.day || "-----"}
      </Typography>
      <Typography
        sx={{
          fontSize: {
            xs: "12px",
            sm: "1vw",
          },
          lineHeight: "1",
          color: "#fff",
          letterSpacing: "2px",
          display: "flex",
          alignItems: "center",
          gap: ".3vw",
          fontFamily: "Nexa",
        }}
      >
        <Clock4 />
        {timeData.time || "-----"}
      </Typography>
    </Box>
  );
};

export default SystemClock;
