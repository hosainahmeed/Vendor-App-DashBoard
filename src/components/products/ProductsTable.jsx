import { useState } from "react";
import { Table, Input, Button, Modal, Form, message, Popconfirm } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import "./table.css";
import ProductUpdateForm from "./ProductUpdateForm";

const { Search } = Input;

const PRODUCT_DATA = [
  {
    id: 1,
    name: "Wireless Earbuds",
    category: "Electronics",
    price: 59.99,
    stock: 143,
    sales: 1200,
    image:
      "https://imageupscaler.com/wp-content/uploads/2024/07/deblured-cutty-fox.jpg",
  },
];

const ProductsTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(PRODUCT_DATA);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [form] = Form.useForm();

  const handleSearch = (value) => {
    setSearchTerm(value.toLowerCase());
    const filtered = PRODUCT_DATA.filter(
      (product) =>
        product.name.toLowerCase().includes(value) ||
        product.category.toLowerCase().includes(value)
    );
    setFilteredProducts(filtered);
  };

  const handleDelete = (id) => {
    const newProducts = filteredProducts.filter((product) => product.id !== id);
    setFilteredProducts(newProducts);
    message.success("Product deleted successfully");
    console.log("Deleted product ID:", id);
  };

  const showUpdateModal = (product) => {
    setSelectedProduct(product);
    form.setFieldsValue({
      ...product,
      image: product.image
        ? [
            {
              uid: "-1",
              name: "image.png",
              status: "done",
              url: product.image,
            },
          ]
        : [],
    });
    setIsModalVisible(true);
  };

  // const handleUpdate = () => {
  //   form
  //     .validateFields()
  //     .then((values) => {
  //       const updatedProducts = filteredProducts.map((product) =>
  //         product.id === selectedProduct.id
  //           ? {
  //               ...product,
  //               ...values,
  //               image: values.image?.[0]?.url || values.image?.[0]?.thumbUrl,
  //             }
  //           : product
  //       );
  //       setFilteredProducts(updatedProducts);
  //       setIsModalVisible(false);
  //       message.success("Product updated successfully");
  //     })
  //     .catch((info) => {
  //       console.log("Validate Failed:", info);
  //     });
  // };

  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (image) => (
        <img src={image} alt="product" className="w-12 h-12 object-cover" />
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price) => `$${price.toFixed(2)}`,
    },
    {
      title: "Stock",
      dataIndex: "stock",
      key: "stock",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <div className="flex items-center justify-start gap-2">
          <Button
            icon={<EditOutlined />}
            onClick={() => showUpdateModal(record)}
            className="text-blue-400 hover:text-blue-300"
          />
          <Popconfirm
            title="Are you sure you want to delete this product?"
            onConfirm={() => handleDelete(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button
              icon={<DeleteOutlined />}
              className="text-red-400 hover:text-red-300"
            />
          </Popconfirm>
        </div>
      ),
    },
  ];

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  return (
    <div style={{ padding: "20px" }}>
      <Search
        placeholder="Search products..."
        allowClear
        enterButton={<SearchOutlined />}
        size="large"
        onChange={(e) => handleSearch(e.target.value)}
        style={{ marginBottom: "20px" }}
        className="custom-search-input"
      />
      <Table
        columns={columns}
        dataSource={filteredProducts}
        rowKey="id"
        className="custom-table"
        pagination={true}
      />
      <Modal
        title="Update Product"
        visible={isModalVisible}
        width={1200}
        // onOk={handleUpdate}
        onCancel={() => setIsModalVisible(false)}
        className="custom-modal"
      >
        <ProductUpdateForm selectedProduct={selectedProduct} />
      </Modal>
    </div>
  );
};

export default ProductsTable;
