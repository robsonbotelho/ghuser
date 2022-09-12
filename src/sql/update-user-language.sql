UPDATE users SET programming_language = :language WHERE id = :id
RETURNING *;