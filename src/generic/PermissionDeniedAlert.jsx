import React from 'react';
import { FormattedMessage } from '@edx/frontend-platform/i18n';
import { Alert } from '@openedx/paragon';

const PermissionDeniedAlert = () => (
  <Alert variant="danger" data-testid="permissionDeniedAlert">
    <FormattedMessage
      id="authoring.alert.error.permission"
      defaultMessage="Bạn không được phép xem trang này. Nếu bạn cảm thấy mình cần được cấp quyền truy cập, vui lòng liên hệ với quản trị viên nhóm khóa học của bạn để được cấp quyền truy cập."
    />
  </Alert>
);

export default PermissionDeniedAlert;
