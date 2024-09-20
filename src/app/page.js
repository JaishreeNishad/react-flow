"use client"
import Image from "next/image";
import { ReactFlow, Controls, Background } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const edges = [{ id: '1-2', source: '1', target: '2',type:'step', label:'to the' }];

const nodes = [
  {
    id: '1',
    position: { x: 0, y: 0 },
    data: { label: 'Hello' },
  },
  {
    id: '2',
    data: { label: 'World' },
    position: { x: 100, y: 100 },
  },
];

export default function Home() {
  return (
    <div style={{ height: '100vw' ,width:'100vh'}}>
    <ReactFlow nodes={nodes} edges={edges}>
      <Background />
      <Controls />
    </ReactFlow>
  </div>
  );
}
