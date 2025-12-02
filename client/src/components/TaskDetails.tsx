import { useLocation } from "react-router-dom";
import type { Task } from "../types/Task";

function TaskDetails() {

    // Get state from navigation
    const location = useLocation();
    const state = location.state;

    const {title, description, status, dateTime}: Task = state.task

    const taskCodes = {
        1: "To Do",
        2: "In Progress",
        3: "On Hold",
        4: "Completed",
        5: "Cancelled"
    };

    const statusString = taskCodes[status as keyof typeof taskCodes];

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
            <div className="govuk-panel govuk-panel--confirmation">
                <h1 className="govuk-panel__title">
                    Task Created Successfully!
                </h1>
            </div>
            <dl className="govuk-summary-list">
                <div className="govuk-summary-list__row">
                    <dt className="govuk-summary-list__key">
                        Title
                    </dt>
                    <dd className="govuk-summary-list__value">
                        {title}
                    </dd>
                </div>
                <div className="govuk-summary-list__row">
                    <dt className="govuk-summary-list__key">
                        Description (Optional)
                    </dt>
                    <dd className="govuk-summary-list__value">
                        {description || "N/A"}
                    </dd>
                </div>
                <div className="govuk-summary-list__row">
                    <dt className="govuk-summary-list__key">
                        Status
                    </dt>
                    <dd className="govuk-summary-list__value">
                        {statusString}
                    </dd>
                </div>
                <div className="govuk-summary-list__row">
                    <dt className="govuk-summary-list__key">
                        Due By
                    </dt>
                    <dd className="govuk-summary-list__value">
                        {formattedDate}
                    </dd>
                </div>
            </dl>
        </section>
    )
}

export default TaskDetails;