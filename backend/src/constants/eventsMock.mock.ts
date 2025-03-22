export const mockEvents = [
  {
    id: "evt_001",
    name: "Sunset Rooftop Portrait Session",
    host: ["user_123", "user_456"],
    session: [
      {
        sessionID: "sess_001",
        startDate: "2025-04-10T08:00:00",
        endDate: "2025-04-10T10:00:00",
        available: 5,
      },
      {
        sessionID: "sess_002",
        startDate: "2025-04-10T13:00:00",
        endDate: "2025-04-10T15:00:00",
        available: 3,
      },
      {
        sessionID: "sess_003",
        startDate: "2025-04-10T18:00:00",
        endDate: "2025-04-10T20:00:00",
        available: 4,
      },
    ],
    price: 120.0,
    location: {
      name: "Studio Aurora Rooftop",
      address: "1234 Sunset Blvd, Toronto, ON, Canada",
    },
    notice: {
      inPerson: true,
      indoor: false,
      outdoor: true,
      online: false,
      parking: true,
    },
    tags: ["Portraits", "Outdoor", "Golden Hour", "Canada Events"],
    eventDetail:
      "<h2><strong style='color: #e67e22;'>Join our rooftop portrait shoot!</strong></h2><p>Capture stunning portraits with golden-hour light. <a href='https://example.com'>Book Now</a></p><iframe width='560' height='315' src='https://www.youtube.com/embed/dQw4w9WgXcQ' frameborder='0' allowfullscreen></iframe>",
    imagesURL: [
      "https://example.com/images/event1.jpg",
      "https://example.com/images/event2.jpg",
      "https://example.com/images/event3.jpg",
    ],
    createUser: "user_admin_001",
    createAt: "2025-03-21T10:00:00",
    logUser: "firebase_uid_abc123",
    updateAt: "2025-03-21T12:30:00",
  },
];
