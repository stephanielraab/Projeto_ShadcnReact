import { create } from "zustand";

type States = {
    name: string;
    email: string;
    phone: string;
    address: {
        street: string;
        number: string;
        complement?: string | undefined;
        district: string;
        city: string;
        state: string;
    };
};

type Actions = {
    setName: (name: string) => void;
    setEmail: (email: string) => void;
    setPhone: (phone: string) => void;
    setAddress: (address: States["address"]) => void;
};

const initialState: States = {
    name: '',
    email: '',
    phone: '',
    address: {
        street: '',
        number: '',
        complement: '',
        district: '',
        city: '',
        state: '',
    },
};

export const useCheckoutStore = create<States & Actions>()((set) => ({
    ...initialState,

    setName: (name) => set({ name }),
    setEmail: (email) => set({ email }),
    setPhone: (phone) => set({ phone }),
    setAddress: (address) => set({ address }),
}));
