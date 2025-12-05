type Props = {
    name: string;
}

function SubmitBtn({ name }: Props) {
    return (
        <button type="submit" className="govuk-button govuk-!-margin-top-3" data-module="govuk-button">
            { name } 
        </button>
    )
}

export default SubmitBtn;