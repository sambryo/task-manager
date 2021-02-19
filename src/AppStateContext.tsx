import React, { createContext, useReducer, useContext } from 'react';

interface Task {
  id: string;
  text: string;
}

interface List {
  id: string;
  text: string;
  tasks: Task[];
}

interface AppStateContextProps {
  state: AppState;
}

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps);
const appData: AppState = {
  lists: [
    {
      id: '0',
      text: 'To do',
      tasks: [{ id: 'c0', text: 'Generate app scaffold' }],
    },
    {
      id: '1',
      text: 'In Progress',
      tasks: [{ id: 'c2', text: 'Learn Typescript' }],
    },
    {
      id: '2',
      text: 'Done',
      tasks: [{ id: 'c3', text: 'Begin to use static typing' }],
    },
  ],
};

export interface AppState {
  lists: List[];
}

export const AppStateProvider = ({ children }: React.PropsWithChildren<{}>) => {
  return <AppStateContext.Provider value={{ state: appData }}>{children}</AppStateContext.Provider>;
};

export const useAppState = () => {
  return useContext(AppStateContext);
};
