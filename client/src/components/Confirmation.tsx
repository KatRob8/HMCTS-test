type Props = {
    title: string
}

function Confirmation({ title }: Props) {
    return (
        <div className="govuk-panel govuk-panel--confirmation">
            <h1 className="govuk-panel__title">
                {title}
            </h1>
        </div>
    )
}

export default Confirmation;