import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../core/redux/reduxStore";
import { UIAction } from "../core/redux/slices/UISlice";
import { shallowEqual } from "react-redux";

type HintProps = {
  options?: string[];
};

const FilterDropdownComponent = (props: HintProps) => {
  const { options } = props;
  const dispatch = useAppDispatch();
  const store = useAppSelector(
    (state) => ({
      filter: state.UI.filter,
    }),
    shallowEqual
  );
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    return () => {
      dispatch(UIAction.setFilter(""));
    };
  }, []);
  return (
    <>
      <div
        className="filter-dropdown p-3 d-flex align-items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className="fa fa-filter"></i>
        {store.filter ? <div>{store.filter}</div> : null}
      </div>
      {isOpen ? (
        <div className="filter-dropdown-options">
          {options?.map((option) => (
            <div
              className="filter-dropdown-option py-2 px-2"
              onClick={() => {
                dispatch(UIAction.setFilter(option));
                setIsOpen(false);
              }}
            >
              {option}
            </div>
          ))}
          {store.filter ? (
            <div
              onClick={() => {
                dispatch(UIAction.setFilter(""));
                setIsOpen(false);
              }}
              className="py-2 px-2 filter-clear-button"
            >
              Clear
            </div>
          ) : null}
        </div>
      ) : null}
    </>
  );
};

export const FilterDropdown = React.memo(FilterDropdownComponent);
