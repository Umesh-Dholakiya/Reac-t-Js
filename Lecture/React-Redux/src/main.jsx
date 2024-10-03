import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import store from './Store.js'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
    <App />
    </Provider>
)

