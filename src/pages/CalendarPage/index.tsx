import { Badge, Calendar, CalendarProps } from 'antd';
import { Dayjs } from 'dayjs';

const CalendarPage = () => {
  function getListData(value: Dayjs) {
    let listData;
    switch (value.date()) {
      case 8:
        listData = [
          { type: 'warning', content: 'This is warning event.' },
          { type: 'success', content: 'This is usual event.' },
        ];
        break;
      case 10:
        listData = [
          { type: 'warning', content: 'This is warning event.' },
          { type: 'success', content: 'This is usual event.' },
          { type: 'error', content: 'This is error event.' },
        ];
        break;
      case 15:
        listData = [
          { type: 'warning', content: 'This is warning event' },
          { type: 'success', content: 'This is very long usual event。。....' },
          { type: 'error', content: 'This is error event 1.' },
          { type: 'error', content: 'This is error event 2.' },
          { type: 'error', content: 'This is error event 3.' },
          { type: 'error', content: 'This is error event 4.' },
        ];
        break;
      default:
    }
    return listData || [];
  }

  function dateCellRender(value: Dayjs) {
    const listData = getListData(value);
    if (listData.length)
      return (
        <ul className="events">
          {listData.map((item) => (
            <li key={item.content}>
              <Badge text={item.content} />
            </li>
          ))}
        </ul>
      );
  }

  const cellRender: CalendarProps<Dayjs>['cellRender'] = (current, info) => {
    if (info.type === 'date') return dateCellRender(current);
    return info.originNode;
  };

  return (
    <div>
      <Calendar
        cellRender={cellRender}
        onSelect={(e) => console.log(e.format('YYYY-MM-DD HH:mm:ss'))}
      />
    </div>
  );
};

export default CalendarPage;
