import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../reduxStore/reducers";

export const useTypedSelector:TypedUseSelectorHook<RootState> = useSelector

    
