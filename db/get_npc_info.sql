select * from characters
join charactertraits on charactertraits.idcharacters = characters.idcharacters
where characters.idcharacters = $1