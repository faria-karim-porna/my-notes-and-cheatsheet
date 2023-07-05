import React, { useEffect, useState } from "react";
import { sidebarData } from "../../data/sidebar/sidebarData";
import { SidebarAccordion } from "./SidebarAccordion";
import { xcode } from "react-syntax-highlighter/dist/esm/styles/hljs";

const SidebarComponent = () => {
  const [data, setData] = useState<any>(sidebarData);
  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    setData(sidebarData);
  }, []);

  const anotherRec = (data: any, searchKey: string) => {
    data.inner = data.inner?.filter((y: any) => {
      if (y.outer?.toLowerCase().includes(searchKey.toLowerCase())) {
        console.log("newData2222", y);
        return y.outer?.toLowerCase().includes(searchKey.toLowerCase());
      } else {
        return anotherRec(y, searchKey);
      }
    });

    if (data.inner?.length > 0) {
      return data;
    }
  };

  const recursiveSearch: any = (data: any, searchKey: string) => {
    if (searchKey) {
      const newData = data.filter((x: any) => {
        return anotherRec(x, searchKey);
      });
      return newData;
    } else {
      return data;
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebar-fixed">
        <div className="sidebar-search">
          <input placeholder="Search..." onChange={(e) => setSearchValue(e.target.value)} />
          <button
            onClick={() => {
              const newData = recursiveSearch(data, searchValue);
              setData(newData);
            }}
          >
            <i className="fa fa-search"></i>
          </button>
        </div>
        <hr />
      </div>
      <div className="sidebar-list">
        {data.map((eachData: any) => (
          <SidebarAccordion view={eachData.view} outer={eachData.outer} inner={eachData.inner} />
        ))}
      </div>
    </div>
  );
};

export const Sidebar = React.memo(SidebarComponent);
