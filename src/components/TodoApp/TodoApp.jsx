
import React, { useState } from 'react';
import '../TodoApp/TodoApp.scss'
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";


function TodoApp() {
    const [plan, setPlan] = useState([]);
    const [content, setContent] = useState('');
    const [idPlanEdit, setIdPlanEdit] = useState(null);
    const [contentEdit, setContentEdit] = useState("");


    const handleChangeContent = (event) => {
        setContent(event.target.value);
    };

    const addPlan = () => {
        if (content.trim() !== '') {
            setPlan([...plan, { id: Date.now(), content: content }]);
            setContent('');
        }
    };

    const startEditPlan = (idPlan, content) => {
        setIdPlanEdit(idPlan);
        setContentEdit(content);
    };

    const updatePlan = () => {
        const planUpdate = plan.map(plan =>
            plan.id === idPlanEdit ? { ...plan, content: contentEdit } : plan
        );
        setPlan(planUpdate);
        setIdPlanEdit(null);
        setContentEdit('');
    };

    const deletePlan = (idPlan) => {
        const planDelete = plan.filter(plan => plan.id !== idPlan);
        setPlan(planDelete);
    };


    return (
        <div className="Todo-App">
            <div className="container">
                <h1>What's the Plan for Today</h1>
                <div className='input-content'>
                    <input
                        type="text"
                        value={content}
                        onChange={handleChangeContent}
                        placeholder="Add a todo"
                    />
                    <button onClick={addPlan}>Add Todo</button>
                </div>
                <ul>
                    {plan.map(plan => (
                        <li key={plan.id} className="plan">
                            {idPlanEdit === plan.id ? (
                                <div className="edit-plan">
                                    <input
                                        type="text"
                                        value={contentEdit}
                                        onChange={(e) => setContentEdit(e.target.value)}
                                    />
                                    <button onClick={updatePlan}>Update</button>
                                </div>
                            ) : (
                                <div className="content-plan">
                                    <span>{plan.content}</span>
                                    <div>
                                        <FaEdit onClick={() => startEditPlan(plan.id, plan.content)} className='edit' />
                                        <RiDeleteBin5Fill onClick={() => deletePlan(plan.id)} className='delete' />
                                    </div>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );

}

export default TodoApp;