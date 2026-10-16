# HomeNest — Real Estate Marketplace

HomeNest is a full-stack real estate application where buyers browse and purchase properties and sellers list them. The Angular single-page app provides buyer, seller, and admin workflows (listings, wishlist, checkout, and dashboards); the Java backend exposes the REST API and persists data in Oracle through Spring MVC and Hibernate.

The frontend ships with a built-in **demo mode**: each data service falls back to bundled seed data when the backend is unavailable, so the app is fully browsable with no database or server running. This also makes the frontend deployable as a static site (for example, Firebase Hosting).

## Contents

- [Architecture](#architecture)
- [Demo Mode](#demo-mode)
- [Prerequisites](#prerequisites)
- [Configuration](#configuration)
- [Run Locally](#run-locally)
- [Build and Test](#build-and-test)
- [Deploy to Firebase Hosting](#deploy-to-firebase-hosting)
- [API](#api)
- [Project Layout](#project-layout)
- [Troubleshooting](#troubleshooting)

## Architecture

| Layer | Technology | Location | Local address |
| --- | --- | --- | --- |
| Web client | Angular 16, Angular Material, Bootstrap | `AngularProj/RealEst` | `http://localhost:4200` |
| REST API | Spring MVC 5.1, Hibernate 5 | `realesmgnt` | `http://localhost:8080/realesmgnt` |
| Database | Oracle XE/Oracle Database via JDBC | External service | `localhost:1521/XE` |

The backend is a traditional Maven WAR application. It is not a Spring Boot executable JAR, so it must be deployed to a servlet container such as Tomcat. The frontend uses fixed `http://localhost:8080` API URLs in its services, with an automatic seed-data fallback (see [Demo Mode](#demo-mode)).

## Demo Mode

The app runs end-to-end without the backend or Oracle. When an API call fails, the Angular services return bundled **seed data** ([`AngularProj/RealEst/src/app/seed/seed-data.ts`](AngularProj/RealEst/src/app/seed/seed-data.ts)) — sample properties, sellers, buyers, orders, and demo accounts — so listings, property details, wishlist, cart, and the admin dashboard all populate.

- **Browse freely:** the home and property pages are public. Signing in is only required to buy, save to a wishlist, or list a property.
- **Demo logins** (work offline):

  | Role | Email | Password |
  | --- | --- | --- |
  | Buyer | `demo@buyer.com` | `demo123` |
  | Seller | `demo@seller.com` | `demo123` |
  | Admin | `admin@mail.com` | `admin` |

When a real backend is reachable at `http://localhost:8080/realesmgnt`, the same services use live data instead of the seed data.

## Prerequisites

- JDK 8 or newer with `JAVA_HOME` configured
- Maven 3.6 or newer
- Node.js and npm compatible with Angular 16
- Oracle XE or another compatible Oracle Database instance
- Apache Tomcat 8.5 or newer for backend deployment

## Configuration

Backend database settings are in [`realesmgnt/src/main/resources/database.properties`](realesmgnt/src/main/resources/database.properties):

```properties
database.driver=oracle.jdbc.driver.OracleDriver
database.url=jdbc:oracle:thin:@localhost:1521/XE
database.username=system
database.password=arun
```

These are repository defaults for local development. Change the credentials before sharing or deploying the application. The current Spring configuration also enables Hibernate schema updates and SQL logging:

```properties
hibernate.hbm2ddl.auto=update
hibernate.show_sql=true
```

The frontend API URLs are defined in services under [`AngularProj/RealEst/src/app`](AngularProj/RealEst/src/app). Update those URLs, or add an environment-based API configuration, when the backend is not available at `http://localhost:8080/realesmgnt`.

## Run Locally

### 1. Start Oracle

Start Oracle XE and make sure the configured database service is available at `localhost:1521/XE`. Confirm that the configured user can create or update the application tables.

### 2. Build and deploy the backend

From the repository root:

```powershell
cd realesmgnt
mvn clean package -DskipTests
```

The generated WAR is `realesmgnt/target/realesmgnt.war`. Copy it to Tomcat's `webapps` directory and start Tomcat. The API will be available under:

```text
http://localhost:8080/realesmgnt
```

The Maven project does not define a built-in Tomcat run goal, so deployment to a servlet container is required.

### 3. Install and start the frontend

From a second terminal:

```powershell
cd AngularProj/RealEst
npm install
npm start
```

If the existing lockfile or dependency tree causes npm resolution errors, remove the generated `node_modules` directory and use the command that has been verified for this repository:

```powershell
npm ci --legacy-peer-deps
npm start
```

Open `http://localhost:4200/` after the Angular dev server starts.

## Build and Test

### Frontend

```powershell
cd AngularProj/RealEst
npm run build
npm test
```

The production build is written to `AngularProj/RealEst/dist/RealEst`. Karma tests may require a locally installed Chrome browser.

### Backend

```powershell
cd realesmgnt
mvn compile
mvn test
mvn package
```

The WAR output and all Maven compiler artifacts under `realesmgnt/target` are generated files and are ignored by Git.

## Deploy to Firebase Hosting

Thanks to demo mode, the frontend can be hosted as a static site on Firebase Hosting (`*.web.app`). The configuration lives in [`AngularProj/RealEst/firebase.json`](AngularProj/RealEst/firebase.json) and [`AngularProj/RealEst/.firebaserc`](AngularProj/RealEst/.firebaserc) and includes SPA rewrites and long-term asset caching.

```powershell
npm install -g firebase-tools
firebase login

cd AngularProj/RealEst
# Set your Firebase project id in .firebaserc, or run:
firebase use --add

npm run build:firebase      # production build with root base href -> dist/RealEst
firebase deploy --only hosting
```

The site is published to `https://<your-project>.web.app`. The `build:firebase` script builds with `--base-href /` so assets resolve at the domain root, and font inlining is disabled so the build succeeds without build-time network access. The hosted site runs on seed data, since the `localhost` backend is not reachable from a public domain.

## API

The API base URL is:

```text
http://localhost:8080/realesmgnt
```

The repository includes a Swagger 2.0 reference in [`apiDocumentation.txt`](apiDocumentation.txt). Common endpoint groups are:

| Prefix | Purpose |
| --- | --- |
| `/home` | Buyer login, buyer management, seller creation, property creation, and purchase-order operations |
| `/property` | Property and location operations |
| `/purchaseorder` | Purchase-order operations |

Examples from the API specification:

```text
GET  /home/allcustomer
POST /home/blogin
GET  /home/buyerbyid/{buyerid}
POST /home/createproperty
POST /home/createpurchaseOrder
```

The Angular services use these same backend prefixes. Request and response schemas are documented in `apiDocumentation.txt` and in the Java controller/entity source.

## Project Layout

```text
RealEstateManagement/
├── AngularProj/RealEst/       # Angular frontend
│   ├── src/app/               # Components, pages, services, and models
│   ├── package.json           # npm scripts and dependencies
│   └── angular.json           # Angular CLI build and serve configuration
├── realesmgnt/                # Spring MVC backend
│   ├── src/main/java/         # Controllers, services, DAOs, and entities
│   ├── src/main/resources/    # Database, Hibernate, and logging configuration
│   ├── src/main/webapp/       # Servlet and Spring MVC configuration
│   └── pom.xml                # Maven dependencies and WAR build
├── JavaDocs/                  # Generated Java API documentation
├── apiDocumentation.txt       # Swagger 2.0 API description
└── README.md                  # This guide
```

Generated directories such as `node_modules`, `.angular`, `dist`, and `realesmgnt/target` should not be committed.

## Troubleshooting

### Angular cannot reach the API

Confirm that Tomcat is running, the WAR was deployed as `realesmgnt`, and the browser can reach `http://localhost:8080/realesmgnt`. Check the service URLs under `AngularProj/RealEst/src/app` if the API uses another host or port.

### Backend fails during startup

Check the Oracle listener, service name, username, and password in `database.properties`. Also inspect the Tomcat logs. The application initializes Hibernate against the configured database during startup.

### npm install fails with dependency resolution errors

Remove the generated `node_modules` directory and run:

```powershell
npm ci --legacy-peer-deps
```

Do not commit `node_modules` or Angular CLI cache files.

### Git shows changed class files

Compiled classes are generated by Maven. Run `git status --ignored` to confirm they are ignored. They should be stored under `realesmgnt/target`, not edited manually.

## Development Notes

- Keep database credentials local and replace the repository defaults for any shared environment.
- Keep frontend and backend running separately during development.
- Update `apiDocumentation.txt` when public endpoint contracts change.
- Build output and dependency directories are excluded by the repository `.gitignore`.