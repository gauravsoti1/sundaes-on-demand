import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function SummaryForm() {
  const [tcAccepted, setTCStatus] = useState(false);
  const ChecboxLabel = (
    <span>
      I agree to <span styled={{ color: "blue" }}>Terms and Conditions</span>
    </span>
  );
  return (
    <Form>
      <Form.Group controlId="terms-and-conditions">
        <Form.Check
          type="checkbox"
          checked={tcAccepted}
          onChange={(e) => setTCStatus(Boolean(e.target.checked))}
          label={ChecboxLabel}
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!tcAccepted}>
        Confirm Order
      </Button>
    </Form>
  );
}
