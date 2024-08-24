import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const DownvoteModal = ({ show, handleClose, handleSubmit }) => {
  const [reasons, setReasons] = useState({
    calidadInsuficiente: false,
    ruidoDeFondo: false,
    vozIncorrecta: false,
    otros: false,
  });
  const [customReason, setCustomReason] = useState('');

  const handleReasonChange = (e) => {
    const { name, checked } = e.target;
    setReasons((prevReasons) => ({
      ...prevReasons,
      [name]: checked,
    }));
    if (name !== 'otros') {
      setCustomReason('');
    }
  };

  const handleCustomReasonChange = (e) => {
    setCustomReason(e.target.value);
  };

  const onSubmit = () => {
    const selectedReasons = Object.keys(reasons)
      .filter((key) => reasons[key])
      .map((key) => (key === 'otros' ? customReason : key.replace(/([A-Z])/g, ' $1').toLowerCase()));

    handleSubmit(selectedReasons);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Downvote Reason</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Select reasons for downvoting:</Form.Label>
            <Form.Check
              type="checkbox"
              label="Calidad insuficiente"
              name="calidadInsuficiente"
              onChange={handleReasonChange}
              checked={reasons.calidadInsuficiente}
            />
            <Form.Check
              type="checkbox"
              label="Ruido de fondo"
              name="ruidoDeFondo"
              onChange={handleReasonChange}
              checked={reasons.ruidoDeFondo}
            />
            <Form.Check
              type="checkbox"
              label="Voz incorrecta"
              name="vozIncorrecta"
              onChange={handleReasonChange}
              checked={reasons.vozIncorrecta}
            />
            <Form.Check
              type="checkbox"
              label="Otros"
              name="otros"
              onChange={handleReasonChange}
              checked={reasons.otros}
            />
          </Form.Group>
          {reasons.otros && (
            <Form.Group>
              <Form.Label>Por favor, especifique:</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={customReason}
                onChange={handleCustomReasonChange}
              />
            </Form.Group>
          )}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={onSubmit} disabled={!Object.values(reasons).includes(true)}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DownvoteModal;
