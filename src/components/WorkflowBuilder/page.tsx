"use client";

import { useCallback, useState } from "react";
import ReactFlow, {
  addEdge,
  Background,
  Controls,
  MiniMap,
  Node,
  Edge,
  OnNodesChange,
  OnEdgesChange,
  applyNodeChanges,
  applyEdgeChanges,
} from "reactflow";
import "reactflow/dist/style.css";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlusIcon } from "@radix-ui/react-icons";

export default function WorkflowBuilder() {
  // --- State for nodes and edges ---
  const [nodes, setNodes] = useState<Node[]>([
    {
      id: "1",
      position: { x: 100, y: 150 },
      data: { label: "Start Node" },
      type: "input",
    },
    {
      id: "2",
      position: { x: 400, y: 150 },
      data: { label: "Process Node" },
    },
  ]);

  const [edges, setEdges] = useState<Edge[]>([]);

  // --- Handle dragging updates ---
  const onNodesChange: OnNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange: OnEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  const addNode = useCallback(() => {
    const newNode: Node = {
      id: (nodes.length + 1).toString(),
      position: { x: Math.random() * 400 + 100, y: Math.random() * 300 + 100 },
      data: { label: `Node ${nodes.length + 1}` },
    };
    setNodes((nds) => [...nds, newNode]);
  }, [nodes]);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 p-4 border-r bg-muted/30 flex flex-col gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Node Palette</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <Button
              onClick={addNode}
              variant="default"
              className="flex items-center gap-2"
            >
              <PlusIcon className="h-4 w-4" /> Add Node
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Workflow Canvas */}
      <div className="flex-1 h-full" style={{ position: "relative" }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
          defaultViewport={{ x: 0, y: 0, zoom: 1 }}
          nodesDraggable={true}       // ✅ allows dragging nodes
          nodesConnectable={true}
          elementsSelectable={true}
        >
          <MiniMap />
          <Controls />
          <Background />
        </ReactFlow>
      </div>
    </div>
  );
}
