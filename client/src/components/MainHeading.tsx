type Props = {
    heading: string;
}

function MainHeading({ heading }: Props) {

    return (
        <h1 className="govuk-heading-xl">{ heading }</h1>
    )
}

export default MainHeading;