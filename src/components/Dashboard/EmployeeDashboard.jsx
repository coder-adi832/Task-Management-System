import React, { useState } from 'react';
import Header from '../../others/Header.jsx';
import TaskListNumber from '../../others/TaskListNumber.jsx';
import TaskListContainer from '../TaskList/TaskListContainer.jsx';
import NewTask from '../TaskList/NewTask.jsx';
import AcceptTask from '../TaskList/AcceptTask.jsx';
import CompleteTask from '../TaskList/CompleteTask.jsx';
import FailedTask from '../TaskList/FailedTask.jsx';

const EmployeeDashboard = (props) => {
  const [display, setDisplay] = useState(null);

  const filterTasks = () => {
    if (!props.data || !props.data.tasks) return [];

    switch (display) {
      case 1:
        return props.data.tasks.filter((task) => task.new_task === true);
      case 2:
        return props.data.tasks.filter((task) => task.active === true);
      case 3:
        return props.data.tasks.filter((task) => task.completed === true);
      case 4:
        return props.data.tasks.filter((task) => task.failed === true);
      default:
        return props.data.tasks;
    }
  };

  const renderTasks = () => {
    const filteredTasks = filterTasks();

    switch (display) {
      case 1:
        return filteredTasks.map((task) => (
          <NewTask
            key={task.id}
            date={task.taskDate}
            title={task.taskTitle}
            description={task.taskDescription}
            category={task.taskCategory}
          />
        ));
      case 2:
        return filteredTasks.map((task) => (
          <AcceptTask
            key={task.id}
            date={task.taskDate}
            title={task.taskTitle}
            description={task.taskDescription}
            category={task.taskCategory}
          />
        ));
      case 3:
        return filteredTasks.map((task) => (
          <CompleteTask
            key={task.id}
            date={task.taskDate}
            title={task.taskTitle}
            description={task.taskDescription}
            category={task.taskCategory}
          />
        ));
      case 4:
        return filteredTasks.map((task) => (
          <FailedTask
            key={task.id}
            date={task.taskDate}
            title={task.taskTitle}
            description={task.taskDescription}
            category={task.taskCategory}
          />
        ));
      default:
        return <TaskListContainer data={props.data} />;
    }
  };

  return (
    <div className="h-screen w-full px-[8%] py-[2%] bg-[#c2f9ff]">
      <Header data={props.data} changeUser={props.changeUser} />
      <TaskListNumber data={props.data} />
      <div
        id="taskContainer"
        className="h-[400px] w-full mt-10 flex p-6 gap-8 flex-nowrap flex-shrink-0 overflow-auto"
      >
        {renderTasks()}
      </div>
      <div className="flex gap-10 mt-4 pl-8">
        <button
          onClick={() => setDisplay(0)}
          className="h-[50px] bg-emerald-300 w-[200px] rounded-full text-xl"
        >
          All Tasks
        </button>
        <button
          onClick={() => setDisplay(1)}
          className="h-[50px] bg-yellow-300 w-[200px] rounded-full text-xl"
        >
          New Tasks
        </button>
        <button
          onClick={() => setDisplay(2)}
          className="h-[50px] bg-blue-300 w-[200px] rounded-full text-xl"
        >
          Active Tasks
        </button>
        <button
          onClick={() => setDisplay(3)}
          className="h-[50px] bg-[#42dac4] w-[200px] rounded-full text-xl"
        >
          Completed Tasks
        </button>
        <button
          onClick={() => setDisplay(4)}
          className="h-[50px] bg-red-300 w-[200px] rounded-full text-xl"
        >
          Failed Tasks
        </button>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
