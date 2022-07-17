// This is a custom filter UI for selecting
// a unique option from a list
import React from "react";

export function SelectColumnFilter({
  column: {filterValue, setFilter, preFilteredRows, id},
}) {
  // Calculate the options for filtering
  // using the preFilteredRows
  const options = React.useMemo(() => {
    const options = new Set()
    preFilteredRows.forEach(row => {
      options.add(row.values[id])
    })
    return [...options.values()]
  }, [id, preFilteredRows])

  // Render a multi-select box
  return (
    <select
      value={filterValue}
      onChange={e => {
        setFilter(e.target.value || undefined)
      }}
      style={{marginTop: '8px', padding: '12px 8px', width:'100%', border: '1px solid lightgray', borderRadius: '4px', boxShadow: 'none', fontWeight: 200}}
    >
      <option value="">All</option>
      {options.map((option, i) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}