import React from 'react';
import { injectIntl, intlShape, FormattedMessage } from '@edx/frontend-platform/i18n';
import { Alert } from '@openedx/paragon';
import { getConfig } from '@edx/frontend-platform';

import messages from '../messages';

const SaveFormConnectionErrorAlert = ({ intl }) => (
  <Alert variant="danger" data-testid="connectionErrorAlert">
    <FormattedMessage
      id="authoring.alert.save.error.connection"
      defaultMessage="Chúng tôi gặp lỗi kỹ thuật khi áp dụng thay đổi. Đây có thể là sự cố tạm thời, vui lòng thử lại sau vài phút. Nếu vấn đề vẫn tiếp diễn, vui lòng truy cập {supportLink} để được trợ giúp."
      values={{
        supportLink: (
          <Alert.Link href={getConfig().SUPPORT_URL}>
            {intl.formatMessage(messages.supportText)}
          </Alert.Link>
        ),
      }}
    />
  </Alert>
);

SaveFormConnectionErrorAlert.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(SaveFormConnectionErrorAlert);
