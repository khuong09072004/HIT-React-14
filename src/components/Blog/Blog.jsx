import React, { useState } from "react";
import './Blog.scss';

const Blog = () => {


    const [products, setProducts] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        id: '',
        image: '',
        name: '',
        description: '',
    });

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = () => {
        setFormData((prevData) => ({
            ...prevData,
            id: products.length + 1,
        }));
        setProducts([...products, formData]);
        setShowModal(false);
    };

    const handleDelete = (id) => {
        setProducts(products.filter((product) => product.id !== id));
    };

    return (
        <div className="curd-products">
            <div className="container-curd-products">
                <header>
                    <h1>Quản lí Products</h1>
                    <button onClick={handleShow} className="add">Thêm sản phẩm</button>
                </header>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Ảnh</th>
                            <th>Tên sản phẩm</th>
                            <th>Mô tả</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id}>
                                <td>{product.id + 1}</td>
                                <td>
                                    <img src={product.image} alt={product.name} />
                                </td>
                                <td>{product.name}</td>
                                <td>{product.description}</td>
                                <td>
                                    <button>Sửa</button>
                                    <button onClick={() => handleDelete(product.id)}>Xóa</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {showModal && (
                    <div className="modal">
                        <div className="modal-content">
                            <span className="close" onClick={handleClose}>
                                &times;
                            </span>
                            <h2>Thêm sản phẩm</h2>
                            <form>
                                <label htmlFor="image">Ảnh:</label>
                                <input
                                    type="text"
                                    id="image"
                                    name="image"
                                    value={formData.image}
                                    onChange={handleChange}
                                />
                                <label htmlFor="name">Tên sản phẩm:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                <label htmlFor="description">Mô tả:</label>
                                <textarea
                                    id="description"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                ></textarea>
                            </form>
                            <button onClick={handleSubmit}>Lưu</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}


export default Blog;