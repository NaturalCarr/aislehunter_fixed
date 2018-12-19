/*---------------*\
Insert New Items
\*---------------*/
INSERT INTO ITEM (Name) VALUES ('Rice');
INSERT INTO ITEM (Name) VALUES ('Water');
INSERT INTO ITEM (Name) VALUES ('Milk');
INSERT INTO ITEM (Name) VALUES ('Bread');
INSERT INTO ITEM (Name) VALUES ('Cheese');
INSERT INTO ITEM (Name) VALUES ('Meat');
INSERT INTO ITEM (Name) VALUES ('Produce');
INSERT INTO ITEM (Name) VALUES ('Cereal');
INSERT INTO ITEM (Name) VALUES ('Eggs');
INSERT INTO ITEM (Name) VALUES ('Sugar');
INSERT INTO ITEM (Name) VALUES ('Flour');
INSERT INTO ITEM (Name) VALUES ('Soda');
INSERT INTO ITEM (Name) VALUES ('Pasta');
INSERT INTO ITEM (Name) VALUES ('Deep Sea Diving Equipment');
/*---------------*\
Stores
\*---------------*/
INSERT INTO STORE (Name, Address, Zip, Sun_O, Sun_C, Mon_O, Mon_C, Tue_O, Tue_C, Wed_O, Wed_C, Thu_O, Thu_C, Fri_O, Fri_C, Sat_O, Sat_C) VALUES ('Meyers Super Foods' , '82-19 Dr. Brule Avenue', '11892', '900', '1900', '730', '2300', '730', '2300', '730', '2300', '730', '2300', '730', '2300', '730', '2300');
INSERT INTO STORE (Name, Address, Zip, Sun_O, Sun_C, Mon_O, Mon_C, Tue_O, Tue_C, Wed_O, Wed_C, Thu_O, Thu_C, Fri_O, Fri_C, Sat_O, Sat_C) VALUES ('Jimmies' , '386 Rockland Interview', '16325', '900', '1900', '730', '2300', '730', '2300', '730', '2300', '730', '2300', '730', '2300', '730', '2300');
INSERT INTO STORE (Name, Address, Zip, Sun_O, Sun_C, Mon_O, Mon_C, Tue_O, Tue_C, Wed_O, Wed_C, Thu_O, Thu_C, Fri_O, Fri_C, Sat_O, Sat_C) VALUES ('Seymours Food Shop' , '313-26 Baldwin Avenue', '91210', '900', '1900', '730', '2300', '730', '2300', '730', '2300', '730', '2300', '730', '2300', '730', '2300');
INSERT INTO STORE (Name, Address, Zip, Sun_O, Sun_C, Mon_O, Mon_C, Tue_O, Tue_C, Wed_O, Wed_C, Thu_O, Thu_C, Fri_O, Fri_C, Sat_O, Sat_C) VALUES ('Spend-Les' , '123 ABC Road', '11234', '900', '1900', '730', '2300', '730', '2300', '730', '2300', '730', '2300', '730', '2300', '730', '2300');
INSERT INTO STORE (Name, Address, Zip, Sun_O, Sun_C, Mon_O, Mon_C, Tue_O, Tue_C, Wed_O, Wed_C, Thu_O, Thu_C, Fri_O, Fri_C, Sat_O, Sat_C) VALUES ('Meyers Villian Foods' , '19-82 Brutal Avenue', '11892', '900', '1900', '730', '2300', '730', '2300', '730', '2300', '730', '2300', '730', '2300', '730', '2300');
/*---------------*\
Aisles
\*---------------*/
INSERT INTO AISLE (Number, StoreID) VALUES (1, 1);
INSERT INTO AISLE (Number, StoreID) VALUES (2, 1);
INSERT INTO AISLE (Number, StoreID) VALUES (3, 1);
INSERT INTO AISLE (Number, StoreID) VALUES (4, 1);
INSERT INTO AISLE (Number, StoreID) VALUES (5, 1);
INSERT INTO AISLE (Number, StoreID) VALUES (6, 1);
INSERT INTO AISLE (Number, StoreID) VALUES (7, 1);
INSERT INTO AISLE (Number, StoreID) VALUES (8, 1);
INSERT INTO AISLE (Number, StoreID) VALUES (1, 2);
INSERT INTO AISLE (Number, StoreID) VALUES (2, 2);
INSERT INTO AISLE (Number, StoreID) VALUES (3, 2);
INSERT INTO AISLE (Number, StoreID) VALUES (4, 2);
INSERT INTO AISLE (Number, StoreID) VALUES (5, 2);
INSERT INTO AISLE (Number, StoreID) VALUES (6, 2);
INSERT INTO AISLE (Number, StoreID) VALUES (7, 2);
INSERT INTO AISLE (Number, StoreID) VALUES (8, 2);
INSERT INTO AISLE (Number, StoreID) VALUES (1, 3);
INSERT INTO AISLE (Number, StoreID) VALUES (2, 3);
INSERT INTO AISLE (Number, StoreID) VALUES (3, 3);
INSERT INTO AISLE (Number, StoreID) VALUES (4, 3);
INSERT INTO AISLE (Number, StoreID) VALUES (5, 3);
INSERT INTO AISLE (Number, StoreID) VALUES (6, 3);
INSERT INTO AISLE (Number, StoreID) VALUES (7, 3);
INSERT INTO AISLE (Number, StoreID) VALUES (8, 3);
INSERT INTO AISLE (Number, StoreID) VALUES (1, 4);
INSERT INTO AISLE (Number, StoreID) VALUES (2, 4);
INSERT INTO AISLE (Number, StoreID) VALUES (3, 4);
INSERT INTO AISLE (Number, StoreID) VALUES (4, 4);
INSERT INTO AISLE (Number, StoreID) VALUES (5, 4);
INSERT INTO AISLE (Number, StoreID) VALUES (6, 4);
INSERT INTO AISLE (Number, StoreID) VALUES (7, 4);
INSERT INTO AISLE (Number, StoreID) VALUES (8, 4);
/*---------------*\
Item Positions
\*---------------*/

/* 
INSERT INTO POSITION (ITEM, StoreID, Aisle_Number, Shelf_Number, PIA, Comment) Values ([One Of The Items], [A Number Between 0 And 4], [A Number Between 1 And 8], [A Number Below 20,[Front | Middle | Back],[Random Comment On Position]);
*/
INSERT INTO POSITION (ITEM, StoreID, Aisle_Number, Shelf_Number, PIA, Comment) Values ('Rice', '1', '3', '6','Middle','It''s Below The Dishwashing Liquid');
INSERT INTO POSITION (ITEM, StoreID, Aisle_Number, Shelf_Number, PIA, Comment) Values ('Eggs', '1', '1', '1','Back','End Of The Aisle Next To The Milk'); 
INSERT INTO POSITION (ITEM, StoreID, Aisle_Number, Shelf_Number, PIA, Comment) Values ('Milk', '1', '1', '1','Back','End Of The Aisle Next To The Eggs'); 
INSERT INTO POSITION (ITEM, StoreID, Aisle_Number, Shelf_Number, PIA, Comment) Values ('Deep Sea Diving Equipment', '1', '8', '44','Entire Aisle','Watch Out For The Kraken!');

