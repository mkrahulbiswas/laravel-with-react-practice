import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTask, removeTask } from "../DevToolsStore";

export const Home = () => {
    const [text, setText] = useState('');
    const tasks = useSelector((state: any) => state)
    const dispatch = useDispatch()
    const handleFormSubmit = (e: any) => {
        e.preventDefault()
        dispatch(addTask(text))
        setText('')
    }

    return (
        <div className="container">
            <div className="todo-app">
                <span>To do list:-</span>
            </div>
            <div className="row">
                <div className="col-12">
                    <form onSubmit={handleFormSubmit}>
                        <div className="form-element">
                            <label htmlFor="text" className="form-label">Please Put A Name <span className="text-danger">*</span></label>
                            <div className="form-icon set-validation">
                                <div className="input-group">
                                    <input type="text" id="text" className="form-control" value={text} onChange={(e) => setText(e.target.value)} />
                                    <button className="btn btn-info border-start-0 border-secondary">Add task</button>
                                </div>
                            </div>
                            <div className="validation-error" id="otpErr"></div>
                        </div>
                    </form>
                </div>
                <div className="col-12 mt-3">
                    <div className="d-flex flex-row flex-wrap justify-content-between gap-2">
                        {
                            tasks.tasks.map((val: any, index: any) => {
                                return (
                                    <div className="bg-warning-subtle p-2 text-uppercase border border-dark rounded" key={index}>
                                        {val}<span className="btn btn-sm btn-danger ms-2" onClick={() => dispatch(removeTask(index))}>x</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
