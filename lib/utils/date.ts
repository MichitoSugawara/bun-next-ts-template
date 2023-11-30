import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'

import { APP_TIME_ZONE } from '@/lib/constants'

/**
 * 拡張済みDayjs
 * @param date
 * @returns
 */
export const dayjsEx = (date?: dayjs.ConfigType) => {
  // Dayjsのロケールを日本に設定
  dayjs.locale(APP_TIME_ZONE.LOCALE)
  dayjs.extend(utc)
  dayjs.extend(timezone)
  dayjs.extend(relativeTime)
  // デフォルトタイムゾーンを日本に設定
  dayjs.tz.setDefault(APP_TIME_ZONE.NAME)
  return dayjs(date).tz()
}
