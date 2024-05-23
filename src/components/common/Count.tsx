"use client"
import { useState } from "react";
import CountUp from "react-countup";
import { InView } from "react-intersection-observer";

interface CountType {
   number: number;
}

const Count = ({ number }: CountType) => {
   const [focus, setFocus] = useState<boolean>(false);
   const visibleChangeHandler = (isVisible: boolean) => {
      if (isVisible) {
         if (!focus) {
            setFocus(true);
         }
      }
   };

   return (
      <>
         <CountUp start={focus ? 0 : undefined} end={number} duration={2}>
            {({ countUpRef }) => (
               <>
                  <span ref={countUpRef} />
                  <InView
                     as="span"
                     onChange={(inView: any) => visibleChangeHandler(inView)}>
                  </InView>
               </>
            )}
         </CountUp>
      </>
   );
};

export default Count;