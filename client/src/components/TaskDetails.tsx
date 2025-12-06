import { useLocation } from "react-router-dom";
import type { Task } from "../types/Task";
import { TASK_CODES } from "../utilities/taskCodes";
import Detail from "./Detail";
import Confirmation from "./Confirmation";

function TaskDetails() {

    // Get state from navigation
    const location = useLocation();
    const state = location.state;

    // Deconstruct data
    const {title, description, status, dateTime}: Task = state.task

    // Get status as text from status code
    const statusString = TASK_CODES[status as keyof typeof TASK_CODES];

    // Get date & time in a more readable format
    const date = new Date(dateTime);
    const formattedDate = date.toLocaleString("en-GB", { 
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
    });

    return (
        <section>
            <Confirmation title="Task Created Successfully!"/>
            <dl className="govuk-summary-list">
                <Detail listKey="Title" listValue={title}/>
                <Detail listKey="Description (Optional)" listValue={description || "N/A"}/>
                <Detail listKey="Status" listValue={statusString}/>
                <Detail listKey="Due By" listValue={formattedDate}/>
            </dl>
        </section>
    )
}

export default TaskDetails;