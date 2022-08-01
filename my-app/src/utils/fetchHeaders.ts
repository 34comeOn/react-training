export const getHeaders = (category: string):string => {
    switch (category) {
        case 'race':
            return 'race';
        case 'pilot':
            return 'driverStanding';
        case 'team':
            return 'teamStanding';
        default:
            return 'race';
    }
}