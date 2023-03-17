import React from 'react';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban';
import { Link } from 'react-router-dom';
import { kanbanData, kanbanGrid } from '../data/dummy';
import { Header } from '../components';

const TaskManagement = () => (<>
  <div className=" flex items-end ml-12 mr-12 mb-12 mt-20 relative">

  <button className=" absolute right-0 border-2 p-3 bg-main-dark-bg rounded-xl text-sm text-white mt-4">  <Link to="/newtask">+ ADD NEW TASK
  </Link>
  </button>

</div>
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white">
      <Header  title="Tasks Management" />
      <KanbanComponent
        id="kanban"
        keyField="Status"
        dataSource={kanbanData}
        cardSettings={{ contentField: 'Summary', headerField: 'Id' }}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {kanbanGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
    </>
  );
export default TaskManagement