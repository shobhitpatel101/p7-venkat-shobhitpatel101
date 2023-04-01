Create table customer(
    Cid int,
    CName varchar(50),
    CAge varchar(50),
    CContact varchar(50)
)

Create table product(
    Pid int,
    PName varchar(50),
    PDetails varchar(50)
)

Create table order(
    [Oid] int, 
    Cid int,
    Pid int,
    OTimestamp varchar(50),
    Odetails varchar(50)
)