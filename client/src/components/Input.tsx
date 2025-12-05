type Props = {
    innerText: string;
    id: string;
    name: string;
    value: string;
    type: string;
    isRequired: boolean;
    updateData: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({innerText, id, name, value, type, isRequired, updateData}: Props) {

    return (
        <div className="govuk-!-margin-bottom-3">
            <label className="govuk-label" htmlFor={id}>
                {innerText}
            </label>
            <input className="govuk-input" id={id} name={name} type={type} value={value} onChange={(e) => updateData(e)} required={isRequired} />
        </div>      
    )
}

export default Input;