import React from 'react'
import { Col } from './Col'
import { Row } from './Row'

export const Navigator: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Col>
      <Row>{children}</Row>
    </Col>
  )
}
