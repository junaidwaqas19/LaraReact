import React from 'react'
import PageContent from '../../../components/adminComponent/PageContent'
import Table from '../../../components/adminComponent/commonComponent/Table';
import { NewspaperIcon } from '@heroicons/react/24/outline';

const CategoryList = () => {

  const table = {
    headers: [
      { label: 'Category Name', key: 'name' },
      { label: 'TotalPost', key: 'TotalPost' },
      { label: 'TotalTag', key: 'TotalTag' },
      { label: 'STATUS', key: 'project_status' }
    ],
  };
  const buttons = [
    { key: "pdf", label: "PDF", type: "pdf", size: "small" , onClick:'pdf'},
    { key: "excel", label: "Excel Export", type: "excel", size: "small", onClick:'export'},
    { key: "add", label: "Create User", type: "add", size: "small", btnClick: 'add' }

  ];
  const linkIcon = ['edit', 'delete', 'view'];
  const path = { edit: '/task-manage/editProject', view: '/ca/dashboard' };

  return (
    <div>
        <PageContent
             title={'Category List'}
             icon={<NewspaperIcon className='w-8 h-8 mr-2' />}
             buttons={buttons}       
        >
              <Table
                headers={table.headers}
                data={null}
                linkIcon={linkIcon}
                onEditClick={()=> alert('edit')}
                onDeleteClick={()=> alert('delete')}
                getProjects={null}
              />


        </PageContent>
    </div>
  )
}

export default CategoryList
