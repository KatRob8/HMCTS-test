import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import type { Task } from "../types/Task";

function TaskForm() {

    const [task, setTask] = useState<Task>({title: "", description: "", status: 0, dateTime: ""});
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const navigate = useNavigate();

    const updateData = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLSelectElement> ) => {
        setTask((prevObject) => {
            return {
                ...prevObject,
                [e.target.name]: e.target.value
            }
        });
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            // Post task to backend
            const response = await axios.post('http://localhost:3000/submit-task', {task: task}, {withCredentials: true})

            // Destructure response
            const {id, createdTask} = response.data.newTask;

            // Navigate to task details page
            navigate(`/task/${id}`, { state: {task: createdTask} });

        } catch (error) {
            if (axios.isAxiosError(error)) {
                if (error.status === 400) {
                    // Show error message
                    setIsVisible((prev) => !prev);
                }
                else {
                    // Navigate to error page
                    navigate('/error');
                }
            }
        }
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <div className="govuk-form-group">
                <label className="govuk-label" htmlFor="title-name">
                    Title*
                </label>
                <input className="govuk-input" id="title-name" name="title" type="text" value={task.title} onChange={(e) => updateData(e)} required={true} />
            
                <div className="govuk-form-group">
                    <label className="govuk-label" htmlFor="description-text">
                        Description
                    </label>
                    <textarea className="govuk-textarea" id="description-text" name="description" rows={5} value={task.description} onChange={(e) => updateData(e)}  />
                </div>

                <div className="govuk-form-group">
                    <label className="govuk-label" htmlFor="status-select">
                        Status*
                    </label>
                    <select className="govuk-select" id="status-select" name="status" defaultValue={task.status} onChange={(e) => updateData(e)} required={true} >
                        <option value={0} disabled={true}>Choose status</option>
                        <option value={1}>To Do</option>
                        <option value={2}>In Progress</option>
                        <option value={3}>On Hold</option>
                        <option value={4}>Completed</option>
                        <option value={5}>Cancelled</option>
                    </select>
                </div>

                <label className="govuk-label" htmlFor="datetime-input">
                    Due By*:
                </label>
                <input className="govuk-input" id="datetime-input" name="dateTime" type="datetime-local" value={task.dateTime} onChange={(e) => updateData(e)} required={true}/>

                {isVisible && <p className="govuk-error-message">Please ensure all required fields marked with an asterisk * are filled out or selected</p>}
                <button type="submit" className="govuk-button" data-module="govuk-button">
                    Save 
                </button>
            </div>
        </form>

    )
}

export default TaskForm;