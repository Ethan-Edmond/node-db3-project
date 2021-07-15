-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.

SELECT p.productname, c.categoryname FROM product AS p
LEFT JOIN category as c
  ON p.categoryid = c.id;

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.

SELECT o.id, s.companyname FROM [order] AS o
JOIN shipper AS s
  ON o.shipvia = s.id
WHERE o.orderdate < "2012-08-09";

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.

SELECT p.productname, o.quantity FROM orderdetail AS o
JOIN product AS p
  ON o.productid = p.id
WHERE o.orderid = 10251
ORDER BY p.productname;

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.

-- Using left joins shows more records, it looks like there are some orders without customers.
SELECT
  o.id AS OrderID,
  c.companyname AS [Company Name],
  e.lastname AS [Employee Surname]
FROM [order] AS o
JOIN customer AS c
ON o.customerid = c.id
JOIN employee AS e
ON o.employeeid = e.id;
