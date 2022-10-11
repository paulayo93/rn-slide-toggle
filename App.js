
import SlideToggle from "./src/SlideToggle";
import { Provider } from 'react-redux';
import store from './redux-store/store';


import BuiltInSlideToggle from './src/BuiltInSlideToggle';


export default function App() {

  return (
    <Provider store={store}>

    {/* The SlideToggle component would be instantiated from here*/}
       <SlideToggle/> 
    {/* <BuiltInSlideToggle/> */}
       </Provider>
  );
}