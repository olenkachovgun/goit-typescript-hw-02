import { useEffect } from "react";
import toast from "react-hot-toast";

interface ErrorMessageProps {
  error: boolean;
}


const ErrorMessage:React.FC<ErrorMessageProps> = ({ error }) => {
  useEffect(() => {
    if (error) {
      toast.error("Sorry, something went wrong... Try again later.");
    }
  }, [error]);

  return <></>;
};


export default ErrorMessage;
