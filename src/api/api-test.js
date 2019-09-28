import request from '@/utils/request'

export function getList(data) {
  return request({
    url: '/musicRankings',
    method: 'post',
    data
  })
}
