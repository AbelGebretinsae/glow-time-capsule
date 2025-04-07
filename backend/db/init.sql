-- Characters
CREATE TABLE characters (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  age INTEGER,
  profession TEXT,
  hobbies TEXT,
  personality_traits TEXT,
  quirk TEXT,
  short_description TEXT,
  main_enemy TEXT
);

-- Capsule Items
CREATE TABLE capsule_items (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  character_id INTEGER,
  title TEXT,
  type TEXT,
  description TEXT,
  link TEXT,
  FOREIGN KEY(character_id) REFERENCES characters(id)
);
