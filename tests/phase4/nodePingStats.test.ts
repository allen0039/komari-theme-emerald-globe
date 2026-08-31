import { describe, expect, test } from 'bun:test'
import { buildNodePingStats } from '../../src/composables/useNodePingStats'

describe('node ping task aggregation', () => {
  test('keeps an active task whose recent samples are all lost', () => {
    const stats = buildNodePingStats([
      { client: 'node-a', task_id: 7, time: '2026-09-01T00:00:00Z', value: -1 },
      { client: 'node-a', task_id: 7, time: '2026-09-01T00:01:00Z', value: -1 },
    ], [{ id: 7, name: '浙江电信' }])

    expect(stats.perTaskStats).toHaveLength(1)
    expect(stats.perTaskStats[0]).toMatchObject({ taskId: 7, avgLatency: -1, loss: 100 })
    expect(stats.hasData).toBe(true)
  })

  test('keeps partial loss and does not invent latency for full loss', () => {
    const stats = buildNodePingStats([
      { client: 'node-a', task_id: 1, time: '2026-09-01T00:00:00Z', value: 40 },
      { client: 'node-a', task_id: 1, time: '2026-09-01T00:01:00Z', value: -1 },
      { client: 'node-a', task_id: 2, time: '2026-09-01T00:00:00Z', value: -1 },
    ], [{ id: 1, name: '浙江联通' }, { id: 2, name: '浙江移动' }])

    expect(stats.perTaskStats.map(item => [item.taskId, item.avgLatency, item.loss]))
      .toEqual([[1, 40, 50], [2, -1, 100]])
  })
})
