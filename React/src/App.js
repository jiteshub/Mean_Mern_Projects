// import logo from './logo.svg';
import './App.css';
// import Color from './components/Color';
import Comp1 from './components/Comp1';
import Comp2 from './components/Comp2';
import Counter from './components/Counter';
// import ErrorBoundary from './components/ErrorBoundary';
// import FavColor from './components/FavColor';
// import User from './components/User';
// import Parent from './components/Parent';
// import ConditionalRendering from './components/ConditionalRendering';
//import ClassComp from './components/ClassComp';
// import Events from './components/Events';
//import FuncComp from './components/FuncComp'
// import Hover from './components/Hover';


function App() {
  return (
    <div>
      <header >
        {/* <h2>Welcome to React</h2>
        {<FuncComp name="Amit" city="Pune"/>
        <hr/>
        <ClassComp name="Amit" city="Pune"/>
        <hr/> */}
        {/* <Events/> */}
        {/* <Hover></Hover> */}
        {/* <ConditionalRendering/> */}
        {/* <Parent/> */}
        {/* <Color/> */}
        {/* <FavColor color="Brown" /> */}

        {/* <ErrorBoundary>
          <User name="Ravi" />                
          <User name="abc" />
          <User name="Abhi" />
        </ErrorBoundary> */}


        {/* <ErrorBoundary>
          <User name="Ravi" />
        </ErrorBoundary>

        <ErrorBoundary>
          <User name="abc" />
        </ErrorBoundary>

        <ErrorBoundary>
          <User name="Abhi" />
        </ErrorBoundary> */}

        {/* <Comp1/>
        <Comp2/> */}

        {/* <Counter user="Tushar"/> */}
        {/* <Counter render={ (isValidLogin) => isValidLogin ? "Amit" : "New User" } /> */}
        <Counter render = { (count,handler) => <Comp1 count={count} incrementHandler={handler}></Comp1>}></Counter>

        <Counter render = { (count,handler) => <Comp2 count={count} incrementHandler={handler}></Comp2>}></Counter>


      </header>
    </div>
  );
}

export default App;
