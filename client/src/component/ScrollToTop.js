/*
  CONTROLLER FUNCTIONS - Scroll To Top
  --------------------------------
  contributors:
    - Yun-Chien (Scroll To Top functionality)
*/

import React, { useEffect, Fragment } from 'react';
import { withRouter } from 'react-router-dom';


// Ensure the page always on the top when switch to new page
function ScrollToTop({ history, children }) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    }
  });

  return <Fragment>{children}</Fragment>;
}

export default withRouter(ScrollToTop);