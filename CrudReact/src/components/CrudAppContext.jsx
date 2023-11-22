import { CrudProvider } from "./CrudContext";
import { CrudFormContext } from "./CrudFormContext";
import { CrudTableContext } from "./CrudTableContext";
export const CrudAppContext = () => {
  return (
    <div>
      <h2>CRUD APP CONTEXT</h2>
      <article className="grid1-2">
        <CrudProvider>
          <CrudFormContext />
          <CrudTableContext />
        </CrudProvider>
      </article>
    </div>
  );
};
