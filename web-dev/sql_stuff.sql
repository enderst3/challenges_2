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
