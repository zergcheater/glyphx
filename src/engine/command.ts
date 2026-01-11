export type Command = {
    id: string;
    title: string;
    subtitle?: string;
    keywords?: string[];
    shortcut?: string;
    group?: string;
    run: () => void | Promise<void>;
  };
  