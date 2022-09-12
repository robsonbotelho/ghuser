INSERT INTO users(username, name, location, followers, following, programming_language)
VALUES (:login, :name, :location, :followers, :following, :language)
RETURNING name, location;