import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Ooops!!!!!</h1>
      <h2>Something went Wrong!!!!</h2>
      <h3>
        {err.status} : {err.statusText}
      </h3>

      <p>{err.error.message}</p>
    </div>
  );
};
export default Error;
