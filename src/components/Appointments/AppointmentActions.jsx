import React from 'react';

function AppointmentActions({ appointment, onReschedule, onCancel }) {
  return (
    <div className="flex space-x-2">
      <button
        onClick={() => onReschedule(appointment)}
        className="px-3 py-1 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
      >
        Reschedule
      </button>
      <button
        onClick={() => onCancel(appointment)}
        className="px-3 py-1 text-sm bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
      >
        Cancel
      </button>
    </div>
  );
}

export default AppointmentActions;