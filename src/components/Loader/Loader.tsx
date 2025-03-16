import React from "react";
 import {Hourglass} from "react-loader-spinner";


interface LoaderProps {
  visible: boolean; 
}

const Loader: React.FC<LoaderProps> = ({ visible }) => {
  return (
    <Hourglass
      visible={visible}
      height={50} 
      width={50}  

      //colors={["#306cce", "#72a1ed"]} // Колір для анімації
      color="#306cce"
    />
  );
};

export default Loader;

