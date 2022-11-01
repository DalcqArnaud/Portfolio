import React, { useEffect, useState } from "react";
import { CardContainer, RightCardWrapper } from "./PortfolioCompStyles";

const RightCard2 = () => {

  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }

  return (
    <>
      {windowSize.innerWidth <= 1000 ? 
        <RightCardWrapper/> :
      
        <RightCardWrapper>
          <CardContainer alignType={windowSize.innerWidth <= 1400 ? 'center' : 'baseline'}>
            
          </CardContainer>
          <CardContainer alignType={windowSize.innerWidth <= 1400 ? 'center' : 'end'}>
            
          </CardContainer> 
        </RightCardWrapper> 
      }
    </>
  );
};

export default RightCard2;
