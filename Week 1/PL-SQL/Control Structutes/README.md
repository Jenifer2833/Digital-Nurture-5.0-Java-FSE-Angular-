# Exercise 1: Control Structures

## Objective

To demonstrate the use of PL/SQL control structures such as loops, conditional processing, and cursor-based iteration in banking operations.

## Scenario 1: Loan Interest Discount

### Requirement
Apply a 1% discount to loan interest rates for customers whose age is above 60 years.

### Approach
- Fetch customers older than 60.
- Iterate through each customer using a FOR loop.
- Update the corresponding loan interest rate.
- Commit the changes.

## Scenario 2: VIP Customer Promotion

### Requirement
Promote customers to VIP status if their account balance exceeds $10,000.

### Approach
- Retrieve customers with balance greater than 10000.
- Loop through the records.
- Set the IsVIP flag to TRUE.
- Commit the changes.

## Scenario 3: Loan Due Reminders

### Requirement
Send reminders to customers whose loans are due within the next 30 days.

### Approach
- Retrieve loans with due dates between today and the next 30 days.
- Loop through the results.
- Display reminder messages using DBMS_OUTPUT.PUT_LINE.

## Output

Scenario 1:
Interest rates are reduced by 1% for eligible customers.

Scenario 2:
Customers with balance greater than $10,000 are marked as VIP.

Scenario 3:
Reminder messages are displayed for customers with loans due within 30 days.

## Conclusion

This exercise demonstrates the use of PL/SQL loops, conditional logic, record processing, and database updates to automate common banking operations.
