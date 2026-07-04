Difference Between JPA, Hibernate, and Spring Data JPA
1. JPA (Java Persistence API)
JPA is a specification (set of rules), not a framework.
It defines how Java objects should be mapped to database tables.
It provides standard interfaces and annotations like @Entity, @Id, and EntityManager.
JPA cannot perform database operations on its own.
It requires an implementation such as Hibernate.
2. Hibernate
Hibernate is an ORM (Object Relational Mapping) framework.
It is one of the most popular implementations of JPA.
It converts Java objects into database records and vice versa.
It automatically generates SQL queries for CRUD operations.
It provides additional features beyond JPA, such as caching and lazy loading.
3. Spring Data JPA
Spring Data JPA is a Spring Framework module built on top of JPA.
It simplifies database access by reducing boilerplate code.
It provides the JpaRepository interface with built-in CRUD methods.
It internally uses JPA and an implementation like Hibernate.
Developers can perform database operations without writing SQL for common tasks.
Relationship
Spring Data JPA
        ↓
       JPA
        ↓
   Hibernate
        ↓
    Database
