// import ms from 'ms'
// import { SITE } from 'data/site'

// export const msToString = time => {
//   const str = ms(time, { long: true })
//   if (!SITE.isJP()) return `${str} ago`
//   return (
//     str
//       .replace('days', '日')
//       .replace('day', '日')
//       .replace('minutes', '分')
//       .replace('minute', '分')
//       .replace('hours', '時間')
//       .replace('hour', '時間')
//       .replace('seconds', '秒') + '後'
//   )
// }

export const getDNSPrefetchValue = domain => {
  if (!domain) return null
  if (domain.startsWith('http')) return domain.replace(/https?:/, '')
  if (domain.startsWith('//')) return domain
  return `//${domain}`
}
