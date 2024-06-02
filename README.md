# Proyecto Cypress con POM, Parallel Testing, Test Report y CI/CD en AWS

## Descripción

Este proyecto está basado en [Cypress](https://www.cypress.io/), utilizando el patrón Page Object Model (POM) para la estructuración de las pruebas, ejecutando pruebas en paralelo, generando reportes de pruebas y configurado para integrarse con CI/CD en AWS.

## Contenido

- **Page Object Model (POM)**: Estructura de pruebas organizada para mejorar la mantenibilidad y reutilización del código.
- **Parallel Testing**: Ejecución de pruebas en paralelo para reducir el tiempo total de prueba.
- **Test Report**: Generación de reportes detallados de las pruebas ejecutadas.
- **CI/CD en AWS**: Configuración de integración y entrega continua utilizando servicios de AWS.

## Instalación

### Requisitos previos

- Node.js (>= 20.5.x)
- npm (>= 10.1.x)

### Pasos de instalación

1. Clona este repositorio en tu máquina local:

   ```sh
   git clone https://github.com/melvin01RD/Proyecto-Cypress.git
   cd Proyecto-Cypress

   npm install

   npm install cypress@12.13.0 --save-dev

  2.Estructura del proyecto
├── cypress
│   ├── fixtures
│   ├── integration
│   │   ├── page_objects
│   │   └── tests
│   ├── plugins
│   └── support
├── cypress.json
├── package.json
└── README.md

Reportes de Pruebas
Los reportes de pruebas se generan automáticamente después de la ejecución. Puedes encontrar los reportes en la carpeta cypress/reports.

Integración y Entrega Continua (CI/CD) con AWS
Este proyecto está configurado para CI/CD utilizando AWS. Asegúrate de tener configurados tus archivos de configuración de AWS correctamente y seguir los pasos de configuración de CI/CD en la documentación oficial de AWS.

Configuración Básica de CI/CD
Crea un archivo .aws/credentials con tus credenciales de AWS.
Configura tu pipeline en AWS CodePipeline o AWS CodeBuild.
Contribución
Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

Haz un fork de este repositorio.
Crea una nueva rama (git checkout -b feature/nueva-funcionalidad).
Realiza tus cambios y haz commit de los mismos (git commit -am 'Añadir nueva funcionalidad').
Sube tus cambios a tu fork (git push origin feature/nueva-funcionalidad).
Abre un Pull Request.
Licencia
Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.



