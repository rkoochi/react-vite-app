declare module 'vite-plugin-copy' {
  import { Plugin } from 'vite';
  interface CopyOptions {
    targets: Array<{ src: string; dest: string }>;
  }
  function copy(options: CopyOptions): Plugin;
  export default copy;
}
