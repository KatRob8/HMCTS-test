import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import type { Task } from "../types/Task";
import Input from "./Input";
import TextArea from "./TextArea";
import Select from "./Select";
import { TASK_CODES } from "../utilities/taskCodes";
import SubmitBtn from "./SubmitBtn";

function TaskForm() {

    const [task, setTask] = useState<Task>({title: "", description: "", status: 0, dateTime: ""});
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const navigate = useNavigate();

    // Keep track of form changes by updating state
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
                <Input 
                    innerText="Title*" 
                    id="title-name" 
                    name="title" 
                    value={task.title} 
                    type="text"
                    isRequired={true} 
                    updateData={updateData}
                />

                <TextArea 
                    innerText="Description" 
                    id="description-text" 
                    name="description" 
                    value={task.description} 
                    rows={5} 
                    isRequired={false} 
                    updateData={updateData} 
                />

                <Select 
                    innerText="Status*" 
                    id="status-select" 
                    name="status" 
                    defaultValue={task.status} 
                    isRequired={true}
                    options={TASK_CODES}
                    updateData={updateData}
                />
       
                <Input 
                    innerText="Due By*"
                    id="datetime-input"
                    name="dateTime"
                    value={task.dateTime}
                    type="datetime-local"
                    isRequired={true}
                    updateData={updateData}  
                />

                {isVisible && <p className="govuk-error-message">Please ensure all required fields marked with an asterisk * are filled out or selected</p>}
                
                <SubmitBtn name="Save" />
            </div>
        </form>

    )
}

export default TaskForm;