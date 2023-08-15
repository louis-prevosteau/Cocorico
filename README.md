# Cocorico

## Prérequis

Assurez-vous d'avoir les éléments suivants installés sur votre machine :

- Node.js (https://nodejs.org)
- Docker (https://www.docker.com/products/docker-desktop)
- Docker Compose (https://docs.docker.com/compose/install)

## Configuration

1. Clonez ce dépôt :

```
git clone https://github.com/louis-prevosteau/Cocorico.git
cd Cocorico
```
2. Créez une base de données avec MongoDB (https://cloud.mongodb.com)

3. Installez les dépendances :
```
cd api
npm install
```

```
cd client
npm install
```

4. Initialisez les variables d'environnement

```
cd api
cp .env.example .env

Dans le fichier .env, complétez les variables suivantes :

MONGO_URI= #url MongoDB
JWT_SECRET= #clé secrète JWT
GOOGLE_CLIENT_ID= #clientID Google
GOOGLE_CLIENT_SECRET= #clientSecret Google
```

```
cd client
cp .env.example .env

Dans le fichier .env, complétez les variables suivantes :

REACT_APP_GOOGLE_CLIENT_ID= #clientID Google (non implémenté)
REACT_APP_GOOGLE_CLIENT_SECRET= #clientSecret Google (non implémenté)
```

## Démarrage (local)

#### API
```
cd api
npm start
```

#### Client
```
cd client
npm start
```

#### Serveur de mail
```
maildev
```

## Démarrage (Docker Compose)

#### Construction des images
```
docker-compose build
```

#### Démarrage des conteneurs
```
docker-compose up
```

#### Arrêt des conteneurs
```
docker-compose down
```
