// import React from 'react'
// import {motion} from "framer-motion" 
// import coffee1 from "../../assets/coffee1.png"
// import coffee3 from "../../assets/coffee3.png"
// const servicesDate=[
//   {
//    id:1,
//     image:coffee1,
//     title:"Black Coffee",
//     subtitle:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur"
//   },
//   {
//     id:2,
//      image:coffee3,
//      title:"Hot Coffee",
//      subtitle:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur"
//    },
//    {
//     id:3,
//      image:coffee1,
//      title:"Cold Coffee",
//      subtitle:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur"
//    }
// ]

// const Services = () => {
//   return (
//     <div className='container my-16 space-y-4'>
//       {/* header section */}
//       <div className='text-center max-w-lg mx-auto space-y-2'>
//         <motion.h1 
//         initial={{opacity:0,y:100}}
//         whileInView={{opacity:1,y:0}}
//         transition={{type:"spring",
//         stiffness:150,
//         damping:10,
//         delay:0.2}} className='text-3xl font-bold text-lightGray'>
//             Fresh and <span className='text-primary'>Tasty Cofee</span>
//         </motion.h1>
//         <motion.p 
//          initial={{opacity:0,scale:0.5}}
//          whileInView={{opacity:1,scale:1}}
//          transition={{type:"spring",
//          stiffness:150,
//          damping:10,
//          delay:0.6}} className='text-sm opacity-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sunt sequi facere quae repellat sint animi eligendi dolores magni aut?</motion.p>
//       </div>
//       {/* card section */}
//       <div>
//         {
//           servicesDate.map((service)=>{
//             <div>
//               <img src={service.image} alt='pic not found'/>
//             </div>
//           })
//         }
//       </div>
//     </div>
//   )
// }

// export default Services


import React from 'react'
import {delay, motion} from "framer-motion" 
import coffee1 from "../../assets/coffee1.png"
import coffee3 from "../../assets/coffee3.png"
const servicesDate=[
  {
   id:1,
    image:coffee1,
    title:"Black Coffee",
    subtitle:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur"
  },
  {
    id:2,
     image:coffee3,
     title:"Hot Coffee",
     subtitle:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur"
   },
   {
    id:3,
     image:coffee1,
     title:"Cold Coffee",
     subtitle:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur"
   }
]
 const cardVariants={
  hidden:{opacity:0,y:20},
  visible:{
    opacity:1,
    y:0,
    transition:{duration:0.5,type:"spring",stiffness:150,damping:10,ease:"easeOut"}
  }
 }
 const containerVarants={
  hidden:{opacity:1},
  visible:{
    opacity:1,
    transition:{
      delay:0.6,
      staggerChildren:0.4
    }
  }
 }
const Services = () => {
  return (
    <div className='container my-16 space-y-4'>
      {/* header section */}
      <div className='text-center max-w-lg mx-auto space-y-2'>
        <motion.h1 
        initial={{opacity:0,y:100}}
        whileInView={{opacity:1,y:0}}
        transition={{type:"spring",
        stiffness:150,
        damping:10,
        delay:0.2}} className='text-3xl font-bold text-lightGray'>
            Fresh and <span className='text-primary'>Tasty Cofee</span>
        </motion.h1>
        <motion.p 
         initial={{opacity:0,scale:0.5}}
         whileInView={{opacity:1,scale:1}}
         transition={{type:"spring",
         stiffness:150,
         damping:10,
         delay:0.6}} className='text-sm opacity-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sunt sequi facere quae repellat sint animi eligendi dolores magni aut?</motion.p>
      </div>
      {/* card section */}
      <motion.div 
    //  key={service.id}
      variants={containerVarants}
      initial="hidden"
      whileInView={"visible"}
      viewport={{ amount:0.8}}
      className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
        {
          servicesDate.map((service)=>{
            return (
              <motion.div 
              key={service.id}
              variants={cardVariants}
              // initial="hidden"
              // whileInView={"visible"}
              // viewport={{ amount:0.8}}
              className="text-center p-4 space-y-6">
              <img src={service.image} alt='pic not found' className='img-shadow2 max-width-[200px] mx-auto hover:scale-110 duration-300 cursor-pointer'/>
              <div className='space-y-4'>
                <h1 className='text-2xl font-bold text-primary'>{service.title}</h1>
                <p className='text-darkGray'>{service.subtitle}</p>
              </div>
            </motion.div>
            )
          })
        }
      </motion.div>
    </div>
  )
}

export default Services