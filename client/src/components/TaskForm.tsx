import { useEffect, useState } from "react";
import axios from "axios";


function TaskForm() {

    type Task = {
        title: string;
        description: string;
        status: number;
        dateTime: string;
    };

    const [task, setTask] = useState<Task>({title: "", description: "", status: 0, dateTime: ""});

    useEffect(() => {
        console.log(task)
  
    }, [task]); 

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
            const response = await axios.post('http://localhost:3000/submit-task', {task: task}, {withCredentials: true})
            console.log(response)

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <div className="govuk-form-group">
                <label className="govuk-label" htmlFor="title-name">
                    Title
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
                        Status
                    </label>
                    <select className="govuk-select" id="status-select" name="status" value={task.status} onChange={(e) => updateData(e)} required={true} >
                        <option value={0} selected>Choose status</option>
                        <option value={1}>To Do</option>
                        <option value={2}>In Progress</option>
                        <option value={3}>On Hold</option>
                        <option value={4}>Completed</option>
                        <option value={5}>Cancelled</option>
                    </select>
                </div>

                <label className="govuk-label" htmlFor="datetime-input">
                    Due By:
                </label>
                <input className="govuk-input" id="datetime-input" name="dateTime" type="datetime-local" value={task.dateTime} onChange={(e) => updateData(e)} required={true}/>
            
                <button type="submit" className="govuk-button" data-module="govuk-button">
                    Save 
                </button>
            </div>
        </form>

    )
}

export default TaskForm;