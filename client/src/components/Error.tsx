import MainHeading from "./MainHeading";

function Error() {

  return (
    <>
        <MainHeading heading="Sorry, something went wrong"/>
        <p className="govuk-body">Please try again later.</p>
    </>
  )
}

export default Error;