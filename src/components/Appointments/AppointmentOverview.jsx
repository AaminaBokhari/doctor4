import React, { useState } from 'react';
import AppointmentTable from './AppointmentTable';
import AppointmentFilters from './AppointmentFilters';
import { mockAppointments } from '../../data/mockData';

function AppointmentOverview() {
  const [filters, setFilters] = useState({
    search: '',
    type: '',
    status: '',
  });

  const handleFilterChange = (filterName, value) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: value,
    }));
  };

  return (
    <div className="space-y-4">
      <AppointmentFilters 
        filters={filters}
        onFilterChange={handleFilterChange}
      />
      <div className="bg-white rounded-lg shadow-md">
        <AppointmentTable 
          data={mockAppointments}
          filters={filters}
        />
      </div>
    </div>
  );
}

export default AppointmentOverview;