export interface ITodoDummyJson {
    todos: ITodoCompleted[];
    total: number;
    skip: number;
    limit: number;
}

export interface ITodoCompleted {
    id: number;
    todo: string;
    completed: boolean;
    userId: number;
}
