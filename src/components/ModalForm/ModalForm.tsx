import React from "react";
import { Form, Button } from "react-bootstrap";

type Props = {
  optionName: string;
  setOptionName: any;
  platformName: string;
  setPlatformName: any;
  viewName: string;
  setViewName: any;
  onSubmit: any;
  text: string;
};

const ModalForm: React.FC<Props> = ({
  optionName,
  setOptionName,
  platformName,
  setPlatformName,
  viewName,
  setViewName,
  onSubmit,
  text,
}) => {

  return (
    <Form onSubmit={onSubmit} className="form">
      <Form.Group className="mb-3" controlId="formBasicOName">
        <Form.Label>Option Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter option name"
          className="shadow-none"
          value={optionName}
          onChange={(e: any) => setOptionName(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPName">
        <Form.Label>Platform Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter platform name"
          className="shadow-none"
          value={platformName}
          onChange={(e: any) => setPlatformName(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicVName">
        <Form.Label>View Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="view name"
          className="shadow-none"
          value={viewName}
          onChange={(e: any) => setViewName(e.target.value)}
        />
      </Form.Group>
      <Button
        variant="primary"
        type="submit"
        className="shadow-none"
      >
        {text}
      </Button>
    </Form>
  );
};

export default ModalForm;
