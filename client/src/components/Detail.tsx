type Props = {
    listKey: string;
    listValue: string;
}

function Detail({listKey, listValue}: Props) {
    return (
        <div className="govuk-summary-list__row">
            <dt className="govuk-summary-list__key">
                {listKey}
            </dt>
            <dd className="govuk-summary-list__value">
                {listValue}
            </dd>
        </div>
    )
}

export default Detail;