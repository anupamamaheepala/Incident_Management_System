

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
            dataIndex: "transactionID",
            key: "transactionID",
        },
        {
            title: "NIC",
            dataIndex: "packageType",
            key: "packageType",
        },
        {
            title: "Connection Number",
            dataIndex: "eventType",
            key: "eventType",
        },

        {
            title: "Incident Type",
            dataIndex: "eventDate",
            key: "eventDate",
            
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
                            // dataSource={"bookingList"}
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
