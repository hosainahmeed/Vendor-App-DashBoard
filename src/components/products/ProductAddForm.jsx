import {
  Form,
  Input,
  InputNumber,
  Select,
  Button,
  Upload,
  message,
} from "antd";
import { UploadOutlined, DeleteOutlined } from "@ant-design/icons";
import { useState } from "react";

const { Option } = Select;
const { TextArea } = Input;

const formItemLayout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};

const ProductAddForm = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const form = Form.useForm();
  const onFinish = (values) => {
    console.log("Received values:", values);
    message.success("Product added successfully!");
    form.resetFields();
  };

  const beforeUpload = (file) => {
    const isImage = file.type.startsWith("image/");
    if (!isImage) {
      message.error("You can only upload image files!");
    }
    return isImage;
  };

  const handleChange = (info) => {
    if (info.file.status === "done") {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(info.file.originFileObj);
    }
  };

  const handleRemoveImage = () => {
    setImagePreview(null);
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="bg-[#1C2534] p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <h1 className="text-2xl font-bold mb-6 text-center text-white">
          Add New Product
        </h1>
        <Form
          requiredMark={false}
          {...formItemLayout}
          layout="vertical"
          onFinish={onFinish}
          autoComplete="off"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <Form.Item
            className="md:col-span-2"
            label="Product Image"
            name="product_image"
            rules={[
              { required: true, message: "Please upload a product image!" },
            ]}
          >
            <Upload
              name="product_image"
              listType="picture-card"
              showUploadList={false}
              beforeUpload={beforeUpload}
              onChange={handleChange}
              customRequest={({ onSuccess }) =>
                setTimeout(() => onSuccess("ok"), 0)
              }
            >
              {imagePreview ? (
                <div className="relative">
                  <img
                    src={imagePreview}
                    alt="product"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <Button
                    type="text"
                    icon={<DeleteOutlined />}
                    onClick={handleRemoveImage}
                    className="absolute top-0 right-0 text-white bg-red-500 hover:bg-red-600 rounded-full"
                  />
                </div>
              ) : (
                <div className="text-center">
                  <UploadOutlined className="text-2xl text-gray-400" />
                  <div className="mt-2 text-gray-400">Upload</div>
                </div>
              )}
            </Upload>
          </Form.Item>

          <Form.Item
            label="Product Name"
            name="product_name"
            rules={[{ required: true }]}
          >
            <Input placeholder="Enter product name" />
          </Form.Item>
          <Form.Item
            label="Product Code"
            name="product_code"
            rules={[{ required: true }]}
          >
            <Input placeholder="Enter product code" />
          </Form.Item>

          <Form.Item
            label="Product Price"
            name="product_price"
            rules={[{ required: true }]}
          >
            <InputNumber className="w-full" placeholder="Enter product price" />
          </Form.Item>
          <Form.Item
            label="Product Stock"
            name="product_stock"
            rules={[{ required: true }]}
          >
            <Select placeholder="Select stock availability">
              <Option value="Yes">Yes</Option>
              <Option value="No">No</Option>
            </Select>
          </Form.Item>

          <Form.Item
            className="md:col-span-2"
            label="Product Details"
            name="product_details"
            rules={[{ required: true }]}
          >
            <TextArea rows={4} placeholder="Enter product details" />
          </Form.Item>

          <Form.Item
            label="Product Seller"
            name="product_seller"
            rules={[{ required: true }]}
          >
            <Input placeholder="Enter product seller" />
          </Form.Item>
          <Form.Item
            label="Product Brand"
            name="product_brand"
            rules={[{ required: true }]}
          >
            <Input placeholder="Enter product brand" />
          </Form.Item>

          <Form.Item
            label="Product Rating"
            name="product_rating"
            rules={[{ required: true }]}
          >
            <InputNumber
              className="w-full"
              min={0}
              max={5}
              step={0.1}
              placeholder="Enter product rating"
            />
          </Form.Item>
          <Form.Item
            label="Product Available Number"
            name="product_available_number"
            rules={[{ required: true }]}
          >
            <InputNumber
              className="w-full"
              placeholder="Enter available number"
            />
          </Form.Item>

          <Form.Item
            label="Product Category"
            name="product_category"
            rules={[{ required: true }]}
          >
            <Input placeholder="Enter product category" />
          </Form.Item>
          <Form.Item
            label="Product Discount"
            name="product_discount"
            rules={[{ required: true }]}
          >
            <InputNumber
              className="w-full"
              placeholder="Enter product discount"
            />
          </Form.Item>

          <Form.Item className="md:col-span-2 mt-6">
            <Button
              htmlType="submit"
              block
              className="bg-[#000] hover:bg-red-500 text-white py-5 text-xl font-semibold border-none transition duration-300 ease-in-out"
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#000")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#000")}
            >
              Add Product
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ProductAddForm;
