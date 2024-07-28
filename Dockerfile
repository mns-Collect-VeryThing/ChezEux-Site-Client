# Utiliser l'image officielle de Node.js comme image de base
FROM node:16

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier le fichier package.json et package-lock.json dans le répertoire de travail
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le code source dans le répertoire de travail
COPY . .

# Ajouter un script shell pour modifier le fichier tailwind.config.js
COPY modify-tailwind-config.sh /app/modify-tailwind-config.sh
RUN chmod +x /app/modify-tailwind-config.sh

# Définir un argument de build pour le thème
ARG THEME

# Utiliser l'argument pour modifier le fichier tailwind.config.js
RUN /app/modify-tailwind-config.sh $THEME

# Compiler l'application React
RUN npm run build

# Installer un serveur HTTP statique pour servir l'application
RUN npm install -g serve

# Exposer le port 3000 pour l'application
EXPOSE 3000

# Commande pour lancer l'application
CMD ["serve", "-s", "build", "-l", "3000"]
