import { type Hub } from '@sentry/browser'
import { onCLS, onFCP, onFID, onINP, onLCP, onTTFB } from 'web-vitals'

export function measureWebVitalsMetrics (sentry: Hub): void {
  const performanceListeners = [onFCP, onCLS, onFID, onINP, onTTFB, onLCP]

  performanceListeners.forEach((onPerformanceTracking) => {
    onPerformanceTracking(({ name, delta }) => {
      sentry
        .getScope()
        .getTransaction()
        ?.setMeasurement(name.toLocaleLowerCase(), delta, 'millisecond')
    })
  })
}
