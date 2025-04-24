import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routers/Route';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="max-w-[1400px] mx-auto bg-gradient-to-tr from-[#1f1c2c] via-[#1b1b40] to-[#1f1c2c]">
      <RouterProvider router={router} />
    </div>
  </StrictMode>
);
