import React, { useState } from 'react';
import Table from '../components/Table';

interface TableProps {
  rows: number;
  columns: number;
}

const Home: React.FC = () => {
  const [rows, setRows] = useState(10);
  const [columns, setColumns] = useState(10);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-4">Spreadsheet App</h1>
      <Table rows={rows} columns={columns} />
    </div>
  );
};

export default Home;