type Props = {
    name: string;
}

function SubmitBtn({ name }: Props) {
    return (
        <button type="submit" className="govuk-button" data-module="govuk-button">
            { name } 
        </button>
    )
}

export default SubmitBtn;