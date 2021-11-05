import React, { FC, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  getPanelsRequest,
  getPanels,
} from "../../redux/actions/panel/panel.action";

interface Props {}

const Category: FC<Props> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPanels());
  }, []);

  let categories = useSelector((state: any) => {
    return state.panelReducer.panels;
  });

  return (
    <section id="Job-Category" className="background-color-white">
      <div className="container" style={{ width: "48%" }}>
        <h2 className="text-center text-3xl">What work are you looking for?</h2>
        <div className="vertical-space-20"> </div>
        <div className="grid b1814:grid-cols-3 b1280:grid-cols-2">
          {categories && categories.map((element: any, index: Int16Array) => {
            return (
              <div className="lg:grid-cols-1 p-0">
                <img
                  src={element.image}
                  className="picTitle"
                  alt=""
                />
              </div>
            )})}
        </div>
        <div className="vertical-space-40"></div>
        <Link to={{ pathname: "/job-list" }} className="Brows-All-Category">
          ALL POSITIONS
        </Link>
      </div>
      <div className="vertical-space-30"></div>
    </section>
  );
};

export default Category;
