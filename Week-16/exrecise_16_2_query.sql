--find the item that has minimum weight
select * from ITEMS where [WEIGHT] IN (select min([WEIGHT]) from ITEMS);

--find the different warehouses in “Pune
select * from WAREHOUSES where [LOCATION] in ('Pune');

--Find the details of items ordered by a customer “Mr. Patil”.
select * from ITEMS 
inner join ORDERS on ITEMS.ONO = ORDERS.ONO 
inner join CUSTOMER on ORDERS.CNO = CUSTOMER.CNO 
where CUSTOMER.CNAME in ('Mr. Patil');

--Find a Warehouse which has maximum stores
SELECT WID, WNAME
FROM WAREHOUSES
WHERE WID IN (
  SELECT [WID]
  FROM (
    SELECT [WID], COUNT([SID]) AS count_sid
    FROM STORES
    GROUP BY [WID]
  ) AS warehouse_store_counts
  WHERE count_sid = (
    SELECT MAX(count_sid)
    FROM (
      SELECT [WID], COUNT([SID]) AS count_sid
      FROM STORES
      GROUP BY [WID]
    ) AS max_warehouse_store_counts
  )
);

--Find an item which is ordered for a minimum number of times
select [ITEMNO]
from (
    select ITEMNO, count(ORDERS.ONO) as count_ono from ORDERS inner join ITEMS on ORDERS.ONO = ITEMS.ONO
    GROUP by ITEMNO
)
where count_ono = (
    select min(count_ono)
    from (select ITEMNO, count(ORDERS.ONO) as count_ono from ORDERS inner join ITEMS on ORDERS.ONO = ITEMS.ONO
            group by ITEMNO
        )
);

--Find the detailed orders given by each customer
select * from CUSTOMER 
inner join ORDERS on ORDERS.CNO = CUSTOMER.CNO
inner join ITEMS on ITEMS.ONO = ORDERS.ONO
    