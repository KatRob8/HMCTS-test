type Props = {
    innerText: string;
    id: string;
    name: string;
    defaultValue: number;
    isRequired: boolean;
    options: { [key: number]: string };
    updateData: (e: React.ChangeEvent<HTMLSelectElement> ) => void;
}

function Select({innerText, id, name, defaultValue, isRequired, options, updateData}: Props) {


    return (
        <div className="govuk-form-group">
            <label className="govuk-label" htmlFor={id}>
                {innerText}
            </label>
            <select className="govuk-select" id={id} name={name} defaultValue={defaultValue} onChange={(e) => updateData(e)} required={isRequired} >
                <option value={0} disabled={true}>Choose status</option>
                {Object.entries(options).map(([key, value]) => (
                    <option value={key}>{value}</option>
                ))}
            </select>
        </div>  
    )
}

export default Select;