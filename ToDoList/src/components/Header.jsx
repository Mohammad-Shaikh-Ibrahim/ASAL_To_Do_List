import { useState,useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
export default function Header(){
    const [inputValue,setInputValue]=useState('');
    const [tasks, setTasks] = useState([]);
    const dialogRef = useRef(null);

    function handleInputChange(e){
        const {value}=e.target;
        const regex = /^[A-Za-z0-9\s\-_=+!@#$%^&*(){}[\]:;"'<>,.?/\\|`~]*$/;

        if (regex.test(value)) {
        setInputValue(value);
        }
    }
    function handleAddTask(){
        if(inputValue){
            setTasks([...tasks,inputValue]);
            setInputValue('');
            if (dialogRef.current) {
                dialogRef.current.showModal();
                setTimeout(() => {
                  dialogRef.current.close();
                }, 3000);
              }
        }
    }
    return (
        <header className="mx-6 font-serif">
          <h1 className="text-center text-5xl my-12">To Do Input</h1>
          <div className="rounded-sm border-slate-500 border-2 mx-16 p-4">
            <div className="flex items-center mb-4 border-slate-500 border-2 rounded-sm">
              <FontAwesomeIcon icon={faBook} className="bg-cyan-500 p-4 text-white" />
              <input
                className="flex-1 p-3 text-left"
                type="text"
                placeholder="New ToDo"
                value={inputValue}
                onChange={handleInputChange}
              />
            </div>
            <button 
                className="w-full bg-cyan-500 text-white py-2 rounded-sm text-lg"
                onClick={handleAddTask}
                >
              Add new task
            </button>
          </div>
            <dialog ref={dialogRef} className="rounded-md shadow-lg p-4 bg-green-500 text-white">
                <p className="bg-green-500 text-white text-4xl m-10"> 
                    <FontAwesomeIcon className='mx-2' icon={faCircleCheck}/>
                    Task added successfully!</p>
            </dialog>
        </header>
      );
}