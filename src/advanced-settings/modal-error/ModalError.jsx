import React from 'react';
import PropTypes from 'prop-types';
import { ActionRow, AlertModal, Button } from '@openedx/paragon';
import { FormattedMessage, injectIntl, intlShape } from '@edx/frontend-platform/i18n';

import ModalErrorListItem from './ModalErrorListItem';
import messages from './messages';

const ModalError = ({
  intl, isError, handleUndoChanges, showErrorModal, errorList, settingsData,
}) => (
  <AlertModal
    title={intl.formatMessage(messages.modalErrorTitle)}
    isOpen={isError}
    variant="danger"
    footerNode={(
      <ActionRow>
        <Button
          variant="tertiary"
          onClick={() => showErrorModal(!isError)}
        >
          {intl.formatMessage(messages.modalErrorButtonChangeManually)}
        </Button>
        <Button onClick={handleUndoChanges}>
          {intl.formatMessage(messages.modalErrorButtonUndoChanges)}
        </Button>
      </ActionRow>
    )}
  >
    <p>
      <FormattedMessage
        id="course-authoring.advanced-settings.modal.error.description"
        defaultMessage="Có {errorCounter} khi cố gắng lưu cài đặt khóa học vào cơ sở dữ liệu. Vui lòng kiểm tra các phản hồi xác thực sau và phản ánh chúng trong cài đặt khóa học của bạn:"
        values={{ errorCounter: <strong>{errorList.length} validation error </strong> }}
      />
    </p>
    <hr />
    <ul className="p-0">
      {errorList.map((settingName) => (
        <ModalErrorListItem
          key={settingName.key}
          settingName={settingName}
          settingsData={settingsData}
        />
      ))}
    </ul>
  </AlertModal>
);

ModalError.propTypes = {
  intl: intlShape.isRequired,
  isError: PropTypes.bool.isRequired,
  handleUndoChanges: PropTypes.func.isRequired,
  showErrorModal: PropTypes.func.isRequired,
  errorList: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    message: PropTypes.string,
  })).isRequired,
  settingsData: PropTypes.shape({}).isRequired,
};

export default injectIntl(ModalError);
