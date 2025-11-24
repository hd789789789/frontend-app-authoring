import React from 'react';
import { FormattedMessage } from '@edx/frontend-platform/i18n';
import { Alert } from '@openedx/paragon';

const NotFoundAlert = () => (
  <Alert variant="danger" data-testid="notFoundAlert">
    <FormattedMessage
      id="authoring.alert.error.notfound"
      defaultMessage="Không tìm thấy."
    />
  </Alert>
);

export default NotFoundAlert;
