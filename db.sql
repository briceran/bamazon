DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;


CREATE TABLE products (
  item_id INT AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products ( product_name, department_name,price,stock_quantity)
VALUES ("bananas","produce",0.50,200);

INSERT INTO products ( product_name, department_name,price,stock_quantity)
VALUES ("milk","produce",2.50,100);

INSERT INTO products ( product_name, department_name,price,stock_quantity)
VALUES ("apples","produce",0.35,100);

INSERT INTO products ( product_name, department_name,price,stock_quantity)
VALUES ("peanut butter","produce",2.50,80);

INSERT INTO products ( product_name, department_name,price,stock_quantity)
VALUES ("gatorade","produce",1.50,100);

INSERT INTO products ( product_name, department_name,price,stock_quantity)
VALUES ("pears","produce",0.50,100);

INSERT INTO products ( product_name, department_name,price,stock_quantity)
VALUES ("ipod","electronics",150.00,50);

INSERT INTO products ( product_name, department_name,price,stock_quantity)
VALUES ("Amonium Nitrate","produce",50.50,2000);

INSERT INTO products ( product_name, department_name,price,stock_quantity)
VALUES ("Raisin Bran","produce",3.50,30);

INSERT INTO products ( product_name, department_name,price,stock_quantity)
VALUES ("ipad","electronics",150.00,40);
