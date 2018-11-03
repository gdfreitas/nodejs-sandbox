# Node.js ORMs

Referências:
[Why you should avoid using ORMs in Node.JS](https://blog.logrocket.com/why-you-should-avoid-orms-with-examples-in-node-js-e0baab73fa5)

PostgreSQL Container

```docker
docker run \
  --name pg-node-orms \
  -p 5432:5432 \
  -e POSTGRES_PASSWORD=pw1234 \
  -e POSTGRES_USER=orm-user \
  -e POSTGRES_DB=orm-db \
  -v ~/data/pg-node-orms:/var/lib/postgresql/data \
  -d \
  postgres
```

Conectar

```docker
docker run \
  -it --rm \
  --link pg-node-orms:postgres \
  postgres \
  psql \
  -h postgres \
  -U orm-user \
  orm-db
```

Criar alguns recursos e inserir dados

```sql
CREATE TYPE item_type AS ENUM (
  'meat', 'veg', 'spice', 'dairy', 'oil'
);

CREATE TABLE item (
  id    SERIAL PRIMARY KEY,
  name  VARCHAR(64) NOT NULL,
  type  item_type
);

CREATE INDEX ON item (type);

INSERT INTO item VALUES
  (1, 'Chicken', 'meat'), (2, 'Garlic', 'veg'), (3, 'Ginger', 'veg'),
  (4, 'Garam Masala', 'spice'), (5, 'Turmeric', 'spice'),
  (6, 'Cumin', 'spice'), (7, 'Ground Chili', 'spice'),
  (8, 'Onion', 'veg'), (9, 'Coriander', 'spice'), (10, 'Tomato', 'veg'),
  (11, 'Cream', 'dairy'), (12, 'Paneer', 'dairy'), (13, 'Peas', 'veg'),
  (14, 'Ghee', 'oil'), (15, 'Cinnamon', 'spice');

CREATE TABLE dish (
  id     SERIAL PRIMARY KEY,
  name   VARCHAR(64) NOT NULL,
  veg    BOOLEAN NOT NULL
);

CREATE INDEX ON dish (veg);

INSERT INTO dish VALUES
  (1, 'Chicken Tikka Masala', false), (2, 'Matar Paneer', true);

CREATE TABLE ingredient (
  dish_id   INTEGER NOT NULL REFERENCES dish (id),
  item_id   INTEGER NOT NULL REFERENCES item (id),
  quantity  FLOAT DEFAULT 1,
  unit      VARCHAR(32) NOT NULL
);

INSERT INTO ingredient VALUES
  (1, 1, 1, 'whole breast'), (1, 2, 1.5, 'tbsp'), (1, 3, 1, 'tbsp'),
  (1, 4, 2, 'tsp'), (1, 5, 1, 'tsp'),
  (1, 6, 1, 'tsp'), (1, 7, 1, 'tsp'), (1, 8, 1, 'whole'),
  (1, 9, 1, 'tsp'), (1, 10, 2, 'whole'), (1, 11, 1.25, 'cup'),
  (2, 2, 3, 'cloves'), (2, 3, 0.5, 'inch piece'), (2, 13, 1, 'cup'),
  (2, 6, 0.5, 'tsp'), (2, 5, 0.25, 'tsp'), (2, 7, 0.5, 'tsp'),
  (2, 4, 0.5, 'tsp'), (2, 11, 1, 'tbsp'), (2, 14, 2, 'tbsp'),
  (2, 10, 3, 'whole'), (2, 8, 1, 'whole'), (2, 15, 0.5, 'inch stick');
```

