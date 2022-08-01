export enum ActionType {
    LogIn = 'user/logIn',
    SearchStats = 'history/searchStats',
    OpenDetails = 'moreInfo/cardDetails'
}

export type LogInAction = {
    type: ActionType.LogIn,
    payload: boolean,
};




export type SearchPayload = {
    year: string,
    category: string,
}

export type SearchStatsAction = {
    type: ActionType.SearchStats,
    payload: SearchPayload,
};




export type Actions = LogInAction | SearchStatsAction;