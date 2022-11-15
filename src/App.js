
import './App.css';
import ClickComp from './ClickComp';
import Classclick from './Components/Classclick';
import Conditionalrendering from './Components/Conditionalrendering';
import Counter from './Components/Counter';
import EventBind from './Components/EventBind';
import Forms from './Components/Forms';
//import Mycomp from './Components/Greet';
import {Greet} from './Components/Greet';
import Hello from './Components/Hello';
import MyName from './Components/MyName';
import ParentComponent from './Components/ParentComponent';
import Parents from './Components/Parents';
import SayMy from './Components/SayMy';
import SetState from './Components/SetState';
import UserGreeting from './Components/UserGreeting';
import MapMethod from "./Components/MapMethod";
import Namelist from './Namelist'
import StylesSheet from './Components/StylesSheet';
import Inline from './Components/Inline';
import './Components/appStyles.css'
import styles from './Components/appStyles.module.css'
import John from './Components/John';
import LifecycleA from './Components/LifecycleA';

function App() {
  return (
    <div className="App">
   
     <h1>
      {/* <h1 className='error'>error</h1>
      <h1 className={styles.success}>success</h1> */}
     {/* <Hello name="samson" Age="56">
      <p>This is smartsam </p>
     </Hello>
     <Hello name="Frank"/>
     <Hello name="IsmaTulevu " Age="2345"/>
      */}
      {/* <SetState/>
      <Counter/> */}
      {/* <SayMy name="sam" age="17"> Jesus Is Great</SayMy> */}
      {/* <ClickComp/>
      <Classclick/>
      <EventBind/> */}
      {/* <ParentComponent/> */}
      {/* <UserGreeting/> */}
      {/* <Namelist/> */}
      {/* <MyName name="Smartsam">
        And i enjoy minding my own business
      </MyName> */}
      {/* <Parents/>
      <Conditionalrendering/> */}

      {/* <MapMethod/> */}
      {/* <StylesSheet primary={true}/> */}
       {/* <Inline/> */}
      {/* <Namelist/> */}
    
       {/* <Forms/> */}
       <LifecycleA/>
       

      
     </h1>
    </div>
  );
}

export default App;
