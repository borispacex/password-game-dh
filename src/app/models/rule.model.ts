export interface Rule {
    id: number;
    description: string;
    validate: (value: string) => boolean;
    passed: boolean;
    active: boolean;
  }
  