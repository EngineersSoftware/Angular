import { Component, EventEmitter, Input, Output } from '@angular/core';

/**
 * @component TaskItem
 * @description
 * Componente hijo que representa un elemento individual de tarea en la lista.
 * Este componente es reutilizable y se comunica con su componente padre mediante
 * @Input para recibir datos y @Output para emitir eventos.
 * 
 * @author Ing. Andres Hernandez Dev-Senior-Code
 */
@Component({
  selector: 'app-task-item',
  standalone: false,
  templateUrl: './task-item.html',
  styleUrl: './task-item.css',
})
export class TaskItem {

  /**
   * @property {string} taskName
   * @description
   * Nombre o descripción de la tarea que se mostrará en la interfaz.
   * Este valor es recibido desde el componente padre mediante property binding.
   * 
   * @Input Decorador que permite la comunicación padre → hijo
   * @default ''
   */
  @Input() taskName: string = '';

  /**
   * @property {number} index
   * @description
   * Índice de la tarea en el array del componente padre.
   * Se utiliza para identificar qué tarea debe ser eliminada cuando se completa.
   * 
   * @Input Decorador que permite recibir el índice desde el componente padre
   * @default 0
   */
  @Input() index: number = 0;

  /**
   * @property {EventEmitter<number>} taskCompleted
   * @description
   * Emisor de eventos que notifica al componente padre cuando una tarea se marca como completada.
   * Emite el índice de la tarea para que el padre pueda identificarla y eliminarla.
   * 
   * @Output Decorador que permite la comunicación hijo → padre
   * @emits {number} El índice de la tarea completada
   */
  @Output() taskCompleted = new EventEmitter<number>();

  /**
   * @property {boolean} isUrgent
   * @description
   * Estado que indica si la tarea está marcada como urgente.
   * Este estado controla el estilo visual de la tarea mediante ngClass.
   * Se puede alternar mediante el botón "¡Urgente!" en la interfaz.
   * 
   * @default false
   */
  isUrgent: boolean = false;

  /**
   * @method markCompleted
   * @description
   * Método que se ejecuta cuando el usuario hace clic en el botón "Completar".
   * Emite un evento al componente padre con el índice de la tarea para que
   * pueda ser eliminada de la lista.
   * 
   * Este método implementa el patrón de comunicación hijo → padre usando @Output.
   * 
   * @returns {void}
   * @fires taskCompleted - Emite el índice de la tarea al componente padre
   */
  markCompleted(): void {
    this.taskCompleted.emit(this.index);
  }

}
