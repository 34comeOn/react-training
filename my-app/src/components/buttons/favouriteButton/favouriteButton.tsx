import { FavouriteButtonTyping } from "../../../types/buttonTypings"

export default function FavouriteButton ({onClick} :FavouriteButtonTyping): JSX.Element {
    return (
        <button onClick={onClick}>Add to selected</button>
    )
}