# 🏗️ Cooker CMR: Project Roadmap & Strategic Plan

## 1. Project Vision
To transform a personal recipe manager into a **Social Culinary Network** where creators share high-quality recipes, and users discover content through a merit-based **Rating System** rather than simple likes.

---

## 2. Core Social Mechanics
* **The Rating Standard:** Quality is measured by a 1–5 star rating system. This creates a data-driven feed where the best-tasting recipes naturally rise to the top.
* **Collections (Saves):** A utility feature allowing users to build their own private digital cookbooks from the public feed.
* **Creator Profiles:** Users can transition from "Home Cooks" to "Creators" with dedicated profiles showcasing their culinary portfolio and average community rating.
* **Real-time Engagement:** An event-driven notification system to alert users of ratings, saves, and new posts from followed creators.

---

## 3. Technical Architecture (The "Monorepo" Stack)

### **Frontend (Client)**
* **Framework:** React.js (Vite)
* **Styling:** Tailwind CSS
* **State Management:** React Context API (Transitioning to React Query for Server Cache)
* **Real-time:** Socket.io-client for instant notifications

### **Backend (Server)**
* **Environment:** Node.js & Express
* **ORM:** **Sequelize** (PostgreSQL)
* **Database:** **PostgreSQL**
* **Auth:** JWT (JSON Web Tokens) with Bcrypt for password hashing

---

## 4. Database Schema Design (The Social Graph)

| Model | Purpose | Relationships |
| :--- | :--- | :--- |
| **Users** | Identity & Auth | Has many Recipes, Ratings, and Notifications |
| **Recipes** | Content | Belongs to a Creator; Has many Ratings and Saves |
| **Ratings** | Social Validation | Junction table between User & Recipe (Stores stars + comments) |
| **Saves** | Utility | Junction table between User & Recipe (The "Bookmark") |
| **Notifications**| Retention | Tracks events (Actor → Action → Recipient) |

---

## 5. Development Phases

### **Phase 1: The Foundation (Current)**
* [ ] Restructure into a **Monorepo** (`/client`, `/server`)
* [ ] Initialize **Sequelize** and establish PostgreSQL connection via `DATABASE_URL`
* [ ] Implement **User Authentication** (Signup/Login/JWT)

### **Phase 2: The Social Core**
* [ ] Connect React `RecipeForm` to Postgres via Sequelize
* [ ] Build the **Rating Engine**: Logic to calculate average scores per recipe
* [ ] Build the **Save/Favorite** functionality (Many-to-Many logic)

### **Phase 3: The Feed & Discovery**
* [ ] Develop the "Discovery Feed" (Global trending recipes sorted by stars)
* [ ] Implement User Profiles (Displaying user-specific recipes and saved meals)
* [ ] Advanced Search (Filtering by ingredients and rating threshold)

### **Phase 4: Real-time & Optimization**
* [ ] Integrate **Socket.io** for live rating/save notifications
* [ ] Image hosting migration (Moving from local Blobs to Cloudinary)
* [ ] Deployment (Vercel + Render/Railway)

---

## 6. Notification Logic Map

| Action | Notification Trigger | Notification Content |
| :--- | :--- | :--- |
| **Rating** | `createRating` | "User A gave your 'Ekwang' recipe 5 stars!" |
| **Saving** | `createSave` | "User A added your recipe to their collection." |
| **New Post** | `createRecipe` | "Chef [Name] just posted a new recipe!" |

---
*Created with the goal of building the #1 Social Recipe Platform in CMR.*