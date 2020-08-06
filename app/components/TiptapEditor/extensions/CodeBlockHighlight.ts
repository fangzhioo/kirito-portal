import { CodeBlockHighlight } from 'tiptap-extensions';
import javascript from 'highlight.js/lib/languages/javascript';
import css from 'highlight.js/lib/languages/css';
import json from 'highlight.js/lib/languages/json';
import java from 'highlight.js/lib/languages/java';
import bash from 'highlight.js/lib/languages/bash';
import shell from 'highlight.js/lib/languages/shell';
import python from 'highlight.js/lib/languages/python';
import go from 'highlight.js/lib/languages/go';

const defaultOption = {
  languages: {
    javascript,
    css,
    json,
    java,
    bash,
    shell,
    python,
    go,
  },
};
/**
 * 基于highlight.js 高亮代码块
 */

export default class ICodeBlockHighlight extends CodeBlockHighlight {
  constructor(option: any = {}) {
    super({ ...option, ...defaultOption });
  }
}
