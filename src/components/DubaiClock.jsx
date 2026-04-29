import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
const clockConfig = [
   
  {
    key: "dubai",
    label: "DUBAI",
    timeZone: "Asia/Dubai",
    flag: "/images/uae.png",
  },
 
];

const DubaiClock = () => {
  const [times, setTimes] = useState({});

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const timeOptions = {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };

      const updatedTimes = {};

      clockConfig.forEach((clock) => {
        updatedTimes[clock.key] = now.toLocaleTimeString("en-US", {
          ...timeOptions,
          timeZone: clock.timeZone,
        });
      });

      setTimes(updatedTimes);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "1vw",
        padding: "0vw 2vw",
        // backdropFilter: "blur(2px)",

        width: "100%",
      }}
    >
      {clockConfig.map((clock) => (
        <Box
          key={clock.key}
          sx={{
            display: "flex",
            alignItems: "center",

            gap: {
              xs: "10px",
              lg: "1vw",
            },
          }}
        >
          <Box
            sx={{
              width: {
                xs: "30px",
                lg: "3vw",
              },
            }}
          >
            <img
              src={clock.flag}
              alt={clock.label}
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "start",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "14px",
                  lg: "1.2vw",
                },
                fontWeight: 500,
                color: "#fff",
                backdropFilter: "blur(0.3vw)",

              }}
            >
              {clock.label}
            </Typography>

            <Typography
              sx={{
                fontSize: {
                  xs: "14px",
                  lg: "1.2vw",
                },
                color: "#fff",
                backdropFilter: "blur(0.3vw)",

              }}
            >
              {times[clock.key] || "--:-- AM"}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default DubaiClock;
