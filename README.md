# 🚀 Proyecto-Cypress - Automatización E2E

Framework de automatización de pruebas desarrollado con **Cypress** y **JavaScript**, enfocado en pruebas funcionales end-to-end y de APIs. Está estructurado para facilitar la escalabilidad y mantenimiento usando buenas prácticas como POM, fixtures y manejo de comandos personalizados.

## 🧪 Funcionalidades cubiertas

- Login y validaciones básicas
- Validación de formularios
- Navegación entre vistas protegidas
- Consumo de APIs con `cy.request()`
- Manejo de datos con fixtures

## 🗂️ Estructura del proyecto

```bash
├── cypress/
│   ├── integration/
│   ├── fixtures/
│   ├── support/
│   ├── pages/
│   └── plugins/
├── .github/workflows/   # Próximamente CI/CD
├── cypress.config.js
├── package.json
└── README.md

npm install
npx cypress open         # Para modo visual
npx cypress run          # Para ejecutar tests en CLI

📦 CI/CD (Próximamente)
El proyecto incluirá una integración con GitHub Actions para ejecutar pruebas automáticamente al hacer push o PR.

🧑‍💻 Autor
Melvin Luis De La Cruz
linkedin: https://www.linkedin.com/in/melvin-luis/


