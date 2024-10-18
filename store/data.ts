import { create } from "zustand";

export type User = {
  name: string;
  weight: string;
  height: string;
  age: string;
  gender: string;
  objective: string;
  level: string;
};

type DataState = {
  user: User;
  // não passe esses valores pelo data gender,objective,level
  setPageOne: (data: Omit<User, "gender" | "objective" | "level">) => void;
  setPageTwo: (data: Pick<User, "gender" | "objective" | "level">) => void;
};

export const useDataStore = create<DataState>((set) => ({
  user: {
    name: "",
    weight: "",
    height: "",
    age: "",
    gender: "",
    objective: "",
    level: "",
  },
  setPageOne: (data) => set((state) => ({ user: { ...state.user, ...data } })),
  setPageTwo: (data) => set((state) => ({ user: { ...state.user, ...data } })),
}));
