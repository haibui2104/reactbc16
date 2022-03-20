import logo from './logo.svg';
import './App.css';
import CardJSX from './Component/Demo component/CardJSX';
import CardFunc from './Component/Demo component/CardFunc';
import Layout from './Component/LayoutExercise/Layout';
import Databinding from './Databinding/Databinding';
import HandleEvent from './HandleEvent/HandleEvent';
// Conponent App will contains all the display of the web
function App() {
  return (
    <div className="App">
       {/* <CardFunc />
      <CardJSX></CardJSX>
      <CardJSX></CardJSX>
      <CardJSX></CardJSX>
      <CardJSX />
      */}
      {/* <Layout/> */}
      {/* <Databinding /> */}
      <HandleEvent/>
    </div>
  );
}

export default App;
