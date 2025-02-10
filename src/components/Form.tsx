"use client";

import {useForm} from "react-hook-form";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const Form = () => {
    const {register, handleSubmit, reset, formState: { errors }} = useForm();

    const onSubmit = async (data: any) => {
        const simulatedResponse = {
            ok: "HardTask created successfully.",
            task: {
                title: data.title,
                description: data.description,
                tags: data.tags.split(',').map((tag: string) => tag.trim()),
                budget_from: data.budget_from,
                budget_to: data.budget_to,
                deadline_days: data.deadline,
                number_of_reminders: data.reminds,
                rules: JSON.parse(data.rules),
            },
        };

        await new Promise((resolve) => setTimeout(resolve, 1000));

        if (simulatedResponse.ok) {
            toast.success('Задача успешно опубликована!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            reset({
                title: '',
                description: '',
                tags: '',
                budget_from: 0,
                budget_to: 0,
                deadline: 0,
                reminds: 0,
                rules: '',
            });
        } else {
            toast.error('Ошибка при публикации задачи.', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-full mx-auto p-12 bg-white shadow-xl rounded-lg grid grid-cols-1 md:grid-cols-2 gap-12"
        >
            <ToastContainer />
            <div className="mb-6 md:col-span-2">
                <label className="block text-gray-700 font-bold mb-2">Token</label>
                <input
                    type="text"
                    defaultValue="317ad1fc-e0a9-11ef-a978-0242ac120007"
                    {...register('token', { required: true })}
                    className="w-full px-6 py-5 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.token && <span className="text-red-600 text-sm">Token is required</span>}
            </div>
            <div className="mb-6 md:col-span-2">
                <label className="block text-gray-700 font-bold mb-2">Title</label>
                <input
                    type="text"
                    {...register('title', { required: true })}
                    className="w-full px-6 py-5 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.title && <span className="text-red-600 text-sm">Title is required</span>}
            </div>
            <div className="mb-6 md:col-span-2">
                <label className="block text-gray-700 font-bold mb-2">Description</label>
                <textarea
                    {...register('description', { required: true })}
                    className="w-full px-6 py-5 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.description && <span className="text-red-600 text-sm">Description is required</span>}
            </div>
            <div className="mb-6 md:col-span-2">
                <label className="block text-gray-700 font-bold mb-2">Tags (comma-separated)</label>
                <input
                    type="text"
                    {...register('tags', { required: true })}
                    className="w-full px-6 py-5 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.tags && <span className="text-red-600 text-sm">Tags are required</span>}
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 font-bold mb-2">Budget From</label>
                <input
                    type="number"
                    {...register('budget_from', { required: true, valueAsNumber: true })}
                    className="w-full px-6 py-5 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.budget_from && <span className="text-red-600 text-sm">Budget From is required</span>}
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 font-bold mb-2">Budget To</label>
                <input
                    type="number"
                    {...register('budget_to', { required: true, valueAsNumber: true })}
                    className="w-full px-6 py-5 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.budget_to && <span className="text-red-600 text-sm">Budget To is required</span>}
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 font-bold mb-2">Deadline (days)</label>
                <input
                    type="number"
                    {...register('deadline', { required: true, valueAsNumber: true })}
                    className="w-full px-6 py-5 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.deadline && <span className="text-red-600 text-sm">Deadline is required</span>}
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 font-bold mb-2">Reminds</label>
                <input
                    type="number"
                    {...register('reminds', { required: true, valueAsNumber: true })}
                    className="w-full px-6 py-5 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.reminds && <span className="text-red-600 text-sm">Reminds is required</span>}
            </div>
            <div className="mb-6 md:col-span-2">
                <label className="block text-gray-700 font-bold mb-2">Rules (JSON)</label>
                <textarea
                    {...register('rules', { required: true })}
                    className="w-full px-6 py-5 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.rules && <span className="text-red-600 text-sm">Rules are required</span>}
            </div>
            <div className="md:col-span-2">
                <button
                    type="submit"
                    className="w-full px-6 py-5 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300"
                >
                    Отправить
                </button>
            </div>
        </form>
    );
};
