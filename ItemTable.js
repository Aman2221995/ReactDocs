import React from "react";

const ItemTable = (props) => {
  return (
    <>
      <table>
        <tr>
          <th>Title</th>
          <th>UpVotes</th>
          <th>Date</th>
        </tr>
        {props.article1.map((item,key=0) => {
          return (
            <>
              <tr>
                <td>{item.title}</td>
                <td>{item.upvotes}</td>
                <td>{item.date}</td>
              </tr>
            </>
          );
        })}
      </table>
    </>
  );
};

export default ItemTable;
