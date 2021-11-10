import { Spinner } from 'react-bootstrap';
import {Route, Redirect} from 'react-router-dom';
import useAuth from '../hooks/useAuth';


function PrivateRoute({ children, ...rest }) {
  const {AllContexts} = useAuth();

  const { isLoading } = AllContexts;
  if (isLoading) {
    return <Spinner animation="border" variant="primary" />
  }
    return (
      <Route
        {...rest}
        render={({ location }) =>
          AllContexts?.user?.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

  export default PrivateRoute;