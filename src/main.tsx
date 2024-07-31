import ReactDOM from 'react-dom/client'
import AppRouter from '@routes/AppRouter';
// Redux 
import { Provider } from 'react-redux';
import store from './store';
// Style
import "@styles/Style.css"
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <AppRouter />
    </Provider>
)
