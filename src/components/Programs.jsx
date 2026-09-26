// // import "./Programs.css";

// // function Programs() {
// //   const programs = [
// //     {
// //       number: "01",
// //       category: "CORE",
// //       title: "Computer Science",
// //       description:
// //         "Build strong foundations in software engineering, algorithms, databases and modern computing systems.",
// //       tags: ["Software", "Systems", "Algorithms"],
// //     },
// //     {
// //       number: "02",
// //       category: "CLOUD",
// //       title: "Cloud & Infrastructure",
// //       description:
// //         "Explore cloud platforms, distributed systems, DevOps and the technologies behind scalable applications.",
// //       tags: ["Azure", "DevOps", "Distributed Systems"],
// //     },
// //     {
// //       number: "03",
// //       category: "DATA",
// //       title: "Data & Intelligent Systems",
// //       description:
// //         "Work with data, analytics and emerging intelligent technologies to turn information into useful solutions.",
// //       tags: ["Data", "Analytics", "AI"],
// //     },
// //   ];

// //   return (
// //     <section className="programs-section" id="academics">
// //       <div className="programs-container">

// //         <div className="programs-header">
// //           <div>
// //             <span className="section-label">
// //               ACADEMICS
// //             </span>

// //             <h2>
// //               Learn the
// //               <br />
// //               <span>systems behind</span>
// //               <br />
// //               the future.
// //             </h2>
// //           </div>

// //           <p>
// //             Our academic approach combines strong technical
// //             foundations with practical experience across
// //             modern computing and cloud technologies.
// //           </p>
// //         </div>

// //         <div className="programs-grid">
// //           {programs.map((program) => (
// //             <article
// //               className="program-card"
// //               key={program.number}
// //             >
// //               <div className="program-top">
// //                 <span className="program-number">
// //                   {program.number}
// //                 </span>

// //                 <span className="program-category">
// //                   {program.category}
// //                 </span>
// //               </div>

// //               <div className="program-body">
// //                 <h3>{program.title}</h3>

// //                 <p>{program.description}</p>
// //               </div>

// //               {/* <div className="program-bottom">
// //                 <div className="program-tags">
// //                   {program.tags.map((tag) => (
// //                     <span key={tag}>{tag}</span>
// //                   ))}
// //                 </div>

// //                 <span className="program-arrow">
// //                   ↗
// //                 </span>
// //               </div> */}

              
              
// //             </article>
// //           ))}
// //         </div>

// //       </div>
// //     </section>
// //   );
// // }

// // export default Programs;


// import "./Programs.css";

// function Programs() {
//   const programs = [
//     {
//       number: "01",
//       category: "CORE",
//       title: "Computer Science",
//       description:
//         "Build strong foundations in software engineering, algorithms, databases and modern computing systems.",
//       tags: ["Software", "Systems", "Algorithms"],
//     },
//     {
//       number: "02",
//       category: "CLOUD",
//       title: "Cloud & Infrastructure",
//       description:
//         "Explore cloud platforms, distributed systems, DevOps and the technologies behind scalable applications.",
//       tags: ["Azure", "DevOps", "Distributed Systems"],
//     },
//     {
//       number: "03",
//       category: "DATA",
//       title: "Data & Intelligent Systems",
//       description:
//         "Work with data, analytics and emerging intelligent technologies to turn information into useful solutions.",
//       tags: ["Data", "Analytics", "AI"],
//     },
//   ];

//   return (
//     <section className="programs-section" id="academics">
//       <div className="programs-container">

//         {/* Section Header */}
//         <div className="programs-header">
//           <div>
//             <span className="section-label">
//               ACADEMICS
//             </span>

//             <h2>
//               Learn the
//               <br />
//               <span>systems behind</span>
//               <br />
//               the future.
//             </h2>
//           </div>

//           <p>
//             Our academic approach combines strong technical
//             foundations with practical experience across
//             modern computing and cloud technologies.
//           </p>
//         </div>

//         {/* Program Cards */}
//         <div className="programs-grid">
//           {programs.map((program) => (
//             <article
//               className="program-card"
//               key={program.number}
//             >
//               {/* Card Top */}
//               <div className="program-top">
//                 <span className="program-number">
//                   {program.number}
//                 </span>

//                 <span className="program-category">
//                   {program.category}
//                 </span>
//               </div>

//               {/* Card Content */}
//               <div className="program-body">
//                 <h3>{program.title}</h3>

//                 <p>{program.description}</p>
//               </div>

//               {/* Card Tags */}
//               <div className="program-bottom">
//                 <div className="program-tags">
//                   {program.tags.map((tag) => (
//                     <span key={tag}>{tag}</span>
//                   ))}
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }

// export default Programs;


import "./Programs.css";

function Programs() {
  const programs = [
    {
      number: "01",
      category: "CORE",
      title: "Computer Science",
      description:
        "Build strong foundations in software engineering, algorithms, databases and modern computing systems.",
      tags: ["Software", "Systems", "Algorithms"],
      image: "/images/computer-science.jpg",
      alt: "Computer science and programming",
    },
    {
      number: "02",
      category: "CLOUD",
      title: "Cloud & Infrastructure",
      description:
        "Explore cloud platforms, distributed systems, DevOps and the technologies behind scalable applications.",
      tags: ["Azure", "DevOps", "Distributed Systems"],
      image: "/images/cloud-infrastructure.jpg",
      alt: "Cloud infrastructure and computing",
    },
    {
      number: "03",
      category: "DATA",
      title: "Data & Intelligent Systems",
      description:
        "Work with data, analytics and emerging intelligent technologies to turn information into useful solutions.",
      tags: ["Data", "Analytics", "AI"],
      image: "/images/data-intelligent.jpg",
      alt: "Data analytics and intelligent systems",
    },
  ];

  return (
    <section className="programs-section" id="academics">
      <div className="programs-container">

        {/* Section Header */}
        <div className="programs-header">
          <div>
            <span className="section-label">
              ACADEMICS
            </span>

            <h2>
              Learn the
              <br />
              <span>systems behind</span>
              <br />
              the future.
            </h2>
          </div>

          <p>
            Our academic approach combines strong technical
            foundations with practical experience across
            modern computing and cloud technologies.
          </p>
        </div>

        {/* Program Cards */}
        <div className="programs-grid">
          {programs.map((program) => (
            <article
              className="program-card"
              key={program.number}
            >

              {/* Image */}
              <div className="program-image">
                <img
                  src={program.image}
                  alt={program.alt}
                />

                <div className="image-overlay"></div>
              </div>

              {/* Card Content */}
              <div className="program-card-content">

                {/* Card Top */}
                <div className="program-top">
                  <span className="program-number">
                    {program.number}
                  </span>

                  <span className="program-category">
                    {program.category}
                  </span>
                </div>

                {/* Card Body */}
                <div className="program-body">
                  <h3>{program.title}</h3>

                  <p>{program.description}</p>
                </div>

                {/* Card Tags */}
                <div className="program-bottom">
                  <div className="program-tags">
                    {program.tags.map((tag) => (
                      <span key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Programs;