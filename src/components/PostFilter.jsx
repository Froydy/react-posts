import React from "react";
import MySelect from "./UI/Select/MySelect";
import MyInput from "./UI/input/MyInput";

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput
        value={filter.query}
        onChange={(e) => setFilter({ ...filter.sort, query: e.target.value })}
        placeholder="Поиск..."
      />
      <MySelect
        value={filter.sort}
        onChangeFunc={(selecterSort) =>
          setFilter({ ...filter, sort: selecterSort })
        }
        defaultValue="Сортировка"
        options={[
          { value: "title", name: "По названию" },
          { value: "body", name: "По описанию" },
        ]}
      />
    </div>
  );
};

export default PostFilter;
