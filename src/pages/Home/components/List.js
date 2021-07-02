import Item from "./Item";
const List = ({ listData,deleteData,submmittingStatus }) => {
  console.log("listData", listData);
  return (
    <div className="list">
      {listData.map((item) => {
        const { note, date, time, id  } = item;
        return (
          <Item
           key={id}
           id={id}
           note={note} 
           date={date} 
           time={time} 
           deleteData={deleteData}
           submmittingStatus = {submmittingStatus}
           />
        );
      })}
    </div>
  );
};
export default List;
