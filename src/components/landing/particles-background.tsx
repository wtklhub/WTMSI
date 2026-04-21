"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";
import { useTheme } from "@/hooks/use-theme";

export function ParticlesBackground({ id = "particles-bg" }: { id?: string }) {
  const [init, setInit] = useState(false);
  const { theme } = useTheme();

  const particlesConfig = useMemo<ISourceOptions>(() => {
    const isDarkTheme = theme === "dark";

    return {
      fullScreen: false,
      fpsLimit: 120,
      particles: {
        number: {
          value: 120,
          density: {
            enable: true,
          },
        },
        color: {
          value: isDarkTheme
            ? ["#c60000", "#ff3333", "#f1f4f9", "#c7c8bd", "#ffffff"]
            : ["#c60000", "#ff3333", "#475569", "#94a3b8", "#cbd5e1"],
        },
        shape: {
          type: ["circle", "triangle"],
        },
        opacity: {
          value: { min: 0.05, max: 0.6 },
          animation: {
            enable: true,
            speed: 1.2,
            startValue: "random",
            sync: false,
          },
        },
        size: {
          value: { min: 1, max: 5 },
          animation: {
            enable: true,
            speed: 3,
            startValue: "random",
            sync: false,
          },
        },
        links: {
          enable: true,
          distance: 130,
          color: isDarkTheme ? "#c7c8bd" : "#94a3b8",
          opacity: 0.12,
          width: 1,
          triangles: {
            enable: true,
            opacity: 0.02,
          },
        },
        move: {
          enable: true,
          speed: 1.2,
          direction: "none",
          random: true,
          straight: false,
          outModes: {
            default: "out",
          },
          attract: {
            enable: true,
            rotate: {
              x: 600,
              y: 1200,
            },
          },
        },
        twinkle: {
          particles: {
            enable: true,
            frequency: 0.03,
            opacity: 0.8,
            color: { value: "#c60000" },
          },
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: ["grab", "bubble"],
          },
          onClick: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          grab: {
            distance: 200,
            links: {
              opacity: 0.4,
              color: "#c60000",
            },
          },
          bubble: {
            distance: 250,
            size: 6,
            duration: 2,
            opacity: 0.6,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      detectRetina: true,
    };
  }, [theme]);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  if (!init) return null;

  return (
    <Particles
      id={id}
      className="absolute inset-0 z-0"
      options={particlesConfig}
      particlesLoaded={particlesLoaded}
    />
  );
}
