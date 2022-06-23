import {useState} from "react";
import {connect} from "react-redux";

const Task = (props) => {

    const [changeTask, setChangeTask] = useState(props.grandTask.task);


    return (
        <li>{props.grandTask.task}
            {" "}
            <input value={changeTask} onChange={(e) => setChangeTask(e.target.value)}/>
            <button onClick={() => props.updateTask(props.grandTask.id, changeTask)}>Update</button>
        </li>
    )
};

const mapDispatchToProps = (dispatch) => ({
    updateTask: (id, task) => dispatch({type: 'UPDATE_TASK', payload: {id, task}})
})
export default connect(null, mapDispatchToProps)(Task);