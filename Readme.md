
# Rick and Morty Microfrontends (rick-microfrontends-mf)

Aplicación web construida con React y arquitectura de Microfrontends usando Webpack Module Federation. Consume la API pública de Rick and Morty y está dockerizada para facilitar su despliegue.

---

## 🚀 Descripción

Este proyecto implementa una solución frontend con tres microfrontends:

- **MF-Shell**: Contenedor principal que orquesta el sistema, maneja el ruteo y el layout común (navbar, footer).
- **MF-Characters**: Lista de personajes con filtros y paginación.
- **MF-CharacterDetail**: Muestra detalle ampliado de un personaje y los episodios en los que aparece.

La comunicación entre los microfrontends se realiza vía Webpack Module Federation (Webpack 5).

El diseño es moderno, profesional y responsivo utilizando Tailwind CSS.

---

## 📦 Estructura del proyecto

```
rick-microfrontends-mf/
├── mf-shell/           # Microfrontend shell principal
├── mf-characters/      # Microfrontend para listado de personajes
├── mf-detail/          # Microfrontend para detalle de personaje
├── docker-compose.yml  # Orquestador de contenedores Docker
├── README.md           # Documentación del proyecto
```

---

## 💻 Tecnologías usadas

- React 18
- Webpack 5 con Module Federation
- Tailwind CSS
- React Router
- React Testing Library (tests)
- Docker & Docker Compose

---

## 🐳 Ejecutar con Docker Compose

Para levantar todos los microfrontends y el contenedor host usando Docker Compose, sigue estos pasos:

1. **Requisitos previos:**

   - Tener instalado [Docker](https://docs.docker.com/get-docker/)
   - Tener instalado [Docker Compose](https://docs.docker.com/compose/install/)

2. **Levantar los contenedores:**

   Desde la raíz del proyecto, ejecuta:

   ```bash
   docker-compose up --build
   ```

   Este comando construirá las imágenes y levantará los siguientes servicios:

   - **MF-Shell** en `http://localhost:3000`
   - **MF-Characters** en `http://localhost:3001`
   - **MF-CharacterDetail** en `http://localhost:3002`

3. **Abrir la aplicación:**

   Abre tu navegador y visita:

   ```
   http://localhost:3000
   ```

   Verás la aplicación principal que orquesta los microfrontends.

4. **Detener los contenedores:**

   Para detener y eliminar los contenedores, presiona `Ctrl + C` en la terminal donde ejecutaste Docker Compose y luego ejecuta:

   ```bash
   docker-compose down
   ```

---

## 🛠️ Ejecutar local sin Docker

Para desarrollo local sin contenedores, ejecuta en cada carpeta de microfrontend:

```bash
npm install
npm start
```

- MF-Shell corre en `http://localhost:3000`
- MF-Characters corre en `http://localhost:3001`
- MF-CharacterDetail corre en `http://localhost:3002`

---

## 🧪 Tests

Ejecuta tests unitarios con:

```bash
npm test
```

Cada microfrontend incluye tests usando React Testing Library para validar componentes clave.

---

## 📋 Funcionalidades

- Arquitectura basada en microfrontends con Webpack Module Federation
- Listado de personajes con filtros por nombre, estado y especie
- Paginación y carga dinámica de datos
- Vista detallada de personajes con episodios donde aparecen
- Diseño responsivo con Tailwind CSS
- Manejo de estados de carga y errores con mensajes amigables
- Tests unitarios para asegurar calidad del código
- Dockerización completa para despliegue fácil y replicable

---

## 📚 Recursos y documentación adicional

- [Rick and Morty API](https://rickandmortyapi.com/documentation)
- [Webpack Module Federation](https://webpack.js.org/concepts/module-federation/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

---

## 🙌 Contacto

Para dudas o sugerencias, contacta a Jimmy García:  
📧 jimmyegc@gmail.com  
🌐 [github.com/jimmyegc](https://github.com/jimmyegc)

---

¡Gracias por revisar mi proyecto!
