import React from 'react';
import ReactDOM from 'react-dom';
import Child from '../../Child';
it("renders with out crash", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Child></Child>, div)
});