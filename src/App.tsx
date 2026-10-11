import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Dashboard from './pages/Dashboard';
import Skills from './pages/Skills';
import Memory from './pages/Memory';
import Plugins from './pages/Plugins';
import Cron from './pages/Cron';
import Terminal from './pages/Terminal';
import Chat from './pages/Chat';
import ErrorBoundary from './components/error-boundary/ErrorBoundary';
import ErrorFallback from './components/error-boundary/ErrorFallback';

function App() {
  const [error, setError] = React.useState<Error | null>(null);

  const resetErrorHandler = () => {
    setError(null);
  };

  if (error) {
    return (
      <ErrorFallback error={error} resetErrorHandler={resetErrorHandler} />
    );
  }

  return (
    <BrowserRouter>
      <ErrorBoundary fallback={<ErrorFallback error={new Error("Erro desconhecido")} resetErrorHandler={() => {}} />}>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/memory" element={<Memory />} />
            <Route path="/plugins" element={<Plugins />} />
            <Route path="/cron" element={<Cron />} />
            <Route path="/terminal" element={<Terminal />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </MainLayout>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
