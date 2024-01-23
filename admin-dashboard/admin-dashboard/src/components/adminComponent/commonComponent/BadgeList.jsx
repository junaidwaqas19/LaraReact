const BadgeList = ({ datas }) => {
    return (
      <div>
        {datas.map((data, index) => (
  
          <span key={index} className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
            {data}
          </span>
        ))}
      </div>
    );
  }
  
  export default BadgeList;
  