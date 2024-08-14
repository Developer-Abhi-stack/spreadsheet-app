import React, { useState } from 'react';

interface TableProps {
  rows: number;
  columns: number;
}

const Table: React.FC<TableProps> = ({ rows, columns }) => {
  const [data, setData] = useState<string[][]>(
    Array.from({ length: rows }, () => Array(columns).fill(''))
  );

  const handleInputChange = (rowIndex: number, colIndex: number, value: string) => {
    const newData = [...data];
    newData[rowIndex][colIndex] = value;
    setData(newData);
  };

  const gridTemplateColumns = `repeat(${columns}, minmax(100px, 1fr))`;

  return (
    <div className="overflow-auto">
      <div className="grid gap-1" style={{ gridTemplateColumns }}>
        {data.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <input
              key={`${rowIndex}-${colIndex}`}
              type="text"
              value={cell}
              onChange={(e) =>
                handleInputChange(rowIndex, colIndex, e.target.value)
              }
              className="border p-2 text-center"
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Table;