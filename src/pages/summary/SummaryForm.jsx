import React, { useState } from "react";
import { Form, Button, Popover, OverlayTrigger } from "react-bootstrap";

export default function SummaryForm() {
  const [tcAccepted, setTCStatus] = useState(false);

  const popover = (
    <Popover id="popover-basic">
      <Popover.Content>No icecream will actually be delivered</Popover.Content>
    </Popover>
  );

  const ChecboxLabel = (
    <span>
      I agree to
      <OverlayTrigger placement="right" overlay={popover}>
        <span style={{ color: "blue" }}> Terms and Conditions</span>
      </OverlayTrigger>
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
