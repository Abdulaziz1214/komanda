import React from "react";
import { useState } from "react";

const AddBookModal = ({ onClose, onAdd }) => {
    const [form, setForm] = useState({
        title: "",
        author: "",
        image: "",
        description: "",
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setError('');    // сброс ошибки при вводе
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { title, author, image, description } = form;

        if (!title || !author || !image || !description) {
        setError('Все поля обязательны для заполнения.');
        return;
        }

        onAdd(form); // передаём данные в родителя
    };

    return (
        <div>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <button
            className="btn bg-blue-600 text-white px-4 py-2 rounded mb-6"
            onClick={() => (document.getElementById("my_modal_3").showModal())}
        >
            Add book
        </button>
        <dialog id="my_modal_3" className="modal" onSubmit={handleSubmit}>
            <div className="modal-box">
                <form method="dialog" className="space-y-3">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost right-2 top-2" onClick={() => (document.getElementById("my_modal_3").close())}>
                    ✕
                    </button>
                    <input
                    className="border w-full px-3 py-2 rounded"
                    name="title"
                    placeholder="Title"
                    value={form.title}
                    onChange={handleChange}
                    />
                    <input
                    className="border w-full px-3 py-2 rounded"
                    name="author"
                    placeholder="Author"
                    value={form.author}
                    onChange={handleChange}
                    />
                    <input
                    className="border w-full px-3 py-2 rounded"
                    name="image"
                    placeholder="Image URL"
                    value={form.image}
                    onChange={handleChange}
                    />
                    <textarea
                    className="border w-full px-3 py-2 rounded resize-none"
                    name="description"
                    placeholder="Description"
                    value={form.description}
                    onChange={handleChange}
                    />
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                        <button
                            type="submit"
                            className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
                            
                        >
                            Add book
                        </button>
                </form>
            </div>
        </dialog>
        </div>
    );
};

export default AddBookModal;
