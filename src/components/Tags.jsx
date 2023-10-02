import React from 'react';
import Badge from 'react-bootstrap/Badge';

const Tags = ({ dog }) => {
  return (
    <Badge className={`bg-${dog.color}`}>{dog.name}</Badge>
  );
};

export default Tags;