import React from 'react'

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus sint modi a, corrupti ipsam aspernatur sequi expedita, omnis minus doloribus ullam labore quo. Est dolore natus officia impedit perferendis error, corrupti ipsum ducimus nesciunt amet, aspernatur illo! Facilis, facere quo.</p>
            
            <br />
            <p className="text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur illo qui eligendi beatae, libero quod! Saepe sint tempora consequatur molestias exercitationem repudiandae, ea pariatur autem quos quam? Sint dolores itaque commodi ea non accusantium laborum perferendis, minima qui vitae est corrupti maxime aut iste eius quae accusamus ipsa! Quidem, sint!</p>
        </div>
    </div>
  )
}

export default About