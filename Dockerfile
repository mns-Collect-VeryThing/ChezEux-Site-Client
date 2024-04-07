# Étape 1 : Utiliser une image de base contenant Node.js pour construire l'application
FROM node:14 as build

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier les fichiers de l'application
COPY . .

# Construire l'application React
RUN npm run build

# Étape 2 : Utiliser une image légère contenant `serve` pour servir l'application construite
FROM node:14-alpine

# Installation de `serve` globalement via npm
RUN npm install -g serve

# Définition du répertoire de travail
WORKDIR /app

# Copie des fichiers construits à partir de l'étape précédente
COPY --from=build /app/build .

# Commande pour démarrer `serve` et servir l'application
CMD ["serve", "-s", ".", "-p", "80"]