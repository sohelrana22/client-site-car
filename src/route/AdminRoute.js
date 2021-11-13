import { Spinner } from 'react-bootstrap';
import {Route, Redirect} from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useFirebase from '../hooks/useFirebase';



function AdminRoute({ children, ...rest }) {
  const {AllContexts} = useAuth();
  const {admin} = useFirebase();
  console.log(admin)
  const { isLoading } = AllContexts;
  console.log(AllContexts)
  if (!admin, isLoading) {
    return <Spinner animation="border" variant="primary" />
  }
    return (
      <Route
        {...rest}
        render={({ location }) =>
          AllContexts?.user?.email && admin ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

  export default AdminRoute;