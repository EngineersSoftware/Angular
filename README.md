#  Bienvenido a la Tutoría de Angular

##  Instructor
**Ing. Andres Hernandez Dev-Senior-Code** - Instructor de la tutoría



##  Sobre esta Tutoría

Esta tutoría fue diseñada e impartida para enseñar los fundamentos de **Angular**, enfocándose en la construcción de aplicaciones modernas con componentes reutilizables y comunicación efectiva entre ellos.



##  Conceptos Cubiertos

### **Tutoría 02: Componentes y Plantillas en Angular**

Durante esta sesión se abordaron los siguientes temas:

#### 1. **Componentes en Angular**
- Estructura y anatomía de los componentes
- Clase TypeScript, plantilla HTML y estilos CSS
- Selectores y decorador `@Component`
- Componentes standalone (Angular 14+)

#### 2. **Plantillas y Data Binding**
- **Interpolación de texto** (`{{ }}`)
- **Property Binding** (`[ ]`)
- **Event Binding** (`( )`)
- Plantillas inline vs archivos separados

#### 3. **Comunicación entre Componentes**
- **@Input**: Comunicación Padre → Hijo
- **@Output**: Comunicación Hijo → Padre
- EventEmitter para emitir eventos personalizados

#### 4. **Ciclo de Vida de Componentes**
- `ngOnInit`: Inicialización del componente
- `ngOnChanges`: Detección de cambios en @Input
- `ngOnDestroy`: Limpieza de recursos
- `ngAfterViewInit`: Después de inicializar la vista
- `ngDoCheck`: Detección de cambios personalizada

#### 5. **Sistema de Imports y Módulos**
- Declaración e importación de componentes
- CommonModule y FormsModule
- Componentes standalone

#### 6. **Buenas Prácticas**
- Nombres descriptivos para componentes
- Separación de responsabilidades
- Componentes pequeños y reutilizables
- Uso de tipos TypeScript
- Limpieza de suscripciones



##  Estructura del Proyecto

```
Angular/
├── 01-components/
│   ├── docs/
│   │   ├── README.md          # Documentación completa de la tutoría (formato Marp)
│   │   └── assets/            # Imágenes y recursos visuales
│   └── practice/
│       └── simple-task/       # Proyecto práctico: Gestor de Tareas
│           ├── src/
│           │   ├── app/
│           │   │   ├── components/
│           │   │   │   ├── task-item/      # Componente hijo para cada tarea
│           │   │   │   └── task-manager/   # Componente padre gestor de tareas
│           │   │   ├── app.ts              # Componente principal
│           │   │   ├── app.html            # Plantilla principal
│           │   │   ├── app-module.ts       # Módulo principal
│           │   │   └── app-routing-module.ts
│           │   └── styles.css              # Estilos globales
│           ├── package.json                # Dependencias del proyecto
│           ├── angular.json                # Configuración de Angular CLI
│           └── README.md                   # Instrucciones del proyecto
└── DOCUMENT.md                             # Este archivo
```



##  Instalación y Configuración

### **Requisitos Previos**

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión 18 o superior) - [Descargar aquí](https://nodejs.org/)
- **npm** (viene incluido con Node.js)
- **Angular CLI** (versión 20.1.6)

### **Paso 1: Instalar Angular CLI**

Si aún no tienes Angular CLI instalado globalmente, ejecuta:

```bash
npm install -g @angular/cli@20.1.6
```

### **Paso 2: Navegar al Proyecto**

```bash
cd 01-components/practice/simple-task
```

### **Paso 3: Instalar Dependencias**

```bash
npm install
```

Esto instalará todas las dependencias necesarias especificadas en `package.json`:
- Angular 20.1.0
- RxJS 7.8.0
- TypeScript 5.8.2
- Karma y Jasmine para testing

---

##  Cómo Utilizar el Proyecto

### **Iniciar el Servidor de Desarrollo**

Para ejecutar la aplicación en modo desarrollo:

```bash
npm start
# o
ng serve
```

La aplicación estará disponible en: **http://localhost:4200/**

El servidor se recargará automáticamente cuando realices cambios en los archivos.

### **Compilar el Proyecto**

Para crear una versión de producción optimizada:

```bash
npm run build
# o
ng build
```

Los archivos compilados se generarán en el directorio `dist/`.

### **Ejecutar Tests Unitarios**

Para ejecutar las pruebas unitarias con Karma:

```bash
npm test
# o
ng test
```

### **Modo Watch (Desarrollo)**

Para compilar automáticamente mientras desarrollas:

```bash
npm run watch
```

---

##  Proyecto Práctico:  Task Manager

El proyecto **task-manager** es una aplicación de gestión de tareas que implementa todos los conceptos vistos en la tutoría:

### **Características**
- ✅ Lista de tareas con estado (completada/pendiente)
- ✅ Agregar nuevas tareas
- ✅ Marcar tareas como completadas
- ✅ Comunicación entre componentes con @Input y @Output
- ✅ Uso de interpolación, property binding y event binding
- ✅ Implementación del ciclo de vida de componentes

### **Componentes Principales**

1. **TaskManagerComponent** (Padre)
   - Gestiona la lista completa de tareas
   - Recibe eventos de los componentes hijos
   - Mantiene el estado de la aplicación

2. **TaskItemComponent** (Hijo)
   - Representa una tarea individual
   - Recibe datos mediante @Input
   - Emite eventos mediante @Output

---

##  Recursos Adicionales

-  [Documentación Oficial de Angular](https://angular.dev)
-  [Guía de Componentes](https://angular.dev/guide/components)
-  [Guía de Estilos de Angular](https://angular.dev/style-guide)
-  [Referencia de Angular CLI](https://angular.dev/tools/cli)
-  [Documentación de la Tutoría](./01-components/docs/README.md)

---

##  Soporte

Si tienes preguntas o necesitas ayuda con los conceptos cubiertos en esta tutoría, no dudes en contactarme.

---

##  Notas Importantes

- Este proyecto utiliza **Angular 20.1.0** con las últimas características
- Se implementan **componentes standalone** siguiendo las mejores prácticas modernas
- El código incluye **TypeScript 5.8.2** con tipado estricto
- Se utiliza **Prettier** para formateo automático del código

---

**¡Feliz aprendizaje! **
