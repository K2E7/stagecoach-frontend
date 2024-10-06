import { createContext, useContext, useState } from 'react';

const defaultValue = {
    selected: 'Email',
    setSelected: () => { },
};

export const SelectorContext = createContext(defaultValue);

export const SelectorProvider = ({ children }) => {
    const [selected, setSelected] = useState('Email');

    return (
        <SelectorContext.Provider value={{ selected, setSelected }}>
            {children}
        </SelectorContext.Provider>
    )
};

export const useSelectorContext = () => {
    const context = useContext(SelectorContext);

    if (context == undefined) {
        throw new Error("useSelectorContext must be used within a SelectionProvider");
    }

    return context;
}