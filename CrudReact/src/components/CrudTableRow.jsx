export const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  let { name, manufacturer, id } = el;
  return (
    <tr>
      <td>{name}</td>
      <td>{manufacturer}</td>
      <td>
        <button onClick={() => setDataToEdit(el)}>Editar</button>
        <button onClick={() => deleteData(id)}>Eliminar</button>
      </td>
    </tr>
  );
};
