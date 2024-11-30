import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Appointments from './pages/Appointments';
import Prescriptions from './pages/Prescriptions';
import MedicalHistory from './pages/MedicalHistory';
import Chat from './pages/Chat';
import SymptomChecker from './pages/SymptomChecker';
import Sidebar from './components/Layout/Sidebar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <main className="flex-1 overflow-y-auto p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/prescriptions" element={<Prescriptions />} />
            <Route path="/medical-history" element={<MedicalHistory />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/symptom-checker" element={<SymptomChecker />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;