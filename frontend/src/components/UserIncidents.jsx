

import React from "react";
import { Input,Tag ,Table,Space} from "antd";
import { Icon } from "@iconify/react";
import profileImg from "../images/profileImg.png";
import "../css/userProfile.css";



<img src={profileImg} alt="Logo" />;
    const columns = [
        {
            title: "Incident ID",
            dataIndex: "customerID",
            key: "customerID",
        },
        {
            title: "Incident",
            dataIndex: "incident",
            key: "incident",
        },
        {
            title: "NIC",
            dataIndex: "nic",
            key: "nic",
        },
        {
            title: "Connection Number",
            dataIndex: "connectionNumber",
            key: "connectionNumber",
        },

        {
            title: "Incident Type",
            dataIndex: "incidentType",
            key: "incidentType",
            
        },
        {
            title: "Status",
            key: "status",
            dataIndex: "status",
            render: (status) => {
                let color = "green";
                if (status === "Cancelled") {
                    color = "red";
                } else if (status === "Pending") {
                    color = "orange";
                }
                return <Tag color={color}>{status}</Tag>;
            },
        },
        {
            title: "Action",
            key: "action",
            render: (_, record) => (
                <Space size="middle">
                    {record.status === "Pending" ? (
                        <>
                            <button
                                style={{
                                    fontSize: "20px",
                                    color: "#757171",
                                    border: "none",
                                    background: "transparent",
                                }}
                                // onClick={() => showPaidConform(record)}
                            >
                                <Icon icon="icon-park-outline:correct" />
                            </button>
                            <button
                                style={{
                                    fontSize: "20px",
                                    color: "#757171",
                                    border: "none",
                                    background: "transparent",
                                }}
                                // onClick={() =>
                                //     handleDeleteConfirmation(record._id)
                                // }
                            >
                                <Icon icon="material-symbols:delete-outline" />
                            </button>
                        </>
                    ) : (
                        <>
                            <button
                                disabled
                                style={{
                                    fontSize: "20px",
                                    color: "#9D9D9D",
                                    border: "none",
                                    background: "transparent",
                                }}
                            >
                                <Icon icon="icon-park-outline:correct" />
                            </button>
                            <button
                                disabled
                                style={{
                                    fontSize: "20px",
                                    color: "#9D9D9D",
                                    border: "none",
                                    background: "transparent",
                                }}
                            >
                                <Icon icon="material-symbols:delete-outline" />
                            </button>
                        </>
                    )}
                </Space>
            ),
        },
    ];
const UserIncidents = () => {
  return (
    
    <div className="container">
      
      <div className="bg-image" >
                <div className="new-header">
                    <h5>My Incident Reports</h5>
                </div>
                <div style={{ width: "100%" }}>
                    <div className="table-container">
                        <Table
                            columns={columns}
                            // dataSource={"incidentList"}
                            // pagination={"pagination"}
                            // onChange={"handleTableChange"}
                        />
                    </div>
                </div>
            </div>
      
    </div>
  );
};
export default UserIncidents;
