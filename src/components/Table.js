import "./styling.css";

const Table = ({ sat }) => {
  //const spaceCap = sat.map((id, data) => {
  // return( <Table  key={data.id} />
  //)});

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {sat.map((data, id) =>
          <tr key={id} >
            <td>{data.name}</td>
            <td>{data.type}</td>
            <td>{data.launchDate}</td>
            <td>{data.operational ? "active" : "inactive"}</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Table;