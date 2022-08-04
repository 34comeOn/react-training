type But = {
    margin: string,
    onClick: () => {},
}

export default function MoreInfoButton ({margin, onClick} :But): JSX.Element {

    return (
        <button style={{marginRight: margin}} onClick={onClick}>More info...</button>
    )
}