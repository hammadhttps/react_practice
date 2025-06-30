import { createContext, useState, type FC, type ReactNode } from 'react';

interface context_props {
    count: number;
    increment: () => void;
    decrement: () => void;
}

export const MyContext = createContext<context_props>({
    count: 0,
    increment: () => {},
    decrement: () => {},
});

interface MyProvider_props {
    children: ReactNode;
}

const MyProvider: FC<MyProvider_props> = ({ children }) => {
    const [count, setCount] = useState(0);

    const increment = () => setCount((prev) => prev + 1);
    const decrement = () => setCount((prev) => prev - 1);

    return (
        <MyContext.Provider value={{ count, increment, decrement }}>
            {children}
        </MyContext.Provider>
    );
};

export default MyProvider;