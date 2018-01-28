select characters.idcharacters as id, charactername, gamesystem, background, race from characters
join charactertraits on charactertraits.idcharacters = characters.idcharacters
where idUsers <> $1