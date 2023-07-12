export type StringToObject<Key extends string, Type = string> = { [K in Key]: Type };
