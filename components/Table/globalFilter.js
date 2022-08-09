import React from "react";

export function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length
  const [value, setValue] = React.useState(globalFilter)
  const onChange = (value) => {
    return setGlobalFilter(value || undefined)
  }

  return (
    <div>
      <p style={{fontSize: 'medium', fontWeight: 'bold'}}>Global Search</p>
      <input
        value={value || ""}
        onChange={e => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        style={{marginTop: '8px', padding: '4px 4px', width:'200px', border: '1px solid lightgray', borderRadius: '4px', boxShadow: 'none', fontWeight: 200}}
        placeholder={`Search ${count} records...`}
      />
    </div>
  )
}