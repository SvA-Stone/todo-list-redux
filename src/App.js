
import './App.css';
import {connect} from "react-redux";
import TodoList from "./TodoList";

function App(props) {
  return (
    <div>

      <h1>{props.title}</h1>
        <TodoList/>
    </div>
  );
}
const mapStateToProps = (state) => ({
  title: state.title
})
export default connect(mapStateToProps)(App);
