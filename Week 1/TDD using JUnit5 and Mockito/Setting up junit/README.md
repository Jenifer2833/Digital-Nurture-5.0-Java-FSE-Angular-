# Exercise 1: Setting Up JUnit

## Objective

To set up JUnit in a Java project and create a basic test class for unit testing.

## Steps Performed

### 1. Create a Java Project

A new Java project was created in the IDE.

### 2. Add JUnit Dependency

For Maven projects, the following dependency was added to the pom.xml file:

```xml
<dependency>
    <groupId>junit</groupId>
    <artifactId>junit</artifactId>
    <version>4.13.2</version>
    <scope>test</scope>
</dependency>
```

### 3. Create a Test Class

A test class named CalculatorTest was created.

### Test Cases

- Test Addition
- Test Subtraction
- Test Multiplication
- Test Division

### Expected Output

All test cases should pass successfully.

Example:

Tests run: 4

Failures: 0

Errors: 0

Result: SUCCESS

## Benefits of JUnit

- Automated testing
- Faster bug detection
- Improved code quality
- Easier maintenance
- Supports regression testing

## Conclusion

JUnit provides a simple framework for writing and executing unit tests. It helps verify program correctness and improves software reliability.
