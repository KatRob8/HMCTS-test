type Props = {
    innerText: string;
    id: string;
    name: string;
    value: string | undefined;
    rows: number;
    isRequired: boolean;
    updateData: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

function TextArea({innerText, id, name, value, rows, isRequired, updateData}: Props) {
    return (
        <div className="govuk-form-group">
            <label className="govuk-label" htmlFor={id}>
                {innerText}
            </label>
            <textarea className="govuk-textarea" id={id} name={name} rows={rows} value={value} required={isRequired} onChange={(e) => updateData(e)} />
        </div>
    )
}

export default TextArea;