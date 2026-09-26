// import "./Events.css";

// function Events() {
//   const events = [
//     {
//       date: "12",
//       month: "OCT",
//       title: "Cloud Computing Workshop",
//       type: "WORKSHOP",
//       description:
//         "Hands-on exploration of cloud architecture, deployment and modern infrastructure.",
//     },
//     {
//       date: "24",
//       month: "OCT",
//       title: "Innovation Showcase",
//       type: "SHOWCASE",
//       description:
//         "Students present technology projects, prototypes and ideas built throughout the semester.",
//     },
//     {
//       date: "08",
//       month: "NOV",
//       title: "CloudConnect Hack Day",
//       type: "HACKATHON",
//       description:
//         "A collaborative challenge where students build, test and deploy technology solutions.",
//     },
//   ];

//   return (
//     <section className="events-section" id="events">
//       <div className="events-container">

//         <div className="events-header">
//           <div>
//             <span className="section-label">
//               EVENTS & ACTIVITIES
//             </span>

//             <h2>
//               Learn beyond
//               <br />
//               <span>the classroom.</span>
//             </h2>
//           </div>

//           <p>
//             Workshops, showcases and collaborative challenges
//             give students opportunities to experiment, build
//             and share their work.
//           </p>
//         </div>

//         <div className="events-list">
//           {events.map((event) => (
//             <article className="event-item" key={event.title}>

//               <div className="event-date">
//                 <strong>{event.date}</strong>
//                 <span>{event.month}</span>
//               </div>

//               <div className="event-info">
//                 <span className="event-type">
//                   {event.type}
//                 </span>

//                 <h3>{event.title}</h3>

//                 <p>{event.description}</p>
//               </div>

//               <div className="event-mark">
//                 ↗
//               </div>

//             </article>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }

// export default Events;


import "./Events.css";

function Events() {
  const events = [
    {
      date: "12",
      month: "OCT",
      title: "Cloud Computing Workshop",
      type: "WORKSHOP",
      description:
        "Hands-on exploration of cloud architecture, deployment and modern infrastructure.",
    },
    {
      date: "24",
      month: "OCT",
      title: "Innovation Showcase",
      type: "SHOWCASE",
      description:
        "Students present technology projects, prototypes and ideas built throughout the semester.",
    },
    {
      date: "08",
      month: "NOV",
      title: "CloudConnect Hack Day",
      type: "HACKATHON",
      description:
        "A collaborative challenge where students build, test and deploy technology solutions.",
    },
  ];

  return (
    <section className="events-section" id="events">
      <div className="events-container">

        {/* Header */}
        <div className="events-header">
          <div>
            <span className="section-label">
              EVENTS & ACTIVITIES
            </span>

            <h2>
              Learn beyond
              <br />
              <span>the classroom.</span>
            </h2>
          </div>

          <p>
            Workshops, showcases and collaborative challenges
            give students opportunities to experiment, build
            and share their work.
          </p>
        </div>

        {/* Events */}
        <div className="events-list">
          {events.map((event) => (
            <article
              className="event-item"
              key={event.title}
            >
              {/* Date */}
              <div className="event-date">
                <strong>{event.date}</strong>
                <span>{event.month}</span>
              </div>

              {/* Information */}
              <div className="event-info">
                <span className="event-type">
                  {event.type}
                </span>

                <h3>{event.title}</h3>

                <p>{event.description}</p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Events;