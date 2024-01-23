import React from 'react'
import PageContent from '../../../components/adminComponent/PageContent'
import Table from '../../../components/adminComponent/commonComponent/Table';
import { NewspaperIcon } from '@heroicons/react/24/outline';
const PostList = () => {
  
  const table = {
    headers: [
      { label: 'Image', key: 'Image' },
      { label: 'Post Name', key: 'name' },
      { label: 'Category Name', key: 'categoryName' },
      
      { label: 'Total Views', key: 'TotalViews' },
      { label: 'STATUS', key: 'status' }
    ],
  };
  const buttons = [
    { key: "pdf", label: "PDF", type: "pdf", size: "small" , onClick:'pdf'},
    { key: "excel", label: "Excel Export", type: "excel", size: "small", onClick:'export'},
    { key: "add", label: "Create Post", type: "add", size: "small", btnClick: 'add' }

  ];
  const linkIcon = ['edit', 'delete', 'view'];
  const path = { edit: '/task-manage/editProject', view: '/ca/dashboard' };

  return (
    <div>
      
        <PageContent
             title={'Post List'}
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

export default PostList
