"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

interface FormData {
    token: string;
    title: string;
    description: string;
    tags: string;
    budget_from: number;
    budget_to: number;
    deadline: number;
    reminds: number;
    private_content: boolean;
    is_hard: boolean;
    all_auto_responses: boolean;
    qty_freelancers: number;
    task_id: number;
}

export const Form = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData> = async (data) => {
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
            },
        };

        await new Promise((resolve) => setTimeout(resolve, 1000));

        if (simulatedResponse.ok) {
            toast.success('Задача успешно опубликована!', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            reset();
        } else {
            toast.error('Ошибка при публикации задачи.', {
                position: "top-center",
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
            className="w-full max-w-[700px] p-12 bg-white shadow-xl rounded-lg grid grid-cols-1 md:grid-cols-2 gap-12"
        >
            <ToastContainer />
            <div className="mb-6 md:col-span-2">
                <label className="block text-gray-700 font-bold mb-2"> Ваш Token</label>
                <input
                    type="text"
                    defaultValue="317ad1fc-e0a9-11ef-a978-0242ac120007"
                    {...register('token', { required: true })}
                    className="w-full px-6 py-5 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.token && <span className="text-red-600 text-sm">не верный Token</span>}
            </div>
            <div className="mb-6 md:col-span-2">
                <label className="block text-gray-700 font-bold mb-2">Название</label>
                <input
                    type="text"
                    {...register('title', { required: true })}
                    className="w-full px-6 py-5 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.title && <span className="text-red-600 text-sm">обязательно для заполнения</span>}
            </div>
            <div className="mb-6 md:col-span-2">
                <label className="block text-gray-700 font-bold mb-2">Описание</label>
                <textarea
                    {...register('description', { required: true })}
                    className="w-full px-6 py-5 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.description && <span className="text-red-600 text-sm">обязательно для заполнения</span>}
            </div>
            <div className="mb-6 md:col-span-2">
                <label className="block text-gray-700 font-bold mb-2">#теги</label>
                <input
                    type="text"
                    {...register('tags', { required: true })}
                    className="w-full px-6 py-5 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.tags && <span className="text-red-600 text-sm">обязательно для заполнения</span>}
            </div>
            <div className="mb-6 md:col-span-2">
                <label className="block text-gray-700 font-bold mb-2">Правила</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-gray-700 font-bold mb-2">Бюджет от:</label>
                        <input
                            type="number"
                            {...register('budget_from', { required: true, valueAsNumber: true })}
                            className="w-full px-6 py-5 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.budget_from && <span className="text-red-600 text-sm">обязательно для заполнения</span>}
                    </div>
                    <div>
                        <label className="block text-gray-700 font-bold mb-2">Бюджет до:</label>
                        <input
                            type="number"
                            {...register('budget_to', { required: true, valueAsNumber: true })}
                            className="w-full px-6 py-5 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.budget_to && <span className="text-red-600 text-sm">обязательно для заполнения</span>}
                    </div>
                    <div>
                        <label className="block text-gray-700 font-bold mb-2">Дедлайн (дней)</label>
                        <input
                            type="number"
                            {...register('deadline', { required: true, valueAsNumber: true })}
                            className="w-full px-6 py-5 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.deadline && <span className="text-red-600 text-sm">обязательно для заполнения</span>}
                    </div>
                    <div>
                        <label className="block text-gray-700 font-bold mb-2">Напоминание</label>
                        <input
                            type="number"
                            {...register('reminds', { required: true, valueAsNumber: true })}
                            className="w-full px-6 py-5 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.reminds && <span className="text-red-600 text-sm">обязательно для заполнения</span>}
                    </div>
                </div>
            </div>
            <div className="mb-6 md:col-span-2 flex items-center space-x-4">
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        id="private_content"
                        {...register('private_content')}
                        className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                    />
                    <label htmlFor="private_content" className="ml-2 text-gray-700 font-bold">Приватный контент</label>
                </div>
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        id="is_hard"
                        {...register('is_hard')}
                        className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                    />
                    <label htmlFor="is_hard" className="ml-2 text-gray-700 font-bold">Тяжелая задача</label>
                </div>
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        id="all_auto_responses"
                        {...register('all_auto_responses')}
                        className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                    />
                    <label htmlFor="all_auto_responses" className="ml-2 text-gray-700 font-bold">Авто заполнение</label>
                </div>
            </div>
            <div className="md:col-span-2">
                <div className="mb-6 md:col-span-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-gray-700 font-bold mb-2">Фрилансеров:</label>
                            <input
                                type="number"
                                {...register('qty_freelancers', { required: true, valueAsNumber: true })}
                                className="w-full px-6 py-5 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.qty_freelancers && <span className="text-red-600 text-sm">обязательно для заполнения</span>}
                        </div>
                        <div>
                            <label className="block text-gray-700 font-bold mb-2">id задачи:</label>
                            <input
                                type="number"
                                {...register('task_id', { required: true, valueAsNumber: true })}
                                className="w-full px-6 py-5 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.task_id && <span className="text-red-600 text-sm">обязательно для заполнения</span>}
                        </div>
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-full px-6 py-5 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300"
                >
                    Отправить
                </button>
            </div>
        </form>
    )
};
