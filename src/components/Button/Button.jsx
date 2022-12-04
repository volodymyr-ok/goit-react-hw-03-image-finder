export const Button = ({ loadMore }) => {
  return (
    <button type="button" className="Button" onClick={loadMore}>
      Load more
    </button>
  );
};

// import React, { Component } from 'react';
// export class Button extends Component {
//   render() {
//     return (
//       <button type="button" className="Button">
//         Load more
//       </button>
//     );
//   }
// }
