import { createContext, useReducer } from 'react';

export const BuildContext = createContext();

function reducer(builds, { type, payload }) {
    switch (type) {
        case 'create':
            const build = { ...payload, id: builds.length };
            return [build, ...builds];
        case 'reset':
            return [...payload];
        case 'update':
            return builds.map((build) =>
                build.id === payload.id ? payload : build
            );
        case 'delete':
            return builds.filter((build) => build.id !== payload.id);
        default:
            throw Error(`Unknown action: ${type}`);
    }
}

export const BuildProvider = ({ children }) => {
    const [builds, dispatch] = useReducer(reducer);
    // const [builds, dispatch] = useReducer(reducer, []);

    return (
        <BuildContext.Provider value={{ builds, dispatch }}>
            {children}
        </BuildContext.Provider>
    )
}