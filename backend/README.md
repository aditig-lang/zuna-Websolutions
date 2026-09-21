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

```powershell
# Windows — set JAVA_HOME first if needed
$env:JAVA_HOME = "C:\Users\agupt\.jdk\jdk-25.0.2"

# From the /backend directory:
mvn spring-boot:run
```

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
```

### Admin (HTTP Basic Auth required)
Credentials come from `ZUNA_ADMIN_USERNAME` and `ZUNA_ADMIN_PASSWORD`; set both before using admin routes.

| Method | URL | Description |
|---|---|---|
| `GET` | `/api/admin/inquiries` | View all contact inquiries |
| `POST` | `/api/admin/blog` | Create blog post |
| `PUT` | `/api/admin/blog/{id}` | Update blog post |
| `DELETE` | `/api/admin/blog/{id}` | Delete blog post |
| `POST` | `/api/admin/portfolio` | Add project |
| `PUT` | `/api/admin/portfolio/{id}` | Update project |
| `DELETE` | `/api/admin/portfolio/{id}` | Delete project |
| `POST` | `/api/admin/pricing` | Create plan |
| `PUT` | `/api/admin/pricing/{id}` | Update plan |
| `DELETE` | `/api/admin/pricing/{id}` | Delete plan |

---

## Dev Tools

- **Swagger UI**: http://localhost:8080/swagger-ui.html
- **H2 Console**: http://localhost:8080/h2-console
  - JDBC URL: `jdbc:h2:mem:zunadb`
  - Username: `sa` | Password: *(empty)*

---

## Enabling Email Notifications

When a contact form is submitted, the backend can email `zunawebsolutions@gmail.com`.

1. Create a **Gmail App Password** (Google Account → Security → 2-Step Verification → App Passwords)
2. In `application.properties`:

```properties
zuna.mail.enabled=true
spring.mail.host=smtp.gmail.com
spring.mail.port=587
spring.mail.username=zunawebsolutions@gmail.com
spring.mail.password=YOUR_APP_PASSWORD
spring.mail.properties.mail.smtp.auth=true
spring.mail.properties.mail.smtp.starttls.enable=true
```

---

## Production Deployment (MySQL)

```powershell
java -jar target/zuna-backend-1.0.0.jar --spring.profiles.active=prod `
  --spring.datasource.url=jdbc:mysql://your-db-host:3306/zunadb `
  --spring.datasource.username=zunauser `
  --spring.datasource.password=yourpassword `
  --zuna.admin.username=youradminname `
  --zuna.admin.password=yourstrongpassword `
  --spring.mail.password=your_app_password
```

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
