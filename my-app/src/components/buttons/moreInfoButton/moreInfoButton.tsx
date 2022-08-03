type But = {
    margin: string
}

export default function MoreInfoButton ({margin} :But): JSX.Element {

    return (
        <button style={{marginRight: margin}}>More info...</button>
    )
}