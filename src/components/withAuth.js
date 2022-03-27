import { useHistory } from "react-router-dom";
const withAuth = (WrappedComponent) => {
  return (props) => {
    // checks whether we are on client / browser or server.
    if (typeof window !== "undefined") {
      let history = useHistory();

      const accessToken = localStorage.getItem("userDet");

      // If there is no access token we redirect to "/" page.
      if (!accessToken) {
        history.push("/login");
        return null;
      }

      // If this is an accessToken we just render the component that was passed with all its props

      return <WrappedComponent {...props} />;
    }

    // If we are on server, return null
    return null;
  };
};

export default withAuth;