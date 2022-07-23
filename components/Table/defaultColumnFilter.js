export function DefaultColumnFilter({
  column: {filterValue, preFilteredRows, setFilter},
}) {
  const count = preFilteredRows.length

  return (
    <input
      value={filterValue || ''}
      onChange={e => {
        setFilter(e.target.value || undefined) // Set undefined to remove the filter entirely
      }}
      placeholder={`Search ${count} records...`}
      style={{marginTop: '8px', padding: '4px 4px', width:'100%', border: '1px solid lightgray', borderRadius: '4px', boxShadow: 'none', fontWeight: 200}}
    />
  )
}