import { useNavigate } from "react-router-dom";

function Task5() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Home</h2>
      <button onClick={() => navigate("/about")}>
        Go to About
      </button>
      <button onClick={() => navigate("/user/2")}>
        Go to User 2
      </button>
    </div>
  );
}
export default Task5;