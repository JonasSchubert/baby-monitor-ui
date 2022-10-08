export interface Climate {
  humidity: {
    sensor: number;
    unit: string;
  };
  temperature: {
    cpu: number;
    gpu: number;
    sensor: number;
    unit: string;
  };
}
