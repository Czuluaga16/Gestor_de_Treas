import React from 'react';

const TaskItem = ({ task, onDelete }) => {
  if (!task) return null;

  return (
    <div className={`task-card ${task.status}`}>
      <div className="task-info">
        <h3>{task.title}</h3>
        {task.description && <p className="task-description">{task.description}</p>}
        <span className={`task-status-badge ${task.status}`}>{task.status}</span>
      </div>
      {onDelete && (
        <button 
          onClick={() => onDelete(task.id)} 
          className="btn-delete"
          aria-label={`Eliminar tarea ${task.title}`}
        >
          Eliminar
        </button>
      )}
    </div>
  );
};

export default TaskItem;
