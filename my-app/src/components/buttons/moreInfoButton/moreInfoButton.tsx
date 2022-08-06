import { MoreInfoButtonTyping } from "../../../types/buttonTypings"

export default function MoreInfoButton ({margin, onClick} :MoreInfoButtonTyping): JSX.Element {

    return (
        <button style={{marginRight: margin}} onClick={onClick}>More info...</button>
    )
}