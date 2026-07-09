# SME to walk through the following aspects related to the project created:

## 1. src/main/java
- Contains the application's Java source code.
- Includes the main class, controllers, services, repositories, entities, and other business logic.

## 2. src/main/resources
- Contains application configuration files and static resources.
- The `application.properties` file is used to configure server settings, logging, database connections, and other application properties.

## 3. src/test/java
- Contains test classes for the application.
- Used to write unit and integration tests using frameworks like JUnit and Spring Boot Test.

## 4. SpringLearnApplication.java
- This is the main entry point of the Spring Boot application.
- The `main()` method invokes `SpringApplication.run()` to bootstrap and launch the application.

```java
public static void main(String[] args) {
    SpringApplication.run(SpringLearnApplication.class, args);
}
```

## 5. Purpose of @SpringBootApplication

`@SpringBootApplication` is a convenience annotation that combines three annotations:

- **@Configuration** – Marks the class as a source of bean definitions.
- **@EnableAutoConfiguration** – Automatically configures Spring Boot based on project dependencies.
- **@ComponentScan** – Scans the current package and its sub-packages for Spring components such as `@Controller`, `@Service`, `@Repository`, and `@Component`.

## 6. pom.xml

The `pom.xml` file is the Maven Project Object Model file used to manage the project.

It contains:
- Project metadata (groupId, artifactId, version)
- Project dependencies
- Build plugins
- Maven configuration

### Main Dependencies

- **spring-boot-starter-web**
  - Provides Spring MVC, REST support, and Embedded Tomcat.

- **spring-boot-devtools**
  - Enables automatic restart and faster development.

- **spring-boot-starter-test**
  - Provides JUnit, Mockito, and Spring Test libraries for testing.

## 7. Dependency Hierarchy

The Dependency Hierarchy displays all direct and transitive Maven dependencies used by the project.

In Eclipse:
1. Open `pom.xml`.
2. Select the **Dependency Hierarchy** tab.

This view helps identify:
- Direct dependencies added by the developer.
- Transitive dependencies automatically downloaded by Maven.
- Dependency relationships and version conflicts.
