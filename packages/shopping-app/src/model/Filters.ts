export type Filter = {
    type: string,
    options: FilterOption[],
    title: string
};

export type FilterOption = {
    label: string,
    value: string,
    isSelected: boolean
};