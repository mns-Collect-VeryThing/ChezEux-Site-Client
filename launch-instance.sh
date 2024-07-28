#!/bin/bash

# Vérifier si les arguments nécessaires sont fournis
if [ "$#" -ne 2 ]; then
  echo "Usage: $0 THEME PORT"
  exit 1
fi

# Lire les arguments
THEME=$1
PORT=$2

# Créer un fichier docker-compose temporaire
cat > docker-compose-temp.yml <<EOL
version: '3.8'

services:
  react-app-$THEME-$PORT:
    build:
      context: .
      args:
        THEME: $THEME
    ports:
      - "$PORT:3000"
    environment:
      NODE_ENV: production
EOL

# Lancer le service avec Docker Compose
docker-compose -f docker-compose-temp.yml up -d

# Supprimer le fichier temporaire
rm docker-compose-temp.yml

echo "Instance lancée avec succès avec le thème $THEME sur le port $PORT"
