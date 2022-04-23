import dayjs from 'dayjs';
import 'dayjs/locale/ja';
import localizedFormat from 'dayjs/plugin/localizedFormat';

dayjs.extend(localizedFormat);

export default dayjs;
