import { createContext, useState } from "react";

const CrudContext = createContext();
const initialDb = [
  {
    id: 1,
    name: "Anis",
    manufacturer: "Tetra",
  },
  {
    id: 2,
    name: "Rapi",
    manufacturer: "Elysion",
  },
  {
    id: 3,
    name: "Naga",
    manufacturer: "Missillis",
  },
  {
    id: 4,
    name: "Modernia",
    manufacturer: "Pilgrim",
  },
  {
    id: 5,
    name: "2B",
    manufacturer: "Abnormal",
  },
];
const CrudProvider = ({ children }) => {
  const [db, setDb] = useState(initialDb);
  const [dataToEdit, setDataToEdit] = useState(null);
  const createData = (data) => {
    data.id = Date.now();
    setDb([...db, data]);
  };
  const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
  };
  const deleteData = (id) => {
    let isDelete = window.confirm(
      `Estas seguro de eliminar el resgistro con el id '${id}'`
    );
    if (isDelete) {
      let newData = db.filter((el) => el.id !== id);
      setDb(newData);
    } else {
      return;
    }
  };

  const data = {
    createData,
    updateData,
    dataToEdit,
    deleteData,
    setDataToEdit,
    db,
  };
  return <CrudContext.Provider value={data}>{children}</CrudContext.Provider>;
};
export { CrudProvider };
export default CrudContext;
