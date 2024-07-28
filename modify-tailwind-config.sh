#!/bin/sh

# Vérifier si un argument a été passé
if [ -z "$1" ]; then
  echo "Aucun thème spécifié. Utilisation du thème par défaut."
  THEME="pastel"
else
  THEME=$1
fi

# Modifier le thème dans le fichier tailwind.config.js
sed -i "s/themes: \[\"pastel\"\]/themes: \[\"$THEME\"\]/g" tailwind.config.js

echo "Fichier tailwind.config.js modifié avec succès avec le thème : $THEME"
