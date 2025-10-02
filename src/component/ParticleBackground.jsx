import { color, distance } from "framer-motion";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

function ParticleBackground() {
    const particlesInit =useCallback( async engine => {
        await loadslim(engine)
    },[])

    return(
        <Particles id="tsparticles" init={particlesInit} options={{
            background: {
                color:{
                    value: "transparent",
                },
            },
            fpsLimit:60,
            particles: {
                color: {
                    value:"#00d4ff",
                },
                links: {
                    color: "#00d4ff",
                    distance:150,
                    enable:true,
                    opacity:0.3,
                    width: 1,
                },
                move: {
                    enable:true,
                    speed: 1,
                    direction: "none",
                    random: false,
                    straight: false,
                    outModes: {
                         default:"bounce",
                    },
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 800,
                },
                opacity: {
                    value: 0.5,
                },
                size: {
                    value: {min:1,max:3},
                },
            },
            detectRetina: true,
            interactivity: {
                events: {
                    onHover: {
                        enable:true,
                        mode: "grab",
                    },
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                },
                modes: {
                    grab: {
                        distance: 140,
                        links: {
                            opacity:0.5,
                        },
                    },
                    push:{
                        quantity:4,
                    },
                },
            },
        }}
        className="absolute inset-0 -z-10"
      />
    )
}
export default ParticleBackground