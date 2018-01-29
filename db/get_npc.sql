select charactername, gamesystem, background, alignment, race, sex, agenum, heightnum, mass, hair, eyes, god, handi, honor, fame, charlevel from characters
join charactertraits on charactertraits.idcharacters = characters.idcharacters
join leveltable on leveltable.idcharacters = characters.idcharacters
where characters.idcharacters = $1 and charlevel = $2