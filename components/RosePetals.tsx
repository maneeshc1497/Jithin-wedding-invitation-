import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Petal {
  startX: number;
  drift: number;
  duration: number;
  delay: number;
  size: number;
  rotation: number;
}

export default function RosePetals() {

  const [petals, setPetals] = useState<Petal[]>([]);
  const [screen, setScreen] = useState({
    width: 0,
    height: 0
  });


  useEffect(() => {

    setScreen({
      width: window.innerWidth,
      height: window.innerHeight
    });


    setPetals(
      Array.from({length:25}).map(()=>({
        startX:
          Math.random()*window.innerWidth,

        drift:
          Math.random()*120-60,

        duration:
          12 + Math.random()*8,

        delay:
          Math.random()*5,

        size:
          10 + Math.random()*8,

        rotation:
          Math.random()*360
      }))
    );

  },[]);



  if(!screen.width) return null;



  return (

    <>
    {
      petals.map((petal,i)=>(

        <motion.div

        key={i}

        initial={{

          x:petal.startX,

          y:-50,

          rotate:petal.rotation,

          opacity:0

        }}


        animate={{

          y:screen.height + 150,


          x:[

            petal.startX,

            petal.startX + petal.drift,

            petal.startX - petal.drift,

            petal.startX

          ],


          rotate:[

            petal.rotation,

            petal.rotation+180,

            petal.rotation+360

          ],


          opacity:[

            0,

            .8,

            .8,

            0

          ]

        }}


        transition={{

          duration:petal.duration,

          delay:petal.delay,

          repeat:Infinity,

          ease:"linear"

        }}


        style={{

          position:"fixed",

          top:0,

          left:0,


          width:petal.size,

          height:petal.size*1.5,


          background:
          "linear-gradient(135deg,#e8a1ad,#f8d7dc)",


          borderRadius:
          "80% 20% 80% 20%",


          boxShadow:
          "0 3px 12px rgba(120,30,50,.25)",


          pointerEvents:"none"

        }}


        />

      ))
    }

    </>

  );

}