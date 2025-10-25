/**
 * @module AppModule
 * @description
 * Módulo raíz de la aplicación Angular que configura y organiza todos los componentes,
 * módulos y servicios necesarios para el funcionamiento de la aplicación.
 * 
 * @author Ing. Andres Hernandez Dev-Senior-Code
 */

/**
 * @import NgModule
 * Decorador que define un módulo de Angular. Permite organizar la aplicación
 * en bloques cohesivos de funcionalidad.
 */
import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/**
 * @import FormsModule
 * Módulo que habilita el manejo de formularios basados en plantillas (template-driven forms).
 * 
 * ¿Por qué es necesario en esta aplicación?
 * - Proporciona la directiva [(ngModel)] para two-way data binding
 * - Permite sincronización bidireccional entre el modelo y la vista
 * - Habilita validación de formularios en el template
 * - Proporciona acceso al estado del formulario (valid, invalid, pristine, dirty, etc.)
 * 
 * Uso en esta aplicación:
 * - En TaskManager, se usa [(ngModel)]="newTaskName" para vincular el input
 *   del formulario con la propiedad del componente
 * - Permite acceder al estado del input mediante #taskInput="ngModel"
 * 
 * Sin FormsModule:
 * - [(ngModel)] no funcionaría y generaría un error
 * - No se podría hacer two-way binding
 * - La validación de formularios no estaría disponible
 */
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

/**
 * @import TaskManager
 * Componente padre que gestiona la lista de tareas.
 * Responsable de agregar y eliminar tareas.
 */
import { TaskManager } from './components/task-manager/task-manager';

/**
 * @import TaskItem
 * Componente hijo que representa un elemento individual de tarea.
 * Se comunica con TaskManager mediante @Input y @Output.
 */
import { TaskItem } from './components/task-item/task-item';

/**
 * @NgModule
 * Decorador que define la configuración del módulo raíz de la aplicación.
 */
@NgModule({
  /**
   * @property declarations
   * @description
   * Array que declara todos los componentes, directivas y pipes que pertenecen
   * a este módulo.
   * 
   * ¿Por qué es necesario declarar los componentes?
   * - Angular necesita saber qué componentes existen en el módulo
   * - Solo los componentes declarados pueden usarse en los templates
   * - Cada componente debe declararse en EXACTAMENTE UN módulo
   * - Si no se declara, Angular no reconocerá el selector del componente
   * 
   * Componentes declarados:
   * - App: Componente raíz de la aplicación
   * - TaskManager: Componente padre que gestiona las tareas
   * - TaskItem: Componente hijo que muestra cada tarea individual
   * 
   * Sin estas declaraciones:
   * - Los selectores <app-task-manager> y <app-task-item> no funcionarían
   * - Angular lanzaría un error: "component is not a known element"
   */
  declarations: [
    App,
    TaskManager,
    TaskItem
  ],

  /**
   * @property imports
   * @description
   * Array que importa otros módulos cuya funcionalidad exportada es necesaria
   * en los componentes de este módulo.
   * 
   * ¿Por qué importar módulos?
   * - Para usar directivas, pipes y servicios de otros módulos
   * - Para modularizar y organizar la aplicación
   * - Para reutilizar funcionalidad entre diferentes partes de la app
   * 
   * Módulos importados:
   * 
   * 1. BrowserModule:
   *    - Requerido para aplicaciones web
   *    - Proporciona *ngIf, *ngFor, etc.
   * 
   * 2. AppRoutingModule:
   *    - Configura las rutas de navegación
   * 
   * 3. FormsModule:
   *    - Habilita [(ngModel)] para two-way binding
   *    - Necesario para el formulario de agregar tareas
   *    - Proporciona validación de formularios
   * 
   * Sin estos imports:
   * - BrowserModule: La app no se renderizaría en el navegador
   * - FormsModule: [(ngModel)] generaría un error
   * - AppRoutingModule: La navegación no funcionaría
   */
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],

  /**
   * @property providers
   * @description
   * Array que define los servicios disponibles para inyección de dependencias
   * en toda la aplicación.
   * 
   * provideBrowserGlobalErrorListeners():
   * - Configura listeners para capturar errores globales
   * - Mejora el debugging y manejo de errores
   * - Ayuda a identificar problemas en producción
   */
  providers: [
    provideBrowserGlobalErrorListeners()
  ],

  /**
   * @property bootstrap
   * @description
   * Array que especifica el componente raíz que Angular debe cargar
   * al iniciar la aplicación.
   * 
   * - App es el componente raíz que se monta en el index.html
   * - Angular busca el selector de este componente en el HTML
   * - Solo debe haber un componente bootstrap en el módulo raíz
   */
  bootstrap: [App]
})
export class AppModule { }
