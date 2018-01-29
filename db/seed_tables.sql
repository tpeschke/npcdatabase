create table users (
    idUsers SERIAL PRIMARY KEY,
    auth0 TEXT
)

--     insert into users (auth0)
-- values ('adsgfhaoibjmoi5wrhgiuaosfngiuasdhg;ioarhdgv;ou')

create table characters (
    idCharacters SERIAL PRIMARY KEY,
    characterName VARCHAR(40),
    gameSystem VARCHAR(40),
    background VARCHAR(40),
    idUsers int,
        FOREIGN KEY (idUsers) REFERENCES users(idUsers)
)

-- insert into characters (characterName, gameSystem, background, idUsers)
-- values ('Atticus Wulfgang', 'HackMaster', 'Cavalier', 1),
--        ('Almog', 'HackMaster', 'Bard', 1)
--        ('Haverjack the Slippy', 'HackMaster', 'Magic-User', 1),
        --   ('Gallien Half-Head', 'HackMaster', 'Fighter', 2),
        --   ('Alastar Penarn', 'HackMaster', 'Knight', 2),
        --   ('Kallie','HackMaster', 'Cavalier', 2)

create table characterTraits (
    idTraits SERIAL PRIMARY KEY,
    alignment VARCHAR(2),
    race VARCHAR(40),
    sex VARCHAR(40),
    ageNum int,
    heightNum VARCHAR(40),
    mass VARCHAR(40),
    hair VARCHAR(40),
    eyes VARCHAR(40),
    god VARCHAR(40),
    anointed VARCHAR(1),
    handi VARCHAR(3),
    idCharacters int,
        FOREIGN KEY (idCharacters) REFERENCES characters(idCharacters)
)

-- insert into charactertraits (alignment, race, sex, agenum, heightNum, mass, hair, eyes, god, anointed, handi, idcharacters)
-- values ('LG', 'Human', 'Male', 22, '75in', '190lbs', 'brown', 'blue', 'Haelyn', '1', '1', 1 ),
--        ('CG', 'Half-Elf', 'Male', 16, '68in', '165lbs','brown','green', null,'0', '3', 2 ),
--        ('CN', 'Human', 'Male', 36, '48in', '265lbs','white','purple', null,'0', '2', 3 ),
--          ('LE', 'Human', 'Male', 46, '73in', '197lbs', 'black', 'black', null, '0', '1', 7 ),
--          ('LE', 'Human', 'Male', 56, '70in', '189lbs','auburn','black', 'Morrigan','1', '2', 8 ),
--          ('CN', 'Human', 'Female', 20, '68in', '165lbs','blonde','blue', 'Haelyn','1', '1', 9 )

create table LevelTable (
    idLevelTable serial primary key,
    honor int,
    fame int,
    charLevel int,
    str int,
    intel int,
    wis int,
    dex int,
    con int,
    lks int,
    charis int,
    idCharacters int,
        FOREIGN KEY (idCharacters) REFERENCES characters(idCharacters)
        FOREIGN key (str) REFERENCES Strength(idStrength)
        FOREIGN key (intel) REFERENCES Intelligence(idIntelligence)
        FOREIGN key (wis) REFERENCES Wisdom(idWisdom)
        FOREIGN key (dex) REFERENCES Dexterity(idDexterity)
        FOREIGN key (con) REFERENCES Looks(idLooks)
        FOREIGN key (charis) REFERENCES Charisma(idCharisma)
)

-- insert into leveltable (honor, fame, charlevel, idcharacters)
-- values (25, 70, 9, 1 )


create table Strength (
    idStrength serial PRIMARY key
)
create table Intelligence (
    idIntelligence serial PRIMARY key
)
create table Wisdom (
    idWisdom serial PRIMARY key
)
create table Dexterity (
    idDexterity serial PRIMARY key
)
create table Constitution (
    idConstitution serial PRIMARY key
)
create table Charisma (
    idCharisma serial PRIMARY key
)
create table Looks (
    idLooks serial PRIMARY key
)