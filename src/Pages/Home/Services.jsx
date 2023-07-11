import React from 'react'

function Services() {
  return (
    <div className="space-y-10">
      <section id="training" className="bg-gray-200 p-4 rounded-md">
         <h3 className="text-lg font-semibold text-blue-800">Achieve Your Goals:</h3>
         <h2 className="text-2xl font-bold text-blue-600">Personal Training</h2>
         <p className="mt-2 text-gray-700">Take the first step toward achieving your health and fitness goals with our personalized fitness plans.</p>
      </section>
      
      <section id="videography" className="bg-gray-200 p-4 rounded-md">
         <h3 className="text-lg font-semibold text-blue-800">Spread the Message:</h3>
         <h2 className="text-2xl font-bold text-blue-600">Videography</h2>
         <p className="mt-2 text-gray-700">We create high-quality video content to help businesses and individuals share their message.</p>
      </section>
      
      <section id="software" className="bg-gray-200 p-4 rounded-md">
         <h2 className="text-lg font-semibold text-blue-800">Increase Visibility:</h2>
         <p className="mt-2 text-gray-700">We offer custom software development services to help businesses improve their visibility and maximize their
            outreach potential.</p>
      </section>
    </div>
  )
}

export default Services
