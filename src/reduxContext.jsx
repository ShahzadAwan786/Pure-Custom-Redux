import { createContext, useContext, useState } from "react";

const StoreContext = createContext();
// import { store } from "../store/reducer";
// console.log(store)
export function Provider({ store, children }) {
  const [dummy, setDummyState] = useState(null);
  const { dispatch: storeDispatch, ...rest } = store;

  return (
    <StoreContext
      value={{
        dispatch(...rest) {
          storeDispatch(...rest);
          setDummyState(Math.random());
        },
        ...rest,
      }}
    >
      {children}
    </StoreContext>
  );
}

export const useSelector = (selector) => {
  const store = useContext(StoreContext);
  const allState = store.getState();
  return selector(allState);
};

export const useDispatch = () => {
  const store = useContext(StoreContext);
  return store.dispatch;
};
