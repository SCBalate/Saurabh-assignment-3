import React, { useState } from "react";
import "./MainPageContent.scss";
import { tableHeaderData } from "../../constants/TableHeaderData";
import Avatar from "../Avatar/Avatar";





const MainPageContent = () => {
  return (
    <div className="mainpage-content">
      <div className="main-page-table-content">
        <div className="main-table-list">
          <div className="main-page-table-header">
            <div className="Header-content">
              <div className="arrow-icon"></div>
              <TableHeader data={tableHeaderData.header} />
              <div className="arrow-icon"></div>
            </div>
          </div>
          <div className="main-table-body-content">
            {tableHeaderData.rows.map((row) => (
              <div className="main-table-content-body">
                <TableRows data={row} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const TableHeader = ({ data }) => {
  return (
    <>
      {data.map((header) => (
        <>
          <div class="column">
            <div class="Header-content">
              <div class="Header-label">{header.content}</div>
              <i className="icon-caret-down"></i>
            </div>
          </div>
        </>
      ))}
    </>
  );
};

const TableRows = ({ data }) => {
  const [showActionPopup, setshowActionPopup] = useState(false);
  return (
    <>
      <div className="row">
        <div className="arrow-icon">
          <i className="icon-chevron-down"></i>
        </div>

        <>
          <div class="row-task-comp">
            <div class="table-task-content">
              <div className="table-row-label">{data?.stage}</div>
            </div>
          </div>
          <div class="row-task-comp">
            <div class="table-task-content">
              <div className="table-row-label">{data?.taskType}</div>
            </div>
          </div>
          <div class="row-task-comp">
            <div class="table-task-content">
              <div className="table-row-label">{data?.team}</div>
            </div>
          </div>
          <div class="row-task-comp">
            <div class="table-task-content">
              <div className="mtc-avatar">
                <Avatar />
              </div>
            </div>
          </div>
          <div class="row-task-comp">
            <div class="table-task-content">
              <div className="table-row-label">{data?.startDate}</div>
            </div>
          </div>
          <div class="row-task-comp">
            <div class="table-task-content">
              <div className="table-row-label">{data?.deadline}</div>
            </div>
          </div>
        </>

        <div
          className="mr-menus"
          tabIndex={0}
          onBlur={() => setshowActionPopup(false)}
          onClick={() => setshowActionPopup((o) => !o)}
        >
          <i className="icon-ellipsis-vertical" />
          {showActionPopup && <ActionMenus />}
        </div>
      </div>
    </>
  );
};

const ActionMenus = () => {
  return (
    <>
      <div className="action-menus-comp" >
        <div className="action-menu-items">
          <i className="icon-pencil-line" style={{fontSize:"20px"}}></i>
          <div className="content">Edit</div>
        </div>
        <div className="action-menu-items">
          <i className="icon-delete" style={{fontSize:"20px"}}></i>
          <div className="content">Delete</div>
        </div>
      </div>
    </>
  );
};

export default MainPageContent;
