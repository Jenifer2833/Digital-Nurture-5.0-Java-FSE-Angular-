# Exercise 3: Assertions in JUnit

## Objective

To understand and use different JUnit assertions for validating test results.

## Assertions Used

### 1. assertEquals()

Checks whether the expected value matches the actual value.

Example:

```java
assertEquals(5, 2 + 3);
```

### 2. assertTrue()

Checks whether a condition evaluates to true.

Example:

```java
assertTrue(5 > 3);
```

### 3. assertFalse()

Checks whether a condition evaluates to false.

Example:

```java
assertFalse(5 < 3);
```

### 4. assertNull()

Checks whether an object reference is null.

Example:

```java
assertNull(null);
```

### 5. assertNotNull()

Checks whether an object reference is not null.

Example:

```java
assertNotNull(new Object());
```

## Expected Output

All assertions should pass successfully.

```text
Tests run: 1
Failures: 0
Errors: 0
Result: SUCCESS
```

## Benefits of Assertions

- Validate program correctness.
- Detect bugs early.
- Improve code quality.
- Support automated testing.
- Simplify debugging.

## Conclusion

JUnit assertions provide an effective way to verify expected outcomes in test cases. They help ensure that the application behaves correctly under different conditions.
