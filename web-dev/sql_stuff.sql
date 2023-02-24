-- Create Table
CREATE TABLE products (
 id INT NOT NULL,
 name STRING,
 price MONEY,
 PRIMARY KEY (id)
)

-- Add values to table if you have all values
INSERT INTO products
VALUES (1, "Pen", 1.20)

-- Add values if you are missing some values
INSERT INTO products (id, name)
VALUES (2, "Pencil")

-- Since we have a primary key this will not work since there is no id
INSERT INTO products (name, price)
VALUES ("Rubber Bands", 1.30)

-- Select everything from TABLE * means everything
SELECT * FROM products

-- select using WHERE for a search condition
SELECT * FROM products WHERE id=1

-- Update TABLE
UPDATE products
SET price = 0.80
WHERE id=2

-- Add column to TABLE
ALTER TABLE products
ADD stock INT

-- update stock column
UPDATE products
SET stock = 32
WHERE id=1

UPDATE products
SET stock = 12
WHERE id=2

-- delete records
DELETE FROM products
WHERE id = 2

-- sql relationships with foreign KEY
-- create new table to link to
CREATE TABLE orders (
  id INT NOT NULL,
  order_number INT,
  customer_id INT,
  product_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (customer_id) REFERENCES customers(id),
  FOREIGN KEY (product_id) REFERENCES products(id)
)

-- add orders to table
INSERT INTO orders
VALUES (1, 4362, 2, 1)

INSERT INTO orders
VALUES (2, 4354, 1, 1)

-- join tables together with foreign KEY
SELECT orders.order_number, products.name, products.price, products.stock
FROM orders
INNER JOIN products ON orders.product_id = products.id
