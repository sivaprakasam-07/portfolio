// import React from 'react';

// const certifications = [
//   {
//     name: 'Advanced Web Development',
//     organization: 'Udacity',
//     date: '2023',
//     logo: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=100',
//   },
//   {
//     name: 'MERN Stack Development',
//     organization: 'Coursera',
//     date: '2022',
//     logo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=100',
//   },
// ];

// const Certifications = () => {
//   return (
//     <section id="certifications" className="py-20 bg-gradient-to-br from-black via-gray-900 to-gray-800">
//       <div className="container mx-auto px-6">
//         <h2 className="text-5xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
//           Certifications
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
//           {certifications.map((cert, index) => (
//             <div
//               key={index}
//               className="group glass-effect p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
//             >
//               <div className="flex items-center gap-6">
//                 <div className="w-20 h-20 rounded-full overflow-hidden ring-2 ring-purple-500/30">
//                   <img
//                     src={cert.logo}
//                     alt={cert.organization}
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                   />
//                 </div>
//                 <div>
//                   <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:from-blue-400 group-hover:to-cyan-500 transition-colors duration-300">
//                     {cert.name}
//                   </h3>
//                   <p className="text-gray-300 mt-1">{cert.organization}</p>
//                   <p className="text-gray-400 text-sm mt-1">{cert.date}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Certifications;