import { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

// Checkout pulls in the Whop SDK, so keep it out of the landing page bundle
const CheckoutPage = lazy(() =>
  import('./pages/CheckoutPage.tsx').then((m) => ({ default: m.CheckoutPage })),
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/checkout"
          element={
            <Suspense fallback={<div className="min-h-screen bg-[#08030f]" />}>
              <CheckoutPage />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
