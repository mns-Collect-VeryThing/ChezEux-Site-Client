#!/bin/bash
cd /Users/bastien/PhpstormProjects/ChezEux-Site-Client

# Vérifier si les arguments nécessaires sont fournis
if [ "$#" -ne 5 ]; then
  echo "Usage: $0 ID NAME THEME PORT LANG"
  exit 1
fi

# Lire les arguments
ID=$1
NAME=$2
THEME=$3
PORT=$4
LANG=$5

# Convertir les arguments en minuscules pour le nom de l'image
ID=$(echo "$ID" | tr '[:upper:]' '[:lower:]')
NAME=$(echo "$NAME" | tr '[:upper:]' '[:lower:]')
THEME=$(echo "$THEME" | tr '[:upper:]' '[:lower:]')
LANG=$(echo "$LANG" | tr '[:upper:]' '[:lower:]')

# Fichier .env
ENV_FILE=".env"

# Supprimer le fichier .env s'il existe
if [ -f "$ENV_FILE" ]; then
  rm "$ENV_FILE"
fi

# Créer un nouveau fichier .env et ajouter les variables
{
  echo "REACT_APP_ID=$ID"
  echo "REACT_APP_NAME=$NAME"
  echo "REACT_APP_THEME=$THEME"
  echo "REACT_APP_PORT=$PORT"
  echo "REACT_APP_LANG=$LANG"
} > "$ENV_FILE"

# Créer un fichier docker-compose temporaire
cat > docker-compose-temp.yml <<EOL
version: '3.8'

services:
  react-app-$ID-$NAME-$THEME-$LANG-$PORT:
    build:
      context: .
      args:
        THEME: $THEME
        LANG: $LANG
    ports:
      - "$PORT:3000"
    environment:
      NODE_ENV: production
      ID: $ID
      NAME: $NAME
EOL

# Lancer le service avec Docker Compose
docker-compose -f docker-compose-temp.yml up -d

# Supprimer le fichier temporaire
rm docker-compose-temp.yml

echo "Instance lancée avec succès avec l'ID $ID, le nom $NAME, le thème $THEME, la langue $LANG sur le port $PORT"
