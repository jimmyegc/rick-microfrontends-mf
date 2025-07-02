🚀 Cómo ejecutar localmente
🔧 1. Clona el repositorio
bash
Copiar
Editar
git clone https://github.com/tuusuario/rick-microfrontends.git
cd rick-microfrontends
🔧 2. Instala dependencias en cada microfrontend
bash
Copiar
Editar
cd mf-shell && npm install && cd ..
cd mf-characters && npm install && cd ..
cd mf-character-detail && npm install && cd ..
🔧 3. Inicia en modo desarrollo (opcional)
En terminales separadas:

bash
Copiar
Editar
cd mf-shell && npm start
cd mf-characters && npm start
cd mf-character-detail && npm start
🐳 4. Levanta todo con Docker Compose
bash
Copiar
Editar
docker-compose up --build
Accede a la app principal en:

📍 http://localhost:3000

🧪 Tests básicos
bash
Copiar
Editar
npm test
Incluyen pruebas unitarias de los filtros y carga de datos en cada microfrontend.

🧩 Tecnologías utilizadas
React 18

React Router DOM 6

Webpack 5 con Module Federation

Tailwind CSS

Docker & Docker Compose

🧙‍♂️ Recomendaciones
Usa localhost:3000 para ingresar a la app.

Si algo no carga, revisa que los puertos 3001 y 3002 estén disponibles.

Para recargar módulos en caliente en desarrollo, usa npm start en cada microfrontend.