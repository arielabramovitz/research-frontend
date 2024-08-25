import 'bootswatch/dist/spacelab/bootstrap.rtl.css'
import React, {StrictMode} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
        <StrictMode>
            <App/>
        </StrictMode>
)
