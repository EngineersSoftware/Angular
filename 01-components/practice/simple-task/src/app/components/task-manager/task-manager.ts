import { Component, OnInit } from '@angular/core';

/**
 * @component TaskManager
 * @description
 * Componente padre que gestiona la lista completa de tareas.
 * Permite agregar nuevas tareas y eliminar tareas completadas.
 * Se comunica con el componente hijo TaskItem mediante @Input y @Output.
 * 
 * @implements {OnInit}
 * 
 * Responsabilidades:
 * - Mantener el estado de la lista de tareas
 * - Agregar nuevas tareas al array
 * - Eliminar tareas completadas
 * - Validar datos antes de agregar tareas
 * - Renderizar múltiples componentes TaskItem
 *  
 * @author Ing. Andres Hernandez Dev-Senior-Code
 */
@Component({
  selector: 'app-task-manager',
  standalone: false,
  templateUrl: './task-manager.html',
  styleUrl: './task-manager.css',
})

export class TaskManager implements OnInit {

  /**
   * @property {string[]} tasks
   * @description
   * Array que contiene todas las tareas pendientes.
   * Cada elemento es un string con el nombre/descripción de la tarea.
   * Este array se itera en el template usando *ngFor para renderizar
   * un componente TaskItem por cada tarea.
   * 
   * @default ['Crear lista inicial', 'Revisar tareas pendientes']
   */
  tasks: string[] = ['Crear lista inicial', 'Revisar tareas pendientes'];

  /**
   * @property {string} newTaskName
   * @description
   * Propiedad vinculada al input del formulario mediante two-way binding [(ngModel)].
   * Almacena temporalmente el texto de la nueva tarea que el usuario está escribiendo.
   * Se limpia después de agregar una tarea exitosamente.
   * 
   * @default ''
   */
  newTaskName: string = '';

  /**
   * @constructor
   * @description
   * Constructor del componente TaskManager.
   * Actualmente no inicializa ninguna dependencia, pero está disponible
   * para inyección de servicios si se necesita en el futuro.
   */
  constructor() { }

  /**
   * @method ngOnInit
   * @description
   * Hook del ciclo de vida que se ejecuta una vez después de que Angular
   * inicializa las propiedades del componente.
   * 
   * Actualmente no realiza ninguna acción, pero está implementado siguiendo
   * las mejores prácticas de Angular para futura extensibilidad.
   * 
   * @lifecycle OnInit
   * @returns {void}
   */
  ngOnInit(): void { }

  /**
   * @method addTask
   * @description
   * Agrega una nueva tarea al array de tareas.
   * 
   * Proceso:
   * 1. Elimina espacios en blanco al inicio y final del texto
   * 2. Valida que el texto no esté vacío
   * 3. Si es válido, agrega la tarea al array
   * 4. Limpia el input para permitir agregar otra tarea
   * 
   * Este método se ejecuta cuando el usuario envía el formulario (ngSubmit).
   * 
   * @returns {void}
   */
  addTask(): void {
    // Eliminar espacios en blanco innecesarios
    const trimmedName = this.newTaskName.trim();
    
    // Validar que el texto no esté vacío
    if (trimmedName){
      // Agregar la tarea al array
      this.tasks.push(trimmedName);
      
      // Limpiar el input para la próxima tarea
      this.newTaskName = '';
    }
  }

  /**
   * @method removeTask
   * @description
   * Elimina una tarea del array basándose en su índice.
   * 
   * Este método es llamado cuando el componente hijo TaskItem emite
   * el evento taskCompleted con el índice de la tarea a eliminar.
   * Implementa el patrón de comunicación hijo → padre.
   * 
   * @param {number} index - Índice de la tarea a eliminar en el array
   * @returns {void}
   */
  removeTask(index: number): void {
    // Usar splice para eliminar el elemento en la posición especificada
    // splice(índice, cantidad de elementos a eliminar)
    this.tasks.splice(index, 1);
  }

}
