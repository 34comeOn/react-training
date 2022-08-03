export type Props = {
    type: string,
    id: string,
    name: string,
    inputState: string,
    onInputChange: any,
}

export type State = {
    inputState: string;
}

export type Event = {
    target: { value: string};
}
