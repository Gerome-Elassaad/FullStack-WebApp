# GiftLink

## Overview

**GiftLink** is a full-stack web application designed to connect users who wish to give away household items with those who prefer recycling and finding free household items to suit their tastes. The platform encourages sustainability by promoting reuse over purchase, offering a user-friendly interface for seamless interaction.

This project is developed as part of a full-stack development capstone, focusing on front-end, back-end, and deployment technologies, along with Agile and DevOps practices.

---

## Features

1. **User-Friendly Interface**:
   - Home Page
   - Listings Page
   - Navigation Bar
   - Search Functionality
   - Item Details Page
   - Registration and Login Pages
   - Editable Profile Page

2. **Backend Development**:
   - API and endpoint development for data retrieval and interaction.
   - Secure authentication using JSON Web Tokens.
   - Search functionality with multiple parameters.

3. **Database**:
   - NoSQL database with MongoDB for scalable and flexible data storage.

4. **Deployment**:
   - Containerized application with Docker.
   - Deployment on cloud platforms, including Kubernetes clusters and IBM Code Engine.
   - CI/CD pipelines implemented with GitHub Actions.

---

## Directory Structure

The project is organized into a structured directory layout for seamless development. The provided skeleton code includes separate files and directories for front-end, back-end, and database functionalities. **Do not modify the file locations or directory structure** to ensure smooth execution and deployment.

---

## Development Roadmap

### Module 1: Initialization and Setup
- Clone the skeleton code repository from GitHub.
- Set up a MongoDB database for data storage.
- Write user stories and create a Kanban board for Agile task management.

### Module 2: Backend Development
- Define API endpoints for resource listings.
- Implement backend services for:
  - Multi-parameter search.
  - Sentiment analysis of user comments.

### Module 3: Front-End Development
- Develop React components for:
  - Home Page
  - Navigation
  - Details Page
  - Login and Registration Pages
  - Search Page
- Style the application using HTML and CSS.

### Module 4: Authentication Services
- Write APIs for user registration, login, and profile management.
- Implement secure authentication using JSON Web Tokens (JWT).

### Module 5: Deployment
- Containerize the application using Docker.
- Implement CI/CD pipelines using GitHub Actions.
- Deploy the application to cloud platforms, including Kubernetes clusters.

### Module 6: Peer Review
- Submit the project for peer review.
- Evaluate peer projects based on a rubric.

---

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo-url
   cd GiftLink
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Set up MongoDB:
   - Install MongoDB locally or use a cloud service.
   - Configure the database connection in the `.env` file.

5. Build and containerize:
   ```bash
   docker build -t giftlink .
   docker-compose up
   ```

---

## Technologies Used

- **Front-End**: React, HTML, CSS
- **Back-End**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Containerization**: Docker
- **CI/CD**: GitHub Actions
- **Deployment**: Kubernetes, IBM Code Engine

---

## Contribution Guidelines

1. Fork the repository and create a feature branch.
2. Follow the Agile methodology by updating the Kanban board.
3. Submit a pull request for review before merging into the main branch.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contact

For any inquiries or support, feel free to reach out to the project maintainers. Happy coding! 🎉
