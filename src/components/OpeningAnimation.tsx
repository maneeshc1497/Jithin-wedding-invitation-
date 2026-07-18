import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import GoldParticles from "./GoldParticles";
import RosePetals from "./RosePetals";



interface Props {
  onFinish: () => void;
}

export default function OpeningAnimation({onFinish}:Props){

const [showEnglish,setShowEnglish]=useState(false);
const [visible,setVisible]=useState(true);


useEffect(()=>{

const english = setTimeout(()=>{
setShowEnglish(true);
},2200);


const close = setTimeout(()=>{
setVisible(false);
},5200);


return()=>{
clearTimeout(english);
clearTimeout(close);
}

},[]);


return(

<AnimatePresence
onExitComplete={onFinish}
>

{visible && (

<motion.div

initial={{opacity:1}}

exit={{
opacity:0,
scale:1.08
}}

transition={{
duration:1.5,
ease:"easeInOut"
}}

style={{

position:"fixed",
inset:0,
zIndex:99999,

background:
"radial-gradient(circle,#641327,#25040c)",

display:"flex",
alignItems:"center",
justifyContent:"center",

overflow:"hidden"

}}

>


<GoldParticles/>
<RosePetals/>


<motion.div

style={{
textAlign:"center",
zIndex:10
}}

>


{/* Arabic */}

<motion.div

initial={{
opacity:0,
y:40
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:2
}}

style={{

fontFamily:"Amiri",

fontSize:
"clamp(3rem,7vw,5rem)",

color:"#E8C66A",

textShadow:
"0 0 40px rgba(232,198,106,.6)"

}}

>

بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ

</motion.div>



{/* Line */}

<motion.div

initial={{
width:0
}}

animate={{
width:180
}}

transition={{
delay:1.5,
duration:1
}}

style={{

height:2,

background:"#E8C66A",

margin:"25px auto"

}}

/>



{/* English */}

<AnimatePresence>

{showEnglish && (

<motion.div

initial={{
opacity:0,
y:20
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:1
}}

style={{

color:"#F4E9C7",

fontFamily:
"Cormorant Garamond",

fontSize:"1.3rem",

fontStyle:"italic"

}}

>

In the Name of Allah,

<br/>

the Most Compassionate,

<br/>

the Most Merciful


</motion.div>

)}

</AnimatePresence>


</motion.div>


</motion.div>

)}

</AnimatePresence>


)

}