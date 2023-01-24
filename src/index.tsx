import './index.css';
import './fonts/Poppins-Medium.ttf'
import {useEffect} from 'react';
import * as ReactDOM from 'react-dom';
import PopUp from './pages/PopUp';
import {
  popToTop,
  Link,
  Router,
  getCurrent,
  getComponentStack,
} from 'react-chrome-extension-router';

// const Three = ({ message }: any) => (
//   <div onClick={() => popToTop()}>
//     <h1>{message}</h1>
//     <p>Click me to pop to the top</p>
//   </div>
// );

const App = () => {
  useEffect(() => {
    const { component, props } = getCurrent();
    console.log(
      component
        ? `There is a component on the stack! ${component} with ${props}`
        : `The current stack is empty so Router's direct children will be rendered`
    );
    const components = getComponentStack();
    console.log(`The stack has ${components.length} components on the stack`);
  });
  return (
    <div className='min-w-[600px]'>
      <Router>
        <PopUp />
      </Router>
    </div>

  );
};

ReactDOM.render(<App />, document.getElementById('root'));