# Zuna Web Solutions — Backend

A **Spring Boot 3 REST API** serving the Zuna Web Solutions website frontend.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Spring Boot 3.3 |
| Language | Java 25 |
| Build | Maven 3.9 |
| Database | H2 (dev) / MySQL (prod) |
| ORM | Spring Data JPA |
| Docs | Swagger UI (SpringDoc) |
| Security | Spring Security (CORS + HTTP Basic Auth) |

---

## Quick Start (Development)

### Prerequisites
- Java 25+ (`java -version` to check)
- Maven 3.8+ (or use the project's Maven wrapper)

Set `SPRING_MAIL_PASSWORD`, `ZUNA_ADMIN_USERNAME`, and `ZUNA_ADMIN_PASSWORD` in your environment before enabling email or admin routes. See `.env.example` for the variable names.

### Run the server
The API starts at: **http://localhost:8080**

---

## API Endpoints

### Public (no auth required)

| Method | URL | Description |
|---|---|---|
| `GET` | `/api/blog` | List all published blog posts |
| `GET` | `/api/blog?category=Engineering` | Filter posts by category |
| `GET` | `/api/blog/{id}` | Get a single blog post |
| `GET` | `/api/portfolio` | List all portfolio projects |
| `GET` | `/api/portfolio?category=E-Commerce` | Filter by category |
| `GET` | `/api/pricing` | List all pricing plans |
| `GET` | `/api/services` | List all services |
| `POST` | `/api/contact` | Submit a contact inquiry |

### Contact Form Body (POST /api/contact)
```json
{
  "name": "Rahul Sharma",
  "email": "rahul@example.com",
  "service": "Bespoke Development",
  "message": "I need a website for my business in Lucknow."
}

---
## Project Structure

```
backend/
├── pom.xml
├── .gitignore
└── src/main/
    ├── java/com/zuna/backend/
    │   ├── ZunaBackendApplication.java
    │   ├── config/          # CORS, Security
    │   ├── controller/      # REST endpoints + GlobalExceptionHandler
    │   ├── dto/             # ContactRequest, ApiResponse
    │   ├── model/           # JPA entities
    │   ├── repository/      # Spring Data interfaces
    │   └── service/         # Business logic
    └── resources/
        ├── application.properties       # Dev (H2)
        ├── application-prod.properties  # Prod (MySQL)
        └── data.sql                     # Seed data
```
