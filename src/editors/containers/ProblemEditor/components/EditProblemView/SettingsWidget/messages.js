import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({

  settingsWidgetTitle: {
    id: 'authoring.problemeditor.settings.settingsWidgetTitle',
    defaultMessage: 'Cài đặt',
    description: 'Settings Title',
  },
  showAdvanceSettingsButtonText: {
    id: 'authoring.problemeditor.settings.showAdvancedButton',
    defaultMessage: 'Hiển thị cài đặt nâng cao',
    description: 'Button text to show advanced settings',
  },
  settingsDeleteIconAltText: {
    id: 'authoring.problemeditor.settings.delete.icon.alt',
    defaultMessage: 'Xóa câu trả lời',
    description: 'Alt text for delete icon',
  },
  advancedSettingsLinkText: {
    id: 'authoring.problemeditor.settings.advancedSettingLink.text',
    defaultMessage: 'Đặt giá trị mặc định trong cài đặt nâng cao',
    description: 'Advanced settings link text',
  },
  hintSettingTitle: {
    id: 'authoring.problemeditor.settings.hint.title',
    defaultMessage: 'Gợi ý',
    description: 'Hint settings card title',
  },
  hintInputLabel: {
    id: 'authoring.problemeditor.settings.hint.inputLabel',
    defaultMessage: 'Gợi ý',
    description: 'Hint text input label',
  },
  addHintButtonText: {
    id: 'authoring.problemeditor.settings.hint.addHintButton',
    defaultMessage: 'Thêm gợi ý',
    description: 'Add hint button text',
  },
  noHintSummary: {
    id: 'authoring.problemeditor.settings.hint.noHintSummary',
    defaultMessage: 'Không có',
    description: 'Summary text for no hints',
  },
  hintSummary: {
    id: 'authoring.problemeditor.settings.hint.summary',
    defaultMessage: '{hint} {count, plural, =0 {} other {(+# nữa)}}',
    description: 'Summary text for hint settings',
  },
  resetSettingsTitle: {
    id: 'authoring.problemeditor.settings.reset.title',
    defaultMessage: 'Hiển thị tùy chọn đặt lại',
    description: 'Reset settings card title',
  },
  resetSettingsTrue: {
    id: 'authoring.problemeditor.settings.reset.true',
    defaultMessage: 'Đúng',
    description: 'True option for reset',
  },
  resetSettingsFalse: {
    id: 'authoring.problemeditor.settings.reset.false',
    defaultMessage: 'Sai',
    description: 'False option for reset',
  },
  resetSettingText: {
    id: 'authoring.problemeditor.settings.reset.text',
    defaultMessage: "Xác định xem nút 'Đặt lại' có được hiển thị hay không để người dùng có thể đặt lại câu trả lời của họ, thường được sử dụng trong các bài tập thực hành hoặc đánh giá hình thành.",
    description: 'Reset settings card text',
  },
  scoringSettingsTitle: {
    id: 'authoring.problemeditor.settings.scoring.title',
    defaultMessage: 'Chấm điểm',
    description: 'Scoring settings card title',
  },
  scoringAttemptsInputLabel: {
    id: 'authoring.problemeditor.settings.scoring.attempts.inputLabel',
    defaultMessage: 'Lần thử',
    description: 'Scoring attempts text input label',
  },
  scoringWeightInputLabel: {
    id: 'authoring.problemeditor.settings.scoring.weight.inputLabel',
    defaultMessage: 'Điểm',
    description: 'Scoring weight input label',
  },
  unlimitedAttemptsSummary: {
    id: 'authoring.problemeditor.settings.scoring.unlimited',
    defaultMessage: 'Số lần thử không giới hạn',
    description: 'Summary text for unlimited attempts',
  },
  attemptsSummary: {
    id: 'authoring.problemeditor.settings.scoring.attempts',
    defaultMessage: '{attempts, plural, =1 {# lần thử} other {# lần thử}}',
    description: 'Summary text for number of attempts',
  },
  unlimitedAttemptsCheckboxLabel: {
    id: 'authoring.problemeditor.settings.scoring.attempts.unlimitedCheckbox',
    defaultMessage: 'Số lần thử không giới hạn',
    description: 'Label for unlimited attempts checkbox',
  },
  weightSummary: {
    id: 'authoring.problemeditor.settings.scoring.weight',
    defaultMessage: '{weight, plural, =0 {Không chấm điểm} other {# điểm}}',
    description: 'Summary text for scoring weight',
  },
  scoringSettingsLabel: {
    id: 'authoring.problemeditor.settings.scoring.label',
    defaultMessage: 'Chỉ định trọng số điểm và số lần thử trả lời',
    description: 'Descriptive text for scoring settings',
  },
  attemptsHint: {
    id: 'authoring.problemeditor.settings.scoring.attempts.hint',
    defaultMessage: 'Nếu không đặt giá trị mặc định trong cài đặt nâng cao, số lần thử không giới hạn được cho phép',
    description: 'Summary text for scoring weight',
  },
  weightHint: {
    id: 'authoring.problemeditor.settings.scoring.weight.hint',
    defaultMessage: 'Nếu không đặt giá trị, bài tập trị giá một điểm',
    description: 'Summary text for scoring weight',
  },
  showAnswerSettingsTitle: {
    id: 'authoring.problemeditor.settings.showAnswer.title',
    defaultMessage: 'Hiển thị câu trả lời',
    description: 'Show Answer settings card title',
  },
  showAnswerAttemptsInputLabel: {
    id: 'authoring.problemeditor.settings.showAnswer.attempts.inputLabel',
    defaultMessage: 'Số lần thử',
    description: 'Show Answer attempts text input label',
  },
  showAnswerSettingText: {
    id: 'authoring.problemeditor.settings.showAnswer.text',
    defaultMessage: 'Xác định khi nào người học có thể xem câu trả lời đúng.',
    description: 'Show Answer settings card text',
  },
  timerSettingsTitle: {
    id: 'authoring.problemeditor.settings.timer.title',
    defaultMessage: 'Thời gian giữa các lần thử',
    description: 'Timer settings card title',
  },
  timerSummary: {
    id: 'authoring.problemeditor.settings.timer.summary',
    defaultMessage: '{time} giây',
    description: 'Summary text for timer settings',
  },
  timerSettingText: {
    id: 'authoring.problemeditor.settings.timer.text',
    defaultMessage: 'Số giây sinh viên phải chờ giữa các lần nộp bài cho một bài tập có nhiều lần thử.',
    description: 'Timer settings card text',
  },
  timerInputLabel: {
    id: 'authoring.problemeditor.settings.timer.inputLabel',
    defaultMessage: 'Giây',
    description: 'Timer text input label',
  },
  typeSettingTitle: {
    id: 'authoring.problemeditor.settings.type.title',
    defaultMessage: 'Loại',
    description: 'Type settings card title',
  },
  'SwitchButtonLabel-advanced': {
    id: 'authoring.problemeditor.settings.switchtoeditor.label.advanced',
    defaultMessage: 'Chuyển sang trình chỉnh sửa nâng cao',
    description: 'button to switch to the advanced mode of the editor',
  },
  'SwitchButtonLabel-markdown': {
    id: 'authoring.problemeditor.settings.switchtoeditor.label.markdown',
    defaultMessage: 'Chuyển sang trình chỉnh sửa markdown',
    description: 'button to switch to the markdown editor',
  },
  'ConfirmSwitchMessage-advanced': {
    id: 'authoring.problemeditor.settings.switchtoeditor.ConfirmSwitchMessage.advanced',
    defaultMessage: 'Nếu bạn sử dụng trình chỉnh sửa nâng cao, bài tập này sẽ được chuyển đổi sang OLX và bạn sẽ không thể quay lại trình chỉnh sửa đơn giản.',
    description: 'message to confirm that a user wants to use the advanced editor',
  },
  'ConfirmSwitchMessage-markdown': {
    id: 'authoring.problemeditor.settings.switchtoeditor.ConfirmSwitchMessage.markdown',
    defaultMessage: 'Nếu bạn sử dụng trình chỉnh sửa markdown, bài tập này sẽ được chuyển đổi sang markdown và bạn sẽ không thể quay lại trình chỉnh sửa đơn giản.',
    description: 'message to confirm that a user wants to use the advanced editor',
  },
  'ConfirmSwitchMessageTitle-advanced': {
    id: 'authoring.problemeditor.settings.switchtoeditor.ConfirmSwitchMessageTitle.advanced',
    defaultMessage: 'Chuyển đổi sang OLX?',
    description: 'message to confirm that a user wants to use the advanced editor',
  },
  'ConfirmSwitchMessageTitle-markdown': {
    id: 'authoring.problemeditor.settings.switchtoeditor.ConfirmSwitchMessageTitle.markdown',
    defaultMessage: 'Chuyển đổi sang Markdown?',
    description: 'message to confirm that a user wants to use the markdown editor',
  },
  'ConfirmSwitchButtonLabel-advanced': {
    id: 'authoring.problemeditor.settings.switchtoeditor.ConfirmSwitchButtonLabel.advanced',
    defaultMessage: 'Chuyển sang trình chỉnh sửa nâng cao',
    description: 'message to confirm that a user wants to use the advanced editor',
  },
  'ConfirmSwitchButtonLabel-markdown': {
    id: 'authoring.problemeditor.settings.switchtoeditor.ConfirmSwitchButtonLabel.markdown',
    defaultMessage: 'Chuyển sang trình chỉnh sửa markdown',
    description: 'message to confirm that a user wants to use the markdown editor',
  },
  explanationInputLabel: {
    id: 'authoring.problemeditor.settings.showAnswer.explanation.inputLabel',
    defaultMessage: 'Giải thích',
    description: 'answer explanation input label',
  },
  explanationSettingText: {
    id: 'authoring.problemeditor.settings.showAnswer.explanation.text',
    defaultMessage: 'Cung cấp giải thích cho câu trả lời đúng.',
    description: 'Solution Explanation text',
  },
});

export default messages;
