import Login from "./Login";
import Register from "./Register";
import { useAuthContext } from "../hooks/useAuthContext";
import ProfilePage from "../pages/ProfilePage";

function Access() {
  const { user } = useAuthContext();

  return (
    <>
      {user ? (
        <ProfilePage />
      ) : (
        <div className="container">
          <div className="Login">
            <Login />
          </div>
          <div className="Register">
            <Register />
          </div>
          <div className="Find-Friends"></div>
          <div className="Popular-Members"></div>
          <div className="New-Members"></div>
        </div>
      )}
    </>
  );
}

export default Access;
