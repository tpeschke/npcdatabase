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
--        ('Haverjack the Slippy', 'Magic-User', 'Cavalier', 1)

create table characterTraits (
    idTraits SERIAL PRIMARY KEY,
    alignment VARCHAR(2),
    race VARCHAR(40),
    sex VARCHAR(40),
    ageNum int,
    height VARCHAR(40),
    mass VARCHAR(40),
    hair VARCHAR(40),
    eyes VARCHAR(40),
    god VARCHAR(40),
    anointed VARCHAR(1),
    handi VARCHAR(3),
    idCharacters int,
        FOREIGN KEY (idCharacters) REFERENCES characters(idCharacters)
)