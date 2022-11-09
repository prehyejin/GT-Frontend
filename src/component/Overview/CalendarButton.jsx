import {
  DayTextPicker,
  OutlineIconWrapper,
  CurrentSelectedTimeText,
  DatePickerWrapper,
  DatePickerContainer,
} from '../../pages/Overview/OverviewPage.style.js';

import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CalendarButton = ({
  day,
  closeCalendar,
  openCalendar,
  isCalendarOpened,
  onChangeDate,
  addDay,
  subtractDay,
  timeunit,
  timeText,
}) => {
  const dateFormat = timeunit === 'day' ? 'yyyy-mm' : timeunit === 'month' ? 'yyyy' : 'yyyy-mm-dd';

  return (
    <DayTextPicker>
      <OutlineIconWrapper>
        <AiOutlineLeft
          onClick={() => {
            addDay();
            // setDay((prevday) => dayjs(prevday).subtract(1, timeOffset[timeunit]));
          }}
          size="20"
        />
      </OutlineIconWrapper>
      <DatePickerWrapper>
        <CurrentSelectedTimeText onClick={openCalendar}>
          {timeText[timeunit]}
        </CurrentSelectedTimeText>
        {isCalendarOpened && (
          <DatePickerContainer>
            <DatePicker
              calendarClassName="custom-calendar"
              onChange={(date) => {
                onChangeDate(date);
              }}
              onClickOutside={closeCalendar}
              selected={new Date(day)}
              inline
              dropdownMode="select"
              dateFormat={dateFormat}
              showYearPicker={timeunit === 'month'}
              showMonthYearPicker={timeunit === 'day'}
            />
          </DatePickerContainer>
        )}
      </DatePickerWrapper>

      <OutlineIconWrapper>
        <AiOutlineRight
          onClick={() => {
            subtractDay();
            // setDay((prevday) => dayjs(prevday).add(1, timeOffset[timeunit]));
          }}
          size="20"
        />
      </OutlineIconWrapper>
    </DayTextPicker>
  );
};
export default CalendarButton;
