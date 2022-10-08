export const GAUGE_CLASS = Object.freeze({
  DANGER: 'danger',
  OK: 'ok',
  WARN: 'warn'
});

export const HUMIDITY_LIMITS = Object.freeze({
  DANGER: Object.freeze({
    LOW: 35,
    HIGH: 60
  }),
  WARN: Object.freeze({
    LOW: 40,
    HIGH: 50
  })
});

export const SENSOR_TEMPERATURE_LIMITS = Object.freeze({
  DANGER: Object.freeze({
    LOW: 5,
    HIGH: 70
  }),
  WARN: Object.freeze({
    LOW: 10,
    HIGH: 60
  })
});

export const TEMPERATURE_LIMITS = Object.freeze({
  DANGER: Object.freeze({
    LOW: 17,
    HIGH: 26
  }),
  WARN: Object.freeze({
    LOW: 19,
    HIGH: 24
  })
});
