import { useState } from "react";
import { Table, Input, Button, Tag, Popconfirm, message } from "antd";
import { SearchOutlined, DeleteOutlined } from "@ant-design/icons";
import "./userTable.css";
const initialUsers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "Customer",
    status: "Active",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    role: "Customer",
    status: "Inactive",
  },
  {
    id: 4,
    name: "Alice Brown",
    email: "alice@example.com",
    role: "Customer",
    status: "Active",
  },
  {
    id: 5,
    name: "Charlie Wilson",
    email: "charlie@example.com",
    role: "Moderator",
    status: "Active",
  },
];

const UsersTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState(initialUsers);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
  };

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
    message.success("User deleted successfully");
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm) ||
      user.email.toLowerCase().includes(searchTerm)
  );

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: "linear-gradient(to right, #9F7AEA, #4299E1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontWeight: "bold",
              marginRight: 8,
            }}
          >
            {text.charAt(0)}
          </div>
          <span>{text}</span>
        </div>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      render: (role) => (
        <Tag
          color={
            role === "Admin"
              ? "blue"
              : role === "Moderator"
              ? "purple"
              : "default"
          }
        >
          {role}
        </Tag>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag color={status === "Active" ? "green" : "red"}>{status}</Tag>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (record) => (
        <Popconfirm
          title="Are you sure to delete this user?"
          onConfirm={() => handleDelete(record.id)}
          okText="Yes"
          cancelText="No"
        >
          <Button type="text" danger icon={<DeleteOutlined />} />
        </Popconfirm>
      ),
    },
  ];

  return (
    <div style={{ padding: 24, background: "#1F2937", borderRadius: 8 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        <h2 style={{ color: "white", fontSize: 20, fontWeight: 600 }}>Users</h2>
        <Input
          placeholder="Search users..."
          prefix={<SearchOutlined style={{ color: "rgba(0,0,0,.45)" }} />}
          value={searchTerm}
          onChange={handleSearch}
          style={{
            width: 300,
            background: "#374151",
            borderColor: "#4B5563",
            color: "white",
          }}
        />
      </div>
      <Table
        className="custom-table"
        columns={columns}
        dataSource={filteredUsers}
        rowKey="id"
        pagination={false}
        style={{ background: "#1F2937", color: "white" }}
      />
    </div>
  );
};

export default UsersTable;
