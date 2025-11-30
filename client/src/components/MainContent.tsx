import TaskForm from "./TaskForm";

function MainContent() {


  return (
    <div className="govuk-width-container">
        <main className="govuk-main-wrapper" id="main-content">
            <h1 className="govuk-heading-xl">New Task</h1>
            <TaskForm />
        </main>
    </div>
 
  )
}

export default MainContent;