# Exercise 4: Arrange-Act-Assert (AAA) Pattern, Test Fixtures, Setup and Teardown Methods in JUnit

## Objective

To understand the Arrange-Act-Assert (AAA) testing pattern and the use of setup and teardown methods in JUnit.

## Arrange-Act-Assert (AAA) Pattern

The AAA pattern organizes a test into three clear sections:

### 1. Arrange

Prepare the required objects, variables, and test data.

Example:

```java
int value = number;
```

### 2. Act

Execute the functionality being tested.

Example:

```java
int result = value + 5;
```

### 3. Assert

Verify that the actual result matches the expected result.

Example:

```java
assertEquals(15, result);
```

## Test Fixtures

A test fixture is a fixed environment used for running tests. It helps ensure that every test starts with a known state.

In this exercise:

```java
private int number;
```

is initialized before each test execution.

## Setup Method

The @Before annotation is used to execute setup code before every test method.

Example:

```java
@Before
public void setUp() {
    number = 10;
}
```

Purpose:
- Initialize test data.
- Create required objects.
- Prepare the testing environment.

## Teardown Method

The @After annotation is used to execute cleanup code after every test method.

Example:

```java
@After
public void tearDown() {
    System.out.println("Teardown executed");
}
```

Purpose:
- Release resources.
- Reset test environment.
- Perform cleanup operations.

## Expected Output

```text
Setup executed
Teardown executed

Tests run: 1
Failures: 0
Errors: 0
Result: SUCCESS
```

## Benefits

- Better test organization.
- Improved readability.
- Reusable setup and cleanup logic.
- Consistent testing environment.
- Easier maintenance.

## Conclusion

The Arrange-Act-Assert pattern improves test clarity by separating preparation, execution, and validation steps. The @Before and @After annotations help manage test fixtures efficiently and ensure reliable unit testing.
