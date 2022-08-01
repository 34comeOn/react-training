export enum ActionType {
    AddToFavourite = 'favourite/addCard',
    SearchStats = 'history/searchStats',
    OpenDetails = 'moreInfo/cardDetails'
}

export type AddToFavouriteAction = {
    type: ActionType.AddToFavourite,
    payload: number,
};




export type SearchPayload = {
    year: string,
    category: string,
}

export type SearchStatsAction = {
    type: ActionType.SearchStats,
    payload: SearchPayload,
};




export type Actions = AddToFavouriteAction | SearchStatsAction;