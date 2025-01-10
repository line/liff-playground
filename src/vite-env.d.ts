/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_LIFF_ID: string;
  readonly VITE_LIFF_ID_MINI: string;
  readonly VITE_LIFF_ID_MINI_PREVIEW: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
