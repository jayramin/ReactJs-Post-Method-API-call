import React from 'react';
import ReactDOM from 'react-dom';
import CreateReactClass from 'create-react-class';
import  Home  from "./component/Home";
// const Contacts = CreateReactClass({
//   render() {
//     return (
//       <div>sss</div>
//     );
//   }
// });

// class Contacts extends React.Component{
//     render() {
//         return (
//           <div>class Contacts extends React.Component</div>
//         );
//       }
// }
// function Comment() {
//     return (
//         <div>function Comment()</div>
//     );
// }

ReactDOM.render(<Home />, document.getElementById('root'));
