import Binarysearch from "./components/Binarysearch.js";
import { Provider } from 'react-redux';
import store from './store';
function App() {
  return (
    <>
  <Provider store={store}>
    <Binarysearch />
  </Provider>    </>
  );
}

export default App;
