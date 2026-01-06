export const projects = [
  {
    title: 'Email Submission App',
    description:
      'A lightweight serverless web application that allows users to submit a form and automatically receive a confirmation email.',
    tech: ['React', 'AWS S3', 'AWS Lambda', 'AWS SES'],
    images: [
      `${import.meta.env.BASE_URL}assets/email-submission/img1.png`,
      `${import.meta.env.BASE_URL}assets/email-submission/img2.png`
    ]
  },
  {
    title: 'Dmago Guest House App',
    description:
      'A guest house management system with admin and customer roles. Admins manage rooms, bookings, payments, and complaints, while customers can book rooms, write reviews, and check availability.',
    tech: [
      'React',
      'TypeScript',
      'Golang (Gin)',
      'PostgreSQL',
      'AWS RDS',
      'AWS S3',
      'AWS Lambda'
    ],
    github: 'https://github.com/Rico0418/Dmango_Project',
    images: [
      `${import.meta.env.BASE_URL}assets/dmango/img1.png`,
      `${import.meta.env.BASE_URL}assets/dmango/img2.png`,
      `${import.meta.env.BASE_URL}assets/dmango/img3.png`,
      `${import.meta.env.BASE_URL}assets/dmango/img4.png`,
      `${import.meta.env.BASE_URL}assets/dmango/img5.png`,
      `${import.meta.env.BASE_URL}assets/dmango/img6.png`,
      `${import.meta.env.BASE_URL}assets/dmango/img7.png`,
      `${import.meta.env.BASE_URL}assets/dmango/img8.png`,
      `${import.meta.env.BASE_URL}assets/dmango/img9.png`,
    ]
  },
  {
    title: 'Document Management App',
    description:
      'An enterprise document management system built on top of the Teedy API with custom workflows, versioning, watermarking, external file editing, and webhook integrations.',
    tech: [
      'React',
      'TypeScript',
      'Golang (Gin)',
      'MongoDB',
      'Material UI',
      'Docker'
    ],
    github: null,
    images: [
      `${import.meta.env.BASE_URL}assets/document-management/img1.png`,
      `${import.meta.env.BASE_URL}assets/document-management/img2.png`,
      `${import.meta.env.BASE_URL}assets/document-management/img3.png`,
      `${import.meta.env.BASE_URL}assets/document-management/img4.png`
    ]
  },
  {
    title: 'E-commerce & Inventory Management Backend',
    description:
      'A scalable backend system using Redis caching and RabbitMQ for asynchronous order processing and reliable inventory updates.',
    tech: ['Golang (Gin)', 'PostgreSQL', 'Redis', 'RabbitMQ'],
    github: 'https://github.com/Rico0418/E-commerce-Order-Inventory-System',
    images: null
  }
]
