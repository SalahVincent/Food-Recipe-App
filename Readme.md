## 🛠️ Tech Stack

### Frontend (The User Experience)

- **Framework:** [React.js](https://reactjs.org/) (Vite-powered for high-performance builds)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (Utility-first CSS for responsive, modern UI)
- **State Management:** [React Context API](https://reactjs.org/docs/context.html) (Transitioning to **React Query** for server-state caching)
- **Icons & UI:** [Lucide React](https://lucide.dev/) & [Framer Motion](https://www.framer.com/motion/) (For smooth social interactions and animations)

### Backend (The Logic Engine)

- **Environment:** [Node.js](https://nodejs.org/)
- **Framework:** [Express.js](https://expressjs.com/) (Robust routing for social feeds and user actions)
- **ORM:** [Sequelize](https://sequelize.org/) (Object-Relational Mapping for PostgreSQL)
- **Real-time:** [Socket.io](https://socket.io/) (Powering live notifications for ratings and saves)
- **Authentication:** [JSON Web Tokens (JWT)](https://jwt.io/) & [Bcrypt.js](https://github.com/kelektiv/node.bcrypt.js) (Secure session management and password hashing)

### Database & Storage

- **Primary Database:** [PostgreSQL](https://www.postgresql.org/) (Relational database optimized for complex social graphs)
- **Image Hosting:** [Cloudinary](https://cloudinary.com/) (Cloud-based media management for user-uploaded recipe covers)

### Dev Ops & Workflow

- **Monorepo Management:** [Concurrently](https://www.npmjs.com/package/concurrently) (Run client and server with a single command)
- **Version Control:** Git & GitHub (Feature-branch workflow)
- **Database Tooling:** [Postbird](https://www.electronjs.org/apps/postbird) / [pgAdmin](https://www.pgadmin.org/)
